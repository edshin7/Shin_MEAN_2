import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-players-add',
  templateUrl: './players-add.component.html',
  styleUrls: ['./players-add.component.css']
})
export class PlayersAddComponent implements OnInit {
  player: any = {};
  errors: any = [];
  hasErrors: boolean = true;
  checkErrors: any = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.player = {name: "", pref_pos: "None"};
    this.errors = [];
    this.checkErrors = {hasErrors: true, errors: []}
  }

  validate() {
    this.errors = [];
    this.hasErrors = true;

    if(this.player["name"].trim().length < 2) {
      this.errors.push({
        error: "name",
        message: "Name must be 2+ letters long"
      })
    }
    else {
      this.hasErrors = false;
    }
  }

  submitPlayer() {
    let observable = this._httpService.addPlayerInServer(this.player);
    observable.subscribe(data => {
      this.checkErrors = data;

      if(!this.checkErrors.hasErrors) {
        this._router.navigate(["/players/list"]);
      }

      this.errors = this.checkErrors.errors;
      this.player = {name: "", pref_pos: "None"};
    })
  }

}
