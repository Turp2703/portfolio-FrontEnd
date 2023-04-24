import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { mHeader } from 'src/app/model/header.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogged = false;

  header: mHeader = new mHeader("","");

  constructor(private headerService: HeaderService, private router: Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    this.headerService.getHeader().subscribe(data => {
      this.header = data;
    })
  }

  logOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  logIn(): void{
    this.router.navigate(['/login'])
  }

}
