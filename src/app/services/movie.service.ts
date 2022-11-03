import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovieList(page: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.API_BASE_URL}/movie/popular?api_key=${environment.API_KEY_M}&page=${page}`)
  }

  public getMovieDetails(movieId: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${environment.API_BASE_URL}/movie/${movieId}?api_key=${environment.API_KEY_M}`)
  }

  public getMovieListNowPlaying(page: number): Observable<MovieNowPlayingResponse> {
    return this.http.get<MovieNowPlayingResponse>(`${environment.API_BASE_URL}/movie/now_playing?api_key=${environment.API_KEY_M}&page=${page}`)
  }

  public getMovieListTopRated(page: number): Observable<MovieTopRatedResponse> {
    return this.http.get<MovieTopRatedResponse>(`${environment.API_BASE_URL}/movie/top_rated?api_key=${environment.API_KEY_M}&page=${page}`)
  }
}
