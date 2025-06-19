import { Component, Input } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() projectDetails: Project | null = null;
}
