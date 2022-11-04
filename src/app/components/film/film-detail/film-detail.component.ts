import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {Movie} from '../../../models/interfaces/movie/movie.interface';
import {MovieDetailsResponse} from '../../../models/interfaces/movie/movie-details.interface';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: MovieDetailsResponse;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetails(params.id).subscribe(response => {
        this.film = response;
        document.getElementById('bImage').style.backgroundImage = `url(${this.getImage(this.film.backdrop_path)})`;
      });
    });
  }

  getImage(url: string) {
    return 'https://image.tmdb.org/t/p/original' + url;
  }
}
