import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersAddComponent } from './players-add/players-add.component';
import { StatusGame1Component } from './status-game1/status-game1.component';
import { StatusGame2Component } from './status-game2/status-game2.component';
import { StatusGame3Component } from './status-game3/status-game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StatusComponent,
    PlayersListComponent,
    PlayersAddComponent,
    StatusGame1Component,
    StatusGame2Component,
    StatusGame3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
