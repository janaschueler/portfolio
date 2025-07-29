import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header-legal',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './header-legal.component.html',
  styleUrl: './header-legal.component.scss',
})
export class HeaderLegalComponent {
  isScrolled = false;
  activeLink = '';
  currentLang: string;

  constructor(private translate: TranslateService, private router: Router, private viewportScroller: ViewportScroller) {
    const browserLang = this.translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang') || browserLang || 'en';
    this.translate.use(savedLang);
    this.currentLang = savedLang;
  }

  setActive(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;
    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  navigateToStart(): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      this.scrollToAnchor('start');
    } else {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => this.scrollToAnchor('start'), 100);
      });
    }
  }

  private scrollToAnchor(anchor: string): void {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
