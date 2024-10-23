import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromularioComponent } from "./fromulario/fromulario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FromularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontAngular';
}
