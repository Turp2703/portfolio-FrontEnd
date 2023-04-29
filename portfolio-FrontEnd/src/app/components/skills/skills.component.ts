import { Component, OnInit } from '@angular/core';
import { mSkill } from 'src/app/model/skill.model';
import { SkillsService } from 'src/app/services/skills.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skillsList: any;
  skillPut: mSkill = new mSkill('','');
  skillPost: mSkill = new mSkill('','');

  constructor(private skillService: SkillsService, private tokenService: TokenService) { }
    
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

    this.skillService.getSkillList().subscribe(data => {
      this.skillsList = data;
    })
  }

  onCreate(): void{
    const skill = new mSkill(this.skillPost.name, this.skillPost.percentage);
    if(parseInt(skill.percentage) > 100){
      skill.percentage = "100";
    }
    else if(parseInt(skill.percentage) < 0){
      skill.percentage = "0";
    }
    this.skillService.postSkill(skill).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {
          if(JSON.stringify(e).length < 290){
            alert('Campo/s vacios')
          }
          else{
            alert('Una skill con ese nombre ya existe')
          }
          console.error(e);
        },
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  putIndex(id: number){
    this.skillService.getSkill(id).subscribe(data => {
      this.skillPut = data;
    })
  }
  onUpdate(): void{
    if(parseInt(this.skillPut.percentage) > 100){
      this.skillPut.percentage = "100";
    }
    else if(parseInt(this.skillPut.percentage) < 0){
      this.skillPut.percentage = "0";
    }
    this.skillService.putSkill(this.skillPut.id, this.skillPut).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => {          
          if(JSON.stringify(e).length < 295){
            alert('Campo/s vacios')
          }
          else{
            alert('Una skill con ese nombre ya existe')
          }
          console.error(e);
        },
        complete: () => {console.info('complete'); window.location.reload();}
      }
    )
  }

  onDelete(id: number): void{
    if(id != undefined){
      this.skillService.deleteSkill(id).subscribe(
        {
          next: (v) => console.log(v),
          error: (e) => {alert("No se pudo eliminar la Skill"); console.error(e);},
          complete: () => {console.info('complete'); window.location.reload();}
        }
      )
    }
  }
}
