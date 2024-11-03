import { Component } from '@angular/core';
import { Persona } from '../persona';
import{CommonModule } from  '@angular/common';

@Component({
  selector: 'app-fromulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fromulario.component.html',
  styleUrl: './fromulario.component.css'
})
export class FromularioComponent {

  personas: Persona[]=[
    {nombre:'Juan', edad:20},
    {nombre:'ferney',edad:44},
    {nombre:'marco', edad:45}
  ]
}
