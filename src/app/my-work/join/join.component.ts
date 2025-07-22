import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component for the "Join" section of the application.
 * Uses translation module for internationalization.
 */
@Component({
  selector: 'app-join',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {}
