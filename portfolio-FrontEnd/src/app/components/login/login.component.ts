import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInUser } from 'src/app/model/log-in-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  isLogged = false;
  isLoggedInFail = false;
  logInUser!: LogInUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggedInFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.logInUser = new LogInUser(this.userName, this.password);
    
    this.authService.logIn(this.logInUser).subscribe(data => {
      this.isLogged = true;
      this.isLoggedInFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.userName);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLoggedInFail = true;
      this.errMsg = err.error.message;
      console.log(this.errMsg);
    })
  }
}
