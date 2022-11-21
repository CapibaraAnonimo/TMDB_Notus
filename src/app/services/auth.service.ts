import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {
  }

  user = this.auth.authState.pipe(map(authState => {
    console. log( ' authState : ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));
}
