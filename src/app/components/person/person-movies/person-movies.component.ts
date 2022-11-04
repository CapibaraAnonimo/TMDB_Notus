import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/interfaces/movie/movie.interface';
import { PersonDetailsResponse } from 'src/app/models/interfaces/person/person-details.interface';
import { KnownFor, Person } from 'src/app/models/interfaces/person/person.interface';
import { MovieService } from 'src/app/services/movie.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-movies',
  templateUrl: './person-movies.component.html',
  styleUrls: ['./person-movies.component.css']
})
export class PersonMoviesComponent implements OnInit {

  id: number = 0;
  movieList: KnownFor[] = [];
  movieListTitles: string[] = [];
  allMovies: Movie[] = [];
  personDetails: PersonDetailsResponse = {} as PersonDetailsResponse;
  person: Person = {} as Person;
  page: number = 0;
  numPages: number = 0;

  constructor(private route: ActivatedRoute, private personService: PersonService, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.id = resp['id'];
      this.page = resp['page'];
    });

    this.movieService.getAllMovieList().subscribe(resp => {
      this.allMovies = resp.results;
      this.numPages = resp.total_pages;
    });

    this.personService.getPersonDetails(this.id).subscribe(resp => {
      this.personDetails = resp;
      this.movieListTitles = resp.also_known_as;
    });

    this.personService.getPersonList(this.page).subscribe(resp => {
      for (let person of resp.results) {
        if (person.id == this.id) {
          person.known_for = this.movieList;
        }
      }
    });
  }
}