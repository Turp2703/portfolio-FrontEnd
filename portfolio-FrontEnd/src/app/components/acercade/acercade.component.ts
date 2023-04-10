import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercade_data: any;

  constructor(private portfolioData:PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.acercade_data = data.acercade_data;
    });
  }
}
