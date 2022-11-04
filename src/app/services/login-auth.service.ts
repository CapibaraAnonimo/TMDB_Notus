import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionResponse } from '../models/interfaces/authentication/create-session.interface';
import { DeleteSessionResponse } from '../models/interfaces/authentication/delete-session.interface';
import { RequestTokenResponse } from '../models/interfaces/authentication/request-token.interface';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { DeleteSessionDto } from '../models/dto/delete-session.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private http: HttpClient) { }

  public createRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(`${environment.API_BASE_URL}/authentication/token/new?api_key=${environment.API_KEY_M}`);
  }

  public createSession(sessionDto: CreateSessionDto): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(`${environment.API_BASE_URL}/authentication/session/new?api_key=${environment.API_KEY_M}`, sessionDto);
  }

  public deleteSession(deleteSession: DeleteSessionDto): Observable<DeleteSessionResponse> {
    return this.http.request<DeleteSessionResponse>('delete', `${environment.API_BASE_URL}/authentication/session?api_key=${environment.API_KEY_M}`, { body: deleteSession });
  }
}
