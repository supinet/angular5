import { Exemplo4Service } from './../exemplo4.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo4',
  templateUrl: './exemplo4.component.html',
  styleUrls: ['./exemplo4.component.scss']
})
export class Exemplo4Component implements OnInit {

  responseFrom: any;

  constructor(private service: Exemplo4Service) { }

  ngOnInit() {
    // this.getWithCallback();
    this.getFromWithAsync();
  }

  getWithCallback() {
    this.service.getFromApi().then((response) => {
      console.log(response.json());
      this.responseFrom = response.json().data;
    }).catch((erro) => {
      console.log(erro);
    })
  }


  async getFromWithAsync() {
    try {
      const response = await this.service.getFromApi();
      // const response1 = await this.service.getFromApi();
      // const response2 = await this.service.getFromApi();
      this.responseFrom = response.json().data;
      console.log(response.json())
    } catch(error) {
      console.log('error => ', error)
    }
  }

}
