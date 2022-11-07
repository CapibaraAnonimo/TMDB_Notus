import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsResponse } from '../../../models/interfaces/movie/movie-details.interface';
import { ReleaseDateResponse } from '../../../models/interfaces/movie/release-date.interface';
import { MovieService } from '../../../services/movie.service';
import { CreditsService } from '../../../services/credits.service';
import { CreditsResponse } from '../../../models/interfaces/credits/credits.interface';
import { RatingService } from '../../../services/rating.service';
import { RateMovieDto } from '../../../models/dto/rate-movie.dto';
import { createPopper } from '@popperjs/core';
import { FavService } from 'src/app/services/fav.service';
import { AddFavoriteDto } from 'src/app/models/dto/add-fav-dto';
//import {FormBuilder} from '@angular/forms';

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
  login = false;
  account_id: number = 0;
  page: number = 1;
  isFav = false;

  popoverShow = false;
  @ViewChild('btnRef', { static: false }) btnRef: ElementRef;
  popper = document.createElement('div');

  constructor(private movieService: MovieService, private route: ActivatedRoute, private creditService: CreditsService,
    private ratingService: RatingService, /*private formBuilder: FormBuilder,*/ private router: Router, private favService: FavService) {
  }

  ngOnInit(): void {
    this.form = document.getElementById('form')
    this.popper.innerHTML = `
    `;
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
      })
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
    if (this.popoverShow) {
      this.popoverShow = false;
      this.destroyPopper();
    } else {
      this.popoverShow = true;
      this.createPoppper();
    }
  }

  destroyPopper() {
    this.popper.parentNode.removeChild(this.popper);
  }

  createPoppper() {
    createPopper(this.btnRef.nativeElement, this.popper, {
      placement: 'bottom',
    });
    this.btnRef.nativeElement.parentNode.insertBefore(this.popper, this.btnRef.nativeElement.nextSibling);
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