import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/interfaces/movie/movie.interface';
import { PersonDetailsResponse } from 'src/app/models/interfaces/person/person-details.interface';
import { KnownFor, Person } from 'src/app/models/interfaces/person/person.interface';
import { MovieService } from 'src/app/services/movie.service';
import { Cast } from 'src/app/models/interfaces/person/person-movie.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-movies',
  templateUrl: './person-movies.component.html',
  styleUrls: ['./person-movies.component.css']
})
export class PersonMoviesComponent implements OnInit {

  id: number = 0;
  movieList: Cast[] = [];
  personDetails: PersonDetailsResponse = {} as PersonDetailsResponse;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.id = resp['id'];
    });

    this.personService.getPersonDetails(this.id).subscribe(resp => {
      this.personDetails = resp;
    });

    this.personService.getPersonMovieList(this.id).subscribe(resp => {
      this.movieList = resp.cast;
    })
  }

  showImgMovie(poster_path: string) {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }
}
