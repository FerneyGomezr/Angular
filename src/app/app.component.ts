import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromularioComponent } from "./fromulario/fromulario.component";
import { SwitchComponent } from "./switch/switch.component";
import { Formulario2Component } from './formulario2/formulario2.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FromularioComponent, SwitchComponent,Formulario2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FrontAngular';
}
