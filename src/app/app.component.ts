import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import { FooterComponent } from './shared/footer/footer.component';

/**
 * Root component of the portfolio application.
 * Sets up the main layout and imports shared components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule, 
    HeaderComponent,
    HeaderMobileComponent, 
    FooterComponent, 
  ],
})
export class AppComponent {
  title = 'portfolio';
}
