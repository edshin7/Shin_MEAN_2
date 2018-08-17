(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players-list/players-list.component */ "./src/app/players-list/players-list.component.ts");
/* harmony import */ var _players_add_players_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players-add/players-add.component */ "./src/app/players-add/players-add.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _status_game1_status_game1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-game1/status-game1.component */ "./src/app/status-game1/status-game1.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "players", component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"], children: [
            { path: "list", component: _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_3__["PlayersListComponent"] },
            { path: "add", component: _players_add_players_add_component__WEBPACK_IMPORTED_MODULE_4__["PlayersAddComponent"] }
        ] },
    { path: "status", component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"], children: [
            { path: "game/:id", component: _status_game1_status_game1_component__WEBPACK_IMPORTED_MODULE_6__["StatusGame1Component"] }
        ] },
    { path: '', pathMatch: 'full', redirectTo: '/players/list' },
    { path: '**', component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>\n    Team Manager\n  </h1>\n  <h3><a [routerLink]=\"['/players']\">Manage Players</a> | <a [routerLink]=\"['/status']\">Manage Player Status</a></h3>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./players-list/players-list.component */ "./src/app/players-list/players-list.component.ts");
/* harmony import */ var _players_add_players_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players-add/players-add.component */ "./src/app/players-add/players-add.component.ts");
/* harmony import */ var _status_game1_status_game1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status-game1/status-game1.component */ "./src/app/status-game1/status-game1.component.ts");
/* harmony import */ var _status_game2_status_game2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./status-game2/status-game2.component */ "./src/app/status-game2/status-game2.component.ts");
/* harmony import */ var _status_game3_status_game3_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./status-game3/status-game3.component */ "./src/app/status-game3/status-game3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _players_players_component__WEBPACK_IMPORTED_MODULE_7__["PlayersComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                _players_list_players_list_component__WEBPACK_IMPORTED_MODULE_9__["PlayersListComponent"],
                _players_add_players_add_component__WEBPACK_IMPORTED_MODULE_10__["PlayersAddComponent"],
                _status_game1_status_game1_component__WEBPACK_IMPORTED_MODULE_11__["StatusGame1Component"],
                _status_game2_status_game2_component__WEBPACK_IMPORTED_MODULE_12__["StatusGame2Component"],
                _status_game3_status_game3_component__WEBPACK_IMPORTED_MODULE_13__["StatusGame3Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPlayersFromServer = function () {
        return this._http.get("/getPlayers");
    };
    HttpService.prototype.addPlayerInServer = function (player) {
        return this._http.post("/newPlayer", player);
    };
    HttpService.prototype.updatePlayerInServer = function (playerId, gameId, status) {
        var url = "/updatePlayer/" + playerId + "/game/" + gameId;
        return this._http.put(url, status);
    };
    HttpService.prototype.deletePlayerFromServer = function (id) {
        return this._http.delete("/deletePlayer/" + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/players-add/players-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/players-add/players-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players-add/players-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/players-add/players-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5> Add Player</h5>\n\n<form (submit)=\"submitPlayer()\">\n  <p>Player name: <input (keyup)=\"validate()\" type=\"text\" name=\"name\" [(ngModel)]=\"player.name\"></p>\n  <p *ngFor=\"let error of errors\" style=\"color:red\">{{error.message}}</p>\n  <p>Preferred Position (optional): <input type=\"text\" name=\"pref_pos\" [(ngModel)]=\"player.pref_pos\"></p>\n  <button *ngIf=\"hasErrors == false\" type=\"submit\">Add Player</button>\n  <button *ngIf=\"hasErrors == true\" type=\"submit\" disabled>Add Player</button>\n</form>\n"

/***/ }),

/***/ "./src/app/players-add/players-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/players-add/players-add.component.ts ***!
  \******************************************************/
