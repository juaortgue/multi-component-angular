import { Component, OnInit, Input } from '@angular/core';
import { HeroInterface } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() hero: HeroInterface;
  @Input('master') masterName: string;

  private _name = '';
  constructor() { }

  ngOnInit() {
  }
  
  //Get name from father and delete his whitespaces
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }

}
