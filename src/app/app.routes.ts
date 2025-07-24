import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

/**
 * Defines the application's main routes.
 * - '' renders the HomeComponent.
 * - 'legal' renders the LegalNoticeComponent.
 */
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'legal',
    component: LegalNoticeComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
];
