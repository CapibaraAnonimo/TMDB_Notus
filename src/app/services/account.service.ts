import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountResponse } from '../models/interfaces/authentication/account.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getAccountDetails(): Observable<AccountResponse> {
    return this.http.get<AccountResponse>(`${environment.API_BASE_URL}/account?api_key=${environment.API_KEY_M}&session_id=${localStorage.getItem('session_id')}`);
  }
}
