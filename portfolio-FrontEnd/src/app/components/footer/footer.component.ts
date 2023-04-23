import { Component, OnInit } from '@angular/core';
import { mFooter } from 'src/app/model/footer.model';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  footer: mFooter = new mFooter("","");

  constructor(private footerService: FooterService) { }
  
  ngOnInit(): void {
    this.footerService.getFooter().subscribe(data => {
      this.footer = data;
    })
  }
}
