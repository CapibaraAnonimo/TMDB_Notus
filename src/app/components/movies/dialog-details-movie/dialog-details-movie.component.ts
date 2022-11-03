import { Component, Inject, OnInit } from '@angular/core';
import { DialogDataMovie } from 'src/app/models/interfaces/movie/movie-details-dialog.interface';
import { DialogAddMovieComponent } from '../dialog-add-movie/dialog-add-movie.component';

@Component({
  selector: 'app-dialog-details-movie',
  templateUrl: './dialog-details-movie.component.html',
  styleUrls: ['./dialog-details-movie.component.css']
})
export class DialogDetailsMovieComponent implements OnInit {

  login: string | null = '';

  constructor() { }

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
  }*/
}
