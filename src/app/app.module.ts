import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { BasicDirective } from './basic.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CockpitComponent,
    GameControlComponent,
    OddComponent,
    BasicDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
