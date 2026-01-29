import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from "./Pages/about/about";
import { Contact } from "./Pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
