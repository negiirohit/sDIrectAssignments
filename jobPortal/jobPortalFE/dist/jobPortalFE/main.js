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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_job_seeker_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/job-seeker/login/login.component */ "./src/app/job-seeker/login/login.component.ts");
/* harmony import */ var src_app_job_seeker_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/job-seeker/registration/registration.component */ "./src/app/job-seeker/registration/registration.component.ts");
/* harmony import */ var src_app_job_seeker_job_seeker_profile_job_seeker_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/job-seeker/job-seeker-profile/job-seeker-profile.component */ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.ts");
/* harmony import */ var src_app_job_provider_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/job-provider/registration/registration.component */ "./src/app/job-provider/registration/registration.component.ts");
/* harmony import */ var src_app_job_provider_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/job-provider/company-profile/company-profile.component */ "./src/app/job-provider/company-profile/company-profile.component.ts");
/* harmony import */ var src_app_job_provider_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/job-provider/create-job/create-job.component */ "./src/app/job-provider/create-job/create-job.component.ts");
/* harmony import */ var src_app_job_provider_login_provider_login_provider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/job-provider/login-provider/login-provider.component */ "./src/app/job-provider/login-provider/login-provider.component.ts");
/* harmony import */ var src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_job_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var src_app_company_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var src_app_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/job-detail/job-detail.component */ "./src/app/job-detail/job-detail.component.ts");
/* harmony import */ var src_app_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/company-detail/company-detail.component */ "./src/app/company-detail/company-detail.component.ts");
/* harmony import */ var src_app_job_seeker_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/job-seeker/create-profile/create-profile.component */ "./src/app/job-seeker/create-profile/create-profile.component.ts");
/* harmony import */ var src_app_job_provider_company_job_detail_company_job_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/job-provider/company-job-detail/company-job-detail.component */ "./src/app/job-provider/company-job-detail/company-job-detail.component.ts");

















