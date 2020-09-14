"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.isMenuCollapsedSource = new rxjs_1.BehaviorSubject(true);
        this.isMenuCollapsed = this.isMenuCollapsedSource.asObservable();
        this.urlPathSource = new rxjs_1.BehaviorSubject("/");
        this.urlPath = this.urlPathSource.asObservable();
        this.loginSource = new rxjs_1.BehaviorSubject(false);
        this.loginUser = this.loginSource.asObservable();
        this.jwtocenSource = new rxjs_1.BehaviorSubject('');
        this.jwtocen = this.jwtocenSource.asObservable();
        // private urlSource = new BehaviorSubject('default message');
        // currenUrl = this.urlSource.asObservable();
        this.baseLink = "http://10.10.1.108:8080/api/v1";
        this.baseLink2 = "http://10.10.1.108:8080";
        this.ApiUrl = {
            login: this.baseLink + "/authenticate",
            item_types: this.baseLink2 + "/item_types",
            companies: this.baseLink2 + "/companies",
            products: this.baseLink2 + "/products"
        };
    }
    ApiService.prototype.setIsMenuCollapsedSource = function (value) {
        this.isMenuCollapsedSource.next(value);
    };
    ApiService.prototype.setUrlPathSource = function (value) {
        this.urlPathSource.next(value);
    };
    ApiService.prototype.getUrlPathSource = function () {
        return this.urlPathSource.getValue();
    };
    ApiService.prototype.setLoginStatus = function (login) {
        this.loginSource.next(login);
    };
    ApiService.prototype.getLoginSatus = function () {
        return this.loginSource.getValue();
    };
    ApiService.prototype.setStorageJwtocen = function (value) {
        localStorage.setItem('jwt', value);
        this.setJwtocken(value);
        // this.jwtocenSource.next(value);
        // this.loginSource.next(true);
        this.setLoginStatus(true);
    };
    ApiService.prototype.setJwtocken = function (value) {
        this.jwtocenSource.next(value);
    };
    ApiService.prototype.logoutApi2 = function () {
        localStorage.removeItem("jwt");
        this.loginSource.next(false);
    };
    ApiService.prototype.loginApi2 = function (username, password) {
        // const body = { username: username, password: password };
        var user = this.setUser(username, password);
        var options = this.createRequestOptions();
        var headers = { 'Content-Type': 'application/json' };
        return this.http.post(this.ApiUrl.login, user, { headers: options });
    };
    ApiService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    };
    ApiService.prototype.getCompanies = function () {
        var tocen = localStorage.getItem('jwt');
        if (tocen === null) {
            tocen = this.jwtocenSource.getValue();
        }
        var headers = { 'Authorization': 'Bearer ' + tocen, 'Content-Type': 'application/json' };
        return this.http.get(this.ApiUrl.companies, { headers: headers });
    };
    ApiService.prototype.getApi = function (url) {
        if (url === void 0) { url = this.ApiUrl.companies; }
        var tocen = localStorage.getItem('jwt');
        if (tocen === null) {
            tocen = this.jwtocenSource.getValue();
        }
        var headers = { 'Authorization': 'Bearer ' + tocen, 'Content-Type': 'application/json' };
        return this.http.get(url, { headers: headers });
    };
    ApiService.prototype.setUser = function (username, password) {
        return this.user = {
            username: username,
            password: password
        };
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
