import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.component.html',
  styleUrls: ['./exemplo1.component.css']
})
export class Exemplo1Component implements OnInit {

  constructor() { }

  numbers: number[] = [1, 2, 3];
  odds: number[] = [];
  evens: number[] = [];

  ngOnInit() {
    this.numbers.forEach(number => 
      (number %2 === 0 ? this.odds.push(number) : this.evens.push(number))
    );
  }
}