/*! exports provided: PlayersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersAddComponent", function() { return PlayersAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersAddComponent = /** @class */ (function () {
    function PlayersAddComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.player = {};
        this.errors = [];
        this.hasErrors = true;
        this.checkErrors = {};
    }
    PlayersAddComponent.prototype.ngOnInit = function () {
        this.player = { name: "", pref_pos: "None" };
        this.errors = [];
        this.checkErrors = { hasErrors: true, errors: [] };
    };
    PlayersAddComponent.prototype.validate = function () {
        this.errors = [];
        this.hasErrors = true;
        if (this.player["name"].trim().length < 2) {
            this.errors.push({
                error: "name",
                message: "Name must be 2+ letters long"
            });
        }
        else {
            this.hasErrors = false;
        }
    };
    PlayersAddComponent.prototype.submitPlayer = function () {
        var _this = this;
        var observable = this._httpService.addPlayerInServer(this.player);
        observable.subscribe(function (data) {
            _this.checkErrors = data;
            if (!_this.checkErrors.hasErrors) {
                _this._router.navigate(["/players/list"]);
            }
            _this.errors = _this.checkErrors.errors;
            _this.player = { name: "", pref_pos: "None" };
        });
    };
    PlayersAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players-add',
            template: __webpack_require__(/*! ./players-add.component.html */ "./src/app/players-add/players-add.component.html"),
            styles: [__webpack_require__(/*! ./players-add.component.css */ "./src/app/players-add/players-add.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayersAddComponent);
    return PlayersAddComponent;
}());



/***/ }),

/***/ "./src/app/players-list/players-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/players-list/players-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players-list/players-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/players-list/players-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n        <th>Player Name</th>\n        <th>Preferred Position</th>\n        <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.name}}</td>\n      <td>{{player.pref_pos}}</td>\n      <td><button (click)=\"deletePlayer(player._id, player.name)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/players-list/players-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/players-list/players-list.component.ts ***!
  \********************************************************/
