import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { CardsComponent } from './unit/cards/cards.component';
import { CarouselComponent } from './unit/carousel/carousel.component';
import { DepartmentComponent } from './pages/department/department.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CardsComponent,CarouselComponent,DepartmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
