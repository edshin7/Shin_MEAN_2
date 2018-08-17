import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-status-game1',
  templateUrl: './status-game1.component.html',
  styleUrls: ['./status-game1.component.css']
})
export class StatusGame1Component implements OnInit {
  players: any = [];
  status: any = {};
  curGameId: String = "";

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getPlayers();
    this.status = { playing: "white", notPlaying: "white", undecided: "white" };
    this._route.params.subscribe((params: Params) => {
      this.curGameId = params.id;
    });
  }

  getPlayers() {
    let observable = this._httpService.getPlayersFromServer();
    observable.subscribe(data => {
      this.players = data;
    })
  }

  updatePlayerStatus(playerId, status) {
    switch(status){
      case "playing":
        this.status = { playing: "green", notPlaying: "white", undecided: "white" };
        break;

      case "notPlaying":
        this.status = { playing: "white", notPlaying: "red", undecided: "white" };
        break;

      case "undecided":
        this.status = { playing: "white", notPlaying: "white", undecided: "yellow" };
        break;

      default:
        break;
    }

    this.updatePlayer(playerId, this.status);
  }

  updatePlayer(playerId, status) {
    let observable = this._httpService.updatePlayerInServer(playerId, this.curGameId, status);
    observable.subscribe(data => {
      this.getPlayers();
    });
  }

}
