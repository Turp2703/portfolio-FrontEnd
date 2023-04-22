import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { mProfile } from 'src/app/model/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile: mProfile = new mProfile("","","","","","");

  constructor(private profileService: ProfileService) { }
  
  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data;
    })
  }
  
}
