import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillsList: any;

  constructor(private portfolioData:PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.skillsList = data.skills;
    });
  }
}
