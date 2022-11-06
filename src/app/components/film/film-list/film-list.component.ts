import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../models/interfaces/movie/movie.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Movie[];
  pages: number;
  currentPage: number;

  constructor(private filmService: MovieService) {
  }

  ngOnInit(): void {
    this.filmService.getMovieList(this.currentPage).subscribe(response => {
      this.pages = response.total_pages;
      this.films = response.results;
    })
  }

}
