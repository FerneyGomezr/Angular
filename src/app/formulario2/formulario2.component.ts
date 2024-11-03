import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { json } from 'stream/consumers';
import { NgModule } from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'
import { OnInit } from '@angular/core';

/* common module sirve para mostrar el formato json */
@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {

  persona ={
    nombre:'',
    edad:''
  }

  procesar(){

    console.log("se esta entrando en el log" + ' ' + this.persona.nombre + ' '+ this.persona.edad )
  }
  constructor(){}
    ngOnInit(): void {

    }
  
}
