import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;

  constructor(private proyectosService: ProyectosService) { }
  
  ngOnInit(): void {
    this.proyectosService.getProyectoList().subscribe(data => {
      this.proyectosList = data;
    })
  }
}