var routes = [
    {
        path: 'login',
        component: src_app_job_seeker_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: src_app_job_seeker_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    },
    {
        path: 'seeker/seekerProfile',
        component: src_app_job_seeker_job_seeker_profile_job_seeker_profile_component__WEBPACK_IMPORTED_MODULE_5__["JobSeekerProfileComponent"]
    },
    {
        path: 'createSeekerProfile',
        component: src_app_job_seeker_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_15__["CreateProfileComponent"]
    },
    {
        path: 'company/regiser',
        component: src_app_job_provider_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["JPRegistrationComponent"]
    },
    {
        path: 'company/profile',
        component: src_app_job_provider_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_7__["CompanyProfileComponent"]
    },
    {
        path: 'company/createJob',
        component: src_app_job_provider_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_8__["CreateJobComponent"]
    },
    {
        path: 'company/login',
        component: src_app_job_provider_login_provider_login_provider_component__WEBPACK_IMPORTED_MODULE_9__["LoginProviderComponent"]
    },
    {
        path: 'company/jobDetails',
        component: src_app_job_provider_company_job_detail_company_job_detail_component__WEBPACK_IMPORTED_MODULE_16__["CompanyJobDetailComponent"]
    },
    {
        path: 'dashboard',
        component: src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
    }, {
        path: '',
        component: src_app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
    }, {
        path: 'jobs',
        component: src_app_job_job_component__WEBPACK_IMPORTED_MODULE_11__["JobComponent"]
    }, {
        path: 'companies',
        component: src_app_company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"]
    }, {
        path: 'jobDetail',
        component: src_app_job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_13__["JobDetailComponent"]
    }, {
        path: 'companyDetail',
        component: src_app_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_14__["CompanyDetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jobPortalFE';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _job_seeker_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./job-seeker/registration/registration.component */ "./src/app/job-seeker/registration/registration.component.ts");
/* harmony import */ var src_app_job_provider_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/job-provider/registration/registration.component */ "./src/app/job-provider/registration/registration.component.ts");
/* harmony import */ var _job_seeker_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-seeker/login/login.component */ "./src/app/job-seeker/login/login.component.ts");
/* harmony import */ var _job_seeker_job_seeker_profile_job_seeker_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job-seeker/job-seeker-profile/job-seeker-profile.component */ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.ts");
/* harmony import */ var _job_provider_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job-provider/create-job/create-job.component */ "./src/app/job-provider/create-job/create-job.component.ts");
/* harmony import */ var _job_provider_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./job-provider/company-profile/company-profile.component */ "./src/app/job-provider/company-profile/company-profile.component.ts");
/* harmony import */ var _job_provider_login_provider_login_provider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job-provider/login-provider/login-provider.component */ "./src/app/job-provider/login-provider/login-provider.component.ts");
/* harmony import */ var src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./job-detail/job-detail.component */ "./src/app/job-detail/job-detail.component.ts");
/* harmony import */ var _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./company-detail/company-detail.component */ "./src/app/company-detail/company-detail.component.ts");
/* harmony import */ var _job_seeker_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./job-seeker/create-profile/create-profile.component */ "./src/app/job-seeker/create-profile/create-profile.component.ts");
/* harmony import */ var _job_provider_company_job_detail_company_job_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./job-provider/company-job-detail/company-job-detail.component */ "./src/app/job-provider/company-job-detail/company-job-detail.component.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _seeker_detail_seeker_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./seeker-detail/seeker-detail.component */ "./src/app/seeker-detail/seeker-detail.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _job_seeker_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"],
                _job_seeker_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _job_seeker_job_seeker_profile_job_seeker_profile_component__WEBPACK_IMPORTED_MODULE_11__["JobSeekerProfileComponent"],
                src_app_job_provider_registration_registration_component__WEBPACK_IMPORTED_MODULE_9__["JPRegistrationComponent"],
                _job_provider_create_job_create_job_component__WEBPACK_IMPORTED_MODULE_12__["CreateJobComponent"],
                _job_provider_company_profile_company_profile_component__WEBPACK_IMPORTED_MODULE_13__["CompanyProfileComponent"],
                _job_provider_login_provider_login_provider_component__WEBPACK_IMPORTED_MODULE_14__["LoginProviderComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_19__["CompanyComponent"],
                _job_job_component__WEBPACK_IMPORTED_MODULE_20__["JobComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_22__["JobDetailComponent"],
                _company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_23__["CompanyDetailComponent"],
                _job_seeker_create_profile_create_profile_component__WEBPACK_IMPORTED_MODULE_24__["CreateProfileComponent"],
                _job_provider_company_job_detail_company_job_detail_component__WEBPACK_IMPORTED_MODULE_25__["CompanyJobDetailComponent"],
                _seeker_detail_seeker_detail_component__WEBPACK_IMPORTED_MODULE_27__["SeekerDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [
                src_app_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"],
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: src_app_services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptorService"],
                    multi: true
                },
                src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_26__["ChatService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company-detail/company-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/company-detail/company-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktZGV0YWlsL2NvbXBhbnktZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company-detail/company-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/company-detail/company-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"padding:50px 100px 100px 100px\">\n        <div class=\"row\">\n                        <div class=\"col-sm-6\" style=\"border-right:3px solid rgb(144, 137, 137)\" >\n                                <h1> Company Detail </h1>\n                                <div style=\"padding-left:50px;\">\n                                        <h1><strong> {{company.company_title}} </strong> </h1>\n                                        <h2> Location : {{company.location}}</h2>\n                                        <h4> Type : {{company.company_type}} </h4> \n                                        <h4> Domain: {{company.domain}} </h4>\n                                        <h4> Size : {{company.size}} </h4>\n                                        <h4> Website : {{company.website}} </h4>         \n                                </div>\n                        </div>\n                             \n                       <div class=\"col-sm-6\" style=\"padding-left:100px\">\n                            <h1> Jobs By Company </h1>\n                            <div *ngFor = \"let job of company.jobs\" style=\"padding-left:50px; padding-bottom:15px;\">\n                                <h1> {{job.post}} </h1>\n                                <h4> {{job.location}} </h4>\n                                <h4> {{job.domain}} </h4>\n                                <button (click)=\"viewJob(job._id)\"> View Details </button>\n                            </div> \n                       </div>\n                       \n                \n        </div>\n                \n\n     \n</div>"

/***/ }),

/***/ "./src/app/company-detail/company-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/company-detail/company-detail.component.ts ***!
  \************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");





var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(route, companyService, router) {
        this.route = route;
        this.companyService = companyService;
        this.router = router;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.getParams();
    };
    CompanyDetailComponent.prototype.getParams = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var company_id = params.company_id;
            console.log("company_id" + company_id);
            _this.getCompanyDetail(company_id);
        });
    };
    CompanyDetailComponent.prototype.getCompanyDetail = function (company_id) {
        var _this = this;
        this.companyService.getCompanyDetail(company_id)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Job Details fetched succesfuly");
                console.log("companiy res " + JSON.stringify(res));
                _this.company = res.data;
                console.log(_this.company);
            }
            else {
                console.log("error occured ");
                console.log(JSON.stringify(res));
            }
        });
    };
    CompanyDetailComponent.prototype.viewJob = function (job_id) {
        console.log(job_id);
        this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });
    };
    CompanyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-detail',
            template: __webpack_require__(/*! ./company-detail.component.html */ "./src/app/company-detail/company-detail.component.html"),
            styles: [__webpack_require__(/*! ./company-detail.component.css */ "./src/app/company-detail/company-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"companies\">\n        \n\n       <h3 class=\"text-center\" *ngIf=\"title\"> {{title}}  </h3>\n       <div class=\"container\" style=\"margin:50px\" >\n\n\n            <div class=\"container\">\n                    <div class=\"card\" style=\"width:200px;  float:left; padding:30px;  margin:10px;  border: 2px solid rgb(160, 172, 172);  border-radius: 12px;\" *ngFor=\"let company of companies\">\n                        <div class=\"card-body\">\n                          <h3 class=\"card-title\">{{company.company_title}}</h3>\n                          <h4 class=\"card-subtitle mb-2 text-muted\">Type : {{company.company_type}}</h4>\n                          <h5>Size: {{company.size}} Employee</h5>\n                          <p class=\"card-text\"> {{company.description}} </p>\n                          <a class=\"card-link\"> {{company.website}} </a>\n                        <br><br>\n                          <button class=\"btn btn-primary stretched-link\" (click)=\"view(company._id)\">View Company</button>\n                        </div>\n                    </div>\n            </div>\n\n\n\n       <div class=\"text-right\">\n         <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"float-right pagination\" >\n           <li [ngClass]=\"{disabled:pager.currentPage == 1}\">\n               <a (click)=\"setPage(1)\">First</a>\n           </li>\n           <li [ngClass]=\"{disabled:pager.currentPage == 1}\">\n               <a (click)=\"setPage(pager.currentPage - 1)\">&laquo;</a>\n           </li>\n           <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n               <a (click)=\"setPage(page)\">{{page}}</a>\n           </li>\n           <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n               <a (click)=\"setPage(pager.currentPage + 1)\">&raquo;</a>\n           </li>\n           <li [ngClass]=\"{disabled:pager.currentPage == pager.totalPages}\">\n               <a (click)=\"setPage(pager.totalPages)\">Last</a>\n           </li>\n         </ul>\n       </div>\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(companyService, pagerService, route, router) {
        this.companyService = companyService;
        this.pagerService = pagerService;
        this.route = route;
        this.router = router;
        // pager object
        this.pager = {};
        // paged items
        this.page_limit = 10;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.field = params.field;
            _this.value = params.value;
            if (_this.field != 'all')
                _this.title = 'Comapnies By ' + _this.field + ' in ' + _this.value;
            else
                _this.title = 'Showing All Comapnies';
            _this.setPage(1);
        });
    };
    CompanyComponent.prototype.setPage = function (page) {
        var _this = this;
        this.companyService.getCompanies(this.field, this.value, page, this.page_limit)
            .subscribe(function (res) {
            if (res.data.companies.length > 0) {
                _this.companies = res.data.companies;
                _this.company_count = res.data.count;
                _this.pager = _this.pagerService.getPager(_this.company_count, page, _this.page_limit);
            }
        });
    };
    CompanyComponent.prototype.view = function (company_id) {
        console.log('Company Id: ' + company_id);
        this.router.navigate(['/companyDetail'], { queryParams: { company_id: company_id } });
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], _services_pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container {\n  /* background-image: url(\"\"); */\n    background-color: #cccccc;\n    height: 500px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: relative;\n  }\n  \n  .img-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    color: white;\n    font-size: 4rem\n  }\n  \n  .input-box{\n    height:50px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0lBQzdCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIlwiKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5pbWctdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNHJlbVxuICB9XG5cbiAgLmlucHV0LWJveHtcbiAgICBoZWlnaHQ6NTBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='img-container'> \n    <div class='img-text'>\n\n            <div class=\"row\">\n                    Find the perfect Job For You\n            </div>\n            <div class=\"row text-center\" style=\"padding:20px;\">\n\n                <form class=\"navbar-form navbar-left\" >\n                        <div class=\"input-group input-box\">\n                          <input type=\"text\" class=\"form-control input-box\"  placeholder=\"Search\" [(ngModel)]='search' name=\"search\" id=\"search\">\n                          <div class=\"input-group-btn\">\n                            <button (click)=\"searchJobs()\" class=\"btn btn-default input-box\" type=\"submit\">\n                              <i class=\"glyphicon glyphicon-search\"></i>\n                            </button>\n                          </div>\n                        </div>\n                </form> \n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.searchJobs = function () {
        console.log(this.search);
        this.router.navigate(['/jobs'], { queryParams: { field: 'search', value: this.search } });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small cyan darken-3\">\n  \n      <!-- Footer Elements -->\n      <div class=\"container\">\n  \n        <!-- Grid row-->\n        <div class=\"row\">\n  \n          <!-- Grid column -->\n          <div class=\"col-md-12 py-5\">\n            <div class=\"mb-5 flex-center\">\n  \n              <!-- Facebook -->\n              <a class=\"fb-ic\">\n                <i class=\"fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n              </a>\n              <!-- Twitter -->\n              <a class=\"tw-ic\">\n                <i class=\"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n              </a>\n              <!-- Google +-->\n              <a class=\"gplus-ic\">\n                <i class=\"fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n              </a>\n              <!--Linkedin -->\n              <a class=\"li-ic\">\n                <i class=\"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n              </a>\n              <!--Instagram-->\n              <a class=\"ins-ic\">\n                <i class=\"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x\"> </i>\n              </a>\n              <!--Pinterest-->\n              <a class=\"pin-ic\">\n                <i class=\"fab fa-pinterest fa-lg white-text fa-2x\"> </i>\n              </a>\n            </div>\n          </div>\n          <!-- Grid column -->\n  \n        </div>\n        <!-- Grid row-->\n  \n      </div>\n      <!-- Footer Elements -->\n  \n      <!-- Copyright -->\n      <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n        <a href=\"\">JobPortal.com</a>\n      </div>\n      <!-- Copyright -->\n  \n    </footer>\n    <!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-submenu {\n    position: relative;\n}\n\n.dropdown-submenu>.dropdown-menu {\n    top: 0;\n    left: 100%;\n    margin-top: -6px;\n    margin-left: -1px;\n    border-radius: 0 6px 6px 6px;\n}\n\n.dropdown-submenu:hover>.dropdown-menu {\n    display: block;\n}\n\n.dropdown-submenu>a:after {\n    display: block;\n    content: \" \";\n    float: right;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 5px 0 5px 5px;\n    border-left-color: rgb(22, 17, 17);\n    margin-top: 5px;\n    margin-right: -10px;\n}\n\n.dropdown-submenu:hover>a:after {\n    border-left-color: rgb(22, 17, 17);\n}\n\n.dropdown-submenu.pull-left {\n    float: none;\n}\n\n.dropdown-submenu.pull-left>.dropdown-menu {\n    left: -100%;\n    margin-left: 10px;\n    border-radius: 6px 0 6px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBR2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUdqQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tc3VibWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tc3VibWVudT4uZHJvcGRvd24tbWVudSB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCA2cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDZweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDZweDtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXI+LmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tc3VibWVudT5hOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDVweCAwIDVweCA1cHg7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyMiwgMTcsIDE3KTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnU6aG92ZXI+YTphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyMiwgMTcsIDE3KTtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUucHVsbC1sZWZ0IHtcbiAgICBmbG9hdDogbm9uZTtcbn1cblxuLmRyb3Bkb3duLXN1Ym1lbnUucHVsbC1sZWZ0Pi5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHggMCA2cHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDZweCA2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default  navbar-inverse\" role=\"navigation\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/dashboard\" routerLinkActive=\"active\">jobPortal</a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>   \n\n\n            <form class=\"navbar-form navbar-left\" >\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\"  placeholder=\"Search\" [(ngModel)]='search' name=\"search\" id=\"search\">\n              <div class=\"input-group-btn\">\n                <button (click)=\"searchJobs()\" class=\"btn btn-default\" type=\"submit\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n                </button>\n              </div>\n            </div>\n            </form> \n        \n        \n        \n        \n        </li>\n          <li><a  *ngIf=\"authService.checkUserType()=='Company'\" routerLink=\"company/profile\"><span class=\"glyphicon glyphicon-user\"></span> Comapny Profile  </a></li>   \n          <li><a  *ngIf=\"authService.checkUserType()=='JobSeeker'\" routerLink=\"seeker/seekerProfile\"><span class=\"glyphicon glyphicon-user\"></span> User Profile </a></li>             \n          <li><a routerLink=\"register\" *ngIf=\"!authService.loggedIn()\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n          <li><a routerLink=\"login\"  *ngIf=\"!authService.loggedIn()\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n          <li><a (click)=\"authService.logOutUser()\"  *ngIf=\"authService.loggedIn()\"><span class=\"glyphicon glyphicon-log-in\"></span> Log Out</a></li>\n        </ul>\n\n\n          <ul class=\"nav navbar-nav\">\n              <li>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Jobs <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu multi-level\">\n                      <li><a routerLink=\"/jobs\" [queryParams]=\"{'field':'all',value:'all'}\">All Jobs</a></li>\n                      <li class=\"dropdown-submenu\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Jobs By Location</a>\n                            <ul class=\"dropdown-menu\" *ngIf=\"jobFields\">\n                              <li *ngFor=\"let location of jobFields.location\">\n                                <a routerLink=\"/jobs\" [queryParams]=\"{'field':'location',value:location  }\" >{{location}}</a></li>\n                            </ul> \n                      </li>\n                      <li class=\"dropdown-submenu\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Jobs By Domain</a>\n                            <ul class=\"dropdown-menu\" *ngIf=\"jobFields\">\n                              <li *ngFor=\"let domain of jobFields.domain\">\n                                <a  routerLink=\"/jobs\" [queryParams]=\"{'field':'domain',value:domain  }\" >{{domain}}</a></li>\n                            </ul> \n                      </li>\n                  </ul>\n              </li>\n\n\n              <li>\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Companies <span class=\"caret\"></span></a>\n                  <ul class=\"dropdown-menu multi-level\">\n                      <li><a routerLink=\"/companies\" [queryParams]=\"{'field':'all',value:'all'}\">All Companies</a></li>\n                      <li class=\"dropdown-submenu\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Companies By Location</a>\n                            <ul class=\"dropdown-menu\" *ngIf=\"companyFields\">\n                              <li *ngFor=\"let location of companyFields.location\">\n                                <a routerLink=\"/companies\" [queryParams]=\"{'field':'location',value:location  }\">{{location}}</a>\n                              </li>\n                            </ul> \n                      </li>\n                      <li class=\"dropdown-submenu\">\n                          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Companies By Domain</a>\n                            <ul class=\"dropdown-menu\" *ngIf=\"companyFields\">\n                              <li *ngFor=\"let domain of companyFields.domain\">\n                                <a  routerLink=\"/companies\" [queryParams]=\"{'field':'domain',value:domain  }\">{{domain}}</a>\n                              </li>\n                            </ul> \n                      </li>\n                  </ul>\n              </li>\n          </ul>\n      </div><!--/.nav-collapse -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, jobService, companyService, authService) {
        this.router = router;
        this.jobService = jobService;
        this.companyService = companyService;
        this.authService = authService;
        this.jobFields = {};
        this.companyFields = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getDistinctField('location');
        this.getDistinctField('domain');
    };
    HeaderComponent.prototype.getDistinctField = function (field) {
        var _this = this;
        this.jobService.getDistinct(field)
            .subscribe(function (res) {
            //     console.log(res.data);
            _this.jobFields[field] = res.data;
            console.log('job details: ' + JSON.stringify(_this.jobFields));
        });
        this.companyService.getDistinct(field)
            .subscribe(function (res) {
            console.log(res);
            _this.companyFields[field] = res.data;
            console.log('company details: ' + JSON.stringify(_this.companyFields));
        });
    };
    HeaderComponent.prototype.searchJobs = function () {
        console.log(this.search);
        this.router.navigate(['/jobs'], { queryParams: { field: 'search', value: this.search } });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/job-detail/job-detail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content */\n  \n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 30%;\n  }\n  \n  /* The Close Button */\n  \n  .close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iLWRldGFpbC9qb2ItZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0VBRUEsa0JBQWtCOztFQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7O0VBRUEscUJBQXFCOztFQUNyQjtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9qb2ItZGV0YWlsL2pvYi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuICBcbiAgLyogTW9kYWwgQ29udGVudCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbiAgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2xvc2U6aG92ZXIsXG4gIC5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/job-detail/job-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"job\" class=\"co    ntainer\" style=\"margin:5vw 25vw 5vw; \">\n                  <h1 > Job Descrption </h1>\n\n                  <div class=\"card\" style=\"font-size:2rem\">\n                        <div class=\"card-body\">\n                          <h2 class=\"card-title\"><strong>{{job.post}}</strong> </h2> \n                          <h2 class=\"card-subtitle\"><strong>Domain:  {{job.domain}}  </strong> </h2> \n                          <p class=\"card-text\"> Location : {{job.location}} </p>\n                          <p class=\"card-text\">Salary: {{job.salary}}</p>\n                          <a routerLink=\"/companyDetail\" [queryParams]=\"{ company_id: job.provider._id}\"> <strong> Company : {{job.provider.company_title}} </strong> </a>\n                          <p>Required Skills <strong>Required Skills: {{job.requiredSkills}} </strong> </p>          \n                          <p>Location {{job.location}} </p>             \n                          <p>Description: {{job.description}} </p>\n                          <button class=\"btn btn-primary \" (click)=\"apply()\"> Apply For Job </button>      \n                        </div>\n                  </div>\n</div>\n\n\n\n\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n    \n      <!-- Modal content -->\n      <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closeModel()\">&times;</span>\n        <h3> For Apply You must login or signup </h3>\n        <h4 class=\"text-center\">\n             <button (click)=\"register()\"> Sign Up</button><br>\n             <button (click)=\"login()\"> Login</button>     \n          </h4>\n          </div>\n    \n    </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/job-detail/job-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/job-detail/job-detail.component.ts ***!
  \****************************************************/
