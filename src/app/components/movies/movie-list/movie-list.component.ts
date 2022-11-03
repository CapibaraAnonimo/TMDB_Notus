import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movie/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = [];
  numPages: number = 0;
  page: number = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList(this.page).subscribe(resp => {
      this.movieList = resp.results;
      this.numPages = resp.total_pages;
    });
  }

  changePage() {
    this.movieService.getMovieList(this.page).subscribe(resp => {
      this.movieList = resp.results;
    });
  }

  next() {
    this.page += 1;
    this.movieService.getMovieList(this.page).subscribe(resp => {
      this.movieList = resp.results;
    });
  }

  pre() {
    this.page -= 1;
    this.movieService.getMovieList(this.page).subscribe(resp => {
      this.movieList = resp.results;
    });
  }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";
}