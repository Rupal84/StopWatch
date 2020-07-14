import { Component, OnInit, OnDestroy } from '@angular/core';
import formatDate from 'date-fns/format';
import { TIME_FORMAT } from '../shared/constants';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit, OnDestroy {

  constructor() { }
  time;
  timer: any;
  ngOnInit(): void {
    this.timer = setInterval(()=> {
      this.time = formatDate(Date.now(), TIME_FORMAT);
    },1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
