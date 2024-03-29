import { Component, OnInit } from '@angular/core';
import { mEducacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any;
  eduPut: mEducacion = new mEducacion('','','','');
  eduPost: mEducacion = new mEducacion('','','','');

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }
    
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      if(this.tokenService.getAuthorities().length == 2){
        this.isAdmin = true;
      }
      else{
        this.isAdmin = false;
      }
    }
    else{
      this.isLogged = false;
    }

    this.educacionService.getEducacionList().subscribe(data => {
      this.educacionList = data;
    })
  }

  onCreate(): void{
    const educacion = new mEducacion(this.eduPost.picture, this.eduPost.title, this.eduPost.origin, this.eduPost.year);
    this.educacionService.postEducacion(educacion).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {          
          if(JSON.stringify(e).length < 300){
            alert('Campo/s vacios')
          }
          else{
            alert('Una educación con ese nombre ya existe')
          }
          console.error(e);
        },
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  putIndex(id: number){
    this.educacionService.getEducacion(id).subscribe(data => {
      this.eduPut = data;
    })
  }
  onUpdate(): void{
    this.educacionService.putEducacion(this.eduPut.id, this.eduPut).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {          
          if(JSON.stringify(e).length < 300){
            alert('Campo/s vacios')
          }
          else{
            alert('Una educación con ese nombre ya existe')
          }
          console.error(e);
        },
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  onDelete(id: number): void{
    if(id != undefined){
      this.educacionService.deleteEducacion(id).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => {alert("No se pudo eliminar la educacion"); console.error(e);},
          complete: () => {console.info('complete'); window.location.reload();}
        }
      )
    }
  }
}
