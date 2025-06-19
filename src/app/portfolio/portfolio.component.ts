import { Component } from '@angular/core';
import { Project } from '../interfaces/project';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-portfolio',
  imports: [ModalComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Code Collaboration Tool',
      category: 'Development',
      description:
        'A real-time code collaboration platform for developers to write, review, and debug code together with integrated version control.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Monaco Editor'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      id: 2,
      title: 'API Testing Dashboard',
      category: 'Testing',
      description:
        'A web-based dashboard for testing and monitoring APIs, featuring automated test scripts and performance analytics.',
      technologies: [
        'Vue.js',
        'Express.js',
        'PostgreSQL',
        'Chart.js',
        'Node.js',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },

    {
      id: 3,
      title: 'Restaurant Management',
      category: 'Business Software',
      description:
        'An all-in-one restaurant management system featuring order processing, inventory management, staff scheduling, customer reservations, and real-time kitchen communication.',
      technologies: ['Angular', 'MySQL', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    },
  ];

  selectedProject: Project | null = null;
  setSelectedProject(project: Project) {
    this.selectedProject = project;
  }
}
