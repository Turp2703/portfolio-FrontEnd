import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mEducacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<mEducacion>{
    return this.http.get<mEducacion>(this.URL + 'get/main');
  }
  public getEducacionList() {
    return this.http.get<mEducacion>(this.URL + 'get');
  }
}
