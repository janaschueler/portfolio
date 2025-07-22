import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
export class PokedexComponent {}
