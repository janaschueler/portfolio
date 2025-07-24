import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

declare const AOS: any;

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
export class JoinComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (AOS) AOS.refresh();
    }, 0);
  }
}
