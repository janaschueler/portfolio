import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss',
})
export class RecommendationComponent {
  testimonials = [
    {
      name: 'Max Name',
      project: 'company/project',
      quote: 'short quote highlighting my soft skills ',
    },
    {
      name: 'Max Name',
      project: 'company/project',
      quote: 'short quote highlighting my soft skills ',
    },
    {
      name: 'Max Name',
      project: 'company/project',
      quote: 'short quote highlighting my soft skills ',
    },
  ];
}
