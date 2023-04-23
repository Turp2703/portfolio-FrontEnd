import { Component, OnInit } from '@angular/core';
import { mExperiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciasList: any;

  constructor(private experienciaService: ExperienciaService) { }
  
  ngOnInit(): void {
    this.experienciaService.getExperienciasList().subscribe(data => {
      this.experienciasList = data;
    })
  }
}
