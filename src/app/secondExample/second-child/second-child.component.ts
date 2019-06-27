import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
  
  private _name = '';
  constructor() { }

  ngOnInit() {
  }
  //asociated set and get to input property in order to change it.
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }

}
