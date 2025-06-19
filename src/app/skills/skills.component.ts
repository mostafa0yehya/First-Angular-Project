import { Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { SkillItem } from '../interfaces/skill';

@Component({
  selector: 'app-skills',
  imports: [HeadingComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  items: SkillItem[] = [
    {
      id: 1,
      image: '/images/skill1.webp',
      title: 'Strategy & Direction',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      id: 2,
      image: '/images/skill2.webp',
      title: 'Branding & Logo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      id: 3,
      image: '/images/skill3.webp',
      title: 'UI & UX Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      id: 4,
      image: '/images/skill4.webp',
      title: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
  ];
}
