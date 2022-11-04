import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonDetailsResponse } from '../models/interfaces/person/person-details.interface';
import { PersonMovieResponse } from '../models/interfaces/person/person-movie.interface';
import { PersonResponse } from '../models/interfaces/person/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  public getPersonList(page: number): Observable<PersonResponse> {
    return this.http.get<PersonResponse>(`${environment.API_BASE_URL}/person/popular?api_key=${environment.API_KEY_M}&page=${page}`)
  }

  public getPersonDetails(personId: number): Observable<PersonDetailsResponse> {
    return this.http.get<PersonDetailsResponse>(`${environment.API_BASE_URL}/person/${personId}?api_key=${environment.API_KEY_M}`)
  }

  public getPersonMovieList(personId: number): Observable<PersonMovieResponse> {
    return this.http.get<PersonMovieResponse>(`${environment.API_BASE_URL}/person/${personId}/movie_credits?api_key=${environment.API_KEY_M}`)
  }
}