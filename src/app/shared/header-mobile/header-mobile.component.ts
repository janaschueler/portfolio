import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * Mobile header component providing language switching functionality.
 */
@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, TranslateModule],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent {
  constructor(private translate: TranslateService) {}

  /**
   * Switches the application's language.
   * @param lang The language code to switch to ('de' or 'en').
   */
  switchLanguage(lang: 'de' | 'en') {
    this.translate.use(lang);
  }
}
