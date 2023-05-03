import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mEducacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //URL = 'https://rueda-portfolio-backend.onrender.com/educacion/';
  URL = 'http://localhost:8080/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(id: number): Observable<mEducacion>{
    return this.http.get<mEducacion>(this.URL + `get/${id}`);
  }

  public getEducacionList() {
    return this.http.get<mEducacion>(this.URL + 'get');
  }

  public postEducacion(educacion: mEducacion): Observable<any>{
    return this.http.post<any>(this.URL + 'post', educacion)
  }

  public putEducacion(id: number, educacion: mEducacion): Observable<any>{
    return this.http.put<any>(this.URL + `put/${id}`, educacion);
  }

  public deleteEducacion(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