/*! exports provided: JobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function() { return JobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");





var JobDetailComponent = /** @class */ (function () {
    function JobDetailComponent(route, jobService, router) {
        this.route = route;
        this.jobService = jobService;
        this.router = router;
        this.applyFlag = true;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.getParams();
    };
    JobDetailComponent.prototype.getParams = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var job_id = params.job_id;
            console.log("job _id" + job_id);
            _this.getJobDetail(job_id);
        });
    };
    JobDetailComponent.prototype.getJobDetail = function (job_id) {
        var _this = this;
        this.jobService.getJobDetail(job_id)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Job Details fetched succesfuly");
                _this.job = res.data;
                console.log(_this.job);
            }
            else {
                console.log("error occured ");
                console.log(JSON.stringify(res));
            }
        });
    };
    JobDetailComponent.prototype.getApplyFlag = function () {
        return !!this.applyFlag;
    };
    JobDetailComponent.prototype.apply = function () {
        if (localStorage.getItem('userType') == 'JobSeeker') {
            this.jobService.applyForJob(this.job._id)
                .subscribe(function (res) {
                if (res.success) {
                    console.log('Job applied succesfully ');
                    //  this.router.navigate() navigate User Profile
                }
                else {
                    console.log(JSON.stringify(res));
                }
            });
        }
        else {
            this.openModel();
            //window.alert("you must login first");
            //  let url = this.router.url;
            //  console.log("Please login first");
            //  console.log(url);
            //  localStorage.setItem('refURL',url);
            //  this.router.navigate(['/login']);    
        }
    };
    JobDetailComponent.prototype.openModel = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    };
    JobDetailComponent.prototype.closeModel = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    JobDetailComponent.prototype.register = function () {
        var url = this.router.url;
        console.log("Please login first");
        console.log(url);
        localStorage.setItem('refURL', url);
        this.router.navigate(['/register']);
    };
    JobDetailComponent.prototype.login = function () {
        var url = this.router.url;
        console.log("Please login first");
        console.log(url);
        localStorage.setItem('refURL', url);
        this.router.navigate(['/login']);
    };
    JobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-detail',
            template: __webpack_require__(/*! ./job-detail.component.html */ "./src/app/job-detail/job-detail.component.html"),
            styles: [__webpack_require__(/*! ./job-detail.component.css */ "./src/app/job-detail/job-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobDetailComponent);
    return JobDetailComponent;
}());



/***/ }),

