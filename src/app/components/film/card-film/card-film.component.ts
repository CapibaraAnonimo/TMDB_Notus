import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../models/interfaces/movie/movie.interface';

@Component({
  selector: 'app-card-films',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmsComponent implements OnInit {
  @Input() film: Movie;

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage() {
    return 'https://image.tmdb.org/t/p/original/' + this.film.poster_path;
  }
}