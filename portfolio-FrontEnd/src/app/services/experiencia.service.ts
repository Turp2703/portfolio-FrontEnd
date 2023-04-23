import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mExperiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  

  URL = 'http://localhost:8080/experiencia/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<mExperiencia>{
    return this.http.get<mExperiencia>(this.URL + 'get/main');
  }
  public getExperienciasList() {
    return this.http.get<mExperiencia>(this.URL + 'get');
  }
}
