import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private dataUrl = 'assets/db/projects.json';

  http = inject(HttpClient);

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.dataUrl);
  }
}
