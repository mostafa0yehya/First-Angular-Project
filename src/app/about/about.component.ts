import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';

@Component({
  selector: 'app-about',
  imports: [HeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
