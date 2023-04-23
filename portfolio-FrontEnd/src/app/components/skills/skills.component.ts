import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillsList: any;

  constructor(private skillService: SkillsService) { }
  
  ngOnInit(): void {
    this.skillService.getSkillList().subscribe(data => {
      this.skillsList = data;
    })
  }
}
