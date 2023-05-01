import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mHeader } from '../model/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  URL = 'https://rueda-portfolio-backend.onrender.com/header/';

  constructor(private http: HttpClient) { }

  public getHeader(): Observable<mHeader>{
    return this.http.get<mHeader>(this.URL + 'get/main');
  }
}
