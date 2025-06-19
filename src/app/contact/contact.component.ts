import { Component, ElementRef } from '@angular/core';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import { HeadingComponent } from '../heading/heading.component';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  imports: [HeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  add(el: HTMLElement) {
    el.classList.add('top-0');
  }
  remove(el: HTMLElement) {
    el.classList.remove('top-0');
  }
  prevent(btn: Event) {
    btn.preventDefault();
  }
}
