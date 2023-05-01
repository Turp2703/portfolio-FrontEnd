import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mSkill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'https://rueda-portfolio-backend.onrender.com/skill/';

  constructor(private http: HttpClient) { }

  public getSkill(id: number): Observable<mSkill>{
    return this.http.get<mSkill>(this.URL + `get/${id}`);
  }

  public getSkillList() {
    return this.http.get<mSkill>(this.URL + 'get');
  }

  public postSkill(skill: mSkill): Observable<any>{
    return this.http.post<any>(this.URL + 'post', skill)
  }

  public putSkill(id: number, skill: mSkill): Observable<any>{
    return this.http.put<any>(this.URL + `put/${id}`, skill);
  }

  public deleteSkill(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
