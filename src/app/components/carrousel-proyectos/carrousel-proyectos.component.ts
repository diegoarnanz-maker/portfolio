import { Component, inject, OnInit } from '@angular/core';
import { ProyectoCardComponent } from '../proyecto-card/proyecto-card.component';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../models/iproject';

@Component({
  selector: 'app-carrousel-proyectos',
  standalone: true,
  imports: [
    ProyectoCardComponent
  ],
  templateUrl: './carrousel-proyectos.component.html',
  styleUrl: './carrousel-proyectos.component.scss',
})
export class CarrouselProyectosComponent implements OnInit {
  projectsFullstack: IProject[] = [];
  projectsFrontend: IProject[] = [];
  projectsBackend_mvc: IProject[] = [];
  projectsBackend_apirest: IProject[] = [];
  projectsHtmlCss: IProject[] = [];
  projectsJs: IProject[] = [];

  projectService = inject(ProjectService);
  
  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.projectService.getProjects().subscribe(
      (data: any) => {
        this.projectsFullstack = data.fullstack || [];
        this.projectsFrontend = data.frontend || [];
        this.projectsBackend_mvc = data.projectsBackend_mvc || [];
        this.projectsBackend_apirest = data.projectsBackend_apirest || [];
        this.projectsHtmlCss = data.htmlCss || [];
        this.projectsJs = data.projectsJs || [];
      },
      (error) => {
        console.error('Error al cargar los proyectos:', error);
      }
    );
  }
}
