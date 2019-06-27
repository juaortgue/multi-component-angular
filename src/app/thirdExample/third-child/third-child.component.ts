import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent implements OnInit {

  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  //get all changes as string array
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

    let log: string[] = [];
    //looping changes
    for (let propName in changes) {
      let changedProp = changes[propName];
      //convert string to object json
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
