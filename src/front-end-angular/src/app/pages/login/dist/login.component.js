"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, fb, router, location) {
        this.apiService = apiService;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.datajwt = {};
        this.value = '';
        this.submitted = false;
        this.ifLoginError = false;
        this.tocken = "";
        this.loginForm = this.fb.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.update = function (value) { this.value = value; };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.goBack = function () {
        this.location.back();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.ifLoginError = false;
        if (this.loginForm.invalid) {
            return;
        }
        this.apiService.loginApi2(this.loginForm.value.userName, this.loginForm.value.password).subscribe(function (res) {
            _this.tocken = res.jws;
            _this.apiService.setStorageJwtocen(res.jwt);
            _this.apiService.urlPath.subscribe(function (url) { return console.log(url); });
            if (_this.apiService.getUrlPathSource() === "/brands") {
                var nexpage = _this.apiService.getUrlPathSource();
                _this.apiService.setUrlPathSource('/');
                _this.apiService.setIsMenuCollapsedSource(true);
                _this.router.navigateByUrl(nexpage);
            }
            else {
                _this.apiService.setUrlPathSource('/');
                _this.apiService.setIsMenuCollapsedSource(true);
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            _this.ifLoginError = true;
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
