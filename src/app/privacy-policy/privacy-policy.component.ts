import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
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
