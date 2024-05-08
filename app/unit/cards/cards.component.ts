import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  departments=[
    {
      id:1,
      Title:"Aerospace Business Unit",
      Image:"../../../assets/dept1.jpg",
      Description:"ansjnwhdgeqgevdsvxb"
    },
    {
      id:2,
      Title:"Mobility Business Unit",
      Image:"../../../assets/dept2.jpg",
      Description:"ansjnwhdgeqgevdsvxb"
    },
    {
      id:3,
      Title:"Industrial Business Unit",
      Image:"../../../assets/dept3.jpg",
      Description:"ansjnwhdgeqgevdsvxb",
    },
    {
      id:4,
      Title:"Health Care",
      Image:"../../../assets/dept4.jpg",
      Description:"ansjnwhdgeqgevdsvxb",
    },
    {
      id:5,
      Title:"GIS",
      Image:"../../../assets/dept5.jpg",
      Description:"ansjnwhdgeqgevdsvxb",
    },
    {
      id:6,
      Title:"Banking and Financial",
      Image:"../../../assets/dept7.jpg",
      Description:"ansjnwhdgeqgevdsvxb",
    },
  ]

}
