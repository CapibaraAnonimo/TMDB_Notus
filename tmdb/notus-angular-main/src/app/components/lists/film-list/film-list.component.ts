import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Film} from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[];
  pages: number;
  currentPage: number;

  constructor(private filmService: MovieService) {
  }

  ngOnInit(): void {
    this.filmService.getPopular(this.currentPage).subscribe(response => {
      this.pages = response.total_pages;
      this.films = response.results;
    })
  }

}
