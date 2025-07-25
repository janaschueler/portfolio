import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent implements AfterViewInit {
  user = 'mail';
  domain = 'janaschuelerhub.com';
  subject = 'Hallo Jana';

  constructor(private route: ActivatedRoute, private router: Router) {}

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
