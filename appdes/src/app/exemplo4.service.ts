import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Exemplo4Service {

  constructor(private http: Http) { }

  getFromApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1').toPromise();
  }

}