/***/ "./src/app/job-provider/company-job-detail/company-job-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/job-provider/company-job-detail/company-job-detail.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1wcm92aWRlci9jb21wYW55LWpvYi1kZXRhaWwvY29tcGFueS1qb2ItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job-provider/company-job-detail/company-job-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/job-provider/company-job-detail/company-job-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n   <div *ngIf=\"job\">\n        <div  class=\"row align-items-center\" > \n                <div class=\" card\" style=\"font-size:2rem; padding:50px\">\n                        <div class=\"card-body\">\n                          <h2 class=\"card-title\"><strong>Post: {{job.post}}</strong> </h2> \n                          <h2 class=\"card-subtitle\"><strong>Domain:  {{job.domain}}  </strong> </h2> \n                          <p class=\"card-text\"> Location : {{job.location}} </p>\n                          <p class=\"card-text\">Salary: {{job.salary}}</p>\n                          <p>Required Skills <strong>Required Skills: {{job.requiredSkills}} </strong> </p>          \n                          <p>Location {{job.location}} </p>             \n                          <p>Description: {{job.description}} </p>\n                        </div>\n                </div>\n        </div>\n\n\n\n\n        <div *ngIf=\"job.applicants\">\n           <div class=\"row\" style=\"border: solid 1px rgb(224, 243, 117)\"> \n                <h1 class=\"text-center\"> Applicants </h1>                                \n                <div class=\"col-sm-4\" *ngFor=\"let user of job.applicants\" style=\"border: solid 1px rgb(24, 24, 23)\">\n                    <div>\n                        <h3> {{user.firstName}} {{user.lastName}} </h3>\n                        <h3> {{user.age}} </h3>\n                        <h3> {{user.profile.keySkills}} </h3>\n                    </div>\n\n                    <div >\n\n                        <h1> Profile </h1>\n                        <h3> {{user.profile.keySkills}} </h3>\n                        <div> \n                                <h1>  Educational Details  </h1>\n                                <div> HighSchool : {{user.profile.qualifications.HighSchool.year }} {{user.profile.qualifications.HighSchool.board }}\n                                        {{user.profile.qualifications.HighSchool.percentage }} {{user.profile.qualifications.HighSchool.subjects }}\n                                </div>\n                                <div> InterMediate : {{user.profile.qualifications.InterMediate.year }} {{user.profile.qualifications.InterMediate.board }}\n                                    {{user.profile.qualifications.InterMediate.percentage }} {{user.profile.qualifications.InterMediate.subjects }}\n                                </div>\n                                <div> Graduation : {{user.profile.qualifications.Graduation.year }} {{user.profile.qualifications.Graduation.university }}\n                                        {{user.profile.qualifications.Graduation.percentage }} {{user.profile.qualifications.Graduation.course }}\n                                </div>\n                                <div> Post Graduation : {{user.profile.qualifications.PG.year }} {{user.profile.qualifications.PG.university }}\n                                        {{user.profile.qualifications.PG.percentage }} {{user.profile.qualifications.PG.course }}\n                                </div>\n                        \n                        </div>\n                \n                \n                   </div>\n                      <button (click)=\"approveUser(user._id)\"> Approve User </button>\n                      <button (click)=\"declineUser(user._id)\"> Decline User </button>\n                        \n                </div>\n          </div>\n\n        </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/job-provider/company-job-detail/company-job-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/job-provider/company-job-detail/company-job-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CompanyJobDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyJobDetailComponent", function() { return CompanyJobDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompanyJobDetailComponent = /** @class */ (function () {
    function CompanyJobDetailComponent(jobService, route) {
        this.jobService = jobService;
        this.route = route;
    }
    CompanyJobDetailComponent.prototype.ngOnInit = function () {
        console.log();
        this.getParams();
    };
    CompanyJobDetailComponent.prototype.getParams = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            var job_id = params.job_id;
            _this.getJobDetails(job_id);
        });
    };
    CompanyJobDetailComponent.prototype.getJobDetails = function (job_id) {
        var _this = this;
        this.jobService.getJobDetail(job_id)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Job Details fetched succesfuly");
                _this.job = res.data;
                // console.log(this.job);
            }
            console.log(JSON.stringify(res));
        });
    };
    CompanyJobDetailComponent.prototype.approveUser = function (user_id) {
        var _this = this;
        console.log(user_id);
        var details = {
            user_id: user_id,
            job_id: this.job._id
        };
        this.jobService.approveUser(details)
            .subscribe(function (res) {
            if (res.success) {
                console.log("Approved Succesfuly");
                _this.job = res.data;
                console.log(_this.job);
            }
            console.log(JSON.stringify(res));
        });
    };
    CompanyJobDetailComponent.prototype.declineUser = function (user_id) {
        var _this = this;
        console.log(user_id);
        var details = {
            user_id: user_id,
            job_id: this.job._id
        };
        this.jobService.declineUser(details)
            .subscribe(function (res) {
            if (res.success) {
                console.log("User Declined");
                _this.job = res.data;
                console.log(_this.job);
            }
            console.log(JSON.stringify(res));
        });
    };
    CompanyJobDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-job-detail',
            template: __webpack_require__(/*! ./company-job-detail.component.html */ "./src/app/job-provider/company-job-detail/company-job-detail.component.html"),
            styles: [__webpack_require__(/*! ./company-job-detail.component.css */ "./src/app/job-provider/company-job-detail/company-job-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CompanyJobDetailComponent);
    return CompanyJobDetailComponent;
}());



/***/ }),

/***/ "./src/app/job-provider/company-profile/company-profile.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/job-provider/company-profile/company-profile.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1wcm92aWRlci9jb21wYW55LXByb2ZpbGUvY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job-provider/company-profile/company-profile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/job-provider/company-profile/company-profile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"company\">\n        <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4\" style=\"padding:50px 10px 50px 100px; border: 2px solid black; border-radius:15px\">\n                <h1><strong> {{company.company_title}} </strong> </h1>\n                <h2> Location : {{company.location}}</h2>\n                <h4> Type : {{company.company_type}} </h4> \n                <h4> Domain: {{company.domain}} </h4>\n                <h2> {{company.size}} </h2>        \n                <h4> Size : {{company.size}} </h4>\n                <h4> Website : {{company.website}} </h4>         \n    <button class=\"btn btn-primary\" style=\"margin-left:10px;\" routerLink=\"/company/createJob\"> Add Job </button>\n    </div>\n    </div>\n    \n    <div class=\"row\">\n        <div *ngIf=\"company.jobs\"> \n            <h1 class=\"text-center\">  Your Posted Jobs </h1>\n           <div class=\"card col-sm-4\"*ngFor=\"let job of company.jobs\" style=\"width:300px;  float:left; padding:10px;  margin:10px;  border: 2px solid rgb(160, 172, 172);  border-radius: 12px;\">\n              <div class=\"card-body\">\n                <h3 class=\"card-title\">{{job.post}}</h3> \n                <p class=\"card-test\"> Location : {{job.location}} </p>\n                <p class=\"card-text\">{{job.salary}}</p>\n                <button class=\"btn btn-primary\" (click)=\"viewMore(job._id)\"> View Details </button> \n              </div>\n         </div>\n       </div>\n       \n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/job-provider/company-profile/company-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/job-provider/company-profile/company-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileComponent", function() { return CompanyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        console.log('on init called');
        this.getCompanyDetails();
    };
    CompanyProfileComponent.prototype.getCompanyDetails = function () {
        var _this = this;
        this.companyService.getCompanyProfile()
            .subscribe(function (res) {
            if (res.success) {
                console.log(res.data);
                _this.company = res.data;
            }
            else {
                console.log("error occured ");
                console.log(JSON.stringify(res));
            }
        });
    };
    CompanyProfileComponent.prototype.viewMore = function (job_id) {
        console.log(job_id);
        this.router.navigate(['/company/jobDetails'], { queryParams: { job_id: job_id } });
    };
    CompanyProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__(/*! ./company-profile.component.html */ "./src/app/job-provider/company-profile/company-profile.component.html"),
            styles: [__webpack_require__(/*! ./company-profile.component.css */ "./src/app/job-provider/company-profile/company-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());



/***/ }),

/***/ "./src/app/job-provider/create-job/create-job.component.css":
/*!******************************************************************!*\
  !*** ./src/app/job-provider/create-job/create-job.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1wcm92aWRlci9jcmVhdGUtam9iL2NyZWF0ZS1qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job-provider/create-job/create-job.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/job-provider/create-job/create-job.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form  [formGroup]=\"jobForm\">\n        <h2>Create Job</h2>\n        <div class=\"form-group\">\n            \n                <input type=\"text\"  formControlName=\"post\" class=\"form-control\" name=\"post\" placeholder=\"job  title\" required=\"required\">  \n        </div>\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\"  formControlName=\"location\"  name=\"location\" placeholder=\"Location\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n                <input type=\"text\"  formControlName=\"domain\" class=\"form-control\" name=\"domain\" placeholder=\"Job Domain\" >\n           </div>\n       <div class=\"form-group\">\n            <input type=\"text\"  formControlName=\"requiredSkills\" class=\"form-control\" name=\"required skills\" placeholder=\"required skills\" >\n       </div>\n       <div class=\"form-group\">\n            <input type=\"email\"  formControlName=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email\" >\n       </div>\n       <div class=\"form-group\">\n            <input type=\"text\"  formControlName=\"salary\" class=\"form-control\" name=\"salary\" placeholder=\"salary range\" >\n       </div>\n       <div class=\"form-group\">\n            <textarea   formControlName=\"description\" class=\"form-control\" name=\"description\" placeholder=\"Job Description\" > </textarea>\n       </div>\n  \n\n<div class=\"text-center\">\n<button type=\"submit\" class=\"btn btn-success \"  [disabled]=\"!jobForm.valid\" (click)=\"createJob()\">Register Now</button>\n</div>        \n </form>\n</div>"

/***/ }),

