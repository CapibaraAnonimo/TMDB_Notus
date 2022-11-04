import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/interfaces/movie/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovieList(page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.API_KEY_M}&page=${page}`)
  }

  public getAllMovieList(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.API_KEY_M}`)
  }

  public getMovieDetails(movieId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.API_BASE_URL}/movie/${movieId}?api_key=${environment.API_KEY_M}`)
  }
}