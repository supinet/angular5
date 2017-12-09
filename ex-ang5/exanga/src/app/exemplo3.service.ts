import { Injectable } from '@angular/core';

@Injectable()
export class Exemplo3Service {

  animes: string[] = ['a', 'b', 'c', 'd'];

  constructor() { }

  getAnimes(): string[] {
    console.log(this.animes);
    return this.animes;
  }

}
