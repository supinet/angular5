import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/exemplo1.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { Exemplo2Component } from './exemplo2/exemplo2.component';
import { Exemplo3Component } from './exemplo3/exemplo3.component';
import { Exemplo4Component } from './exemplo4/exemplo4.component';
import { Exemplo4Service } from './exemplo4.service';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exemplo2Component,
    Exemplo3Component,
    Exemplo4Component
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    HttpModule
  ],
  providers: [Exemplo4Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
