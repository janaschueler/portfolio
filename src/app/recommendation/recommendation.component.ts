import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * RecommendationComponent displays a list of testimonials.
 * Fetches testimonial data using the TranslateService.
 */
@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss',
})
export class RecommendationComponent {
  testimonials: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.get('recommendation.testimonials').subscribe((data) => {
      this.testimonials = data;
    });
  }
}
