import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderLegalComponent } from './shared/header-legal/header-legal.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, HeaderLegalComponent, HeaderMobileComponent, CommonModule, FooterComponent],
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private translate: TranslateService, private router: Router) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const navEnd = event as NavigationEnd;
      const path = navEnd.urlAfterRedirects;
      if (path.startsWith('/legal')) {
        this.currentRoute = 'legal';
      } else if (path.startsWith('/privacy')) {
        this.currentRoute = 'privacy';
      } else {
        this.currentRoute = 'home';
      }
    });
  }
}
