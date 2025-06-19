import { Component, ViewChild, viewChild } from '@angular/core';
import { ContactBtnComponent } from '../contact-btn/contact-btn.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  imports: [ContactBtnComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
