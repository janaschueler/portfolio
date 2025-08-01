import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

/**
 * HeaderComponent provides the application's header bar with language switching,
 * navigation, and smooth scrolling to sections. Handles active link highlighting
 * and persists language preference.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;
  activeLink = '';
  currentLang: string;
  /**
   * Initializes the header component by setting the application's language based on
   * the saved language in localStorage, the browser's default language, or defaults to 'en'.
   * Also injects translation, routing, and viewport scrolling services.
   */
  constructor(private translate: TranslateService, private router: Router, private viewportScroller: ViewportScroller) {
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang') || browserLang || 'en';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  /**
   * Sets the active navigation link and smoothly scrolls to the corresponding section.
   * @param event The click event to prevent default navigation.
   * @param link The CSS selector of the target section to scroll into view.
   */
  setActive(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Switches the application's language.
   * Updates the translation service, sets the current language, and saves it to localStorage.
   *
   * @param lang - The language code to switch to (e.g., 'en', 'de').
   */
  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  /**
   * Navigates to the start section of the page.
   * If already on the homepage, scrolls to the 'start' anchor.
   * Otherwise, navigates to the homepage and then scrolls to the 'start' anchor.
   */
  navigateToStart(): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToAnchor('start');
    } else {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToAnchor('start'), 100);
      });
    }
  }

  /**
   * Smoothly scrolls the page to the element with the specified anchor ID.
   * @param anchor - The ID of the target element to scroll to.
   */
  private scrollToAnchor(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
