import { Component, OnInit } from '@angular/core';
import { Exemplo3Service } from './../exemplo3.service';
@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.css']
})
export class Exemplo3Component implements OnInit {

  constructor(private service: Exemplo3Service) { }

  animes: string[] = [];
  
  ngOnInit() {
    this.animes = this.service.getAnimes();
  }

}
