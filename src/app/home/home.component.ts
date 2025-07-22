import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { AboutComponent } from '../about/about.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { ContactComponent } from '../contact/contact.component';

/**
 * HomeComponent serves as the main container for the home page,
 * rendering all primary sections such as head, about, skills, work, recommendations, and contact.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-head></app-head>
    <app-about></app-about>
    <app-skill-set></app-skill-set>
    <app-my-work></app-my-work>
    <app-recommendation></app-recommendation>
    <app-contact></app-contact>
  `,
  imports: [HeadComponent, AboutComponent, SkillSetComponent, MyWorkComponent, RecommendationComponent, ContactComponent],
})
export class HomeComponent {}
