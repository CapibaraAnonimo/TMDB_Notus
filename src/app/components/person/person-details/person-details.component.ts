import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/interfaces/movie/movie.interface';
import { PersonDetailsResponse } from 'src/app/models/interfaces/person/person-details.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id: number = 0;
  movieList: Movie[] = [];
  person: PersonDetailsResponse = {} as PersonDetailsResponse;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.id = resp['id']
    });

    this.personService.getPersonDetails(this.id).subscribe(resp => {
      this.person = resp;
    });
  }

  showImgPerson(profile_path: string) {
    return `https://image.tmdb.org/t/p/w500/${profile_path}`;
  }
}