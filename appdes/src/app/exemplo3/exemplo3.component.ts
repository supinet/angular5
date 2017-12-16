import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.scss']
})
export class Exemplo3Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit():void { 
    console.log(this.name.nativeElement);
    this.name.nativeElement.style.color = 'blue';
  }

  @ViewChild('name') name;

}
