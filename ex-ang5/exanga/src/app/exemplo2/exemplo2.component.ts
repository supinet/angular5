import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  templateUrl: './exemplo2.component.html',
  styleUrls: ['./exemplo2.component.css']
})
export class Exemplo2Component implements OnInit {

  ngOnInit() { }

  textCheck($event) {
    const code: number = $event.charCode;
    if (code === 126 || code === 231 || code === 199 ) {
      $event.preventDefault();
    }
  }
}
