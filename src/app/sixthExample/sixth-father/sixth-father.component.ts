import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SixthChildComponent } from '../sixth-child/sixth-child.component';

@Component({
  selector: 'app-sixth-father',
  templateUrl: './sixth-father.component.html',
  styleUrls: ['./sixth-father.component.scss']
})
export class SixthFatherComponent implements OnInit, AfterViewInit {



  constructor() { }

  @ViewChild(SixthChildComponent)
  private sixthChildComponent: SixthChildComponent;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.sixthChildComponent.seconds, 0);
  }

  seconds() { return 0; }


  start() { this.sixthChildComponent.start(); }
  stop() { this.sixthChildComponent.stop(); }

}
