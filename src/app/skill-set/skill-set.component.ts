import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * SkillSetComponent displays a set of skills.
 * Uses translation module for internationalization.
 */
@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {}
