import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare const AOS: any;
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
export class SharkyComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 0);
  }
}
