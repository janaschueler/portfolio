import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare const AOS: any;

/**
 * Component for displaying a list of testimonials with expandable quotes.
 * Handles localization, overflow detection, and expand/collapse functionality.
 */
@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss',
})

/**
 * Displays a list of testimonials with expandable quotes and overflow detection.
 * Handles localization and animation refresh.
 */
export class RecommendationComponent implements AfterViewInit {
  testimonials: any[] = [];
  expandedIndices: boolean[] = [];
  overflowing: boolean[] = [];

  @ViewChildren('quoteRef') quoteElements!: QueryList<ElementRef>;

  /**
   * Initializes the `RecommendationComponent` by fetching testimonial data using the provided `TranslateService`.
   * Sets up the `testimonials`, `expandedIndices`, and `overflowing` arrays based on the retrieved data.
   *
   * @param translate - The translation service used to fetch localized testimonial data.
   */
  constructor(private translate: TranslateService) {
    this.translate.get('recommendation.testimonials').subscribe((data) => {
      this.testimonials = data;
      this.expandedIndices = data.map(() => false);
      this.overflowing = data.map(() => false);
    });
  }

  /**
   * Lifecycle hook that runs after the component's view has been initialized.
   * Refreshes AOS animations and updates the overflowing state for quote elements.
   */
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
      this.overflowing = this.quoteElements.map((el) => el.nativeElement.scrollHeight > 120);
    }, 0);
  }

  /**
   * Toggles the expanded state for the item at the given index.
   * @param index Index of the item to expand or collapse.
   */
  toggleExpand(index: number) {
    this.expandedIndices[index] = !this.expandedIndices[index];
  }
}
