import {MAX_VALUE_SECONDS} from '../shared/constants';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'StopWatchPipe'
  })
export class StopWatchPipe {
    transform(val: number) {
        const s = Math.min(Math.floor(val), MAX_VALUE_SECONDS);
        const ss = String(s % 60).padStart(2, '0');
        if (s >= 3600) {
            const mm = String(Math.floor(s / 60 % 60)).padStart(2, '0');
            const hh = String(Math.floor(s / 60 / 60));
            return `${hh}:${mm}:${ss}`;
        } else {
            const mm = String(Math.floor(s / 60 % 60));
            return `${mm}:${ss}`;
        }
    }
}