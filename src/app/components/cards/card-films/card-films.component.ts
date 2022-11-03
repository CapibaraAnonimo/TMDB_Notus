import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-card-films',
  templateUrl: './card-films.component.html',
  styleUrls: ['./card-films.component.css']
})
export class CardFilmsComponent implements OnInit {
  @Input() film: Film;

  constructor() {
  }

  ngOnInit(): void {
  }

  getImage() {
    return 'https://image.tmdb.org/t/p/original/' + this.film.poster_path;
  }
}
