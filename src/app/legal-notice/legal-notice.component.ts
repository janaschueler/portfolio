import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent {
  user = 'mail';
  domain = 'janaschuelerhub.com';
  subject = 'Hallo Jana';

  get emailAddress(): string {
    return `${this.user}@${this.domain}`;
  }

  get mailtoLink(): string {
    return `mailto:${this.emailAddress}?subject=${encodeURIComponent(
      this.subject
    )}`;
  }
}
