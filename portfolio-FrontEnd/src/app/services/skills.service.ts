import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mSkill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'http://localhost:8080/skill/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<mSkill>{
    return this.http.get<mSkill>(this.URL + 'get/main');
  }
  public getSkillList() {
    return this.http.get<mSkill>(this.URL + 'get');
  }
}
