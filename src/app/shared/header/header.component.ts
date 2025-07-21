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
    TranslateModule, // <== wichtig
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLink = '';

  constructor(private translate: TranslateService) {
    // Optional: Browser-Sprache oder Default setzen
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  setActive(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;

    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  switchLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
  }
}
