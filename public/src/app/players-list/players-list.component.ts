import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  players: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    let observable = this._httpService.getPlayersFromServer();
    observable.subscribe(data => {
      this.players = data;
    })
  }

  deletePlayer(id, playerName) {
    var approved = confirm("Are you sure you want to delete player " + playerName + "?");

    if(approved) {
      let observable = this._httpService.deletePlayerFromServer(id);
      observable.subscribe(data => {
        this.getPlayers();
      });
    }
  }

}
