import { Component } from '@angular/core';
import { JoinComponent } from './join/join.component';
import { SharkyComponent } from './sharky/sharky.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component displaying a collection of work/projects.
 * Uses multiple child components and supports translation.
 */
@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [JoinComponent, SharkyComponent, PokedexComponent, PortfolioComponent, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent {}
