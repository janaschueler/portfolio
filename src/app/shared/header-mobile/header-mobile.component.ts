import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

/**
 * Mobile header component providing language switching functionality.
 */
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, TranslateModule],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})

/**
 * HeaderMobileComponent provides the mobile version of the application's header.
 * It enables language switching and supports smooth scrolling to page sections via router navigation.
 *
 * - Initializes the current language from localStorage or the browser's default.
 * - Persists language preference across sessions.
 * - Designed for mobile viewport usage in responsive layouts.
 */
export class HeaderMobileComponent {
  currentLang: string;
  constructor(private translate: TranslateService, private router: Router, private viewportScroller: ViewportScroller) {
    const savedLang = localStorage.getItem('lang');
    const fallbackLang = this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang || fallbackLang);
    this.currentLang = savedLang || fallbackLang;
  }

  /**
   * Switches the application's language.
   * @param lang The language code to switch to ('de' or 'en').
   */
  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  /**
   * Navigates to the start section from any route.
   */
  navigateToStart(sidenav?: any): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToAnchor('start');
    } else {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToAnchor('start'), 100);
      });
    }

    if (sidenav) sidenav.close();
  }

  /**
   * Scrolls to a section on the home page.
   * Navigates home first if not already there.
   * Closes sidenav if provided.
   *
   * @param id - ID of the target section.
   * @param sidenav - Optional sidenav to close.
   */
  navigateToSection(id: string, sidenav?: any): void {
    if (this.router.url === '/') {
      this.scrollToAnchor(id);
    } else {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToAnchor(id), 100);
      });
    }
    if (sidenav) sidenav.close();
  }

  /**
   * Smoothly scrolls to a DOM element with the given ID.
   *
   * @param anchor - The ID of the target element to scroll to.
   */
  private scrollToAnchor(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
