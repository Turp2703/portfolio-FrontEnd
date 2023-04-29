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
    
    this.authService.logIn(this.logInUser).subscribe({
      next: (v) => {
        this.tokenService.setToken(v.token);
        this.tokenService.setUsername(v.userName);
        this.tokenService.setAuthorities(v.authorities);
        this.roles = v.authorities;
      },
      error: (e) => {
        this.isLogged = false;
        this.isLoggedInFail = true;
        if(JSON.stringify(e).length < 300){
          alert('Campo/s vacios')
        }
        else{
          alert('Usuario y/o Contraseña incorrecto/s')
        }
        console.error(e);;
      },
      complete: () => {
        this.isLogged = true;
        this.isLoggedInFail = false;
        this.router.navigate(['']);
      }
    })
  }
}