/***/ "./src/app/job-provider/create-job/create-job.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/job-provider/create-job/create-job.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateJobComponent", function() { return CreateJobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreateJobComponent = /** @class */ (function () {
    function CreateJobComponent(fb, companyService, router) {
        this.fb = fb;
        this.companyService = companyService;
        this.router = router;
    }
    CreateJobComponent.prototype.ngOnInit = function () {
        this.createJobForm();
    };
    CreateJobComponent.prototype.createJobForm = function () {
        this.jobForm = this.fb.group({
            post: [],
            location: [],
            description: [],
            requiredSkills: [],
            domain: [''],
            email: [''],
            salary: [''],
            experience: []
        });
    };
    CreateJobComponent.prototype.createJob = function () {
        var _this = this;
        var job = this.jobForm.value;
        console.log(job);
        this.companyService.createJob(job)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                console.log(res.data);
                _this.router.navigate(['/company/profile']);
            }
            else {
                console.log("error occured ");
                console.log(JSON.stringify(res));
            }
        });
    };
    CreateJobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-job',
            template: __webpack_require__(/*! ./create-job.component.html */ "./src/app/job-provider/create-job/create-job.component.html"),
            styles: [__webpack_require__(/*! ./create-job.component.css */ "./src/app/job-provider/create-job/create-job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CreateJobComponent);
    return CreateJobComponent;
}());



/***/ }),

/***/ "./src/app/job-provider/login-provider/login-provider.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/job-provider/login-provider/login-provider.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1wcm92aWRlci9sb2dpbi1wcm92aWRlci9sb2dpbi1wcm92aWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/job-provider/login-provider/login-provider.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/job-provider/login-provider/login-provider.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2> Login </h2>\n    <form class=\"form-horizontal\" [formGroup]=\"userLoginForm\">\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"email\">UIN:</label>\n        <div class=\"col-sm-10\">\n             <input class=\"form-control\" type=\"email\" formControlName=\"UIN\" placeholder=\"Unique identification number\">              \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\n        <div class=\"col-sm-10\">          \n          <input type=\"password\" class=\"form-control\" id=\"pwd\"form-group formControlName=\"password\"  placeholder=\"Enter password\" name=\"pwd\">\n        </div>\n      </div>\n\n      <div class=\"text-center\">        \n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!userLoginForm.valid\" (click)=\"loginUser()\">Submit</button>\n      </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/job-provider/login-provider/login-provider.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/job-provider/login-provider/login-provider.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginProviderComponent", function() { return LoginProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginProviderComponent = /** @class */ (function () {
    function LoginProviderComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    LoginProviderComponent.prototype.ngOnInit = function () {
        this.authService.checkLogin();
        this.createLoginForm();
    };
    LoginProviderComponent.prototype.createLoginForm = function () {
        this.userLoginForm = this.fb.group({
            UIN: [''],
            password: [''],
        });
    };
    LoginProviderComponent.prototype.loginUser = function () {
        var User = this.userLoginForm.value;
        console.log(User);
        this.authService.loginCompany(User);
    };
    LoginProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login-provider.component.html */ "./src/app/job-provider/login-provider/login-provider.component.html"),
            styles: [__webpack_require__(/*! ./login-provider.component.css */ "./src/app/job-provider/login-provider/login-provider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginProviderComponent);
    return LoginProviderComponent;
}());



/***/ }),

/***/ "./src/app/job-provider/registration/registration.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/job-provider/registration/registration.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1wcm92aWRlci9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/job-provider/registration/registration.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/job-provider/registration/registration.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n     <form  [formGroup]=\"registrationForm\">\n                <h2>Register</h2>\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\"><input type=\"text\"  formControlName=\"company_title\" class=\"form-control\" name=\"company_title\" placeholder=\"compamny title\" required=\"required\"></div>\n                        <div class=\"col-xs-6\"><input type=\"text\"  formControlName=\"company_type\"  class=\"form-control\" name=\"company_type\" placeholder=\"company type\" required=\"required\"></div>\n                    </div>      \n                </div>\n                <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6\">   \n                    <input type=\"number\" class=\"form-control\"  formControlName=\"year_founded\"  name=\"year_founded\" placeholder=\"year founded\" required=\"required\">\n                    </div>\n                    <div class=\"col-xs-6\">\n                    <input type=\"size\" class=\"form-control\"  formControlName=\"size\"  name=\"size\" placeholder=\"No. of employee\" >\n                    </div>\n                </div>\n                </div>\n               <div class=\"form-group\">\n                    <input type=\"text\"  formControlName=\"website\" class=\"form-control\" name=\"website\" placeholder=\"URL\">\n               </div>\n               <div class=\"form-group\">\n                    <input type=\"text\"  formControlName=\"domain\" class=\"form-control\" name=\"domain\" placeholder=\"domain\">\n               </div>\n               <div class=\"form-group\">\n                    <textarea   formControlName=\"description\" class=\"form-control\" name=\"description\" placeholder=\"About compnay\" > </textarea>\n               </div>\n               <div class=\"form-group\">\n                    <div class=\"row\">\n                      <div class=\"col-xs-6\"><input type=\"text\"  formControlName=\"UIN\" class=\"form-control\" name=\"Unique Identification Number\" placeholder=\"Unique Identification Number\" required=\"required\"></div>\n                      <div class=\"col-xs-6\"><input type=\"password\"  formControlName=\"password\"  class=\"form-control\" name=\"password\" placeholder=\"password\" required=\"required\"></div>\n                    </div>      \n                </div>\n          \n        \n        <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-success \"  [disabled]=\"!registrationForm.valid\" (click)=\"registerCompany()\">Register Now</button>\n        </div>        \n         </form>\n</div>"

/***/ }),

/***/ "./src/app/job-provider/registration/registration.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/job-provider/registration/registration.component.ts ***!
  \*********************************************************************/
