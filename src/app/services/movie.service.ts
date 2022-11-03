import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilmResponse} from '../interfaces/movie.interface';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getPopular(page: number = 1): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`)
  }
}
