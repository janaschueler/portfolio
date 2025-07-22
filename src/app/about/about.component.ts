import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Standalone About component with translation support.
 * Displays static information about the application.
 *
 * @component
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
