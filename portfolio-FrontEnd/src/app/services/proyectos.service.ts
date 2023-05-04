import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mProyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'https://rueda-portfolio-backend.onrender.com/proyecto/';
  // URL = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) { }

  public getProyecto(id: number): Observable<mProyecto>{
    return this.http.get<mProyecto>(this.URL + `get/${id}`);
  }

  public getProyectoList() {
    return this.http.get<mProyecto>(this.URL + 'get');
  }

  public postProyecto(proyecto: mProyecto): Observable<any>{
    return this.http.post<any>(this.URL + 'post', proyecto)
  }

  public putProyecto(id: number, proyecto: mProyecto): Observable<any>{
    return this.http.put<any>(this.URL + `put/${id}`, proyecto);
  }

  public deleteProyecto(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
