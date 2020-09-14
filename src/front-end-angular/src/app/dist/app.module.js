"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var about_component_1 = require("./pages/about/about.component");
var page_not_found_component_1 = require("./pages/error/page-not-found/page-not-found.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var footer_component_1 = require("./segments/footer/footer.component");
var nav_bar_component_1 = require("./segments/nav-bar/nav-bar.component");
var redirect_to_login_component_1 = require("./segments/redirect/redirect-to-login/redirect-to-login.component");
var companies_component_1 = require("./pages/company/companies/companies.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var api_service_1 = require("./services/api.service");
var products_component_1 = require("./pages/product/products/products.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                page_not_found_component_1.PageNotFoundComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                footer_component_1.FooterComponent,
                nav_bar_component_1.NavBarComponent,
                redirect_to_login_component_1.RedirectToLoginComponent,
                companies_component_1.CompaniesComponent,
                products_component_1.ProductsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule
            ],
            providers: [
                platform_browser_1.Title,
                api_service_1.ApiService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
