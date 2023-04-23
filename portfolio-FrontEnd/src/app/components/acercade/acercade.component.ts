import { Component, OnInit } from '@angular/core';
import { mAcercaDe } from 'src/app/model/acercaDe.model';
import { AcercaDeService } from 'src/app/services/acerca-de.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  acercaDe: mAcercaDe = new mAcercaDe("","");

  constructor(private acercaDeService: AcercaDeService) { }
  
  ngOnInit(): void {
    this.acercaDeService.getAcercaDe().subscribe(data => {
      this.acercaDe = data;
    })
  }
}
