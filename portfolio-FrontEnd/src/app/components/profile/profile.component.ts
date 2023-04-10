import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile_background: any;
  profile_info_picture: any;
  profile_info_name: any;
  profile_info_situation: any;
  profile_info_location: any;
  profile_logo_uns: any;

  constructor(private portfolioData:PortfolioService) { }
  
  ngOnInit(): void {
    this.portfolioData.obtenerDatos().subscribe(data =>{
      this.profile_background = data.profile_background;
      this.profile_info_picture = data.profile_info_picture;
      this.profile_info_name = data.profile_info_name;
      this.profile_info_situation = data.profile_info_situation;
      this.profile_info_location = data.profile_info_location;
      this.profile_logo_uns = data.profile_logo_uns;
    });
  }
}
