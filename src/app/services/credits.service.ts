import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {CreditsResponse} from '../models/interfaces/credits/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private http: HttpClient) {
  }

  public getAccountDetails(id: number): Observable<CreditsResponse> {
    return this.http.get<CreditsResponse>(`${environment.API_BASE_URL}/movie/${id}/credits?api_key=${environment.API_KEY_M}`);
  }
}
