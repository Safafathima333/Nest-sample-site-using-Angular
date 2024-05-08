import { Component } from '@angular/core';
import { CardsComponent } from '../../unit/cards/cards.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
