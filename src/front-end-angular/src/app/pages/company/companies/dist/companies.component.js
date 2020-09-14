"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CompaniesComponent = void 0;
var core_1 = require("@angular/core");
var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(apiService, modalService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.brend = "Brend";
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getData();
        this.comSingle = {
            company_name: "",
            description: ""
        };
    };
    CompaniesComponent.prototype.getData = function () {
        var _this = this;
        this.apiService.getApi().subscribe(function (data) {
            _this.page = data.page;
            _this.companies = data._embedded.companies;
            console.log(data._embedded.companies);
        });
    };
    CompaniesComponent.prototype.checkLogin = function () {
        return this.apiService.getLoginSatus();
    };
    CompaniesComponent.prototype.linkButtonClickCompany = function (link) {
        var newLink = link.replace('{?projection}', '');
        console.log(newLink);
    };
    CompaniesComponent.prototype.linkButtonClickModels = function (link) {
        var newLink;
        if (link.search('{?projection}=') === -1) {
            newLink = link.replace('{?projection}', '');
        }
        else {
            newLink = link;
        }
        console.log(newLink);
    };
    CompaniesComponent.prototype.openVerticallyCenteredCompany = function (content, link) {
        var _this = this;
        var newLink = link.replace('{?projection}', '');
        console.log(newLink);
        this.apiService.getApi(newLink + "?projection=company_view").subscribe(function (data) {
            console.log(data);
            _this.comSingle = data;
        });
        this.modalService.open(content, { centered: true });
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'app-companies',
            templateUrl: './companies.component.html',
            styleUrls: ['./companies.component.scss']
        })
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
