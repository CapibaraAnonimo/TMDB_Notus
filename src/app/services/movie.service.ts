import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResponse } from '../models/interfaces/movie/movie.interface';
import {MovieDetailsResponse} from '../models/interfaces/movie/movie-details.interface';
import {ReleaseDateResponse} from '../models/interfaces/movie/release-date.interface';

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

  public getMovieDetails(movieId: number): Observable<MovieDetailsResponse> {
    return this.http.get<MovieDetailsResponse>(`${environment.API_BASE_URL}/movie/${movieId}?api_key=${environment.API_KEY_M}`)
  }

  public getMovieReleaseDate(movieId: number): Observable<ReleaseDateResponse> {
    return this.http.get<ReleaseDateResponse>(`${environment.API_BASE_URL}/movie/${movieId}/release_dates?api_key=${environment.API_KEY_M}`)
  }
}
