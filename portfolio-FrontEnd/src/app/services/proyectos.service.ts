import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mProyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<mProyecto>{
    return this.http.get<mProyecto>(this.URL + 'get/main');
  }
  public getProyectoList() {
    return this.http.get<mProyecto>(this.URL + 'get');
  }
}
