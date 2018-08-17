import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  curId: String = "";

  constructor() { }

  ngOnInit() {
  }

  changeGameId(id) {
    this.curId = id;
  }

}
