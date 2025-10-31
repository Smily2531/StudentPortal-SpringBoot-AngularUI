import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component'; // ✅ import your component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DisplayComponent], // ✅ include it here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentapp2';
}
