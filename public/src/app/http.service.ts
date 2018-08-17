import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayersFromServer() {
    return this._http.get("/getPlayers");
  }
  
  addPlayerInServer(player) {
    return this._http.post("/newPlayer", player);
  }

  updatePlayerInServer(playerId, gameId, status) {
    var url = "/updatePlayer/" + playerId + "/game/" + gameId;
    return this._http.put(url, status);
  }

  deletePlayerFromServer(id) {
    return this._http.delete("/deletePlayer/" + id);
  }


}
