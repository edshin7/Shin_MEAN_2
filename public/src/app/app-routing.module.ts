import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayersAddComponent } from './players-add/players-add.component';
import { StatusComponent } from './status/status.component';
import { StatusGame1Component } from './status-game1/status-game1.component';



const routes: Routes = [
  { path: "players", component: PlayersComponent, children: [
    { path: "list", component: PlayersListComponent },
    { path: "add", component: PlayersAddComponent }
  ]},
  {path: "status", component: StatusComponent, children: [
    { path: "game/:id", component: StatusGame1Component }
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/players/list' },
  { path: '**', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