/*! exports provided: JPRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JPRegistrationComponent", function() { return JPRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var JPRegistrationComponent = /** @class */ (function () {
    function JPRegistrationComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    JPRegistrationComponent.prototype.ngOnInit = function () {
        this.authService.checkLogin();
        this.createRegistrationForm();
    };
    JPRegistrationComponent.prototype.createRegistrationForm = function () {
        this.registrationForm = this.fb.group({
            company_title: [''],
            company_type: [''],
            year_founded: [''],
            size: [],
            website: [],
            description: [],
            UIN: [''],
            password: [''],
            domain: ['']
        });
    };
    JPRegistrationComponent.prototype.registerCompany = function () {
        var _this = this;
        var user = this.registrationForm.value;
        console.log(user);
        this.authService.registerCompany(user)
            .subscribe(function (res) {
            if (res.success) {
                console.log('user created');
                console.log(res.data);
                _this.authService.loginCompany(user);
            }
            else {
                console.log("error occured");
                console.log(JSON.stringify(res));
            }
        });
    };
    JPRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/job-provider/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/job-provider/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JPRegistrationComponent);
    return JPRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/job-seeker/create-profile/create-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/job-seeker/create-profile/create-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvY3JlYXRlLXByb2ZpbGUvY3JlYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job-seeker/create-profile/create-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/job-seeker/create-profile/create-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n     <form  [formGroup]=\"profileForm\">\n       <p class=\"hint-text\"> Please Update Your Profile for Better Job Suggestions </p>\n       <div class=\"form-group\">\n           <label for=\"Domain\">Domain</label>\n           <select class=\"form-control\" formControlName=\"domain\" name=\"domain\" id=\"Domain\" >\n             <option *ngFor=\"let domain of domains\">  {{domain}} </option>\n           </select>\n       </div>\n       <div class=\"form-group\">\n           <div formArrayName=\"keySkills\">\n               <h3>Skills</h3>\n               <div *ngFor=\"let skill of keySkills.controls; let i=index\">\n                 <label>\n                   <input type=\"text\" formControlName={{i}} name=i>\n                   <button (click)=\"removeSkill(i)\"> remove </button> \n                 </label>\n               </div>\n               <button (click)=\"addKeySkill()\">Add More</button>\n           </div>   \n       </div>\n \n       <div class=\"form-group\" formGroupName=\"qualifications\">\n           <label for=\"Qualification\">Qualification</label><br>\n           <button class='qualBtn'> HighSchool </button> \n           <div class=\"form-group qualdiv\" formGroupName=\"HighSchool\"   style =\"display: none;\">\n                <label for=\"HighSchool\"></label>\n               <div class=\"row\">\n                 <div class=\"col-xs-4\">\n                     <label for=\"year\">year</label>\n                     <input type=\"number\" class=\"form-control\"  formControlName=\"year\" name=\"year\" >\n                 </div>\n                 <div class=\"col-xs-4\">\n                     <label for=\"board\">Board</label>\n                     <input type=\"text\" class=\"form-control\"  formControlName=\"board\" name=\"board\" >\n                 </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-xs-4\">\n                     <label for=\"subjects\">Subjects</label>\n                     <input type=\"text\" class=\"form-control\"  formControlName=\"subjects\" name=\"subjects\" >\n                 </div>\n                 <div class=\"col-xs-4\">\n                     <label for=\"percentage\">percentage</label>\n                     <input type=\"text\" class=\"form-control\"  formControlName=\"percentage\" name=\"percentage\">\n                 </div>\n               </div>\n           </div>\n           <button class='qualBtn'> InterMediate </button>\n           <div class=\"form-group qualdiv\" formGroupName=\"InterMediate\"  style =\"display: none;\">\n                  <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"year\">year</label>\n                       <input type=\"number\" class=\"form-control\"  formControlName=\"year\" name=\"year\" >\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"board\">Board</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"board\" name=\"board\">\n                   </div>\n                 </div>\n                 <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"subjects\">Subjects</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"subjects\" name=\"subjects\">\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"percentage\">percentage</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"percentage\" name=\"percentage\">\n                   </div>\n                 </div>\n           </div>\n           <button class='qualBtn'> Graduation </button>\n           <div class=\"form-group qualdiv\" formGroupName=\"Graduation\"  style =\"display: none;\">\n               <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"year\">year</label>\n                       <input type=\"number\" class=\"form-control\"  formControlName=\"year\" name=\"year\" >\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"University\">University</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"university\" name=\"university\">\n                   </div>\n                 </div>\n                 <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"course\">course</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"course\" name=\"course\">\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"percentage\">percentage</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"percentage\" name=\"percentage\">\n                   </div>\n                 </div>\n           </div>\n \n           <button class='qualBtn'> Post Graduation </button>\n           <div class=\"form-group qualdiv\" formGroupName=\"PG\"   style =\"display: none;\">\n               <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"year\">year</label>\n                       <input type=\"number\" class=\"form-control\"  formControlName=\"year\" name=\"year\" >\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"University\">University</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"university\" name=\"univeristy\">\n                   </div>\n                 </div>\n                 <div class=\"row\">\n                   <div class=\"col-xs-4\">\n                       <label for=\"course\">course</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"course\" name=\"course\">\n                   </div>\n                   <div class=\"col-xs-4\">\n                       <label for=\"percentage\">percentage</label>\n                       <input type=\"text\" class=\"form-control\"  formControlName=\"percentage\" name=\"percentage\">\n                   </div>\n                 </div>\n           </div>\n \n \n       </div>\n \n       \n \n \n       <button (click)=\"updateUser()\">Update</button>\n     </form>\n </div>\n "

/***/ }),

/***/ "./src/app/job-seeker/create-profile/create-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/job-seeker/create-profile/create-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProfileComponent", function() { return CreateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var src_app_services_seeker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/seeker.service */ "./src/app/services/seeker.service.ts");





var CreateProfileComponent = /** @class */ (function () {
    function CreateProfileComponent(fb, jobService, seekerService) {
        this.fb = fb;
        this.jobService = jobService;
        this.seekerService = seekerService;
        this.domains = ['IT', 'Management', 'Art'];
    }
    CreateProfileComponent.prototype.ngOnInit = function () {
        this.createProfileForm();
        this.addEventListner();
    };
    CreateProfileComponent.prototype.createProfileForm = function () {
        this.profileForm = this.fb.group({
            domain: [''],
            keySkills: this.fb.array([this.fb.control('')]),
            qualifications: this.fb.group({
                HighSchool: this.fb.group({
                    year: [''],
                    board: [''],
                    subjects: [''],
                    percentage: ['']
                }),
                InterMediate: this.fb.group({
                    year: [''],
                    board: [''],
                    subjects: [''],
                    percentage: ['']
                }),
                Graduation: this.fb.group({
                    year: [''],
                    university: [''],
                    percentage: [''],
                    course: ['']
                }),
                PG: this.fb.group({
                    year: [''],
                    university: [''],
                    percentage: [''],
                    course: ['']
                })
            }),
        });
        this.getUser();
    };
    //Get User
    CreateProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.seekerService.getSeekerProfile()
            .subscribe(function (res) {
            console.log("get seeker res: " + JSON.stringify(res));
            if (res.success) {
                _this.user = res.data;
            }
        });
    };
    Object.defineProperty(CreateProfileComponent.prototype, "keySkills", {
        //form Array Manipulation
        get: function () {
            return this.profileForm.get('keySkills');
        },
        enumerable: true,
        configurable: true
    });
    CreateProfileComponent.prototype.addKeySkill = function () {
        this.keySkills.push(this.fb.control(''));
        console.log(this.keySkills);
    };
    CreateProfileComponent.prototype.removeSkill = function (index) {
        this.keySkills.removeAt(index);
    };
    CreateProfileComponent.prototype.addEventListner = function () {
        var buttons = document.querySelectorAll(".qualBtn");
        // Loop through the resulting array
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (e) {
                console.log(e.srcElement.nextElementSibling);
                var ele = e.srcElement.nextElementSibling;
                //     console.log(ele);
                if (ele.style.display == "none") {
                    ele.style.display = "block";
                }
                else {
                    ele.style.display = "none";
                }
            });
        }
    };
    //update user
    CreateProfileComponent.prototype.updateUser = function () {
        var userProfile = this.profileForm.value;
        console.log("updating user");
        console.log(userProfile);
        this.jobService.updateSeekerProfile(userProfile)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                console.log(res.data);
            }
        });
    };
    CreateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-profile',
            template: __webpack_require__(/*! ./create-profile.component.html */ "./src/app/job-seeker/create-profile/create-profile.component.html"),
            styles: [__webpack_require__(/*! ./create-profile.component.css */ "./src/app/job-seeker/create-profile/create-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"],
            src_app_services_seeker_service__WEBPACK_IMPORTED_MODULE_4__["SeekerService"]])
    ], CreateProfileComponent);
    return CreateProfileComponent;
}());



/***/ }),

