import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLink = '';

  /**
   * Initializes the header component with the default language set to English using the TranslateService.
   * @param translate Service for handling translations.
   */
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  /**
   * Sets the active navigation link and smoothly scrolls to the corresponding section.
   * @param event The click event to prevent default navigation.
   * @param link The selector of the target section to scroll into view.
   */
  setActive(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  /**
   * Switches the application's language between German ('de') and English ('en').
   * @param lang The language code to switch to.
   */
  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  /**
   * Handles the window scroll event and updates the `isScrolled` flag
   * if the vertical scroll position exceeds 50 pixels.
   */
  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
