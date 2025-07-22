import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * PortfolioComponent displays the portfolio section of the application.
 * Uses translation features via TranslateModule.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
