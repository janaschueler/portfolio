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
      name: ' Simon Maximilian Heistermann',
      project: 'Developer Academy | Join',
      quote:
        'Jana works in a structured, reliable, and thoughtful manner. Her calm and clear communication, combined with strong organizational skills, contributed significantly to the progress of our project. Working with her was always pleasant, effective, and above all, successful. I can wholeheartedly recommend Jana! ',
    },
  ];
}
