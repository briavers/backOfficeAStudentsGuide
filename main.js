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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components//back-office/back-office.component */ "./src/app/components/back-office/back-office.component.ts");
/* harmony import */ var _components_back_office_rooms_back_office_rooms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/back-office-rooms/back-office-rooms.component */ "./src/app/components/back-office-rooms/back-office-rooms.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'create-news', component: _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_5__["BackOfficeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], },
    { path: 'rooms', component: _components_back_office_rooms_back_office_rooms_component__WEBPACK_IMPORTED_MODULE_6__["BackOfficeRoomsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], },
    { path: 'profile', component: _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'backoffice-aQRReader';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/time.pipe */ "./src/app/pipes/time.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/back-office/back-office.component */ "./src/app/components/back-office/back-office.component.ts");
/* harmony import */ var _partials_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partials/navbar/navbar.component */ "./src/app/partials/navbar/navbar.component.ts");
/* harmony import */ var _components_back_office_rooms_back_office_rooms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/back-office-rooms/back-office-rooms.component */ "./src/app/components/back-office-rooms/back-office-rooms.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "./src/app/pipes/reverse.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var firebaseAuth = {
    apiKey: "AIzaSyAffOFfFFr1jyCjss8kd_MlWX5uce_uH_M",
    authDomain: "wot-studentguide.firebaseapp.com",
    databaseURL: "https://wot-studentguide.firebaseio.com",
    projectId: "wot-studentguide",
    storageBucket: "wot-studentguide.appspot.com",
    messagingSenderId: "999157797346"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_8__["TimePipe"],
                _components_back_office_back_office_component__WEBPACK_IMPORTED_MODULE_11__["BackOfficeComponent"],
                _partials_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_back_office_rooms_back_office_rooms_component__WEBPACK_IMPORTED_MODULE_13__["BackOfficeRoomsComponent"],
                _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_14__["UpdateProfileComponent"],
                _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_16__["ReversePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(firebaseAuth),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.canActivateThis = false;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) {
            if (authState) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
            return !authState;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/back-office-rooms/back-office-rooms.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/back-office-rooms/back-office-rooms.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n  \n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Leslokalen</h1>\n    </div>\n  </div>\n\n\n\n\n\n<form [formGroup]=\"createRoomForm\">\n  <div class=\"form-group\">\n    <label> Kies een lokaal</label>\n    <select class=\"custom-select\" formControlName=\"Room\">\n      <option value=\"a12\">A-12</option>\n      <option value=\"a13\">A-13</option>\n      <option value=\"a21\">A-21</option>\n      <option value=\"a22\">A-22</option>\n      <option value=\"a23\">A-23</option>\n      <option value=\"a27\">A-27</option>\n      <option value=\"audi1\">Audi 1</option>\n      <option value=\"audi2\">Audi 2</option>\n      <option value=\"b11\">B-11</option>\n      <option value=\"b12\">B-12</option>\n      <option value=\"b13\">B-13</option>\n      <option value=\"b14\">B-14</option>\n      <option value=\"b21\">B-21</option>\n      <option value=\"b22\">B-22</option>\n      <option value=\"b23\">B-23</option>\n      <option value=\"b24\">B-24</option>\n      <option value=\"c3\">C-3</option>\n      <option value=\"c4\">C-4</option>\n      <option value=\"c5\">C-5</option>\n      <option value=\"c6\">C-6</option>\n      <option value=\"druk\">C-6</option>\n      <option value=\"ps\">FotoStudio</option>\n      <option value=\"VZ\">Vergaderzaal</option>\n      <option value=\"offBlok3\">Offsite blok 3</option>\n    </select>\n  </div>\n</form>\n  \n\n\n\n\n<div class=\"alert alert-secondary alert-dismissible fade show\" role=\"alert\">\n  Gebruik een komma zonder spatie tussen de verschillende zaken, dit zorgt voor een betere mobile ervaring <br/>\n  bv: IOT,2MMP-NMD,De Pauw Phillipe <br/>\n  OF <br/>\n  ZHMK,,De Canck Inge,Neuttiens Tom,Vande Populiere Eva \n<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n</div>\n\n<form [formGroup]=\"EditRoomForm\" *ngIf='classes'>\n \n  <div class=\"row\">  \n    <div class=\"col-2\">  </div>\n  <div class=\"col-2\"> Maandag </div>\n  <div class=\"col-2\"> Dinsdag </div>\n  <div class=\"col-2\"> Woensdag </div>\n  <div class=\"col-2\"> Donderdag </div>\n  <div class=\"col-2\"> Vrijdag </div>\n  \n  </div>\n<div class=\"row\" >\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"a1\" class=\"form-control\"> </div>\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"b1\" class=\"form-control\"> </div>\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"c1\" class=\"form-control\"> </div>\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"d1\" class=\"form-control\"> </div>\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"e1\" class=\"form-control\"> </div>\n    <div class=\"col-2\"> <input type=\"text\" formControlName=\"f1\" class=\"form-control\"> </div>\n  </div>\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a2\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b2\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c2\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d2\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e2\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f2\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a3\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b3\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c3\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d3\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e3\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f3\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a4\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b4\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c4\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d4\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e4\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f4\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a5\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b5\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c5\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d5\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e5\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f5\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a6\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b6\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c6\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d6\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e6\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f6\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a7\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b7\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c7\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d7\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e7\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f7\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"row\">\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"a8\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"b8\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"c8\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"d8\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"e8\" class=\"form-control\"> </div>\n  <div class=\"col-2\"> <input type=\"text\" formControlName=\"f8\" class=\"form-control\"> </div>\n</div>\n\n\n\n<div class=\"form-group\">\n  <label class=\"error\">{{errorMessage}}</label>\n</div>\n<button type=\"submit\" (click)=\"tryPost(EditRoomForm.value)\" class=\"btn btn-default\">Update Leslokaal</button>\n</form>\n\n\n\n\n\n<div class=\"row mt-2\" *ngFor=\"let news of classes | async\">\n  <p>{{news}}</p>\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/back-office-rooms/back-office-rooms.component.sass":
/*!*******************************************************************************!*\
  !*** ./src/app/components/back-office-rooms/back-office-rooms.component.sass ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFjay1vZmZpY2Utcm9vbXMvYmFjay1vZmZpY2Utcm9vbXMuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/back-office-rooms/back-office-rooms.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/back-office-rooms/back-office-rooms.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BackOfficeRoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeRoomsComponent", function() { return BackOfficeRoomsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BackOfficeRoomsComponent = /** @class */ (function () {
    function BackOfficeRoomsComponent(authService, router, fb, newsListService, afAuth) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.newsListService = newsListService;
        this.afAuth = afAuth;
        this.errorMessage = '';
        this.createForm();
    }
    BackOfficeRoomsComponent.prototype.createForm = function () {
        this.createRoomForm = this.fb.group({
            Room: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    BackOfficeRoomsComponent.prototype.tryPost = function (value) {
        console.log(value);
        this.newsListService.updateRoom(value, this.theClass);
        // this.router.navigate(['/'])
    };
    BackOfficeRoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log(this.newsFeed)
        this.createRoomForm.valueChanges.subscribe(function (val) {
            console.log('this is classes b4 anything happens');
            _this.theClass = val.Room;
            // console.log(val)
            // console.log(this.classes)
            var that = _this;
            _this.EditRoomForm = undefined;
            _this.classes = _this.newsListService.getRoomList(val.Room).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
                return changes.forEach(function (element) {
                    //console.log(element.key);
                    _this.classes[element.key] = element.payload.val();
                    //console.log('this.classes[element.key]')
                    //console.log(this.classes.a1)
                    //console.log(this.classes)
                    _this.EditRoomForm = _this.fb.group({
                        a1: _this.classes.a1,
                        a2: _this.classes.a2,
                        a3: _this.classes.a3,
                        a4: _this.classes.a4,
                        a5: _this.classes.a5,
                        a6: _this.classes.a6,
                        a7: _this.classes.a7,
                        a8: _this.classes.a8,
                        b1: _this.classes.b1,
                        b2: _this.classes.b2,
                        b3: _this.classes.b3,
                        b4: _this.classes.b4,
                        b5: _this.classes.b5,
                        b6: _this.classes.b6,
                        b7: _this.classes.b7,
                        b8: _this.classes.b8,
                        c1: _this.classes.c1,
                        c2: _this.classes.c2,
                        c3: _this.classes.c3,
                        c4: _this.classes.c4,
                        c5: _this.classes.c5,
                        c6: _this.classes.c6,
                        c7: _this.classes.c7,
                        c8: _this.classes.c8,
                        d1: _this.classes.d1,
                        d2: _this.classes.d2,
                        d3: _this.classes.d3,
                        d4: _this.classes.d4,
                        d5: _this.classes.d5,
                        d6: _this.classes.d6,
                        d7: _this.classes.d7,
                        d8: _this.classes.d8,
                        e1: _this.classes.e1,
                        e2: _this.classes.e2,
                        e3: _this.classes.e3,
                        e4: _this.classes.e4,
                        e5: _this.classes.e5,
                        e6: _this.classes.e6,
                        e7: _this.classes.e7,
                        e8: _this.classes.e8,
                        f1: _this.classes.f1,
                        f2: _this.classes.f2,
                        f3: _this.classes.f3,
                        f4: _this.classes.f4,
                        f5: _this.classes.f5,
                        f6: _this.classes.f6,
                        f7: _this.classes.f7,
                        f8: _this.classes.f8,
                    });
                });
            }));
            if (_this.EditRoomForm == undefined) {
                _this.EditRoomForm = _this.fb.group({
                    a1: '8:45 - 9:45',
                    a2: '9:45 - 10:45',
                    a3: '11:00 - 12:00',
                    a4: '12:00 - 13:00',
                    a5: '13:00 - 14:00',
                    a6: '14:00 - 15:00',
                    a7: '15:00 - 16:00',
                    a8: '16:00 - 17:00',
                    b1: '',
                    b2: '',
                    b3: '',
                    b4: '',
                    b5: '',
                    b6: '',
                    b7: '',
                    b8: '',
                    c1: '',
                    c2: '',
                    c3: '',
                    c4: '',
                    c5: '',
                    c6: '',
                    c7: '',
                    c8: '',
                    d1: '',
                    d2: '',
                    d3: '',
                    d4: '',
                    d5: '',
                    d6: '',
                    d7: '',
                    d8: '',
                    e1: '',
                    e2: '',
                    e3: '',
                    e4: '',
                    e5: '',
                    e6: '',
                    e7: '',
                    e8: '',
                    f1: '',
                    f2: '',
                    f3: '',
                    f4: '',
                    f5: '',
                    f6: '',
                    f7: '',
                    f8: '',
                });
            }
        });
    };
    BackOfficeRoomsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-office-rooms',
            template: __webpack_require__(/*! ./back-office-rooms.component.html */ "./src/app/components/back-office-rooms/back-office-rooms.component.html"),
            styles: [__webpack_require__(/*! ./back-office-rooms.component.sass */ "./src/app/components/back-office-rooms/back-office-rooms.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], BackOfficeRoomsComponent);
    return BackOfficeRoomsComponent;
}());



/***/ }),

/***/ "./src/app/components/back-office/back-office.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/back-office/back-office.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col-12\"><h1>Create a news item</h1></div>\n    <div class=\"col-12\">\n\n<form [formGroup]=\"createNewsForm\">\n        <div class=\"form-group\">\n          <label>Tittel</label>\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\">\n        </div>\n        \n        <div class=\"form-group\">\n          <label>Body</label>\n          <textarea type=\"text\" formControlName=\"body\" class=\"form-control\"> </textarea>\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"file\">Image:</label>\n          <input type=\"file\" formControlName=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\" class=\"form-control\"/>\n        </div>\n\n\n        <div class=\"form-group\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n<button type=\"submit\" (click)=\"tryPost()\" class=\"btn btn-default\">Maak Nieuws Item</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/back-office/back-office.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/back-office/back-office.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFjay1vZmZpY2UvYmFjay1vZmZpY2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/back-office/back-office.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/back-office/back-office.component.ts ***!
  \*****************************************************************/
/*! exports provided: BackOfficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackOfficeComponent", function() { return BackOfficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BackOfficeComponent = /** @class */ (function () {
    function BackOfficeComponent(authService, router, fb, newsListService, afAuth, loginService, afStorage) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.newsListService = newsListService;
        this.afAuth = afAuth;
        this.loginService = loginService;
        this.afStorage = afStorage;
        this.errorMessage = '';
        this.createForm();
    }
    BackOfficeComponent.prototype.createForm = function () {
        this.createNewsForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            file: null,
            author: this.loginService.getMe().displayName
        });
    };
    BackOfficeComponent.prototype.upload = function (event) {
        console.log(event);
        this.createNewsForm.patchValue({
            file: event.target.files[0]
        });
    };
    BackOfficeComponent.prototype.tryPost = function () {
        var _this = this;
        if (this.createNewsForm.value.file) {
            var file = this.createNewsForm.value.file;
            var filePath = "images/news/" + new Date().getTime() + "_" + file.name;
            var fileRef_1 = this.afStorage.ref(filePath);
            var task = this.afStorage.upload(filePath, file);
            // observe percentage changes
            this.uploadPercent = task.percentageChanges();
            // get notified when the download URL is available
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                fileRef_1.getDownloadURL().subscribe(function (url) {
                    console.log(url); // <-- do what ever you want with the url..
                    _this.newsItem = {
                        title: _this.createNewsForm.value.title,
                        body: _this.createNewsForm.value.body,
                        date: Date.now().toString(),
                        image: url,
                        author: _this.createNewsForm.value.author
                    };
                    _this.newsListService.addNews(_this.newsItem);
                    _this.router.navigate(['/']);
                });
            }))
                .subscribe();
        }
        else {
            console.log('we  DO NOT got a file');
            this.newsItem = {
                title: this.createNewsForm.value.title,
                body: this.createNewsForm.value.body,
                date: Date.now().toString(),
                author: this.createNewsForm.value.author
            };
            this.newsListService.addNews(this.newsItem);
            this.router.navigate(['/']);
        }
        /*
            if (this.downloadURL){
              this.newsItem = {
                title: this.createNewsForm.value.title,
                body: this.createNewsForm.value.body,
                date: Date.now().toString(),
                image: this.downloadURL,
                author: this.createNewsForm.value.author
              };
          
          
              this.newsListService.addNews(this.newsItem);
              this.router.navigate(['/'])
            }
             */
    };
    BackOfficeComponent.prototype.ngOnInit = function () {
        //console.log(this.newsFeed)
        console.log(this.authService.getMe());
    };
    BackOfficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-back-office',
            template: __webpack_require__(/*! ./back-office.component.html */ "./src/app/components/back-office/back-office.component.html"),
            styles: [__webpack_require__(/*! ./back-office.component.sass */ "./src/app/components/back-office/back-office.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], BackOfficeComponent);
    return BackOfficeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\" *ngIf=\"newsFeed\">\n  <div class=\"card flex-row flex-wrap mt-2\" *ngFor=\"let news of newsFeed | async | reverse\">\n    \n    <div class=\"card-header border-0 col-3\" *ngIf=\"news.image\">\n      <img src={{news.image}} alt=\"foto vaan het nieuws\" style=\"width:100%;\" >\n    </div>\n    \n    <div class=\"card-block px-2 col-9\" *ngIf=\"news.image\">\n      <h4 class=\"card-title\">{{news.title}}</h4>\n      <p class=\"card-text\">{{news.body}}</p>\n    </div>\n    \n    <div class=\"card-block px-2 col-12\" *ngIf=\"!news.image\">\n      <h4 class=\"card-title\">{{news.title}}</h4>\n      <p class=\"card-text\">{{news.body}}</p>\n    </div>\n\n\n\n    \n    <div class=\"w-100\"></div>\n    \n    <div class=\"card-footer w-100 text-muted\">\n      {{news.date | time }} by {{news.author}}\n    </div>\n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(newsListService, authService) {
        this.newsListService = newsListService;
        this.authService = authService;
        this.newsFeed = this.newsListService.getNewsList()
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        console.log('done Constuctor');
        console.log(this.newsFeed);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //console.log(this.newsFeed)
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/components/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">Login with Firebase or Social Providers</h1>\n<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            console.log('logged in');
            _this.router.navigate(['/create-news']);
        }, function (err) {
            console.log(err);
            console.log("err try login");
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/components/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Update Profile</h1>\n    </div>\n    <div class=\"col-12\">\n\n<form [formGroup]=\"updateProfileForm\">\n        <div class=\"form-group\">\n          <label>Display Name</label>\n          <input type=\"text\" formControlName=\"displayName\" class=\"form-control\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryPost()\" class=\"btn btn-default\">Update Display Name</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(authService, router, fb, newsListService, afAuth, loginService) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.newsListService = newsListService;
        this.afAuth = afAuth;
        this.loginService = loginService;
        this.errorMessage = '';
        this.createForm();
    }
    UpdateProfileComponent.prototype.createForm = function () {
        this.updateProfileForm = this.fb.group({
            displayName: [this.loginService.getMe().displayName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    UpdateProfileComponent.prototype.tryPost = function () {
        this.userItem = {
            displayName: this.updateProfileForm.value.displayName,
        };
        this.loginService.updateName(this.userItem).catch(function (err) { return console.error(err); });
        this.router.navigate(['/create-news']);
    };
    UpdateProfileComponent.prototype.ngOnInit = function () {
        //console.log(this.newsFeed)
        console.log(this.authService.getMe());
    };
    UpdateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/components/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.sass */ "./src/app/components/update-profile/update-profile.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/partials/navbar/navbar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/navbar/navbar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"/\">A Student Guide</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" href=\"/\">Home</a>\n<a class=\"nav-item nav-link\" href=\"/login\" *ngIf=\"!loggedIn\">Login</a>\n<a class=\"nav-item nav-link\" href=\"/create-news\" *ngIf=\"loggedIn\">Creëer nieuws</a>\n<a class=\"nav-item nav-link\" href=\"/rooms\" *ngIf=\"loggedIn\">Leslokalen</a>\n<a class=\"nav-item nav-link\" href=\"/profile\" *ngIf=\"loggedIn\">Profile</a>\n<a class=\"nav-item nav-link\" *ngIf=\"loggedIn\" (click)=\"logOut()\">logout</a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/partials/navbar/navbar.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/partials/navbar/navbar.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/partials/navbar/navbar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/navbar/navbar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('navBar  on init');
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                console.log('user is logged in');
                _this.loggedIn = true;
            }
            else {
                console.log('user not logged in');
                _this.loggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.logOut = function () {
        this.authService.doLogout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/partials/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.sass */ "./src/app/partials/navbar/navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/reverse.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/pipes/time.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/time.pipe.ts ***!
  \************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/lib/index.js");
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timeago_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        return timeago_js__WEBPACK_IMPORTED_MODULE_1___default()().format(value);
    };
    TimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'time'
        })
    ], TimePipe);
    return TimePipe;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
        this.newsListRef = this.db.list('news');
        this.roomList = this.db.list('rooms');
    }
    FirebaseService.prototype.getNewsList = function () {
        return this.newsListRef;
    };
    FirebaseService.prototype.getRoomList = function (room) {
        return this.db.list('rooms/' + room);
    };
    FirebaseService.prototype.updateRoom = function (room, number) {
        return this.db.list('rooms/').set(number, room);
    };
    FirebaseService.prototype.getNewsDetail = function (id) {
        return this.db.list('news/' + id);
    };
    FirebaseService.prototype.addNews = function (news) {
        return this.newsListRef.push(news);
    };
    FirebaseService.prototype.updateNews = function (news) {
        return this.newsListRef.update(news.key, news);
    };
    FirebaseService.prototype.removeNews = function (news) {
        return this.newsListRef.remove(news.key);
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    LoginService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    LoginService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    LoginService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                _this.router.navigate(['/login']);
                resolve();
            }
            else {
                reject();
                console.log('NO USER');
            }
        });
    };
    LoginService.prototype.getMe = function () {
        return this.afAuth.auth.currentUser;
    };
    LoginService.prototype.updateName = function (data) {
        console.log(data);
        return this.afAuth.auth.currentUser.updateProfile({
            displayName: data.displayName,
            photoURL: ''
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginService);
    return LoginService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brian\Code\1819-WOT\backoffice-aQRReader\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map