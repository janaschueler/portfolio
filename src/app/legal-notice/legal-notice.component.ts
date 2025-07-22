import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
export class LegalNoticeComponent {
  user = 'mail';
  domain = 'janaschuelerhub.com';
  subject = 'Hallo Jana';

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
