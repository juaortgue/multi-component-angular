import { Component, OnInit } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/heroe.interface';
//datos mock
export const HEROES: HeroInterface[] = [
  {name: 'Dr IQ'},
  {name: 'Magneta'},
  {name: 'Bombasto'}
];

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})



export class FatherComponent implements OnInit {
  heroes = HEROES;
  master = 'Master';
  constructor() { }

  ngOnInit() {
  }

}