/***/ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvam9iLXNlZWtlci1wcm9maWxlL2pvYi1zZWVrZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding:50px 100px 100px 100px\">\n        <div  *ngIf=\"user\" style=\"border: 2px solid black; border-radius: 12px; padding:20px;\">\n                <div class=\"row\" style=\"border-right:3px solid rgb(144, 137, 137);  \" >\n                        <div>\n                            <h1> Personal Detail </h1>\n                            <div style=\"padding-left:50px;\">\n                                <h3>Name: {{user.firstName}} {{user.lastName}} </h3>\n                                <h3>email: {{user.email}} </h3>\n                                <h3>age: {{user.age}} </h3>\n                            </div>\n                        </div>\n                        <div>\n\n                    </div>\n                </div>\n                <div class=\"row\">\n                                <h1> Profile </h1>\n                                <div style=\"padding-left:50px;\">\n                                <div> <h3>Skills:  {{user.profile.keySkills}} </h3> </div>\n                                <div> \n                                        <h1>  Educational Details  </h1>\n                                        <h2> HighSchool : {{user.profile.qualifications.HighSchool.year }} {{user.profile.qualifications.HighSchool.board }}\n                                                {{user.profile.qualifications.HighSchool.percentage }} {{user.profile.qualifications.HighSchool.subjects }}\n                                        </h2>\n                                        <h2> InterMediate : {{user.profile.qualifications.InterMediate.year }} {{user.profile.qualifications.InterMediate.board }}\n                                            {{user.profile.qualifications.InterMediate.percentage }} {{user.profile.qualifications.InterMediate.subjects }}\n                                        </h2>\n                                        <h2> Graduation : {{user.profile.qualifications.Graduation.year }} {{user.profile.qualifications.Graduation.university }}\n                                                {{user.profile.qualifications.Graduation.percentage }} {{user.profile.qualifications.Graduation.course }}\n                                        </h2>\n                                        <h2> Post Graduation : {{user.profile.qualifications.PG.year }} {{user.profile.qualifications.PG.university }}\n                                                {{user.profile.qualifications.PG.percentage }} {{user.profile.qualifications.PG.course }}\n                                        </h2>\n                                \n                                </div> \n                                </div>\n                </div>\n       \n\n        </div>    \n        <div class=\"row\" *ngIf=\"user\" style=\"margin-top:50px;\">\n                        <h1 class=\"text-center\"> Your Applied Jobs </h1>\n                        \n                        <div *ngFor = \"let job of user.appliedJobs\">\n\n                                <div class=\"card\" style=\"width:300px;  float:left; padding:10px;  margin:10px;  border: 2px solid rgb(160, 172, 172);  border-radius: 12px;\">\n                                    <div class=\"card-body\">\n                                      <h3 class=\"card-title\">Post: {{job.post}}</h3> \n                                      <h5 class=\"card-subtitle\"><strong> Company: {{job.provider.company_title}} </strong> </h5> \n                                      <p class=\"card-test\"> Location : {{job.location}} </p>\n                                      <p class=\"card-text\">{{job.salary}}</p>\n                                      <button class=\"btn btn-primary stretched-link\" (click)=\"viewJob(job._id)\"> View Details </button> \n                                \n                                    </div>\n                               </div>\n                                \n                        </div>  \n                        \n                             \n        </div>                  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: JobSeekerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerProfileComponent", function() { return JobSeekerProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_seeker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/seeker.service */ "./src/app/services/seeker.service.ts");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var JobSeekerProfileComponent = /** @class */ (function () {
    function JobSeekerProfileComponent(jobService, seekerService, router) {
        this.jobService = jobService;
        this.seekerService = seekerService;
        this.router = router;
    }
    JobSeekerProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    //Get User
    JobSeekerProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.seekerService.getSeekerProfile()
            .subscribe(function (res) {
            //console.log("get seeker res: "+JSON.stringify(res));
            if (res.success) {
                _this.user = res.data;
                console.log(_this.user.appliedJobs);
            }
        });
    };
    JobSeekerProfileComponent.prototype.viewJob = function (job_id) {
        console.log(job_id);
        this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });
    };
    JobSeekerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-seeker-profile',
            template: __webpack_require__(/*! ./job-seeker-profile.component.html */ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.html"),
            styles: [__webpack_require__(/*! ./job-seeker-profile.component.css */ "./src/app/job-seeker/job-seeker-profile/job-seeker-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"],
            src_app_services_seeker_service__WEBPACK_IMPORTED_MODULE_2__["SeekerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JobSeekerProfileComponent);
    return JobSeekerProfileComponent;
}());



/***/ }),

/***/ "./src/app/job-seeker/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/job-seeker/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job-seeker/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/job-seeker/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2> Login </h2>\n    <p>Login as a company <a routerLink=\"/company/login\">login </a> </p> \n    <form class=\"form-horizontal\" [formGroup]=\"userLoginForm\">\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n        <div class=\"col-sm-10\">\n             <input class=\"form-control\" type=\"email\" formControlName=\"email\" placeholder=\"email\">              \n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\n        <div class=\"col-sm-10\">          \n          <input type=\"password\" class=\"form-control\" id=\"pwd\"form-group formControlName=\"password\"  placeholder=\"Enter password\" name=\"pwd\">\n        </div>\n      </div>\n\n      <div class=\"text-center\">        \n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!userLoginForm.valid\" (click)=\"loginUser()\">Submit</button>\n      </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/job-seeker/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/job-seeker/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.checkLogin();
        this.createLoginForm();
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.userLoginForm = this.fb.group({
            email: [''],
            password: [''],
        });
    };
    LoginComponent.prototype.loginUser = function () {
        var User = this.userLoginForm.value;
        console.log(User);
        this.authService.loginSeeker(User);
        //  .subscribe(
        //  res => {
        //  if(res.success)
        // {
        // console.log(JSON.stringify(res));
        // localStorage.setItem('token',res.token);
        // localStorage.setItem('userType','JobSeeker');
        // this.router.navigate(['/seekerProfile']);   
        // }
        // else
        // console.log(JSON.stringify(res));
        // },
        //  err => console.log(err)
        //  )
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/job-seeker/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/job-seeker/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/job-seeker/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/job-seeker/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1zZWVrZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/job-seeker/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/job-seeker/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n      <div class=\"text-center\">Are you a job provider <a routerLink=\"/company/regiser\"> Register your comapny </a></div>\n    <form  [formGroup]=\"jobSeekerRegistrationForm\">\n      <h2>Register</h2>\n      <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n      <div class=\"form-group\">\n        <div class=\"row\">\n          <div class=\"col-xs-6\"><input type=\"text\"  formControlName=\"firstName\" class=\"form-control\" name=\"first_name\" placeholder=\"First Name\" required=\"required\"></div>\n          <div class=\"col-xs-6\"><input type=\"text\"  formControlName=\"lastName\"  class=\"form-control\" name=\"last_name\" placeholder=\"Last Name\" required=\"required\"></div>\n        </div>      \n      </div>\n      <div class=\"form-group\">\n          <input type=\"number\" class=\"form-control\"  formControlName=\"age\"  name=\"age\" placeholder=\"age\">\n        </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\"  formControlName=\"email\"  name=\"email\" placeholder=\"Email\" required=\"required\">\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\"  formControlName=\"password\"  name=\"password\" placeholder=\"Password\" required=\"required\">\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-success \"  [disabled]=\"!jobSeekerRegistrationForm.valid\" (click)=\"registerJobSeeker()\">Register Now</button>\n      </div>\n    </form>\n\n    \n    \n    <div class=\"text-center\">Already have an account? <a routerLink=\"/login\">Sign in</a></div>\n      \n</div>"

/***/ }),

