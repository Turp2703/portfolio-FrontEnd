import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  header_logo_arg_programa: any;
  header_title: any;

  constructor(private portfolioData:PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.header_logo_arg_programa = data.header_logo_arg_programa;
      this.header_title = data.header_title;
    });
  }

}
