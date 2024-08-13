import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { BodyComponent } from './app/body/body.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
