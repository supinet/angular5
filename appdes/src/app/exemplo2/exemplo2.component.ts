import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  templateUrl: './exemplo2.component.html',
  styleUrls: ['./exemplo2.component.scss']
})
export class Exemplo2Component implements OnInit {

  imagem = 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb';

  constructor() { }

  animate() {
    let show = false;
    setInterval(() => {
      if (show) {
        $('.img').fadeIn('slow');
      } else {
        $('.img').fadeOut('slow');
      }
      show = !show;
    }, 500);
  }

  ngOnInit() {
    this.animate();
  }

}
