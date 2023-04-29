import { Component, OnInit } from '@angular/core';
import { mExperiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciasList: any;
  expPut: mExperiencia = new mExperiencia('','','');
  expPost: mExperiencia = new mExperiencia('','','');

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }
    
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

    this.experienciaService.getExperienciasList().subscribe(data => {
      this.experienciasList = data;
    })
  }

  onCreate(): void{
    const experiencia = new mExperiencia(this.expPost.logo, this.expPost.name, this.expPost.place);
    this.experienciaService.postExperiencia(experiencia).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {alert("No se pudo agregar la experiencia"); console.error(e);},
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  putIndex(id: number){
    this.experienciaService.getExperiencia(id).subscribe(data => {
      this.expPut = data;
    })
  }
  onUpdate(): void{
    this.experienciaService.putExperiencia(this.expPut.id, this.expPut).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {alert("No se pudo editar la experiencia"); console.error(e);},
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  onDelete(id: number): void{
    if(id != undefined){
      this.experienciaService.deleteExperiencia(id).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => {alert("No se pudo eliminar la experiencia"); console.error(e);},
          complete: () => {console.info('complete'); window.location.reload();}
        }
      )
    }
  }
}
