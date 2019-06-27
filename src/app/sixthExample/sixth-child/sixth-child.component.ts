import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-child',
  templateUrl: './sixth-child.component.html',
  styleUrls: ['./sixth-child.component.scss']
})
export class SixthChildComponent implements OnInit {

  constructor() { }

  intervalId;
  message;
  seconds;

  ngOnInit() {
    this.seconds = 11;
    this.intervalId = 0;
    this.message = ''
    this.start();

  }

  ngOnDestroy() { this.clearTimer(); }
  clearTimer() { clearInterval(this.intervalId); }



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
