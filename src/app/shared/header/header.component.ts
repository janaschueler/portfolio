import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeLink = '';

  setActive(event: Event, link: string): void {
    event.preventDefault();
    this.activeLink = link;

    const el = document.querySelector(link);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
