import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-father',
  templateUrl: './fourth-father.component.html',
  styleUrls: ['./fourth-father.component.scss']
})
export class FourthFatherComponent implements OnInit {
  agreed: number;
  disagreed: number;
  voters: string[];
  constructor() {
    this.agreed = 0;
    this.disagreed = 0;
    this.voters = ['Narco', 'Celeritas', 'Bombasto'];
   }

  ngOnInit() {
  }
  
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