/*! exports provided: PlayersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersListComponent", function() { return PlayersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersListComponent = /** @class */ (function () {
    function PlayersListComponent(_httpService) {
        this._httpService = _httpService;
        this.players = [];
    }
    PlayersListComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    PlayersListComponent.prototype.getPlayers = function () {
        var _this = this;
        var observable = this._httpService.getPlayersFromServer();
        observable.subscribe(function (data) {
            _this.players = data;
        });
    };
    PlayersListComponent.prototype.deletePlayer = function (id, playerName) {
        var _this = this;
        var approved = confirm("Are you sure you want to delete player " + playerName + "?");
        if (approved) {
            var observable = this._httpService.deletePlayerFromServer(id);
            observable.subscribe(function (data) {
                _this.getPlayers();
            });
        }
    };
    PlayersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players-list',
            template: __webpack_require__(/*! ./players-list.component.html */ "./src/app/players-list/players-list.component.html"),
            styles: [__webpack_require__(/*! ./players-list.component.css */ "./src/app/players-list/players-list.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], PlayersListComponent);
    return PlayersListComponent;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4><a [routerLink]=\"['/players','list']\">List</a> | <a [routerLink]=\"['/players','add']\">Add Player</a></h4>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/status-game1/status-game1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/status-game1/status-game1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status-game1/status-game1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/status-game1/status-game1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th>Player Name</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.name}}</td>\n      <td *ngIf=\"curGameId == '1'\">\n        <button (click)=\"updatePlayerStatus(player._id, 'playing')\" [ngStyle]=\"{'background-color': player.status.game1.playing}\">Playing</button>\n        <button (click)=\"updatePlayerStatus(player._id, 'notPlaying')\" [ngStyle]=\"{'background-color': player.status.game1.notPlaying}\">Not Playing</button>\n        <button (click)=\"updatePlayerStatus(player._id, 'undecided')\" [ngStyle]=\"{'background-color': player.status.game1.undecided}\">Undecided</button>\n      </td>\n\n      <td *ngIf=\"curGameId == '2'\">\n        <button (click)=\"updatePlayerStatus(player._id, 'playing')\" [ngStyle]=\"{'background-color': player.status.game2.playing}\">Playing</button>\n        <button (click)=\"updatePlayerStatus(player._id, 'notPlaying')\" [ngStyle]=\"{'background-color': player.status.game2.notPlaying}\">Not Playing</button>\n        <button (click)=\"updatePlayerStatus(player._id, 'undecided')\" [ngStyle]=\"{'background-color': player.status.game2.undecided}\">Undecided</button>\n      </td>\n\n        <td *ngIf=\"curGameId == '3'\">\n          <button (click)=\"updatePlayerStatus(player._id, 'playing')\" [ngStyle]=\"{'background-color': player.status.game3.playing}\">Playing</button>\n          <button (click)=\"updatePlayerStatus(player._id, 'notPlaying')\" [ngStyle]=\"{'background-color': player.status.game3.notPlaying}\">Not Playing</button>\n          <button (click)=\"updatePlayerStatus(player._id, 'undecided')\" [ngStyle]=\"{'background-color': player.status.game3.undecided}\">Undecided</button>\n        </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/status-game1/status-game1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-game1/status-game1.component.ts ***!
  \********************************************************/
/*! exports provided: StatusGame1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusGame1Component", function() { return StatusGame1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatusGame1Component = /** @class */ (function () {
    function StatusGame1Component(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.players = [];
        this.status = {};
        this.curGameId = "";
    }
    StatusGame1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.getPlayers();
        this.status = { playing: "white", notPlaying: "white", undecided: "white" };
        this._route.params.subscribe(function (params) {
            _this.curGameId = params.id;
        });
    };
    StatusGame1Component.prototype.getPlayers = function () {
        var _this = this;
        var observable = this._httpService.getPlayersFromServer();
        observable.subscribe(function (data) {
            _this.players = data;
        });
    };
    StatusGame1Component.prototype.updatePlayerStatus = function (playerId, status) {
        switch (status) {
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
    };
    StatusGame1Component.prototype.updatePlayer = function (playerId, status) {
        var _this = this;
        var observable = this._httpService.updatePlayerInServer(playerId, this.curGameId, status);
        observable.subscribe(function (data) {
            _this.getPlayers();
        });
    };
    StatusGame1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-game1',
            template: __webpack_require__(/*! ./status-game1.component.html */ "./src/app/status-game1/status-game1.component.html"),
            styles: [__webpack_require__(/*! ./status-game1.component.css */ "./src/app/status-game1/status-game1.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StatusGame1Component);
    return StatusGame1Component;
}());



/***/ }),

/***/ "./src/app/status-game2/status-game2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/status-game2/status-game2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status-game2/status-game2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/status-game2/status-game2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  status-game2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/status-game2/status-game2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-game2/status-game2.component.ts ***!
  \********************************************************/
/*! exports provided: StatusGame2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusGame2Component", function() { return StatusGame2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusGame2Component = /** @class */ (function () {
    function StatusGame2Component() {
    }
    StatusGame2Component.prototype.ngOnInit = function () {
    };
    StatusGame2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-game2',
            template: __webpack_require__(/*! ./status-game2.component.html */ "./src/app/status-game2/status-game2.component.html"),
            styles: [__webpack_require__(/*! ./status-game2.component.css */ "./src/app/status-game2/status-game2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusGame2Component);
    return StatusGame2Component;
}());



/***/ }),

/***/ "./src/app/status-game3/status-game3.component.css":
/*!*********************************************************!*\
  !*** ./src/app/status-game3/status-game3.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status-game3/status-game3.component.html":
/*!**********************************************************!*\
  !*** ./src/app/status-game3/status-game3.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  status-game3 works!\n</p>\n"

/***/ }),

/***/ "./src/app/status-game3/status-game3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/status-game3/status-game3.component.ts ***!
  \********************************************************/
/*! exports provided: StatusGame3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusGame3Component", function() { return StatusGame3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusGame3Component = /** @class */ (function () {
    function StatusGame3Component() {
    }
    StatusGame3Component.prototype.ngOnInit = function () {
    };
    StatusGame3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status-game3',
            template: __webpack_require__(/*! ./status-game3.component.html */ "./src/app/status-game3/status-game3.component.html"),
            styles: [__webpack_require__(/*! ./status-game3.component.css */ "./src/app/status-game3/status-game3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusGame3Component);
    return StatusGame3Component;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Player Status - Game {{ curId }}</h3>\n  <a [routerLink]=\"['/status','game', 1]\" (click)=\"changeGameId(1)\">Game 1</a> | \n  <a [routerLink]=\"['/status','game', 2]\" (click)=\"changeGameId(2)\">Game 2</a> | \n  <a [routerLink]=\"['/status','game', 3]\" (click)=\"changeGameId(3)\">Game 3</a><br/>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
        this.curId = "";
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.changeGameId = function (id) {
        this.curId = id;
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edwardshin/Documents/Github/coding_dojo/_week9/day41/Shin_Team_Manager/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map