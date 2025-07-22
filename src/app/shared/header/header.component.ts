import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule, 
  ],
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
    this.translate.use('en');
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
  switchLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
  }
}
