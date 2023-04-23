import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mFooter } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  URL = 'http://localhost:8080/footer/';

  constructor(private http: HttpClient) { }

  public getFooter(): Observable<mFooter>{
    return this.http.get<mFooter>(this.URL + 'get/main');
  }
}
