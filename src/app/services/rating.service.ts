import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RateMovieDto} from '../models/dto/rate-movie.dto';
import {RatingResponse} from '../models/interfaces/movie/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) {
  }

  public rateMovie(id: string, ratingDto: RateMovieDto): Observable<RatingResponse> {
    return this.http.post<RatingResponse>(`${environment.API_BASE_URL}/movie/${id}/rating?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}`, ratingDto);
  }
}
