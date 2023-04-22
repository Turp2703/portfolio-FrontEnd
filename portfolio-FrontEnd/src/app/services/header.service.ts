import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mHeader } from '../model/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  URL = 'http://localhost:8080/header/';

  constructor(private http: HttpClient) { }

  public getHeader(): Observable<mHeader>{
    return this.http.get<mHeader>(this.URL + 'get/main');
  }
}
