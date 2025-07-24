import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

/**
 * Root component of the portfolio application.
 * Sets up the main layout and imports shared components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, HeaderMobileComponent, FooterComponent],
})
export class AppComponent {
  title = 'portfolio';

  /**
   * Initializes the translation service with the saved language from localStorage or defaults to English.
   */
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';

    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }
}
