import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experiencia_logo: any;
  experiencia_name: any;
  experiencia_place: any;

  constructor(private portfolioData:PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.experiencia_logo = data.experiencia_logo;
      this.experiencia_name = data.experiencia_name;
      this.experiencia_place = data.experiencia_place;
    });
  }
}
