import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInUser } from '../model/log-in-user';
import { JwtDto } from '../model/jwt-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authURL = 'https://rueda-portfolio-backend.onrender.com/auth/'
  authURL = 'http://localhost:8080/auth/'

  constructor(private httpClient: HttpClient) { }

  public logIn(logInUser: LogInUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'logIn', logInUser);
  }
}
