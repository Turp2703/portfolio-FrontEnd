import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mExperiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //URL = 'https://rueda-portfolio-backend.onrender.com/experiencia/';
  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(id: number): Observable<mExperiencia>{
    return this.http.get<mExperiencia>(this.URL + `get/${id}`);
  }

  public getExperienciasList() {
    return this.http.get<mExperiencia>(this.URL + 'get');
  }

  public postExperiencia(experiencia: mExperiencia): Observable<any>{
    return this.http.post<any>(this.URL + 'post', experiencia)
  }

  public putExperiencia(id: number, experiencia: mExperiencia): Observable<any>{
    return this.http.put<any>(this.URL + `put/${id}`, experiencia);
  }

  public deleteExperiencia(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
