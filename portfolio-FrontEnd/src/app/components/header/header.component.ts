import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { mHeader } from 'src/app/model/header.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  header: mHeader = new mHeader("","");

  constructor(private headerService: HeaderService, private router: Router) { }
  
  ngOnInit(): void {
    this.headerService.getHeader().subscribe(data => {
      this.header = data;
    })
  }

  login(){
    this.router.navigate(['/login'])
  }

}
