import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any; 

  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data=>{
      this.educacionList = data.educacion;
    });
  }
}
