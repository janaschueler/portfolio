import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeaderComponent,
     HeaderMobileComponent,
    HeadComponent,
    AboutComponent,
    SkillSetComponent,
    MyWorkComponent,
    RecommendationComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
