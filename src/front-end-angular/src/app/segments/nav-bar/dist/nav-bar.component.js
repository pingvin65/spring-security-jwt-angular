"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavBarComponent = void 0;
var core_1 = require("@angular/core");
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(titleService, apiService, router) {
        this.titleService = titleService;
        this.apiService = apiService;
        this.router = router;
        this.collapsed = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.isMenuCollapsed.subscribe(function (collapsed) { return _this.collapsed = collapsed; });
    };
    NavBarComponent.prototype.setDocTitle = function (title) {
        // console.log('current title:::::' + this.titleService.getTitle());
        this.titleService.setTitle("spring angular - " + title);
        this.apiService.setUrlPathSource(this.router.url);
    };
    NavBarComponent.prototype.logoutMethod = function () {
        this.apiService.logoutApi2();
    };
    NavBarComponent.prototype.checkLogin = function () {
        return this.apiService.getLoginSatus();
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.scss']
        })
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
