import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { mHeader } from 'src/app/model/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  header: mHeader = new mHeader("","");

  constructor(private headerService: HeaderService) { }
  
  ngOnInit(): void {
    this.headerService.getHeader().subscribe(data => {
      this.header = data;
    })
  }

}
