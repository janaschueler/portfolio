import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * HeadComponent is a standalone Angular component responsible for rendering the head section of the application.
 * It supports internationalization via the TranslateModule.
 */
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {}
