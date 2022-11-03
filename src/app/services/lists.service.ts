import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddMovieDto } from '../models/dto/add-movie-dto';
import { CreateListDto } from '../models/dto/create-list.dto';
import { AddMovieResponse } from '../models/interfaces/list/add-movie-list.interface';
import { ListsResponse } from '../models/interfaces/list/get-list.interface';
import { ListDetailsResponse } from '../models/interfaces/list/list-details.interface';
import { NewListsResponse } from '../models/interfaces/list/new-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  public createList(listDto: CreateListDto): Observable<NewListsResponse> {
    return this.http.post<NewListsResponse>(`${environment.API_BASE_URL}/list?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}`, listDto);
  }

  public getLists(account_id: number, page: number): Observable<ListsResponse> {
    return this.http.get<ListsResponse>(`${environment.API_BASE_URL}/account/${account_id}/lists?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}&page=${page}`);
  }

  public getListDetails(list_id: number): Observable<ListDetailsResponse> {
    return this.http.get<ListDetailsResponse>(`${environment.API_BASE_URL}/list/${list_id}?api_key=${environment.API_KEY_M}`);
  }

  public addMovie(addDto: AddMovieDto, list_id: number): Observable<AddMovieResponse> {
    return this.http.post<AddMovieResponse>(`${environment.API_BASE_URL}/list/${list_id}/add_item?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}`, addDto);
  }
}