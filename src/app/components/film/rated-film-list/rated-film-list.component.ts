import { Component, OnInit } from '@angular/core';
import { RatedMovie } from '../../../models/interfaces/movie/movies-rated.interface';
import { MovieService } from '../../../services/movie.service';
import { AccountService } from '../../../services/account.service';


@Component({
  selector: 'app-rated-film-list',
  templateUrl: './rated-film-list.component.html',
  styleUrls: ['./rated-film-list.component.css']
})
export class RatedFilmListComponent implements OnInit {
  films: RatedMovie[];
  pages: number;
  currentPage: number;

  constructor(private filmService: MovieService, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.filmService.getRatedMovies(this.currentPage, localStorage.getItem('session_id')).subscribe(response => {
      this.pages = response.total_pages;
      this.films = response.results;
    });
  }
}