import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {MovieDetailsResponse} from '../../../models/interfaces/movie/movie-details.interface';
import {ReleaseDateResponse} from '../../../models/interfaces/movie/release-date.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: MovieDetailsResponse;
  releaseDate: ReleaseDateResponse

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetails(params.id).subscribe(details => {
        this.film = details;
        document.getElementById('bImage').style.backgroundImage = `url(${this.getImage(this.film.backdrop_path)})`;

        this.movieService.getMovieReleaseDate(params.id).subscribe(releaseDate => {
          this.releaseDate = releaseDate;
        })
      });
    });
  }

  getImage(url: string) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }
}
