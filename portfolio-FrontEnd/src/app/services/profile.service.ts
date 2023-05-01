import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mProfile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  URL = 'https://rueda-portfolio-backend.onrender.com/profile/';

  constructor(private http: HttpClient) { }

  public getProfile(): Observable<mProfile>{
    return this.http.get<mProfile>(this.URL + 'get/main');
  }
}
