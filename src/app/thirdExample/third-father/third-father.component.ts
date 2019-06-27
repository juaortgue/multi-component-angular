import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-father',
  templateUrl: './third-father.component.html',
  styleUrls: ['./third-father.component.scss']
})
export class ThirdFatherComponent implements OnInit {
  major;
  minor;
  constructor() {
    this.major = 1;
    this.minor = 23;
   }

  ngOnInit() {
  }
  
 
  newMinor() {
    this.minor++;
  }
 
  newMajor() {
    this.major++;
    this.minor = 0;
  }

}
