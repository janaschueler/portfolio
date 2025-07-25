import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})

/**
 * Component for displaying legal notice information, including a mailto link.
 * Provides properties for user, domain, subject, and computed email address.
 */
export class LegalNoticeComponent implements AfterViewInit {
  user = 'mail';
  domain = 'janaschuelerhub.com';
  subject = 'Hallo Jana';

  constructor(private router: Router) {}

  /**
   * Scroll to top if no fragment is present.
   */
 ngAfterViewInit(): void {
  const fragment = this.router.parseUrl(this.router.url).fragment;
  if (fragment) {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}


  /**
   * Returns the user's email address in the format "user@domain".
   */
  get emailAddress(): string {
    return `${this.user}@${this.domain}`;
  }

  /**
   * Returns a mailto link with the specified email address and subject.
   */
  get mailtoLink(): string {
    return `mailto:${this.emailAddress}?subject=${encodeURIComponent(this.subject)}`;
  }
}
