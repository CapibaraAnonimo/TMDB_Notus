import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieDetailsResponse} from '../../../models/interfaces/movie/movie-details.interface';
import {ReleaseDateResponse} from '../../../models/interfaces/movie/release-date.interface';
import {MovieService} from '../../../services/movie.service';
import {CreditsService} from '../../../services/credits.service';
import {CreditsResponse} from '../../../models/interfaces/credits/credits.interface';
import {RatingService} from '../../../services/rating.service';
import {RateMovieDto} from '../../../models/dto/rate-movie.dto';
import {FormBuilder} from '@angular/forms';
import {VideosResponse} from '../../../models/interfaces/movie/movie-videos.interface';
import {DomSanitizer} from '@angular/platform-browser';
import { FavService } from 'src/app/services/fav.service';
import { AddFavoriteDto } from 'src/app/models/dto/add-fav-dto';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: MovieDetailsResponse;
  releaseDate!: ReleaseDateResponse;
  id!: string;
  credit: CreditsResponse;
  form;
  videos: VideosResponse;
  popoverShow = false;
  login = false;
  account_id: number = 0;
  page: number = 1;
  isFav = false;
  popoverShow = false;
  @ViewChild('btnRef', { static: false }) btnRef: ElementRef;
  popper = document.createElement('div');

  constructor(private movieService: MovieService, private route: ActivatedRoute, private creditService: CreditsService,
              private ratingService: RatingService, private formBuilder: FormBuilder, private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };
    this.form = document.getElementById('form')
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.movieService.getMovieDetails(+this.id).subscribe(details => {
        this.film = details;
        document.getElementById('bImage').style.backgroundImage = `url(${this.getImage(this.film.backdrop_path)})`;
      });

      this.movieService.getMovieReleaseDate(params.id).subscribe(releaseDate => {
        this.releaseDate = releaseDate;
      });

      this.creditService.getCredits(this.id).subscribe(response => {
        this.credit = response;
      });

      this.movieService.getMovieVideos(this.id).subscribe(response => {
        this.videos = response;
      });
    });

    if (localStorage.getItem('session_id') != null) {
      this.login = true;
    };

    this.favService.getFavorites(this.account_id, this.page).subscribe(resp => {
      for (let i = 1; i <= resp.total_pages; i++) {
        this.favService.getFavorites(this.account_id, i).subscribe(movies => {
          for (let j = 0; j < movies.results.length; j++) {
            if (movies.results[j].id === parseInt(this.id)) {
              this.isFav = true;
            }
          }
        })
      }
    });
  }

  getImage(url: string) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }

  rateFilm(rate: string) {
    if (+rate > 10 || +rate < 0.5) {
      alert('Not a valid rate');
    } else {
      this.ratingService.rateMovie(this.id, new RateMovieDto(+rate)).subscribe(response => {
      });
    }
  }

  togglePopover() {
    this.popoverShow = !this.popoverShow;
  }

  getVideo(key: string, site: string) {
    if (site.toLowerCase() === 'YouTube'.toLowerCase()) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${key}`);
    }
  }

  addFavorite(movieId: number) {
    if (!this.isFav) {
      this.favService.addFavorite(movieId, new AddFavoriteDto("movie", movieId, true)).subscribe(resp => {
        if (resp.status_message === 'Success.') {
          alert("Película guardada en favoritos.");
          location.reload();
        }
      });
    } else {
      this.favService.addFavorite(movieId, new AddFavoriteDto("movie", movieId, false)).subscribe(resp => {
        if (resp.status_message !== 'Success.') {
          alert("Película eliminada de favoritos.");
          location.reload();
        }
      });
    }
  }
}