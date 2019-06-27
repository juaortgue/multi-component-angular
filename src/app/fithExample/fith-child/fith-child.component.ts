import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fith-child',
  templateUrl: './fith-child.component.html',
  styleUrls: ['./fith-child.component.scss']
})
export class FithChildComponent implements OnInit, OnDestroy {
  intervalId;
  message;
  seconds;
  constructor() { }

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() {
    this.seconds = 11;
    this.intervalId = 0;
    this.message = ''
    this.start();
  }
  
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }


}
