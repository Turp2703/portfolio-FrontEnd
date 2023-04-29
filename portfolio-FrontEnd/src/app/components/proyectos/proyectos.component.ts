import { Component, OnInit } from '@angular/core';
import { mProyecto } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList: any;
  proyPut: mProyecto = new mProyecto('','','');
  proyPost: mProyecto = new mProyecto('','','');

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }
    
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

    this.proyectosService.getProyectoList().subscribe(data => {
      this.proyectosList = data;
    })
  }
  
  onCreate(): void{
    const Proyecto = new mProyecto(this.proyPost.picture, this.proyPost.name, this.proyPost.description);
    this.proyectosService.postProyecto(Proyecto).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {alert("No se pudo agregar el Proyecto"); console.error(e);},
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  putIndex(id: number){
    this.proyectosService.getProyecto(id).subscribe(data => {
      this.proyPut = data;
    })
  }
  onUpdate(): void{
    this.proyectosService.putProyecto(this.proyPut.id, this.proyPut).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {alert("No se pudo editar el Proyecto"); console.error(e);},
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  onDelete(id: number): void{
    if(id != undefined){
      this.proyectosService.deleteProyecto(id).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => {alert("No se pudo eliminar el Proyecto"); console.error(e);},
          complete: () => {console.info('complete'); window.location.reload();}
        }
      )
    }
  }
}
