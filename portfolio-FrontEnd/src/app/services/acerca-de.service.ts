import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mAcercaDe } from '../model/acercaDe.model';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  //URL = 'https://rueda-portfolio-backend.onrender.com/acercaDe/';
  URL = 'http://localhost:8080/acercaDe/';

  constructor(private http: HttpClient) { }

  public getAcercaDe(): Observable<mAcercaDe>{
    return this.http.get<mAcercaDe>(this.URL + 'get/main');
  }
}
