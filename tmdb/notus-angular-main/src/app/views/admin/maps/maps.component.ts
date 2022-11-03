import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
})
export class MapsComponent implements OnInit {
  constructor(movieService: MovieService) {
  }

  ngOnInit(): void {
  }
}
