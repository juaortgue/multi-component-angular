import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fourth-child',
  templateUrl: './fourth-child.component.html',
  styleUrls: ['./fourth-child.component.scss']
})
export class FourthChildComponent implements OnInit {
  @Input()  name: string;
  @Output() voted: EventEmitter<boolean>;
  didVote: boolean;

  constructor() {
    this.voted = new EventEmitter<boolean>();
    this.didVote = false;
   }
  
  ngOnInit() {
  }
  //always the child do his own homeworks and return a result to his father
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
