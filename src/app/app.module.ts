import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { StopWatchPipe } from './stop-watch/StopWatchPipe';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    StopWatchComponent,
    StopWatchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
