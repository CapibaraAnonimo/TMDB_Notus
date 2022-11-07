import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {

  personList: Person[] = [];
  numPages: number = 0;
  page: number = 1;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersonList(this.page).subscribe(resp => {
      this.personList = resp.results;
      this.numPages = resp.total_pages;
    });
  }

  showImgPerson(profile_path: string) {
    return `https://image.tmdb.org/t/p/w500/${profile_path}`;
  }

  showImgMovie(poster_path: string) {
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
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

  next() {
    this.page += 1;
    this.personService.getPersonList(this.page).subscribe(resp => {
      this.personList = resp.results;
    });
  }

  pre() {
    this.page -= 1;
    this.personService.getPersonList(this.page).subscribe(resp => {
      this.personList = resp.results;
    });
  }
}