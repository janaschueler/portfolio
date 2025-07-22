import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

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
];
