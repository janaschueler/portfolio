import { Component, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare const AOS: any;
/**
 * Component for displaying the Pokedex section of the application.
 */
@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss',
})
export class PokedexComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 0);
  }
}
