import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddFavoriteDto } from '../models/dto/add-movie-dto';
import { AddFavoriteResponse } from '../models/interfaces/favorite/add-movie-list.interface';
import { FavoriteResponse } from '../models/interfaces/favorite/get-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  public addFavorite(account_id: number, addDto: AddFavoriteDto): Observable<AddFavoriteResponse> {
    return this.http.post<AddFavoriteResponse>(`${environment.API_BASE_URL}/account/${account_id}/favorite?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}`, addDto);
  }

  public getFavorites(account_id: number, page: number): Observable<FavoriteResponse> {
    return this.http.get<FavoriteResponse>(`${environment.API_BASE_URL}/account/${account_id}/favorite/movies?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}&page=${page}`);
  }
}