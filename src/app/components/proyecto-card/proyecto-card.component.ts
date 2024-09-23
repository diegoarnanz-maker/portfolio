import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-card.component.html',
  styleUrl: './proyecto-card.component.scss'
})
export class ProyectoCardComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() tecnologyIcons: string[] = [];
  @Input() githubLink: string = '';
  @Input() websiteLink: string = '';
}
