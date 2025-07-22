import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Standalone component for the Sharky feature.
 * Uses translation module for internationalization.
 */
@Component({
  selector: 'app-sharky',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sharky.component.html',
  styleUrl: './sharky.component.scss',
})
export class SharkyComponent {}
