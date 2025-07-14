import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeaderComponent,
    HeadComponent,
    AboutComponent,
    SkillSetComponent,
    MyWorkComponent,
    RecommendationComponent,
    ContactComponent,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