/***/ "./src/app/job-seeker/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/job-seeker/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.authService.checkLogin();
        this.createSeekerRegistrationForm();
    };
    RegistrationComponent.prototype.createSeekerRegistrationForm = function () {
        this.jobSeekerRegistrationForm = this.fb.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            password: [''],
            confirmPassword: [''],
            age: ['']
        });
    };
    RegistrationComponent.prototype.registerJobSeeker = function () {
        var _this = this;
        var user = this.jobSeekerRegistrationForm.value;
        console.log("register user " + JSON.stringify(user));
        this.authService.registerSeeker(user)
            .subscribe(function (res) {
            if (res.success) {
                console.log('job seeker registration succesful');
                console.log(JSON.stringify(res));
                localStorage.setItem('newUser', 'true');
                _this.loginUser(user);
            }
            else
                console.log('job Seeker registration failed');
            console.log(JSON.stringify(res));
        });
    };
    RegistrationComponent.prototype.loginUser = function (user) {
        this.authService.loginSeeker(user);
        // .subscribe(
        //   res => {
        //     if(res.success)
        //      {
        //        console.log('login success');
        //        console.log(JSON.stringify(res));
        //        localStorage.setItem('token',res.token);
        //        localStorage.setItem('userType','JobSeeker');
        //        this.router.navigate(['/seekerProfile']);   
        //      }
        //      else{
        //         console.log('login success');
        //         console.log(JSON.stringify(res));
        //       }
        //    },
        //   err => console.log(err)
        // )
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/job-seeker/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/job-seeker/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job/job.component.html":
/*!****************************************!*\
  !*** ./src/app/job/job.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" *ngIf=\"jobs\">\n         \n             <h3 class=\"text-center\">\n                Find the right Job for you\n              </h3>\n              <h3 class=\"text-center\" *ngIf=\"title\"> {{title}}  </h3>\n        <div class=\"container\" style=\"margin:50px\" >\n                <!-- <div class=\"card\" style=\"width: 25rem; border:1px solid black; float:left; margin:5px\" > -->\n                    <!-- <div class=\"card-body\"> -->\n                      <!-- <h5 class=\"card-title\"></h5> -->\n                      <!-- <h6 class=\"card-subtitle mb-2 text-muted\"></h6> -->\n                      <!-- <p class=\"card-text\">  </p> -->\n                      <!-- <a  class=\"card-link\">  </a> -->\n                                          <!--  -->\n                    <!-- </div> -->\n                  <!-- </div> -->\n        <div class=\"container row\">\n                <div class=\"card col-sm-4\" style=\"  padding:10px;  margin:10px;  border: 2px solid rgb(160, 172, 172);  border-radius: 12px;\" *ngFor=\"let job of jobs\">\n                     <div class=\"card-body\">\n                       <h3 class=\"card-title\">{{job.post}}</h3> \n                       <h5 class=\"card-subtitle\"><strong> Company: {{job.provider.company_title}} </strong> </h5> \n                       <p class=\"card-test\"> Location : {{job.location}} </p>\n                       <p class=\"card-text\">{{job.salary}}</p>\n                       <button class=\"btn btn-primary stretched-link\" (click)=\"apply(job._id)\"> View Details </button> \n                     </div>\n                </div>\n                  \n        </div>\n\n\n        <div class=\"text-right\">\n          <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"float-right pagination\" >\n            <li [ngClass]=\"{disabled:pager.currentPage == 1}\">\n                <a (click)=\"setPage(1)\">First</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage == 1}\">\n                <a (click)=\"setPage(pager.currentPage - 1)\">&laquo;</a>\n            </li>\n            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                <a (click)=\"setPage(page)\">{{page}}</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                <a (click)=\"setPage(pager.currentPage + 1)\">&raquo;</a>\n            </li>\n            <li [ngClass]=\"{disabled:pager.currentPage == pager.totalPages}\">\n                <a (click)=\"setPage(pager.totalPages)\">Last</a>\n            </li>\n          </ul>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pager.service */ "./src/app/services/pager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var JobComponent = /** @class */ (function () {
    function JobComponent(jobService, pagerService, route, router) {
        this.jobService = jobService;
        this.pagerService = pagerService;
        this.route = route;
        this.router = router;
        // pager object
        this.pager = {};
        // paged items
        this.page_limit = 10;
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.field = params.field;
            _this.value = params.value;
            _this.setTitle();
            _this.setPage(1);
        });
    };
    JobComponent.prototype.setTitle = function () {
        if (this.field == 'search')
            this.title = 'Showing related jobs to ' + this.value;
        else if (this.field != 'all')
            this.title = 'Jobs By ' + this.field + ' in ' + this.value;
        else
            this.title = 'Showing All Jobs';
    };
    JobComponent.prototype.setPage = function (page) {
        var _this = this;
        this.jobService.getJobs(this.field, this.value, page, this.page_limit)
            .subscribe(function (res) {
            if (res.data.jobs.length > 0) {
                _this.jobs = res.data.jobs;
                console.log(_this.jobs);
                _this.job_count = res.data.count;
                _this.pager = _this.pagerService.getPager(_this.job_count, page, _this.page_limit);
            }
        });
    };
    JobComponent.prototype.apply = function (job_id) {
        console.log('Job Id: ' + job_id);
        this.router.navigate(['/jobDetail'], { queryParams: { job_id: job_id } });
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _services_pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/seeker-detail/seeker-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/seeker-detail/seeker-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZWtlci1kZXRhaWwvc2Vla2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/seeker-detail/seeker-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/seeker-detail/seeker-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  seeker-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/seeker-detail/seeker-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/seeker-detail/seeker-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: SeekerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerDetailComponent", function() { return SeekerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeekerDetailComponent = /** @class */ (function () {
    function SeekerDetailComponent() {
    }
    SeekerDetailComponent.prototype.ngOnInit = function () {
    };
    SeekerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seeker-detail',
            template: __webpack_require__(/*! ./seeker-detail.component.html */ "./src/app/seeker-detail/seeker-detail.component.html"),
            styles: [__webpack_require__(/*! ./seeker-detail.component.css */ "./src/app/seeker-detail/seeker-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeekerDetailComponent);
    return SeekerDetailComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService() {
        this.getToken = function () {
            return localStorage.getItem('token');
        };
    }
    AuthInterceptorService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.getToken()
            }
        });
        return next.handle(request);
    };
    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.checkLogin = function () {
        if (this.loggedIn()) {
            if (this.checkUserType() == 'Company')
                this.router.navigate(['company/companyProfile']);
            else
                this.router.navigate(['seeker/seekerProfile']);
        }
        return;
    };
    AuthService.prototype.registerSeeker = function (user) {
        console.log("registering job seeker: " + user);
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/register', user);
    };
    AuthService.prototype.registerCompany = function (user) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/register', user);
    };
    AuthService.prototype.loginSeeker = function (user) {
        var _this = this;
        this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/login', user)
            .subscribe(function (res) {
            if (res.success) {
                console.log('login success');
                console.log(JSON.stringify(res));
                localStorage.setItem('token', res.token);
                localStorage.setItem('userType', 'JobSeeker');
                if (localStorage.getItem('newUser')) {
                    localStorage.removeItem('newUser');
                    _this.router.navigate(['/createSeekerProfile']);
                }
                else if (localStorage.getItem('refURL')) {
                    var url = localStorage.getItem('refURL');
                    localStorage.removeItem('refURL');
                    _this.router.navigateByUrl(url);
                }
                else
                    _this.router.navigate(['seeker/seekerProfile']);
            }
            else {
                console.log('login failed');
                console.log(JSON.stringify(res));
            }
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.loginCompany = function (user) {
        var _this = this;
        console.log("login user: " + JSON.stringify(user));
        this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/login', user)
            .subscribe(function (res) {
            if (res.success) {
                console.log(JSON.stringify(res));
                localStorage.setItem('token', res.token);
                localStorage.setItem('userType', 'Company');
                _this.router.navigate(['/company/profile']);
            }
            else {
                console.log(res);
            }
        }, function (err) { return console.log(err); });
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.logOutUser = function () {
        localStorage.removeItem('userType');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.checkUserType = function () {
        //Check for token if not token return
        if (!localStorage.getItem('token'))
            return;
        var userType = localStorage.getItem('userType');
        if (userType == 'Company')
            return 'Company';
        if (userType == 'JobSeeker')
            return 'JobSeeker';
        return;
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the auth token from localStorage
        var token = localStorage.getItem('token');
        // check if token is set, then...
        if (token) {
            return true;
        }
        return false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/chat/' + room)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.saveChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/chat', data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CompanyService = /** @class */ (function () {
    function CompanyService(http, router) {
        this.http = http;
        this.router = router;
    }
    CompanyService.prototype.getCompanyProfile = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/getCompanyProfile');
    };
    CompanyService.prototype.createJob = function (job) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/createJob', job);
    };
    CompanyService.prototype.getDistinct = function (field) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/getDistinct/' + field);
    };
    CompanyService.prototype.getCompanies = function (field, value, page_no, page_limit) {
        // console.log("in side service: "+field+"value ")
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/getCompanies/' + field + '/' + value + '/' + page_no + '/' + page_limit);
    };
    CompanyService.prototype.getCompanyDetail = function (company_id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/companies/getCompanyDetail/' + company_id);
    };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var JobService = /** @class */ (function () {
    function JobService(http, router) {
        this.http = http;
        this.router = router;
    }
    JobService.prototype.getAllJobs = function (page_no, page_limit) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/getAllJobs/' + page_no + '/' + page_limit);
    };
    JobService.prototype.updateSeekerProfile = function (user) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/updateProfile', user);
    };
    //get all availabe fields such as domain or location
    JobService.prototype.getDistinct = function (field) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/getDistinct/' + field);
    };
    JobService.prototype.getJobs = function (field, value, page_no, page_limit) {
        // console.log("in side service: "+field+"value ")
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/getJobs/' + field + '/' + value + '/' + page_no + '/' + page_limit);
    };
    JobService.prototype.applyForJob = function (job_id) {
        console.log('job_id: ' + job_id);
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/apply', { 'job_id': job_id });
    };
    JobService.prototype.getJobDetail = function (job_id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/getJobDetail/' + job_id);
    };
    JobService.prototype.checkAppliedJob = function (job_id) {
    };
    JobService.prototype.approveUser = function (approveDetails) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/approveUser/', approveDetails);
    };
    JobService.prototype.declineUser = function (declineDetails) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/jobs/declineUser/', declineDetails);
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        console.log("total Items : " + totalItems);
        console.log("total Items : " + pageSize);
        console.log("total pages " + totalPages);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage >= totalPages) {
            currentPage = totalPages;
        }
        //console.log("current page "+currentPage);      
        var startPage, endPage;
        if (totalPages <= 5) {
            // less than 5 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 5 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/seeker.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/seeker.service.ts ***!
  \********************************************/
/*! exports provided: SeekerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekerService", function() { return SeekerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SeekerService = /** @class */ (function () {
    function SeekerService(http, router) {
        this.http = http;
        this.router = router;
    }
    SeekerService.prototype.updateSeekerProfile = function (user) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/updateProfile', user);
    };
    SeekerService.prototype.getSeekerProfile = function () {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/getProfile');
    };
    SeekerService.prototype.removeApplication = function (job_id) {
        return this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + '/seeker/removeApplication', job_id);
    };
    SeekerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SeekerService);
    return SeekerService;
}());



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
var baseURL = 'http://localhost:3000';


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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rohitnegi/RohitNegiSDD/sDIrectAssignments/jobPortal/jobPortalFE/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map