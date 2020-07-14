import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent implements OnInit, OnDestroy {

  constructor() { }
  timer;
  startStop: string = this.timer ? 'Stop' : 'Start';
  stopWatch: number = new Date().setTime(0);
  ngOnInit(): void {
  }
  ngOnDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

  onClickStartStop() {
    if(this.timer) {
      this.startStop = 'Start';
      clearInterval(this.timer);
      this.timer = null;
    } else {
      this.timer = setInterval(()=>{
        this.stopWatch++;
      }, 1000);
      this.startStop = 'Stop'; 
    }
  }

  onReset() {
    this.stopWatch = new Date().setTime(0);
    this.startStop = 'Start';
    clearInterval(this.timer);
    this.timer = null;    
  }
}
