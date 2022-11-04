import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDetailsResponse } from 'src/app/models/interfaces/person/person-details.interface';
import { KnownFor, Person } from 'src/app/models/interfaces/person/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id: number = 0;
  personDetails: PersonDetailsResponse = {} as PersonDetailsResponse;
  person: Person = {} as Person;

  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.route.params.subscribe(resp => {
      this.id = resp['id'];
    });

    this.personService.getPersonDetails(this.id).subscribe(resp => {
      this.personDetails = resp;
    });
  }

  showImgPerson(profile_path: string) {
    return `https://image.tmdb.org/t/p/w500/${profile_path}`;
  }

  showGender(gender: number) {
    if (gender == 1) {
      return 'Female';
    } else if (gender == 2) {
      return 'Male';
    } else {
      return 'Other';
    }
  }
}