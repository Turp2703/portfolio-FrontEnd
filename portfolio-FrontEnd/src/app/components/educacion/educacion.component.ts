import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any;

  constructor(private educacionService: EducacionService) { }
  
  ngOnInit(): void {
    this.educacionService.getEducacionList().subscribe(data => {
      this.educacionList = data;
    })
  }
}
