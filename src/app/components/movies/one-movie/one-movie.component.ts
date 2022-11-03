import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieResponse } from 'src/app/models/interfaces/movie/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { DialogAddMovieComponent } from '../dialog-add-movie/dialog-add-movie.component';
import { DialogDetailsMovieComponent } from '../dialog-details-movie/dialog-details-movie.component';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.css']
})
export class OneMovieComponent implements OnInit {

  @Input() movie: Movie = {} as Movie;
  login: string | null = '';
  movieSelect: MovieResponse = {} as MovieResponse;

  constructor(private movieServce: MovieService) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('session_id');
  }

  showImg(poster_path: string) {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }

  /*addMovie(movieId: number) {
    this.dialog.open(DialogAddMovieComponent, {
      data: {
        movie_id: movieId
      }
    })
  }

  showInfo(movieId: number) {
    this.movieServce.getMovieDetails(movieId).subscribe(resp => {
      this.movieSelect = resp;
      this.dialog.open(DialogDetailsMovieComponent, {
        data: {
          movieInfo: this.movieSelect
        }
      })
    });
  }*/
}