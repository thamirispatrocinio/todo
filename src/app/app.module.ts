import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({//Metadatas, dados que são informações adicionais a classe
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule //para usar formularios no angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }// modulo é uma classe decorada com @NgModule
