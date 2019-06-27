import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-father',
  templateUrl: './second-father.component.html',
  styleUrls: ['./second-father.component.scss']
})
export class SecondFatherComponent implements OnInit {
  names = ['Dr IQ', '   ', '  Bombasto  '];
  constructor() { }

  ngOnInit() {
  }

}
