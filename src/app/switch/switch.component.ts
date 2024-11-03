import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'] // Cambiado a "styleUrls"
})
export class SwitchComponent {

  dia: string = ''; // Propiedad para almacenar el valor del input

  
}
