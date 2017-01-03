webpackJsonp([0,4],{

/***/ 1000:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1001:
/***/ function(module, exports) {

module.exports = ".user-profile-page .control-label {\n  float: left;\n  width: auto; }\n\n.user-profile-page span {\n  padding-top: 7px;\n  display: block; }\n\n.user-profile-page input {\n  margin-top: 5px; }\n\n.user-profile-page .btn-save {\n  float: left; }\n\n.user-profile-page .btn-leave {\n  float: right; }\n\n.user-profile-page .image {\n  float: left;\n  position: relative;\n  width: 100%;\n  margin-bottom: 15px; }\n\n.user-profile-page .image img {\n  width: 150px;\n  border-radius: 5%;\n  padding: 5px;\n  background: #fff; }\n"

/***/ },

/***/ 1002:
/***/ function(module, exports) {

module.exports = ".title {\n  margin: 40px 0 30px; }\n\n.title h1 {\n  font-size: 50px;\n  line-height: 60px;\n  color: black;\n  margin-bottom: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center; }\n\n.title .border {\n  display: block;\n  border-style: solid;\n  border-bottom: 3px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 0px auto;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n\n.register-component h3 {\n  font: normal 500 30px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-size: 30px; }\n\n.register-component .control-label {\n  display: block;\n  margin-bottom: 0;\n  color: #555;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: left; }\n\n.register-component input {\n  display: block;\n  margin-bottom: 10px;\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  color: #000;\n  background: #fff;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: border-color .3s ease;\n  transition: border-color .3s ease;\n  height: auto;\n  border-radius: 0; }\n\n.register-component form {\n  margin: 0 auto;\n  display: block;\n  position: relative;\n  float: none; }\n\n.register-component .login-block {\n  text-align: center; }\n\n.register-component .login-block a {\n  text-decoration: none;\n  -webkit-transition: color .2s ease,opacity .2s ease;\n  transition: color .2s ease,opacity .2s ease;\n  font: 400 20px/1.25 \"Roboto\"; }\n\n.register-component .login-block h2 {\n  font-size: 24px;\n  text-align: center; }\n"

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpRequesterOptionsFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpRequesterOptionsFactoryService = (function () {
    function HttpRequesterOptionsFactoryService() {
    }
    HttpRequesterOptionsFactoryService.prototype.createHttpRequesterOptions = function (url, content, headers) {
        if (content === void 0) { content = {}; }
        if (headers === void 0) { headers = {}; }
        if (typeof content !== 'object') {
            content = { content: content };
        }
        return { url: url, content: content, headers: headers };
    };
    HttpRequesterOptionsFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HttpRequesterOptionsFactoryService);
    return HttpRequesterOptionsFactoryService;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/http-requester-options-factory.service.js.map

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpRequester; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpRequester = (function () {
    function HttpRequester(httpService) {
        this.httpService = httpService;
    }
    HttpRequester.prototype.get = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.httpService.get(options.url, { headers: headers });
    };
    HttpRequester.prototype.post = function (options) {
        var content = JSON.stringify(options.content);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.httpService.post(options.url, content, { headers: headers });
    };
    HttpRequester.prototype.put = function (options) {
        var content = JSON.stringify(options.content);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */](options.headers);
        return this.httpService.put(options.url, content, { headers: headers });
    };
    HttpRequester = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], HttpRequester);
    return HttpRequester;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/http-requester.service.js.map

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SpinnerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = (function () {
    function SpinnerService() {
        this.boolSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.isLoading$ = this.boolSubject.asObservable();
    }
    SpinnerService.prototype.show = function () {
        this.boolSubject.next(true);
    };
    SpinnerService.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this.boolSubject.next(false);
        }, delay);
    };
    SpinnerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SpinnerService);
    return SpinnerService;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/spinner.service.js.map

/***/ },

/***/ 1310:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(588);


/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__banner_component__ = __webpack_require__(735);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BannerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerModule = (function () {
    function BannerModule() {
    }
    BannerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__banner_component__["a" /* BannerComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__banner_component__["a" /* BannerComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BannerModule);
    return BannerModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/banner.module.js.map

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_requester_service__ = __webpack_require__(103);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__http_requester_options_factory_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__http_requester_service__["a"]; });


//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bills_services__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bill_model__ = __webpack_require__(713);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillsComponent = (function () {
    function BillsComponent(billsService, fb, notificationsService) {
        this.billsService = billsService;
        this.notificationsService = notificationsService;
        this.catModel = '';
        this.recModel = '';
        this.submitted = false;
        this.isEditEnabled = false;
        this.amountModel = 0;
        this.startDateModel = new Date();
        this.endDateModel = new Date();
        this.notesModel = '';
        this.currentBillId = '';
        this.filterQuery = "";
        this.rowsOnPage = 3;
        this.sortByWordLength = function (a) {
            // return a.city.length;
        };
        this.form = fb.group({
            'amount': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'startDueDate': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'endDueDate': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'notes': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
        });
        this.amount = this.form.controls['amount'];
        this.startDueDate = this.form.controls['startDueDate'];
        this.endDueDate = this.form.controls['endDueDate'];
        this.notes = this.form.controls['notes'];
    }
    BillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billsService.getUserBills()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            // console.log(response);
            _this.data = response.bills;
        });
        this.billsService.getBillsCategories()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.billCategories = response.categories;
        });
        this.billsService.getBillsRecurrences()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.billRecurrences = response.recurrences;
        });
    };
    BillsComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.bill = new __WEBPACK_IMPORTED_MODULE_5__bill_model__["a" /* Bill */](values['amount'], values['startDueDate'].formatted, values['endDueDate'].formatted, this.recModel, this.catModel, values['notes']);
            this.billsService.addBillToCurrentUser(this.bill)
                .subscribe(function (response) {
                var successTitle = "Success!";
                var successMessage = "You have added a bill successfully!";
                _this.hideChildModal();
                _this.notificationsService.success(successTitle, successMessage);
            });
        }
    };
    BillsComponent.prototype.showChildModal = function () {
        this.catModel = '';
        this.recModel = '';
        this.childModal.show();
    };
    BillsComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    BillsComponent.prototype.toInt = function (num) {
        return +num;
    };
    BillsComponent.prototype.edit = function (item) {
        this.editModal.show();
        console.log(item);
        this.catModel = item.category;
        this.recModel = item.recurrence;
        this.amountModel = +item.amount;
        // this.startDateModel = item.startDueDate.formatted;
        // this.endDateModel = item.endDueDate.formatted;
        //  console.log(this.endDateModel);
        this.notesModel = item.notes;
        this.currentBillId = item._id;
        // console.log(this.currentBillId);
        // RESET ngMODELS
    };
    BillsComponent.prototype.OnUpdateClick = function () {
        var _this = this;
        var updatedBill = new __WEBPACK_IMPORTED_MODULE_5__bill_model__["a" /* Bill */](this.amountModel, this.startDateModel, this.endDateModel, this.recModel, this.catModel, this.notesModel);
        updatedBill._id = this.currentBillId;
        this.billsService.updateBill(updatedBill)
            .subscribe(function (response) {
            console.log(response);
            _this.editModal.hide();
            var successTitle = "Success!";
            var successMessage = "You have updated a bill successfully!";
            _this.notificationsService.success(successTitle, successMessage);
        });
        this.catModel = '';
        this.recModel = '';
        this.amountModel = 0;
        this.startDateModel = new Date();
        this.endDateModel = new Date();
        this.notesModel = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"]) === 'function' && _a) || Object)
    ], BillsComponent.prototype, "childModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editModal'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"]) === 'function' && _b) || Object)
    ], BillsComponent.prototype, "editModal", void 0);
    BillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bills',
            template: __webpack_require__(951),
            styles: [__webpack_require__(979)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_bills_services__["a" /* BillsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_bills_services__["a" /* BillsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object])
    ], BillsComponent);
    return BillsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/bills.component.js.map

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IncomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncomeService = (function () {
    function IncomeService(http, userService, httpRequesterService, httpRequesterOptionsFactory) {
        this.http = http;
        this.userService = userService;
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.userIncomeUrl = '/api/user-income';
        this.incomeRecurrencesUrl = '/api/income-recurrences';
    }
    IncomeService.prototype.getUserIncome = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userIncomeUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    IncomeService.prototype.addIncomeToCurrentUser = function (bill) {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        console.log(authHeaderObject);
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userIncomeUrl, bill, authHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    IncomeService.prototype.getIncomeRecurrences = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.incomeRecurrencesUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    IncomeService.prototype.updateUserIncome = function (userIncome) {
        var updateProfileUrl = this.userIncomeUrl + '/' + userIncome._id, authHeaderObject = this.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(updateProfileUrl, userIncome, authHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    IncomeService.prototype.getAuthHeaderObject = function () {
        var userDataString = localStorage.getItem('user');
        var token = JSON.parse(userDataString).auth_token;
        var authHeaderObject = {
            'Content-Type': 'application/json',
            'Authorization': token
        };
        return authHeaderObject;
    };
    IncomeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["a" /* HttpRequester */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */]) === 'function' && _d) || Object])
    ], IncomeService);
    return IncomeService;
    var _a, _b, _c, _d;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/income.service.js.map

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutUsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutUsService = (function () {
    function AboutUsService(requesterService, httpRequesterOptionsFactoryService) {
        this.requesterService = requesterService;
        this.httpRequesterOptionsFactoryService = httpRequesterOptionsFactoryService;
    }
    AboutUsService.prototype.getAboutDetails = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactoryService
            .createHttpRequesterOptions('/api/about');
        return this.requesterService.get(httpRequestOptions);
    };
    AboutUsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object])
    ], AboutUsService);
    return AboutUsService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/about.service.js.map

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OurServicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OurServicesService = (function () {
    function OurServicesService(requesterService, httpRequesterOptionsFactoryService) {
        this.requesterService = requesterService;
        this.httpRequesterOptionsFactoryService = httpRequesterOptionsFactoryService;
    }
    OurServicesService.prototype.getOurServicesDetails = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactoryService
            .createHttpRequesterOptions('/api/services');
        return this.requesterService.get(httpRequestOptions);
    };
    OurServicesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object])
    ], OurServicesService);
    return OurServicesService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/ourservices.services.js.map

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestimonialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestimonialService = (function () {
    function TestimonialService(requesterService, httpRequesterOptionsFactoryService) {
        this.requesterService = requesterService;
        this.httpRequesterOptionsFactoryService = httpRequesterOptionsFactoryService;
    }
    TestimonialService.prototype.getTestimonialDetails = function () {
        var httpRequestOptions = this.httpRequesterOptionsFactoryService
            .createHttpRequesterOptions('/api/testimonials');
        return this.requesterService.get(httpRequestOptions);
    };
    TestimonialService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_service__["a" /* HttpRequester */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object])
    ], TestimonialService);
    return TestimonialService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/testimonial.service.js.map

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_requester_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(httpRequesterService, httpRequesterOptionsFactory) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.authenticationApiUrl = '/api/authenticate';
    }
    AuthService.prototype.isLoggedIn = function () {
        var userDataString = localStorage.getItem('user');
        if (!userDataString) {
            return false;
        }
        var token = JSON.parse(userDataString).auth_token;
        var contentTypeHeaderObject = {
            'Content-Type': 'application/json',
            'AuthToken': token
        };
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.authenticationApiUrl, {}, contentTypeHeaderObject);
        return this.httpRequesterService
            .post(httpRequestOptions)
            .map(function (response) {
            var result = JSON.parse(response.text());
            if (result.success) {
                return true;
            }
            return false;
        });
    };
    AuthService.prototype.clearLoggedUser = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_http_requester_service__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__http_http_requester_service__["a" /* HttpRequester */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/auth.service.js.map

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__(748);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserFactoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFactoryService = (function () {
    function UserFactoryService() {
    }
    UserFactoryService.prototype.createUser = function (username, password, email, firstName, lastName, age, avatarUrl) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (age === void 0) { age = 0; }
        if (avatarUrl === void 0) { avatarUrl = '/assets/uploads/users/avatar.jpg'; }
        var newUser = new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* User */]();
        newUser.username = username;
        newUser.password = password;
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.age = age;
        newUser.avatarUrl = avatarUrl;
        newUser.dateCreated = new Date();
        return newUser;
    };
    UserFactoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserFactoryService);
    return UserFactoryService;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/user.factory.service.js.map

/***/ },

/***/ 343:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard__ = __webpack_require__(743);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_guard__["a"]; });


//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_model__ = __webpack_require__(712);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountComponent = (function () {
    function AccountComponent(fb, accountService, notificationService) {
        this.fb = fb;
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.submitted = false;
        this.inEditMode = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.initFormFieldsAndValidation();
    }
    AccountComponent.prototype.initFormFieldsAndValidation = function () {
        this.form = this.fb.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            'amount': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
        });
        this.name = this.form.controls['name'];
        this.amount = this.form.controls['amount'];
    };
    AccountComponent.prototype.ngOnInit = function () {
        this.getUserAccountsData();
    };
    AccountComponent.prototype.getUserAccountsData = function () {
        var _this = this;
        this.accountService.getUserAccounts()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.data = response.accounts;
        }, function (err) {
            var infoTitle = "Hey there! : )";
            var infoMessage = err.json().message;
            _this.notificationService.info(infoTitle, infoMessage);
        });
    };
    AccountComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.account = new __WEBPACK_IMPORTED_MODULE_5__account_model__["a" /* Account */](values['name'], values['amount']);
            this.accountService.addAccountToCurrentUser(this.account)
                .subscribe(function (response) {
                _this.hideChildModal();
                _this.getUserAccountsData();
                var successTitle = "Success!";
                var successMessage = "You have added a new account successfully!";
                _this.notificationService.success(successTitle, successMessage);
            }, function (err) {
                var errorTitle = "An error occured..";
                var errorMessage = err.json().message;
                _this.notificationService.error(errorTitle, errorMessage);
            });
        }
    };
    AccountComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    AccountComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    AccountComponent.prototype.toggleEditMode = function (editMode) {
        this.inEditMode = editMode;
    };
    AccountComponent.prototype.updateAccount = function () {
        var _this = this;
        this.accountService.updateUserAccountData(this.accountForEdit)
            .subscribe(function (response) {
            var successTitle = "Success!";
            var successMessage = "You have updated your account!";
            _this.notificationService.success(successTitle, successMessage);
        }, function (err) {
            var errorTitle = "Oops! Something went wrong..";
            var errorMessage = err.json().message;
            _this.notificationService.error(errorTitle, errorMessage);
        }, function () {
            _this.childModalEdit.hide();
        });
    };
    AccountComponent.prototype.edit = function (accountId) {
        var accountObj = this.data.filter(function (doc) { return doc._id == accountId; })[0];
        this.accountForEdit = accountObj;
        console.log(this.accountForEdit);
        this.childModalEdit.show();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["ModalDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["ModalDirective"]) === 'function' && _a) || Object)
    ], AccountComponent.prototype, "childModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModalEdit'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["ModalDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap__["ModalDirective"]) === 'function' && _b) || Object)
    ], AccountComponent.prototype, "childModalEdit", void 0);
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(950),
            styles: [__webpack_require__(978)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/account.component.js.map

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_spinner_spinner_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, spinnerService) {
        this.authService = authService;
        this.spinnerService = spinnerService;
    }
    Object.defineProperty(DashboardComponent.prototype, "isUserLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(952),
            styles: [__webpack_require__(980)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_spinner_spinner_service__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_spinner_spinner_service__["a" /* SpinnerService */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/dashboard.component.js.map

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_router__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_dashboard_sidebar_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bills_bills_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__incomes_incomes_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_services_account_service__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_services_bills_services__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_income_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__incomes_edit_income_edit_income_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_pipes_data_filter_pipe__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_pipes_date_formatter_pipe__ = __webpack_require__(741);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_router__["a" /* DashboardRouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_datepicker__["DatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap_modal__["ModalModule"].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidebar_dashboard_sidebar_component__["a" /* DashboardSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bills_bills_component__["a" /* BillsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_12__incomes_incomes_component__["a" /* IncomesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__incomes_edit_income_edit_income_component__["a" /* EditIncomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_pipes_data_filter_pipe__["a" /* DataFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__shared_pipes_date_formatter_pipe__["a" /* DateFormatterPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__dashboard_services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_services_bills_services__["a" /* BillsService */],
                __WEBPACK_IMPORTED_MODULE_15__services_income_service__["a" /* IncomeService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/dashboard.module.js.map

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_income_service__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditIncomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MIN_FIELD_LENGTH = 3, MAX_FIELD_LENGTH = 20, LETTERS_PATTERN = '^[A-Za-zА-Яа-я]+$';
var EditIncomeComponent = (function () {
    function EditIncomeComponent(fb, incomeService) {
        this.fb = fb;
        this.incomeService = incomeService;
        this.inEditMode = false;
        this.submitted = false;
        this.initEditUserIncomeFormValidation();
        this.initEditUserIncomeFormFields();
    }
    EditIncomeComponent.prototype.initEditUserIncomeFormValidation = function () {
        this.editUserIncomeForm = this.fb.group({
            'company': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(LETTERS_PATTERN)
                ])],
            'amount': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(LETTERS_PATTERN)
                ])],
            'startDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'account': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'recurrence': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        });
    };
    EditIncomeComponent.prototype.initEditUserIncomeFormFields = function () {
        this.company = this.editUserIncomeForm.controls['company'];
        this.amount = this.editUserIncomeForm.controls['amount'];
        this.startDate = this.editUserIncomeForm.controls['startDate'];
        this.account = this.editUserIncomeForm.controls['account'];
        this.recurrence = this.editUserIncomeForm.controls['recurrence'];
    };
    EditIncomeComponent.prototype.toggleEditMode = function (value) {
        this.inEditMode = value;
    };
    EditIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.incomeService.getUserIncome()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.userIncome = response;
        });
    };
    EditIncomeComponent.prototype.updateUserIncomeData = function () {
        this.incomeService.updateUserIncome(this.userIncome)
            .subscribe(function (response) {
            console.log(response);
            var successTitle = "Success!";
            var successMessage = "You have updated your profile!";
        }, function (err) {
            var errorTitle = "Oops! Something went wrong..";
            var errorMessage = err.json().message;
        }, function () {
            // setTimeout(() => this.appRouter.navigateByUrl('/login'), 500);
        });
    };
    EditIncomeComponent.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.editUserIncomeForm.valid) {
            this.updateUserIncomeData();
        }
    };
    EditIncomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-income',
            template: __webpack_require__(953),
            styles: [__webpack_require__(981)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_income_service__["a" /* IncomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_income_service__["a" /* IncomeService */]) === 'function' && _b) || Object])
    ], EditIncomeComponent);
    return EditIncomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/edit-income.component.js.map

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_income_service__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_income_model__ = __webpack_require__(715);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return IncomesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IncomesComponent = (function () {
    function IncomesComponent(incomeService, fb, notificationsService) {
        this.incomeService = incomeService;
        this.notificationsService = notificationsService;
        this.catModel = '';
        this.recModel = '';
        this.filterQuery = "";
        this.rowsOnPage = 3;
        this.submitted = false;
        this.sortByWordLength = function (a) {
            // return a.city.length;
        };
        this.form = fb.group({
            'company': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'amount': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'startDate': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
        });
        this.company = this.form.controls['company'];
        this.amount = this.form.controls['amount'];
        this.startDate = this.form.controls['startDate'];
    }
    IncomesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.incomeService.getUserIncome()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            console.log(response);
            _this.data = response.incomes;
            console.log(_this.data);
        });
    };
    IncomesComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.income = new __WEBPACK_IMPORTED_MODULE_5__models_income_model__["a" /* Income */](values['company'], values['amount'], values['startDate'], values['accounts'], values['recurrence']);
            this.incomeService.addIncomeToCurrentUser(this.income)
                .subscribe(function (response) {
                var successTitle = "Success!";
                var successMessage = "You have added an income successfully!";
                _this.hideChildModal();
                _this.notificationsService.success(successTitle, successMessage);
            });
        }
    };
    IncomesComponent.prototype.showChildModal = function () {
        var _this = this;
        this.childModal.show();
        this.incomeService.getIncomeRecurrences()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.incomeRecurrences = response.recurrences;
            console.log(_this.incomeRecurrences);
        });
    };
    IncomesComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    IncomesComponent.prototype.toInt = function (num) {
        return +num;
    };
    IncomesComponent.prototype.edit = function (item) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('childModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap__["ModalDirective"]) === 'function' && _a) || Object)
    ], IncomesComponent.prototype, "childModal", void 0);
    IncomesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-incomes',
            template: __webpack_require__(954),
            styles: [__webpack_require__(982)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_income_service__["a" /* IncomeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_income_service__["a" /* IncomeService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], IncomesComponent);
    return IncomesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/incomes.component.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_index__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(userService, httpRequesterService, httpRequesterOptionsFactory) {
        this.userService = userService;
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.userAccountApiUrl = '/api/user-accounts';
    }
    AccountService.prototype.getUserAccountDataById = function (accountId) {
        var getUserAccUrl = this.userAccountApiUrl + '/' + accountId, authHeaderObject = this.userService.getAuthHeaderObject(), userId = this.userService.getLoggedUser()._id;
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(getUserAccUrl, { accId: accountId, userId: userId }, authHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    AccountService.prototype.getUserAccounts = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userAccountApiUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    AccountService.prototype.addAccountToCurrentUser = function (account) {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        console.log(authHeaderObject);
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userAccountApiUrl, account, authHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    AccountService.prototype.updateUserAccountData = function (account) {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userAccountApiUrl, account, authHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__users_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__users_services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_index__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_index__["a" /* HttpRequester */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */]) === 'function' && _c) || Object])
    ], AccountService);
    return AccountService;
    var _a, _b, _c;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/account.service.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BillsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Bill } from '../bills/bill.model'; can be skipped
var BillsService = (function () {
    function BillsService(http, userService, httpRequesterService, httpRequesterOptionsFactory) {
        this.http = http;
        this.userService = userService;
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.userBillsUrl = '/api/user-bills';
        this.billCategoriesUrl = '/api/bill-categories';
        this.billRecurrencesUrl = '/api/bill-recurrences';
        this.updateBillUrl = '/api/update-bill';
    }
    BillsService.prototype.getUserBills = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userBillsUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    BillsService.prototype.addBillToCurrentUser = function (bill) {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        console.log(authHeaderObject);
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userBillsUrl, bill, authHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    BillsService.prototype.getBillsCategories = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.billCategoriesUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    BillsService.prototype.getBillsRecurrences = function () {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.billRecurrencesUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    BillsService.prototype.updateBill = function (bill) {
        var authHeaderObject = this.userService.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.updateBillUrl, bill, authHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    BillsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__users_services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["a" /* HttpRequester */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_http_index__["b" /* HttpRequesterOptionsFactoryService */]) === 'function' && _d) || Object])
    ], BillsService);
    return BillsService;
    var _a, _b, _c, _d;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/bills.services.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_about_service__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = (function () {
    function AboutComponent(spinnerService, aboutService) {
        this.spinnerService = spinnerService;
        this.aboutService = aboutService;
        this.state = 'inactive';
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.aboutService.getAboutDetails()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.aboutDetails = response;
        });
    };
    AboutComponent.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    AboutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.spinnerService.hide(1000);
        this.sleep(1000).then(function () {
            _this.state = 'active';
        });
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(957),
            styles: [__webpack_require__(985)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_about_service__["a" /* AboutUsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_about_service__["a" /* AboutUsService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/about.component.js.map

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_banner__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsComponent = (function () {
    function ContactUsComponent(spinnerService) {
        this.spinnerService = spinnerService;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        this.bannerModel = new __WEBPACK_IMPORTED_MODULE_1__shared_models_banner__["a" /* Banner */]('../../assets/images/banners/contact-us-background.jpg', 'CONTACT');
    };
    ContactUsComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-us',
            template: __webpack_require__(960),
            styles: [__webpack_require__(988)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object])
    ], ContactUsComponent);
    return ContactUsComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact-us.component.js.map

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.contactUrl = 'http://localhost:3003/api/contact-us';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ContactService.prototype.send = function (contact) {
        var c = JSON.stringify(contact);
        return this.http.post(this.contactUrl, c, this.options)
            .map(function (res) {
            res.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error); });
    };
    ContactService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ContactService);
    return ContactService;
    var _a;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact.service.js.map

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SiteSettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteSettingsService = (function () {
    function SiteSettingsService(http) {
        this.http = http;
        this.settingsUrl = 'http://localhost:3003/api/siteSettings';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    SiteSettingsService.prototype.getSettings = function () {
        return this.http.get(this.settingsUrl, this.options)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.json().error); });
    };
    SiteSettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SiteSettingsService);
    return SiteSettingsService;
    var _a;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/siteSettings.service.js.map

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(spinnerService) {
        this.spinnerService = spinnerService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        $('body').addClass('homepage');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass('homepage');
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(962),
            styles: [__webpack_require__(990)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/home.component.js.map

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ourservices_services__ = __webpack_require__(271);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OurservicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OurservicesComponent = (function () {
    function OurservicesComponent(spinnerService, ourServicesService) {
        this.spinnerService = spinnerService;
        this.ourServicesService = ourServicesService;
        this.state = 'inactive';
    }
    OurservicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.ourServicesService.getOurServicesDetails()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.ourServicesDetails = response;
        });
    };
    OurservicesComponent.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    OurservicesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.spinnerService.hide(1000);
        this.sleep(1000).then(function () {
            _this.state = 'active';
        });
    };
    OurservicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ourservices',
            template: __webpack_require__(964),
            styles: [__webpack_require__(992)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_ourservices_services__["a" /* OurServicesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_ourservices_services__["a" /* OurServicesService */]) === 'function' && _b) || Object])
    ], OurservicesComponent);
    return OurservicesComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/ourservices.component.js.map

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_testimonial_service__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestimonialsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialsComponent = (function () {
    function TestimonialsComponent(spinnerService, testimonialService) {
        this.spinnerService = spinnerService;
        this.testimonialService = testimonialService;
        this.state = 'inactive';
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinnerService.show();
        this.testimonialService.getTestimonialDetails()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.testimonialDetails = response;
        });
    };
    TestimonialsComponent.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    TestimonialsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.spinnerService.hide(1000);
        this.sleep(1000).then(function () {
            _this.state = 'active';
        });
    };
    TestimonialsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(965),
            styles: [__webpack_require__(993)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeIn', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_testimonial_service__["a" /* TestimonialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_testimonial_service__["a" /* TestimonialService */]) === 'function' && _b) || Object])
    ], TestimonialsComponent);
    return TestimonialsComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/testimonials.component.js.map

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Banner; });
var Banner = (function () {
    function Banner(imgUrl, caption) {
        this.imgUrl = imgUrl;
        this.caption = caption;
    }
    return Banner;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/banner.js.map

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner_service__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spinner_service__["a"]; });

//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.validate = function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/email.validator.js.map

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_validator__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string_validator__ = __webpack_require__(747);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__email_validator__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__equalPasswords_validator__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__string_validator__["a"]; });



//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_spinner_spinner_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ForgottenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgottenComponent = (function () {
    function ForgottenComponent(fb, appRouter, authService, spinnerService, notificationsService, userService) {
        this.appRouter = appRouter;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.notificationsService = notificationsService;
        this.userService = userService;
        this.submitted = false;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].validate])]
        });
        this.email = this.form.controls['email'];
    }
    ForgottenComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        if (this.authService.isLoggedIn()) {
            this.appRouter.navigateByUrl('/dashboard');
        }
    };
    ForgottenComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    ForgottenComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var mail = values['email'];
            this.userService.sendNewAutoGeneratedPassword(mail)
                .subscribe(function (response) {
                if (response.json().success === false) {
                    _this.notificationsService.error('No such email registered', 'Try again');
                    setTimeout(function () { _this.form.reset(); }, 500);
                }
                else {
                    var successTitle = 'Successfully changed password!';
                    var successMessage = 'You can check it out in your mail!';
                    _this.notificationsService.success(successTitle, successMessage);
                    _this.form.reset();
                    setTimeout(function () { return _this.appRouter.navigateByUrl('/login'); }, 500);
                }
            }, function (err) {
                var errorTitle = "Oops! Something went wrong..";
                var errorMessage = err.json().message;
                _this.notificationsService.error(errorTitle, errorMessage);
            });
        }
    };
    ForgottenComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotten',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__(970),
            styles: [__webpack_require__(998)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_spinner_spinner_service__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_spinner_spinner_service__["a" /* SpinnerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _f) || Object])
    ], ForgottenComponent);
    return ForgottenComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/forgotten.component.js.map

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(fb, authService, appRouter, spinnerService, userService, notificationsService) {
        this.fb = fb;
        this.authService = authService;
        this.appRouter = appRouter;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.notificationsService = notificationsService;
        this.submitted = false;
        this.initLoginFormValidation();
    }
    LoginComponent.prototype.initLoginFormValidation = function () {
        this.form = this.fb.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
        this.username = this.form.controls['username'];
        this.password = this.form.controls['password'];
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        if (this.authService.isLoggedIn()) {
            this.appRouter.navigateByUrl('/dashboard');
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.userService.loginUser(this.form.value)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (!response.auth_token) {
                    throw new Error('Invalid login');
                }
                localStorage.setItem('user', JSON.stringify(response));
                _this.userService.setLoggedUser(response);
                var successTitle = "Welcome!";
                var successMessage = "You have logged in successfully!";
                _this.notificationsService.success(successTitle, successMessage);
            }, function (err) {
                var errorTitle = "Invalid credentials!";
                var errorMessage = "Wrong username or password! Please try again.";
                _this.notificationsService.error(errorTitle, errorMessage);
            }, function () {
                _this.spinnerService.show();
                setTimeout(function () { return _this.appRouter.navigateByUrl('/dashboard'); }, 1500);
                //this.spinnerService.hide(1000);
            });
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__(971),
            styles: [__webpack_require__(999)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_auth__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__["a" /* SpinnerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_angular2_notifications__["NotificationsService"]) === 'function' && _f) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/login.component.js.map

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = (function () {
    function LogoutComponent(appRouter, authService, userService, notificationsService) {
        this.appRouter = appRouter;
        this.authService = authService;
        this.userService = userService;
        this.notificationsService = notificationsService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.logoutUser()
            .subscribe(function (response) {
            var successTitle = "Success!";
            var successMessage = "Redirecting you to dashboard!";
            _this.notificationsService.success(successTitle, successMessage);
            _this.authService.clearLoggedUser();
        }, function (err) {
            var errorTitle = "Oops! Something went wrong..";
            var errorMessage = err.json().message;
            _this.notificationsService.error(errorTitle, errorMessage);
        }, function () {
            _this.appRouter.navigateByUrl('/');
        });
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(972),
            styles: [__webpack_require__(1000)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _d) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/logout.component.js.map

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_factory_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_spinner_spinner_service__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MIN_FIELD_LENGTH = 3, MAX_FIELD_LENGTH = 20, LETTERS_PATTERN = '^[A-Za-zА-Яа-я]+$', uploadUrl = '/api/users/upload';
var ProfileComponent = (function () {
    function ProfileComponent(fb, userFactoryService, userService, spinnerService, notificationsService) {
        this.fb = fb;
        this.userFactoryService = userFactoryService;
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.notificationsService = notificationsService;
        this.inEditMode = false;
        this.submitted = false;
        this.sizeLimit = 2000000;
        this.options = {
            url: '/api/upload',
            customHeaders: {},
            data: {}
        };
        this.user = this.userFactoryService.createUser();
        this.initEditUserFormValidation();
        this.initEditUserFormFields();
    }
    ProfileComponent.prototype.initEditUserFormValidation = function () {
        this.editUserForm = this.fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(LETTERS_PATTERN)
                ])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(LETTERS_PATTERN)
                ])],
            'age': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
        });
    };
    ProfileComponent.prototype.initEditUserFormFields = function () {
        this.firstName = this.editUserForm.controls['firstName'];
        this.lastName = this.editUserForm.controls['lastName'];
        this.age = this.editUserForm.controls['age'];
    };
    ProfileComponent.prototype.setFileUploaderHeaders = function () {
        var loggedUserId = JSON.parse(localStorage.getItem('user'))._id;
        this.options.customHeaders = this.userService.getAuthToken();
        this.options.data = { _id: loggedUserId };
    };
    ProfileComponent.prototype.toggleEditMode = function (value) {
        this.inEditMode = value;
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setFileUploaderHeaders();
        this.spinnerService.show();
        this.userService.getUserProfile()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.user = response;
            _this.spinnerService.hide();
        });
    };
    ProfileComponent.prototype.handleUpload = function (data) {
        if (data && data.response) {
            data = JSON.parse(data.response);
            this.user.avatarUrl = data.imageUrl;
            this.updateUserData();
        }
    };
    ProfileComponent.prototype.beforeUpload = function (uploadingFile) {
        if (uploadingFile.size > this.sizeLimit) {
            uploadingFile.setAbort();
            alert('File is too large');
        }
    };
    ProfileComponent.prototype.uploadAvatar = function () {
        this.userService.updateUserProfileImage(this.user._id, this.filesToUpload)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    ProfileComponent.prototype.updateUserData = function () {
        var _this = this;
        this.userService.updateUserProfile(this.user)
            .subscribe(function (response) {
            _this.spinnerService.hide(500);
            console.log(response);
            _this.toggleEditMode(false);
            var successTitle = "Success!";
            var successMessage = "You have updated your profile!";
            _this.notificationsService.success(successTitle, successMessage);
        }, function (err) {
            _this.spinnerService.hide();
            var errorTitle = "Oops! Something went wrong..";
            var errorMessage = err.json().message;
            _this.notificationsService.error(errorTitle, errorMessage);
        }, function () {
            // setTimeout(() => this.appRouter.navigateByUrl('/login'), 500);
        });
    };
    ProfileComponent.prototype.onSubmit = function (values) {
        this.submitted = true;
        if (this.editUserForm.valid) {
            this.spinnerService.show();
            this.updateUserData();
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(973),
            styles: [__webpack_require__(1001)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_spinner_spinner_service__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_spinner_spinner_service__["a" /* SpinnerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === 'function' && _e) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/profile.component.js.map

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_validators__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MIN_FIELD_LENGTH = 3, MAX_FIELD_LENGTH = 20, ALPHA_PATTERN = '^[A-Za-zА-Яа-я0-9]+$';
var RegisterComponent = (function () {
    function RegisterComponent(fb, authService, appRouter, spinnerService, userService, userFactoryService, notificationsService) {
        this.fb = fb;
        this.authService = authService;
        this.appRouter = appRouter;
        this.spinnerService = spinnerService;
        this.userService = userService;
        this.userFactoryService = userFactoryService;
        this.notificationsService = notificationsService;
        this.submitted = false;
        this.initRegistrationFormAndValidation();
    }
    RegisterComponent.prototype.initRegistrationFormAndValidation = function () {
        this.form = this.fb.group({
            'username': ['',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(ALPHA_PATTERN),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH)])
            ],
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__shared_validators__["a" /* EmailValidator */].validate])],
            'passwords': this.fb.group({
                'password': ['',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(MIN_FIELD_LENGTH),
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(MAX_FIELD_LENGTH)])
                ],
                'repeatPassword': ['',
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
            }, { validator: __WEBPACK_IMPORTED_MODULE_3__shared_validators__["b" /* EqualPasswordsValidator */].validate('password', 'repeatPassword') })
        });
        this.username = this.form.controls['username'];
        this.email = this.form.controls['email'];
        this.passwords = this.form.controls['passwords'];
        this.password = this.passwords.controls['password'];
        this.repeatPassword = this.passwords.controls['repeatPassword'];
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        if (this.authService.isLoggedIn()) {
            this.appRouter.navigateByUrl('/dashboard');
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    RegisterComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.user = this.userFactoryService.createUser(values['username'], values['passwords']['password'], values['email']);
            this.userService.registerUser(this.user)
                .subscribe(function (response) {
                var successTitle = "Success!";
                var successMessage = "You have registered successfully!";
                _this.notificationsService.success(successTitle, successMessage);
            }, function (err) {
                _this.spinnerService.hide();
                var errorTitle = "Oops! Something went wrong..";
                var errorMessage = err.json().message;
                _this.notificationsService.error(errorTitle, errorMessage);
            }, function () {
                setTimeout(function () { return _this.appRouter.navigateByUrl('/login'); }, 500);
            });
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(974),
            styles: [__webpack_require__(1002)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_services_auth__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_spinner_spinner_service__["a" /* SpinnerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_user_factory_service__["a" /* UserFactoryService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8_angular2_notifications__["NotificationsService"]) === 'function' && _g) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/register.component.js.map

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_options_factory_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(httpRequesterService, httpRequesterOptionsFactory) {
        this.httpRequesterService = httpRequesterService;
        this.httpRequesterOptionsFactory = httpRequesterOptionsFactory;
        this.userApiUrl = '/api/users';
        this.logoutApiUrl = '/api/logout';
        this.contentTypeHeaderObject = { 'Content-Type': 'application/json' };
        this.forgottenPass = '/api/forgotten-pass';
        this.userApiUploadUrl = '/api/users/upload';
        this.isLogged = false;
        this.isLogged = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.registerUser = function (user) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService.prototype.loginUser = function (user) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);
        return this.httpRequesterService.post(httpRequestOptions);
    };
    UserService.prototype.logoutUser = function () {
        var authHeaderObject = this.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.logoutApiUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    UserService.prototype.getUserProfile = function () {
        var authHeaderObject = this.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.userApiUrl, {}, authHeaderObject);
        return this.httpRequesterService.get(httpRequestOptions);
    };
    UserService.prototype.updateUserProfile = function (user) {
        var updateProfileUrl = this.userApiUrl + '/' + user._id, authHeaderObject = this.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(updateProfileUrl, user, authHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService.prototype.updateUserProfileImage = function (userId, imageUrl) {
        var updateProfileUrl = '/api/upload/' + userId, authHeaderObject = this.getAuthHeaderObject();
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(updateProfileUrl, { userId: userId, imageUrl: imageUrl }, authHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.isLogged;
    };
    UserService.prototype.getLoggedUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    UserService.prototype.setLoggedUser = function (authResponse) {
        localStorage.setItem('user', JSON.stringify(authResponse));
    };
    UserService.prototype.getAuthHeaderObject = function () {
        var userDataString = localStorage.getItem('user');
        var token = JSON.parse(userDataString).auth_token;
        var authHeaderObject = {
            'Content-Type': 'application/json',
            'Authorization': token
        };
        return authHeaderObject;
    };
    UserService.prototype.getAuthToken = function () {
        var userDataString = localStorage.getItem('user');
        var token = JSON.parse(userDataString).auth_token;
        var authHeaderObject = { 'Authorization': token };
        return authHeaderObject;
    };
    UserService.prototype.sendNewAutoGeneratedPassword = function (email) {
        var httpRequestOptions = this.httpRequesterOptionsFactory
            .createHttpRequesterOptions(this.forgottenPass, { userEmail: email }, this.contentTypeHeaderObject);
        return this.httpRequesterService.put(httpRequestOptions);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_service__["a" /* HttpRequester */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_http_http_requester_service__["a" /* HttpRequester */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_http_http_requester_options_factory_service__["a" /* HttpRequesterOptionsFactoryService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/user.service.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(711);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/main.js.map

/***/ },

/***/ 596:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 596;


/***/ },

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
        this.cssClass = '';
        this.notificationOptions = {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 50,
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.spinnerService.hide(1000);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "cssClass", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__(949),
            styles: [__webpack_require__(977)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* SpinnerService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/app.component.js.map

/***/ },

/***/ 711:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_module__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_banner_banner_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_components_navigation_navigation_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_components_footer_footer_component__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_components_preloader_preloader_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_pipes__ = __webpack_require__(742);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_components_preloader_preloader_component__["a" /* PreloaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_pipes__["a" /* ArrayFormatterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__users_users_module__["a" /* UsersModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_banner_banner_module__["a" /* BannerModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: '/', pathMatch: 'full' },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ], { useHash: true }),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["b" /* PreloaderService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["c" /* HttpRequesterOptionsFactoryService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["d" /* HttpRequester */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["e" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services__["f" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/app.module.js.map

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Account; });
var Account = (function () {
    function Account(name, amount, type, currency) {
        if (name === void 0) { name = ''; }
        if (amount === void 0) { amount = 0; }
        if (type === void 0) { type = 'Normal'; }
        if (currency === void 0) { currency = '$USD'; }
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.currency = currency;
    }
    return Account;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/account.model.js.map

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Bill; });
var Bill = (function () {
    function Bill(amount, startDueDate, endDueDate, recurrence, category, notes) {
        this.amount = amount;
        this.startDueDate = startDueDate;
        this.endDueDate = endDueDate;
        this.recurrence = recurrence;
        this.category = category;
        this.notes = notes;
        this.status = 'Unpaid';
    }
    return Bill;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/bill.model.js.map

/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bills_bills_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__incomes_incomes_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__incomes_edit_income_edit_income_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth__["b" /* AuthGuard */]] },
    { path: 'user-bills', component: __WEBPACK_IMPORTED_MODULE_3__bills_bills_component__["a" /* BillsComponent */] },
    { path: 'user-accounts', component: __WEBPACK_IMPORTED_MODULE_4__account_account_component__["a" /* AccountComponent */] },
    { path: 'user-income', component: __WEBPACK_IMPORTED_MODULE_5__incomes_incomes_component__["a" /* IncomesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth__["b" /* AuthGuard */]] },
    { path: 'user-income/:id', component: __WEBPACK_IMPORTED_MODULE_6__incomes_edit_income_edit_income_component__["a" /* EditIncomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth__["b" /* AuthGuard */]] }
];
var DashboardRouterModule = (function () {
    function DashboardRouterModule() {
    }
    DashboardRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRouterModule);
    return DashboardRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/dashboard.router.js.map

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Income; });
var Income = (function () {
    function Income(company, amount, startDate, accounts, recurrence) {
        this.company = company;
        this.amount = amount;
        this.startDate = startDate;
        this.accounts = accounts;
        this.recurrence = recurrence;
    }
    return Income;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/income.model.js.map

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-menu',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__(955),
            styles: [__webpack_require__(983)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/menu.component.js.map

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_auth_service__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardSidebarComponent = (function () {
    function DashboardSidebarComponent(authService) {
        this.authService = authService;
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authService.isLoggedIn();
    };
    DashboardSidebarComponent.prototype.ngDoCheck = function () {
        this.isLogged = this.authService.isLoggedIn();
    };
    DashboardSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-sidebar',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__(984)],
            template: __webpack_require__(956)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/dashboard-sidebar.component.js.map

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_router__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_about_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_banner_banner_module__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__about_router__["a" /* AboutRouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_banner_banner_module__["a" /* BannerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__about_component__["a" /* AboutComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_about_service__["a" /* AboutUsService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/about.module.js.map

/***/ },

/***/ 719:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
];
var AboutRouterModule = (function () {
    function AboutRouterModule() {
    }
    AboutRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRouterModule);
    return AboutRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/about.router.js.map

/***/ },

/***/ 720:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_contact__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactFormComponent = (function () {
    function ContactFormComponent(contactService, notificationsService, fb) {
        this.contactService = contactService;
        this.notificationsService = notificationsService;
        this.fb = fb;
        this.submitted = false;
        this.form = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_4__shared_validators__["c" /* StringValidator */].validate])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4), __WEBPACK_IMPORTED_MODULE_4__shared_validators__["c" /* StringValidator */].validate])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators__["a" /* EmailValidator */].validate, __WEBPACK_IMPORTED_MODULE_4__shared_validators__["c" /* StringValidator */].validate])],
            'subject': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required])],
            'message': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_4__shared_validators__["c" /* StringValidator */].validate])]
        });
        this.firstName = this.form.controls['firstName'];
        this.lastName = this.form.controls['lastName'];
        this.email = this.form.controls['email'];
        this.subject = this.form.controls['subject'];
        this.message = this.form.controls['message'];
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.contactModel = new __WEBPACK_IMPORTED_MODULE_1__models_contact__["a" /* Contact */]('', '', '', '', '');
    };
    ContactFormComponent.prototype.onSubmit = function (values) {
        var _this = this;
        var contactOperation;
        if (this.form.valid) {
            this.contactModel = new __WEBPACK_IMPORTED_MODULE_1__models_contact__["a" /* Contact */](this.firstName.value.trim(), this.lastName.value.trim(), this.email.value.trim(), this.subject.value.trim(), this.message.value.trim());
            contactOperation = this.contactService.send(this.contactModel);
            var successTitle = "Success!";
            var successMessage = "Message sent successfully!";
            this.notificationsService.success(successTitle, successMessage);
            this.form.reset();
            contactOperation.subscribe(function (contacts) {
                _this.contactModel = new __WEBPACK_IMPORTED_MODULE_1__models_contact__["a" /* Contact */]('', '', '', '', '');
            }, function (error) {
                var errorTitle = "Oops! Something went wrong..";
                var errorMessage = "Message was not sent!";
                _this.notificationsService.error(errorTitle, errorMessage);
            });
        }
    };
    ;
    ContactFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-form',
            template: __webpack_require__(958),
            styles: [__webpack_require__(986)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === 'function' && _c) || Object])
    ], ContactFormComponent);
    return ContactFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact-form.component.js.map

/***/ },

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_siteSettings_service__ = __webpack_require__(437);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactInfoComponent = (function () {
    function ContactInfoComponent(siteSettingsService) {
        this.siteSettingsService = siteSettingsService;
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.siteSettingsService.getSettings()
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.settings = response;
        });
    };
    ContactInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-info',
            template: __webpack_require__(959),
            styles: [__webpack_require__(987)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_siteSettings_service__["a" /* SiteSettingsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_siteSettings_service__["a" /* SiteSettingsService */]) === 'function' && _a) || Object])
    ], ContactInfoComponent);
    return ContactInfoComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact-info.component.js.map

/***/ },

/***/ 722:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_form_contact_form_component__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_router__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_banner_banner_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_google_maps_core__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_map_component__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_info_contact_info_component__ = __webpack_require__(721);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactUsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ContactUsModule = (function () {
    function ContactUsModule() {
    }
    ContactUsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__contact_us_router__["a" /* ContactUsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_banner_banner_module__["a" /* BannerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDN-_oub4aZ1Ql607_wbx2eoRqwAHHFeS0'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_form_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_3__contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_info_contact_info_component__["a" /* ContactInfoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_8__services__["b" /* SiteSettingsService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsModule);
    return ContactUsModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact-us.module.js.map

/***/ },

/***/ 723:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_component__ = __webpack_require__(435);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactUsRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_2__contact_us_component__["a" /* ContactUsComponent */] }
];
var ContactUsRouterModule = (function () {
    function ContactUsRouterModule() {
    }
    ContactUsRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsRouterModule);
    return ContactUsRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact-us.router.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
        this.title = 'Our place';
        this.lat = 42.650847;
        this.lng = 23.3772423;
        this.zoom = 16;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'location-map',
            template: __webpack_require__(961),
            styles: [__webpack_require__(989)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapComponent);
    return MapComponent;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/map.component.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    return Contact;
}());
;
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/contact.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_service__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__siteSettings_service__ = __webpack_require__(437);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__siteSettings_service__["a"]; });


//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_router__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_carousel__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__slider_slider_component__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_router__["a" /* HomeRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_carousel__["CarouselModule"].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__slider_slider_component__["a" /* SliderComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/home.module.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] }
];
var HomeRouterModule = (function () {
    function HomeRouterModule() {
    }
    HomeRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRouterModule);
    return HomeRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/home.router.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent(authService) {
        this.authService = authService;
        this.slideHeight = window.innerHeight;
        this.myInterval = 5000;
        this.noWrapSlides = false;
        this.slides = [];
        this.state = 'inactive';
        this.addSlide('../../../assets/images/slider/slide-03.jpg', 'homepage-background');
    }
    SliderComponent.prototype.addSlide = function (imageUrl, caption) {
        this.slides.push({
            image: imageUrl,
            text: caption
        });
    };
    SliderComponent.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    SliderComponent.prototype.ngOnInit = function () {
        this.isUserLoggedIn = this.authService.isLoggedIn();
    };
    SliderComponent.prototype.ngDoCheck = function () {
        this.isUserLoggedIn = this.authService.isLoggedIn();
    };
    SliderComponent.prototype.onResize = function (event) {
        this.slideHeight = window.innerHeight;
    };
    SliderComponent.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sleep(1000).then(function () {
            _this.state = 'active';
        });
    };
    SliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-slider',
            template: __webpack_require__(963),
            styles: [__webpack_require__(991)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInLeft', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 0,
                        transform: 'translate3d(-50%, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1,
                        transform: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s 500ms ease-in-out')
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInRight', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 0,
                        transform: 'translate3d(50%, 0, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1,
                        transform: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1s 1300ms ease-in-out')
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInUp', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 0,
                        transform: 'translate3d(0, 100%, 0)'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        opacity: 1,
                        transform: 'none'
                    })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('1.3s 2000ms ease-in-out')
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], SliderComponent);
    return SliderComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/slider.component.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ourservices_router__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ourservices_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ourservices_services__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_banner_banner_module__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OurServicesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OurServicesModule = (function () {
    function OurServicesModule() {
    }
    OurServicesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ourservices_router__["a" /* OurServicesRouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_banner_banner_module__["a" /* BannerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__ourservices_component__["a" /* OurservicesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_ourservices_services__["a" /* OurServicesService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], OurServicesModule);
    return OurServicesModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/ourservices.module.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ourservices_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OurServicesRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_1__ourservices_component__["a" /* OurservicesComponent */] },
];
var OurServicesRouterModule = (function () {
    function OurServicesRouterModule() {
    }
    OurServicesRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], OurServicesRouterModule);
    return OurServicesRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/ourservices.router.js.map

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us_contact_us_module__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_module__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testimonials_testimonials_module__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ourservices_ourservices_module__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ourservices_services_ourservices_services__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_services_about_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__testimonials_services_testimonial_service__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__ourservices_ourservices_module__["a" /* OurServicesModule */],
                __WEBPACK_IMPORTED_MODULE_4__testimonials_testimonials_module__["a" /* TestimonialModule */],
                __WEBPACK_IMPORTED_MODULE_3__about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_2__contact_us_contact_us_module__["a" /* ContactUsModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ourservices_services_ourservices_services__["a" /* OurServicesService */],
                __WEBPACK_IMPORTED_MODULE_8__about_services_about_service__["a" /* AboutUsService */],
                __WEBPACK_IMPORTED_MODULE_9__testimonials_services_testimonial_service__["a" /* TestimonialService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/pages.module.js.map

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testimonials_router__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testimonials_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_banner_banner_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_testimonial_service__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestimonialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestimonialModule = (function () {
    function TestimonialModule() {
    }
    TestimonialModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__testimonials_router__["a" /* TestimonialsRouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_components_banner_banner_module__["a" /* BannerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__testimonials_component__["a" /* TestimonialsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_testimonial_service__["a" /* TestimonialService */]
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], TestimonialModule);
    return TestimonialModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/testimonials.module.js.map

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__testimonials_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestimonialsRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'testimonials', component: __WEBPACK_IMPORTED_MODULE_1__testimonials_component__["a" /* TestimonialsComponent */] },
];
var TestimonialsRouterModule = (function () {
    function TestimonialsRouterModule() {
    }
    TestimonialsRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TestimonialsRouterModule);
    return TestimonialsRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/testimonials.router.js.map

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_banner__ = __webpack_require__(441);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_banner__["a" /* Banner */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__models_banner__["a" /* Banner */]) === 'function' && _a) || Object)
    ], BannerComponent.prototype, "banner", void 0);
    BannerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'banner',
            template: __webpack_require__(966),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__(994)]
        }), 
        __metadata('design:paramtypes', [])
    ], BannerComponent);
    return BannerComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/banner.component.js.map

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.isUserLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__(967),
            styles: [__webpack_require__(995)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/footer.component.js.map

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(authService) {
        this.authService = authService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authService.isLoggedIn();
    };
    NavigationComponent.prototype.ngDoCheck = function () {
        this.isLogged = this.authService.isLoggedIn();
    };
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__(968),
            styles: [__webpack_require__(996)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavigationComponent);
    return NavigationComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/navigation.component.js.map

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_spinner__ = __webpack_require__(442);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PreloaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderComponent = (function () {
    function PreloaderComponent(spinnerService) {
        var _this = this;
        this.spinnerService = spinnerService;
        spinnerService.isLoading$.subscribe(function (newBool) { _this.loading = newBool; });
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'preloader',
            template: __webpack_require__(969),
            styles: [__webpack_require__(997)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_spinner__["a" /* SpinnerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_spinner__["a" /* SpinnerService */]) === 'function' && _a) || Object])
    ], PreloaderComponent);
    return PreloaderComponent;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/preloader.component.js.map

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ArrayFormatterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArrayFormatterPipe = (function () {
    function ArrayFormatterPipe() {
    }
    ArrayFormatterPipe.prototype.transform = function (value, args) {
        var keyArr = Object.keys(value), dataArr = [];
        keyArr.forEach(function (key) {
            dataArr.push(value[key]);
        });
        return dataArr;
    };
    ArrayFormatterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'arrayFormatter'
        }), 
        __metadata('design:paramtypes', [])
    ], ArrayFormatterPipe);
    return ArrayFormatterPipe;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/array-values.pipe.js.map

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: "dataFilter"
        }), 
        __metadata('design:paramtypes', [])
    ], DataFilterPipe);
    return DataFilterPipe;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/data-filter.pipe.js.map

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateFormatterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateFormatterPipe = (function () {
    function DateFormatterPipe() {
    }
    DateFormatterPipe.prototype.transform = function (date, args) {
        var d = new Date(date);
        return __WEBPACK_IMPORTED_MODULE_1_moment__(d).format('DD/MM/YYYY');
    };
    DateFormatterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatter'
        }), 
        __metadata('design:paramtypes', [])
    ], DateFormatterPipe);
    return DateFormatterPipe;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/date-formatter.pipe.js.map

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_values_pipe__ = __webpack_require__(739);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__array_values_pipe__["a"]; });

//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/auth.guard.js.map

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloader_service__ = __webpack_require__(745);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__preloader_service__["a"]; });

//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PreloaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderService = (function () {
    function PreloaderService() {
    }
    PreloaderService.registerLoader = function (method) {
        PreloaderService.loaders.push(method);
    };
    PreloaderService.clear = function () {
        PreloaderService.loaders = [];
    };
    PreloaderService.load = function () {
        return new Promise(function (resolve, reject) {
            PreloaderService.executeAll(resolve);
        });
    };
    PreloaderService.executeAll = function (done) {
        setTimeout(function () {
            Promise.all(PreloaderService.loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    PreloaderService.loaders = [];
    PreloaderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], PreloaderService);
    return PreloaderService;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/preloader.service.js.map

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EqualPasswordsValidator; });
var EqualPasswordsValidator = (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/equalPasswords.validator.js.map

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StringValidator; });
var StringValidator = (function () {
    function StringValidator() {
    }
    StringValidator.validate = function (c) {
        if (c.value) {
            if (c.value.trim() == '') {
                return {
                    validateString: {
                        valid: false
                    }
                };
            }
            else {
                return null;
            }
        }
    };
    return StringValidator;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/string.validator.js.map

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/user.model.js.map

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_router__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_uploader__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_uploader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_uploader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgotten_forgotten_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_factory_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__(448);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__users_router__["a" /* UsersRouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_uploader__["NgUploaderModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__forgotten_forgotten_component__["a" /* ForgottenComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_11__services_user_factory_service__["a" /* UserFactoryService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/users.module.js.map

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgotten_forgotten_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_bills_bills_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_auth__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UsersRouterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgotten-password', component: __WEBPACK_IMPORTED_MODULE_4__forgotten_forgotten_component__["a" /* ForgottenComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_auth__["b" /* AuthGuard */]] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_auth__["b" /* AuthGuard */]] },
    { path: 'user-bills', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_bills_bills_component__["a" /* BillsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__shared_services_auth__["b" /* AuthGuard */]] }
];
var UsersRouterModule = (function () {
    function UsersRouterModule() {
    }
    UsersRouterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersRouterModule);
    return UsersRouterModule;
}());
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/users.router.js.map

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/environment.js.map

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/polyfills.js.map

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__preloader__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__preloader__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__spinner__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__http__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__http__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__auth__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__auth__["b"]; });




//# sourceMappingURL=D:/ProgramingTelerikStuff/CashFlowAngular2/client/index.js.map

/***/ },

/***/ 949:
/***/ function(module, exports) {

module.exports = "<preloader></preloader>\r\n<div id=\"page\">\r\n    <app-navigation></app-navigation>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n<simple-notifications [options]=\"notificationOptions\"></simple-notifications>\r\n"

/***/ },

/***/ 950:
/***/ function(module, exports) {

module.exports = "<app-dashboard>\r\n    <div class=\"db-accounts-page\">\r\n        <div class=\"white-box-d\">\r\n            <div class=\"white-box-d-header\">\r\n                <h3>My Accounts:</h3>\r\n            </div>\r\n            <div class=\"white-box-d-content\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Add Account</button>\r\n\r\n                <div class=\"row\">\r\n                    <h2 class=\"col-xs-6\">List of accounts:</h2>\r\n                    <div class=\"col-xs-2\">\r\n                        <label class=\"label-control\">Rows on page</label>\r\n                        <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                            <option [ngValue]=\"5\">5</option>\r\n                            <option [ngValue]=\"10\">10</option>\r\n                            <option [ngValue]=\"15\">15</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <div class=\"row\">\r\n                            <label class=\"col-xs-12 label-control\">Sort by</label>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"row\">\r\n                                <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                                    <option ngValue=\"name\">Name</option>\r\n                                    <option ngValue=\"type\">Type</option>\r\n                                    <option ngValue=\"amount\">Amount</option>\r\n                                    <option ngValue=\"currency\">Currency</option>\r\n                                    <option ngValue=\"dateCreated\">Date Created</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <div class=\"row\">\r\n                                <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                                    <option ngValue=\"asc\">Ascending</option>\r\n                                    <option ngValue=\"desc\">Descending</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">Account information</div>\r\n\r\n                    <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                           [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width: 10%\"></th>\r\n                                <th style=\"width: 20%\">\r\n                                    <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                                </th>\r\n                                <th style=\"width: 30%\">\r\n                                    <mfDefaultSorter by=\"type\">Type</mfDefaultSorter>\r\n                                </th>\r\n                                <th style=\"width: 10%\">\r\n                                    <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                                </th>\r\n                                <th style=\"width: 20%\">\r\n                                    <mfDefaultSorter by=\"currency\">Currency</mfDefaultSorter>\r\n                                </th>\r\n                                <th style=\"width: 10%\">\r\n                                    <mfDefaultSorter by=\"dateCreated\">Date Created</mfDefaultSorter>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of mf.data\">\r\n                                <td>\r\n                                    <button (click)=\"edit(item._id)\" class=\"btn btn-primary\">\r\n                                        <i class=\"fa fa-pencil-square-o\"></i>\r\n                                    </button>\r\n                                </td>\r\n                                <td>{{item.name}}</td>\r\n                                <td>{{item.type}}</td>\r\n                                <td class=\"text-right\">{{item.amount}}</td>\r\n                                <td>{{item.currency | uppercase}}</td>\r\n                                <td>{{item.dateCreated | dateFormatter }}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"5\">\r\n                                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                            </td>\r\n                        </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-dashboard>\r\n\r\n<!-- Edit Form -->\r\n<div bsModal #childModalEdit=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Edit Account</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <form (ngSubmit)=\"updateAccount()\" class=\"form-horizontal\" *ngIf=\"accountForEdit\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Name</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input name=\"name\" [(ngModel)]=\"accountForEdit.name\" type=\"text\" class=\"form-control\" >\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount ($USD)</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input name=\"amount\" [(ngModel)]=\"accountForEdit.amount\" type=\"text\" class=\"form-control\" id=\"inputAmount3\" >\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <button  type=\"submit\" class=\"btn-purple btn-auth\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Add From -->\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Create New Account</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!name.valid && name.touched), 'has-success': (name.valid && name.touched)}\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Name</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input [formControl]=\"name\" type=\"text\" class=\"form-control\" >\r\n                            <span *ngIf=\"!name.valid && name.touched\" class=\"help-block sub-little-text\">Invalid name!</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!amount.valid && amount.touched), 'has-success': (amount.valid && amount.touched)}\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount ($USD)</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input [formControl]=\"amount\" type=\"text\" class=\"form-control\" id=\"inputAmount3\" >\r\n                            <span *ngIf=\"!amount.valid && amount.touched\" class=\"help-block sub-little-text\">Invalid amount!</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn-purple btn-auth\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 951:
/***/ function(module, exports) {

module.exports = "<app-dashboard>\r\n    <div class=\"white-box-d\">\r\n        <div class=\"white-box-d-header\">\r\n            <h3>My Bills:</h3>\r\n        </div>\r\n        <div class=\"white-box-d-content\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Add Bill</button>\r\n\r\n            <div class=\"row\">\r\n                <h2 class=\"col-xs-6\">List of bills:</h2>\r\n                <div class=\"col-xs-2\">\r\n                    <label class=\"label-control\">Rows on page</label>\r\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                        <option [ngValue]=\"5\">5</option>\r\n                        <option [ngValue]=\"10\">10</option>\r\n                        <option [ngValue]=\"15\">15</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"row\">\r\n                        <label class=\"col-xs-12 label-control\">Sort by</label>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"row\">\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                                <option ngValue=\"category\">Category</option>\r\n                                <option ngValue=\"amount\">Amount</option>\r\n                                <option ngValue=\"recurrence\">Recurrence</option>\r\n                                <!--<option [ngValue]=\"sortByWordLength\">City</option>-->\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-6\">\r\n                        <div class=\"row\">\r\n                            <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                                <option ngValune=\"asc\">Ascending</option>\r\n                                <option ngValue=\"desc\">Descending</option>\r\n                                <!--<option ngValue=\"badValue\">Bad value</option>-->\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Your Bills</div>\r\n\r\n                <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n                       [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th style=\"width: 10%\"></th>\r\n                        <th style=\"width: 20%\">\r\n                            <mfDefaultSorter by=\"category\">Category</mfDefaultSorter>\r\n                        </th>\r\n                        <th style=\"width: 40%\">\r\n                            <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                        </th>\r\n                        <th style=\"width: 10%\">\r\n                            <mfDefaultSorter by=\"recurrence\">Recurrence</mfDefaultSorter>\r\n                        </th>\r\n                        <!--<th style=\"width: 20%\">\r\n                            <mfDefaultSorter [by]=\"sortByWordLength\">City</mfDefaultSorter>\r\n                        </th>-->\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let item of mf.data\">\r\n                        <td>\r\n                            <button (click)=\"edit(item)\" class=\"btn btn-primary\">Edit</button>\r\n                        </td>\r\n                        <td>{{item.category}}</td>\r\n                        <td>{{item.amount}}</td>\r\n                        <td class=\"text-right\">{{item.recurrence}}</td>\r\n                        <!--<td>{{item.notes | uppercase}}</td>-->\r\n                    </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"5\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</app-dashboard>\r\n\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4 class=\"modal-title\">Create New Bill</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputCategory3\" class=\"col-sm-12 control-label\">Category</label>\r\n\r\n                <select class=\"form-control\" [(ngModel)]=\"catModel\">\r\n                    <option *ngFor=\"let category of billCategories\" [value]=\"category.name\" selected=\"category.name === currentCategory ? category.name : ''\">{{category.name}}</option>\r\n                </select>\r\n                <div>{{currentCategory}}</div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputRecurrence3\" class=\"col-sm-12 control-label\">Recurrence</label>\r\n\r\n                <select class=\"form-control\" [(ngModel)]=\"recModel\">\r\n                    <option *ngFor=\"let rec of billRecurrences\" [value]=\"rec.name\">{{rec.name}}</option>\r\n                </select>\r\n            </div>\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!amount.valid && amount.touched), 'has-success': (amount.valid && amount.touched)}\">\r\n                    <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"amount\" type=\"text\" class=\"form-control\" id=\"inputAmount3\" >\r\n                        <span *ngIf=\"!amount.valid && amount.touched\" class=\"help-block sub-little-text\">Invalid amount!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!startDueDate.valid && startDueDate.touched), 'has-success': (startDueDate.valid && startDueDate.touched)}\">\r\n                    <label for=\"inputStartDueDate3\" class=\"col-sm-12 control-label\">Start Due Date</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <ng2-datepicker formControlName=\"startDueDate\"></ng2-datepicker>\r\n                        <span *ngIf=\"!startDueDate.valid && startDueDate.touched\" class=\"help-block sub-little-text\">Invalid Date!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!endDueDate.valid && endDueDate.touched), 'has-success': (endDueDate.valid && endDueDate.touched)}\">\r\n                    <label for=\"inputEndDueDate3\" class=\"col-sm-12 control-label\">End Due Date</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <ng2-datepicker formControlName=\"endDueDate\"></ng2-datepicker>\r\n                        <span *ngIf=\"!endDueDate.valid && endDueDate.touched\" class=\"help-block sub-little-text\">Invalid Date!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!notes.valid && notes.touched), 'has-success': (notes.valid && notes.touched)}\">\r\n                    <label for=\"inputNotes3\" class=\"col-sm-12 control-label\">Notes</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <textarea [formControl]=\"notes\" class=\"form-control\" rows=\"4\" id=\"inputNotes3\" cols=\"1\">Your notes here...</textarea>\r\n                        <span *ngIf=\"!notes.valid && notes.touched\" class=\"help-block sub-little-text\">Invalid Notes!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button [disabled]=\"!form.valid || catModel === '' || recModel === '' \" type=\"submit\" class=\"btn-purple btn-auth\">Add</button>\r\n                    </div>\r\n            </div>\r\n\r\n            </form>\r\n\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <h4 class=\"modal-title\">Edit Bill</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputCategory3\" class=\"col-sm-12 control-label\">Category</label>\r\n\r\n                <select class=\"form-control\" [(ngModel)]=\"catModel\">\r\n                    <option *ngFor=\"let category of billCategories\" [value]=\"category.name\">{{category.name}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputRecurrence3\" class=\"col-sm-12 control-label\">Recurrence</label>\r\n\r\n                <select class=\"form-control\" [(ngModel)]=\"recModel\">\r\n                    <option *ngFor=\"let rec of billRecurrences\" [value]=\"rec.name\">{{rec.name}}</option>\r\n                </select>\r\n            </div>\r\n\r\n             <div class=\"form-group row\">\r\n                <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount</label>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <input [(ngModel)]=\"amountModel\" type=\"text\" class=\"form-control\" id=\"inputAmount3\" >\r\n                </div>\r\n            </div>\r\n            <!--<div class=\"col-sm-12\">\r\n                <label for=\"inputStartDueDate3\" class=\"col-sm-12 control-label\">Start Due Date</label>\r\n\r\n                <ng2-datepicker [(ngModel)]=\"startDateModel\"></ng2-datepicker>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <label for=\"inputEndDueDate3\" class=\"col-sm-12 control-label\">End Due Date</label>\r\n\r\n                <ng2-datepicker [(ngModel)]=\"endDateModel\"></ng2-datepicker>\r\n            </div>-->\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputNotes3\" class=\"col-sm-12 control-label\">Notes</label>\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <input [(ngModel)]=\"notesModel\" type=\"text\" class=\"form-control\" id=\"inputNotes3\" >\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-12\">\r\n                <button type=\"button\" class=\"btn-purple btn-auth\" (click)=\"OnUpdateClick()\">Update</button>\r\n            </div>\r\n\r\n\r\n<!--\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!amount.valid && amount.touched), 'has-success': (amount.valid && amount.touched)}\">\r\n                    <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"amount\" type=\"text\" class=\"form-control\" id=\"inputAmount3\" >\r\n                        <span *ngIf=\"!amount.valid && amount.touched\" class=\"help-block sub-little-text\">Invalid amount!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!startDueDate.valid && startDueDate.touched), 'has-success': (startDueDate.valid && startDueDate.touched)}\">\r\n                    <label for=\"inputStartDueDate3\" class=\"col-sm-12 control-label\">Start Due Date</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <ng2-datepicker formControlName=\"startDueDate\"></ng2-datepicker>\r\n                        <span *ngIf=\"!startDueDate.valid && startDueDate.touched\" class=\"help-block sub-little-text\">Invalid Date!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!endDueDate.valid && endDueDate.touched), 'has-success': (endDueDate.valid && endDueDate.touched)}\">\r\n                    <label for=\"inputEndDueDate3\" class=\"col-sm-12 control-label\">End Due Date</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <ng2-datepicker formControlName=\"endDueDate\"></ng2-datepicker>\r\n                        <span *ngIf=\"!endDueDate.valid && endDueDate.touched\" class=\"help-block sub-little-text\">Invalid Date!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!notes.valid && notes.touched), 'has-success': (notes.valid && notes.touched)}\">\r\n                    <label for=\"inputNotes3\" class=\"col-sm-12 control-label\">Notes</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <textarea [formControl]=\"notes\" class=\"form-control\" rows=\"4\" id=\"inputNotes3\" cols=\"1\">Your notes here...</textarea>\r\n                        <span *ngIf=\"!notes.valid && notes.touched\" class=\"help-block sub-little-text\">Invalid Notes!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button [disabled]=\"!form.valid || catModel === '' || recModel === '' \" type=\"submit\" class=\"btn-purple btn-auth\">Update</button>\r\n                    </div>\r\n            </div>\r\n\r\n            </form>-->\r\n\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 952:
/***/ function(module, exports) {

module.exports = "<div id=\"dashboard\" class=\"dashboard-main\" *ngIf=\"isUserLoggedIn\">\r\n    <dashboard-sidebar></dashboard-sidebar>\r\n    <div class=\"main-panel\">\r\n        <dashboard-menu></dashboard-menu>\r\n\r\n        <div class=\"content\">\r\n            <div class=\"container-fluid\">\r\n                <ng-content></ng-content>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 953:
/***/ function(module, exports) {

module.exports = "<app-dashboard>\r\n    <p>\r\n        edit-income works!\r\n    </p>\r\n\r\n    <div class=\"user-profile-page\">\r\n        <div class=\"white-box-d\">\r\n            <div class=\"white-box-d-header\">\r\n                <h3>My Income</h3>\r\n            </div>\r\n\r\n            <form [formGroup]=\"editUserIncomeForm\" (ngSubmit)=\"onSubmit(editUserIncomeForm.value)\" class=\"form-horizontal col-sm-12\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-sm-12 control-label\">Company</label>\r\n                    <span>{{userIncome.company}}</span>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n    <!--<div class=\"form-group row\">\r\n                    <label class=\"col-sm-12 control-label\">Email</label>\r\n                    <span>{{user.email}}</span>\r\n                </div>\r\n\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!firstName.valid && firstName.touched && inEditMode),\r\n                             'has-success': (firstName.valid && firstName.touched && inEditMode)}\">\r\n                    <label for=\"inputFirstName3\" class=\"col-sm-12 control-label\">First Name</label>\r\n                    <span *ngIf=\"!inEditMode\">{{user.firstName}}</span>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input *ngIf=\"inEditMode\" [(ngModel)]=\"user.firstName\" [formControl]=\"firstName\" type=\"text\" class=\"form-control\" id=\"inputFirstName3\">\r\n\r\n                        <span *ngIf=\"!firstName.valid && firstName.touched && inEditMode && firstName.hasError('required')\" class=\"help-block sub-little-text\">\r\n                                FirstName cannot be empty.\r\n                            </span>\r\n                        <span *ngIf=\"!firstName.valid && inEditMode && (firstName.hasError('minlength') || firstName.hasError('maxlength'))\" class=\"help-block sub-little-text\">\r\n                                FirstName must be between 3 and 30 symbols.\r\n                            </span>\r\n                        <span *ngIf=\"!firstName.valid && inEditMode && (firstName.hasError('pattern') || firstName.hasError('maxlength'))\" class=\"help-block sub-little-text\">\r\n                                FirstName must contain letters only.\r\n                            </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!lastName.valid && lastName.touched && inEditMode),\r\n                             'has-success': (lastName.valid && lastName.touched && inEditMode)}\">\r\n                    <label for=\"inputLastName3\" class=\"col-sm-12 control-label\">Last Name</label>\r\n                    <span *ngIf=\"!inEditMode\">{{user.lastName}}</span>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input *ngIf=\"inEditMode\" [(ngModel)]=\"user.lastName\" [formControl]=\"lastName\" type=\"text\" class=\"form-control\" id=\"inputLastName3\">\r\n                        <span *ngIf=\"!lastName.valid && lastName.touched && inEditMode && lastName.hasError('required')\" class=\"help-block sub-little-text\">\r\n                                LastName cannot be empty.\r\n                            </span>\r\n                        <span *ngIf=\"!lastName.valid && inEditMode && (lastName.hasError('minlength') || lastName.hasError('maxlength'))\" class=\"help-block sub-little-text\">\r\n                                LastName must be between 3 and 30 symbols.\r\n                            </span>\r\n                        <span *ngIf=\"!lastName.valid && inEditMode && (lastName.hasError('pattern') || lastName.hasError('maxlength'))\" class=\"help-block sub-little-text\">\r\n                                LastName must contain letters only.\r\n                            </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!age.valid && age.touched && inEditMode),\r\n                             'has-success': (age.valid && age.touched && inEditMode)}\">\r\n                    <label for=\"inputAge3\" class=\"col-sm-12 control-label\">Age</label>\r\n                    <span *ngIf=\"!inEditMode\">{{user.age}}</span>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input *ngIf=\"inEditMode\" [(ngModel)]=\"user.age\" [formControl]=\"age\" type=\"text\" class=\"form-control\" id=\"inputAge3\">\r\n                        <span *ngIf=\"!age.valid && age.touched && inEditMode\" class=\"help-block sub-little-text\">Invalid Age!</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button *ngIf=\"inEditMode\" [disabled]=\"!editUserForm.valid\" type=\"submit\" class=\"btn-ghost btn-auth btn-ghost-tf btn-save\">Save\r\n                            </button>\r\n                        <button *ngIf=\"inEditMode\" (click)=\"toggleEditMode(false)\" type=\"button\" class=\"btn-ghost btn-auth btn-ghost-tf btn-leave\">Leave edit mode\r\n                            </button>\r\n                        <button *ngIf=\"!inEditMode\" (click)=\"toggleEditMode(true)\" type=\"button\" class=\"btn-ghost btn-auth btn-ghost-tf\">Edit Mode\r\n                            </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>-->\r\n</app-dashboard>"

/***/ },

/***/ 954:
/***/ function(module, exports) {

module.exports = "<app-dashboard>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"showChildModal()\">Add Income</button>\r\n\r\n    <div class=\"row\">\r\n        <h2 class=\"col-xs-6\"></h2>\r\n        <div class=\"col-xs-2\">\r\n            <label class=\"label-control\">Rows on page</label>\r\n            <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                <option [ngValue]=\"5\">5</option>\r\n                <option [ngValue]=\"10\">10</option>\r\n                <option [ngValue]=\"15\">15</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-xs-4\">\r\n            <div class=\"row\">\r\n                <label class=\"col-xs-12 label-control\">Sort by</label>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n                <div class=\"row\">\r\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"sortBy\">\r\n                        <option ngValue=\"company\">Company</option>\r\n                        <option ngValue=\"amount\">Amount</option>\r\n                        <option ngValue=\"recurrence\">Recurrence</option>\r\n                        <!--<option [ngValue]=\"sortByWordLength\">City</option>-->\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n                <div class=\"row\">\r\n                    <select class=\"form-control input-sm\" [(ngModel)]=\"sortOrder\">\r\n                        <option ngValune=\"asc\">Ascending</option>\r\n                        <option ngValue=\"desc\">Descending</option>\r\n                        <!--<option ngValue=\"badValue\">Bad value</option>-->\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Your Incomes</div>\r\n\r\n        <table class=\"table table-striped\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\"\r\n               [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n            <thead>\r\n            <tr>\r\n                <th style=\"width: 10%\"></th>\r\n                <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"company\">Company</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 40%\">\r\n                    <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                    <mfDefaultSorter by=\"recurrence\">Recurrence</mfDefaultSorter>\r\n                </th>\r\n                <!--<th style=\"width: 20%\">\r\n                    <mfDefaultSorter [by]=\"sortByWordLength\">City</mfDefaultSorter>\r\n                </th>-->\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"5\">\r\n                    Filter by name:\r\n                    <input class=\"form-control\" [(ngModel)]=\"filterQuery\"/>\r\n                    <div>{{filterQuery}}</div>\r\n                </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of mf.data\">\r\n                <td>\r\n                    <button (click)=\"edit(item)\" class=\"btn btn-warning\">Edit</button>\r\n                </td>\r\n                <td>{{item.company}}</td>\r\n                <td>{{item.amount}}</td>\r\n                <td class=\"text-right\">{{item.recurrence}}</td>\r\n                <!--<td>{{item.notes | uppercase}}</td>-->\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n                <td colspan=\"5\">\r\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </table>\r\n    </div>\r\n\r\n</app-dashboard>\r\n<div bsModal #childModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"hideChildModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n                <h4 class=\"modal-title\">Create New Income</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputRecurrence3\" class=\"col-sm-12 control-label\">Recurrence</label>\r\n\r\n                    <select class=\"form-control\" [(ngModel)]=\"recModel\">\r\n                    <option *ngFor=\"let account of accounts\" [value]=\"rec.name\">{{account.name}}</option>\r\n                </select>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"inputRecurrence3\" class=\"col-sm-12 control-label\">Accounts</label>\r\n\r\n                    <select class=\"form-control\" [(ngModel)]=\"recModel\">\r\n                    <option *ngFor=\"let rec of incomeRecurrences\" [value]=\"rec.name\">{{rec.name}}</option>\r\n                </select>\r\n                </div>\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!company.valid && company.touched), 'has-success': (company.valid && company.touched)}\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Company</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input [formControl]=\"company\" type=\"text\" class=\"form-control\" id=\"inputAmount3\">\r\n                            <span *ngIf=\"!company.valid && company.touched\" class=\"help-block sub-little-text\">Invalid company!</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!amount.valid && amount.touched), 'has-success': (amount.valid && amount.touched)}\">\r\n                        <label for=\"inputAmount3\" class=\"col-sm-12 control-label\">Amount</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input [formControl]=\"amount\" type=\"text\" class=\"form-control\" id=\"inputAmount3\">\r\n                            <span *ngIf=\"!amount.valid && amount.touched\" class=\"help-block sub-little-text\">Invalid amount!</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!startDate.valid && startDate.touched), 'has-success': (startDate.valid && startDate.touched)}\">\r\n                        <label for=\"inputStartDueDate3\" class=\"col-sm-12 control-label\">Start Date</label>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input [formControl]=\"startDate\" type=\"text\" class=\"form-control\" id=\"inputStartDueDate3\">\r\n                            <span *ngIf=\"!startDate.valid && startDate.touched\" class=\"help-block sub-little-text\">Invalid Date!</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn-purple btn-auth\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 955:
/***/ function(module, exports) {

module.exports = "<nav id=\"dashboard-top-nav\" class=\"navbar navbar-default navbar-fixed\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#user-nav\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Dashboard</a>\r\n        </div>\r\n        <div id=\"user-nav\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li>\r\n                    <a href=\"\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a routerLink=\"/account\">\r\n                        Account\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/logout\">\r\n                        Logout\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ },

/***/ 956:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"isLogged\" class=\"sidebar\" data-color=\"blue\" data-image=\"assets/img/sidebar-5.jpg\">\r\n    <div class=\"sidebar-wrapper\">\r\n        <div class=\"logo\">\r\n            <a routerLink=\"/\" class=\"simple-text\">\r\n                CashFlow\r\n            </a>\r\n        </div>\r\n\r\n        <ul class=\"nav\">\r\n            <li>\r\n                <a routerLink=\"/dashboard\" >\r\n                    <i class=\"fa fa-pie-chart fa-fw\"></i>\r\n                    <p>Dashboard</p>\r\n                </a>\r\n            </li>\r\n            <li >\r\n                <a routerLink=\"/user-accounts\" >\r\n                    <i class=\"fa fa-bank fa-fw\"></i>\r\n                    <p>My Accounts</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/user-bills\" >\r\n                    <i class=\"fa fa-newspaper-o fa-fw\"></i>\r\n                    <p>My Bills</p>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/user-income\" >\r\n                    <i class=\"fa fa-money fa-fw\"></i>\r\n                    <p>My Incomes</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\"\r\n             [ngClass]=\"{'show-hover-elem': showHoverElem }\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 957:
/***/ function(module, exports) {

module.exports = "<main id=\"content\" class=\"about-us-page\">\r\n    <banner [banner]=\"{imgUrl: '../../assets/images/banners/about-us.jpg', caption: 'We are CashFlow'}\"></banner>\r\n    <div class=\"about-intro-section container\">\r\n        <div class=\"wrapper\">\r\n            <div [@fadeIn]=\"state\" class=\"about-image col-sm-6\">\r\n                <figure>\r\n                    <div class=\"image-wrapper\">\r\n                        <img src=\"../../assets/images/about-intro.jpg\"/>\r\n                    </div>\r\n                </figure>\r\n            </div>\r\n            <div [@fadeIn]=\"state\" class=\"about-intro col-sm-6\">\r\n                <h2>Who We Are</h2>\r\n                <p>We are young and tough and we are trying to rock the world with this app.\r\n                    Unforunately we r using Angular 2\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"founders col-sm-12\">\r\n        <div class=\"container\">\r\n            <div class=\"title\">\r\n                <h2>Founders</h2>\r\n            </div>\r\n            <div [@fadeIn]=\"state\" *ngFor=\"let item of this.aboutDetails\" class=\"founders-list\">\r\n                <div *ngFor=\"let teamMember of this.item.team \" class=\"founder-wrapper col-sm-4\">\r\n                    <div class=\"image\">\r\n                        <img [src]=\"this.teamMember.avatar\" class=\"images\">\r\n                    </div>\r\n                    <div class=\"heading\">\r\n                        <h3>{{this.teamMember.name}}</h3>\r\n                    </div>\r\n                    <div class=\"position\">\r\n                        <h4>{{this.teamMember.jobTitle}}</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 958:
/***/ function(module, exports) {

module.exports = "<h2 class=\"title\">Get In Touch!</h2>\r\n<span class=\"underline-small\"></span>\r\n\r\n<form id=\"contact-page-form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal col-sm-12\">\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!firstName.valid && firstName.touched), 'has-success': (firstName.valid && firstName.touched)}\">\r\n        <label for=\"inputFirstName3\" class=\"col-sm-12 control-label\">First name</label>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <input [formControl]=\"firstName\" type=\"text\" class=\"form-control\" id=\"inputFirstName3\" >\r\n            <span *ngIf=\"!firstName.valid && firstName.touched\" class=\"help-block sub-little-text\">Invalid Name!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!lastName.valid && lastName.touched), 'has-success': (lastName.valid && lastName.touched)}\">\r\n        <label for=\"inputLastName3\" class=\"col-sm-12 control-label\">Last name</label>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <input [formControl]=\"lastName\" type=\"text\" class=\"form-control\" id=\"inputLastName3\" >\r\n            <span *ngIf=\"!lastName.valid && lastName.touched\" class=\"help-block sub-little-text\">Invalid Name!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n        <label for=\"inputEmail3\" class=\"col-sm-12 control-label\">Email</label>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" >\r\n            <span *ngIf=\"!email.valid && email.touched\" class=\"help-block sub-little-text\">Invalid Email!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!subject.valid && subject.touched), 'has-success': (subject.valid && subject.touched)}\">\r\n        <label for=\"inputSubject3\" class=\"col-sm-12 control-label\">Subject</label>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <input [formControl]=\"subject\" type=\"text\" class=\"form-control\" id=\"inputSubject3\" >\r\n            <span *ngIf=\"!subject.valid && subject.touched\" class=\"help-block sub-little-text\">Invalid Subject!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!message.valid && message.touched), 'has-success': (message.valid && message.touched)}\">\r\n        <label for=\"inputMessage3\" class=\"col-sm-12 control-label\">Message</label>\r\n\r\n        <div class=\"col-sm-12\">\r\n            <textarea [formControl]=\"message\" class=\"form-control\" id=\"inputMessage3\" ></textarea>\r\n            <span *ngIf=\"!message.valid && message.touched\" class=\"help-block sub-little-text\">Invalid Message!</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <div class=\"col-sm-12\">\r\n            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn-purple btn-auth\">Send</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ },

/***/ 959:
/***/ function(module, exports) {

module.exports = "<div class=\"settings-list\">\r\n    <ul>\r\n        <li class=\"col-sm-4\" *ngFor=\"let setting of settings\">\r\n            <div class=\"info-box\">\r\n                <div class=\"aio-icon-left\">\r\n                    <div class=\"aio-icon\">\r\n                        <i class=\"fa fa-{{setting.icon}} fa-fw\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"aio-block\">\r\n                    <div class=\"aio-header\">\r\n                        <h5>{{setting.title}}</h5>\r\n                    </div>\r\n                    <div class=\"aio-description\">\r\n                        <p>{{setting.value}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 960:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n    <banner [banner]=\"{imgUrl: '../../assets/images/banners/contact-us-background.jpg', caption: 'Contact'}\"></banner>\r\n\r\n    <div class=\"contact-us-page container\">\r\n        <div class=\"row-contact\">\r\n            <div>\r\n                <div class=\"inner\">\r\n                    <contact-info></contact-info>\r\n                </div>\r\n            </div>\r\n            <div id=\"location-map\" class=\"location col-sm-6\">\r\n                <div class=\"inner\">\r\n                    <location-map></location-map>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"contact-form col-sm-6\">\r\n                <div class=\"inner\">\r\n                    <contact-form></contact-form>\r\n                </div>\r\n            </div>            \r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n\r\n"

/***/ },

/***/ 961:
/***/ function(module, exports) {

module.exports = "<h2 class=\"title\">{{ title }}</h2>\r\n<span class=\"underline-small\"></span>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n\r\n<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n  <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n</sebm-google-map>\r\n"

/***/ },

/***/ 962:
/***/ function(module, exports) {

module.exports = "<home-slider></home-slider>\r\n\r\n"

/***/ },

/***/ 963:
/***/ function(module, exports) {

module.exports = "<div class=\"homepage-slider-overlay\"></div>\r\n<div class=\"homepage-slider-captions\">\r\n    <div class=\"container\">\r\n        <div>\r\n            <h1 [@fadeInLeft]=\"state\" id=\"homepage-slider-title\">CASH FLOW</h1>\r\n        </div>\r\n        <p [@fadeInRight]=\"state\" id=\"homepage-slider-subtitle\">The most advanced personal expense tracker</p>\r\n        <div [@fadeInUp]=\"state\" id=\"homepage-slider-buttons\">\r\n            <a *ngIf=\"!isUserLoggedIn\" routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn-ghost hvr-sweep-to-right\">\r\n                <span>Login or Register</span>\r\n            </a>\r\n            <a *ngIf=\"isUserLoggedIn\" routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"btn-ghost hvr-sweep-to-right\">\r\n                <span>Go to Dashboard</span>\r\n            </a>\r\n        </div>\r\n        <div class=\"homepage-slider-scroll\">\r\n            <span id=\"scroll-icon\">\r\n                <span class=\"dot\"></span>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-slider container-fluid\">\r\n    <div class=\"col-md-12\">\r\n        <carousel [interval]=\"myInterval\" [noWrap]=\"noWrapSlides\">\r\n            <slide *ngFor=\"let slidez of slides; let index=index\"\r\n                   [active]=\"slidez.active\"\r\n                   [style.height.px]=\"slideHeight\"\r\n                   (window:resize)=\"onResize($event)\">\r\n                <img class=\"center-block\" [src]=\"slidez.image\">\r\n                <div class=\"homepage-slider-clouds\"></div>\r\n            </slide>\r\n        </carousel>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 964:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"pg-table\">\r\n                <div class=\"hgroup\">\r\n                    <h1>Services</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"services-list\">\r\n        <div class=\"container\">\r\n            <div class=\"pricing-tables\">\r\n                <div [@fadeIn]=\"state\" class=\"pr-table col-sm-6\" *ngFor=\"let item of this.ourServicesDetails\">\r\n                    <div class=\"wrapper\">\r\n                        <div class=\"box\">\r\n                            <div class=\"header-top\">\r\n                                <h3>{{this.item.title}}</h3>\r\n                                <div class=\"coin-wrap\">\r\n                                    <div>\r\n                                        <span>{{this.item.price}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"description\">\r\n                                {{this.item.content}}\r\n                            </div>\r\n                            <div class=\"body-modules\">\r\n                                <ul>\r\n                                    <li *ngFor=\"let module of this.item.modules\">\r\n                                        {{this.module.title}}\r\n\r\n                                        <i *ngIf=\"this.module.isAvailable\" class=\"fa fa-check\"></i>\r\n                                        <i *ngIf=\"!this.module.isAvailable\" class=\"fa fa-close\"></i>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                            <div class=\"buttons\">\r\n                                <a *ngIf=\"this.item.type != 'Premium'\" routerLink=\"/register\"  class=\"btn-purple-small\">Start using right now!</a>\r\n                                <a *ngIf=\"this.item.type == 'Premium'\" routerLink=\"/contact-us\"  class=\"btn-purple-small\">Order</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</main>\r\n"

/***/ },

/***/ 965:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n\r\n    <!--<banner [banner]=\"{imgUrl: '../../assets/images/banners/testimonials-background.png', caption: 'Testimonials'}\"></banner>-->\r\n    <div class=\"page-title\">\r\n        <div class=\"container\">\r\n            <div class=\"pg-table\">\r\n                <div class=\"hgroup\">\r\n                    <h1>Testimonials</h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"page-testimonials\">\r\n        <div class=\"container\">\r\n            <div class=\"masonry\">\r\n                <div  [@fadeIn]=\"state\" class=\"item\" *ngFor=\"let item of this.testimonialDetails\">\r\n                    <div class=\"content\">\r\n                        <p>{{this.item.content}}</p>\r\n                    </div>\r\n                    <div class=\"testimonial-vcard\">\r\n                        <div class=\"image\">\r\n                            <span>\r\n                                <img [src]='this.item.avatar' class=\"images\">\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"text\">\r\n                            <span class=\"primary\">{{this.item.name}}</span>\r\n                            <br>\r\n                            <span class=\"secondary\">{{this.item.jobTitle}}</span>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n"

/***/ },

/***/ 966:
/***/ function(module, exports) {

module.exports = "<div class=\"page-banner\">\r\n  <img [src]=\"banner.imgUrl\" />\r\n\r\n    <div class=\"overlay\"></div>\r\n\r\n    <div class=\"caption\">\r\n        {{banner.caption}}\r\n        <span class=\"underline\"></span>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 967:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer navbar-inverse navbar-static-bottom\" >\r\n    <div class=\"container\">\r\n\r\n        <div class=\"socials col-sm-12\">\r\n            <ul class=\"social-network social-circle\">\r\n                <li><a href=\"#\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a href=\"#\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                <li><a href=\"#\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div class=\"ft-m col-sm-12\">\r\n            <div class=\"logo col-sm-6\">\r\n                <img src=\"../../../../assets/images/logo_pu.png\" />\r\n                <div class=\"copyright col-sm-8\">\r\n                    <p>CashFlow - premium expense tracking service</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"footer-menu col-sm-6\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li><a routerLink=\"/services\">Services</a></li>\r\n                    <li><a routerLink=\"/contact-us\">Contacts</a></li>\r\n                    <li><a routerLink=\"/about\">About</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ },

/***/ 968:
/***/ function(module, exports) {

module.exports = "<header *ngIf=\"!isLogged\" class=\"header-bar\">\r\n    <div class=\"container\">\r\n\r\n        <nav id=\"primary-menu\">\r\n            <div class=\"branding\">\r\n                <a href=\"/\">\r\n                    <!--<img src=\"../../assets/images/logo.png\" alt=\"logo\" />-->\r\n                </a>\r\n\r\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#primary-menu\" aria-expanded=\"false\">\r\n                    <span class=\"sr-only\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n            </div>\r\n            <ul id=\"menu\">\r\n                <li class=\"menu-item\">\r\n                    <a class=\"hvr-underline-from-left\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\r\n                </li>\r\n                <li class=\"menu-item\">\r\n                    <a class=\"hvr-underline-from-left\" routerLink=\"/about\" routerLinkActive=\"active\">About Us</a>\r\n                </li>\r\n                <li class=\"menu-item\">\r\n                    <a class=\"hvr-underline-from-left\" routerLink=\"/services\" routerLinkActive=\"active\">Services</a>\r\n                </li>\r\n                <li class=\"menu-item\">\r\n                    <a class=\"hvr-underline-from-left\" routerLink=\"/testimonials\" routerLinkActive=\"active\">Testimonials</a>\r\n                </li>\r\n                <li class=\"menu-item\">\r\n                    <a class=\"hvr-underline-from-left\" routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact us</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div id=\"navigation-widgets\">\r\n\r\n        </div>\r\n    </div>\r\n</header>\r\n"

/***/ },

/***/ 969:
/***/ function(module, exports) {

module.exports = "<div id=\"preloader\" *ngIf=\"loading\">\r\n    <div></div>\r\n</div>\r\n"

/***/ },

/***/ 970:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n    <div class=\"auth-main container\">\r\n        <div class=\"auth-block forgotten-password-component\">\r\n            <div class=\"title col-sm-12\">\r\n                <h1>CashFlow Forgotten Password</h1>\r\n                <span class=\"border\"></span>\r\n            </div>\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal col-sm-6\">\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n                    <label for=\"inputEmail3\" class=\"col-sm-12 control-label\">Email</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" >\r\n                        <span *ngIf=\"!email.valid && email.touched\" class=\"help-block sub-little-text\">Invalid Email!</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn-purple btn-auth\">Send</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"col-sm-12 login-block\">\r\n                <h2>Already have a CashFlow account? Sign in!</h2>\r\n                <a routerLink=\"/login\">\r\n                    <i class=\"fa fa-arrow-circle-o-left fa-fw\"></i>\r\n                    Back to Login\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ },

/***/ 971:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n    <div class=\"auth-main container\">\r\n        <div class=\"auth-block login-component\">\r\n            <div class=\"title col-sm-12\">\r\n                <h1>CashFlow Login</h1>\r\n                <span class=\"border\"></span>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <h3>Use your CashFlow account</h3>\r\n\r\n                <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!username.valid && username.touched), 'has-success': (username.valid && username.touched)}\">\r\n                        <label for=\"inputEmail3\" class=\"col-sm-12 control-label align-left\">Username</label>\r\n\r\n                        <div class=\"col-sm-10\">\r\n                            <input [formControl]=\"username\" type=\"text\" class=\"form-control\" id=\"inputEmail3\">\r\n                            <span *ngIf=\"!username.valid && username.touched && username.hasError('required')\" class=\"help-block sub-little-text\">Username cannot be empty.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n                        <div class=\"col-sm-10\">\r\n                            <div class=\"col-sm-6 password-wrap\">\r\n                                <label for=\"inputPassword3\" class=\"col-sm-12 control-label align-left\">Password</label>\r\n                            </div>\r\n                            <div class=\"col-sm-6 forgotten-pass-wrap\">\r\n                                <a routerLink=\"/forgotten-password\" class=\"forgot-pass\">Forgot password?</a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"col-sm-10\">\r\n                            <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\">\r\n                            <span *ngIf=\"!password.valid && password.touched && password.hasError('required')\" class=\"help-block sub-little-text\">Password cannot be empty.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"offset-sm-0 col-sm-10\">\r\n                            <button [disabled]=\"!form.valid\"  type=\"submit\" class=\"btn-purple btn-auth\">Sign in</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 social-login\">\r\n\r\n                <div class=\"al-share-auth col-sm-12 col-sm-offset-1\">\r\n                    <h3>Sign in with one click</h3>\r\n\r\n                    <ul class=\"al-share clearfix\">\r\n                        <li>\r\n                            <a routerLink=\"/login/facebook\" class=\"btn-simple btn-simple-facebook\">Facebook</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/login/twitter\" class=\"btn-simple btn-simple-twitter\">Twitter</a>\r\n                        </li>\r\n                        <li>\r\n                            <a routerLink=\"/login/google\" class=\"btn-simple btn-simple-google\">Google Plus</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-12 register-block\">\r\n                <h2>New to CashFlow?</h2>\r\n                <a routerLink=\"/register\">\r\n                    Create an account\r\n                </a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ },

/***/ 972:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 973:
/***/ function(module, exports) {

module.exports = "<app-dashboard>\r\n    <div class=\"user-profile-page\">\r\n        <div class=\"white-box-d\">\r\n            <div class=\"white-box-d-header\">\r\n                <h3>My Profile: {{user.username}}</h3>\r\n            </div>\r\n            <div class=\"white-box-d-content\">\r\n                <div class=\"image\">\r\n                    <img [src]=\"user.avatarUrl\" />\r\n\r\n                    <div class=\"col-sm-3\">\r\n                        <label >Change picture</label>\r\n                        <input type=\"file\"\r\n                               ngFileSelect\r\n                               [options]=\"options\"\r\n                               (onUpload)=\"handleUpload($event)\"\r\n                               (beforeUpload)=\"beforeUpload($event)\">\r\n                    </div>\r\n                </div>\r\n\r\n                <form [formGroup]=\"editUserForm\" (ngSubmit)=\"onSubmit(editUserForm.value)\" class=\"form-horizontal col-sm-12\">\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-12 control-label\">Username</label>\r\n                        <span>{{user.username}}</span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"col-sm-12 control-label\">Email</label>\r\n                        <span>{{user.email}}</span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\"\r\n                         [ngClass]=\"{'has-error': (!firstName.valid && firstName.touched && inEditMode),\r\n                             'has-success': (firstName.valid && firstName.touched && inEditMode)}\">\r\n                        <label for=\"inputFirstName3\" class=\"col-sm-12 control-label\">First Name</label>\r\n                        <span *ngIf=\"!inEditMode\">{{user.firstName}}</span>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input *ngIf=\"inEditMode\"\r\n                                   [(ngModel)]=\"user.firstName\"\r\n                                   [formControl]=\"firstName\" type=\"text\" class=\"form-control\" id=\"inputFirstName3\" >\r\n\r\n                            <span *ngIf=\"!firstName.valid && firstName.touched && inEditMode && firstName.hasError('required')\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                FirstName cannot be empty.\r\n                            </span>\r\n                            <span *ngIf=\"!firstName.valid && inEditMode && (firstName.hasError('minlength') || firstName.hasError('maxlength'))\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                FirstName must be between 3 and 30 symbols.\r\n                            </span>\r\n                            <span *ngIf=\"!firstName.valid && inEditMode && (firstName.hasError('pattern') || firstName.hasError('maxlength'))\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                FirstName must contain letters only.\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\"\r\n                         [ngClass]=\"{'has-error': (!lastName.valid && lastName.touched && inEditMode),\r\n                             'has-success': (lastName.valid && lastName.touched && inEditMode)}\">\r\n                        <label for=\"inputLastName3\" class=\"col-sm-12 control-label\">Last Name</label>\r\n                        <span *ngIf=\"!inEditMode\">{{user.lastName}}</span>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input *ngIf=\"inEditMode\"\r\n                                   [(ngModel)]=\"user.lastName\"\r\n                                   [formControl]=\"lastName\" type=\"text\" class=\"form-control\" id=\"inputLastName3\" >\r\n                            <span *ngIf=\"!lastName.valid && lastName.touched && inEditMode && lastName.hasError('required')\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                LastName cannot be empty.\r\n                            </span>\r\n                            <span *ngIf=\"!lastName.valid && inEditMode && (lastName.hasError('minlength') || lastName.hasError('maxlength'))\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                LastName must be between 3 and 30 symbols.\r\n                            </span>\r\n                            <span *ngIf=\"!lastName.valid && inEditMode && (lastName.hasError('pattern') || lastName.hasError('maxlength'))\"\r\n                                  class=\"help-block sub-little-text\">\r\n                                LastName must contain letters only.\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\"\r\n                         [ngClass]=\"{'has-error': (!age.valid && age.touched && inEditMode),\r\n                             'has-success': (age.valid && age.touched && inEditMode)}\">\r\n                        <label for=\"inputAge3\" class=\"col-sm-12 control-label\">Age</label>\r\n                        <span *ngIf=\"!inEditMode\">{{user.age}}</span>\r\n\r\n                        <div class=\"col-sm-12\">\r\n                            <input *ngIf=\"inEditMode\"\r\n                                   [(ngModel)]=\"user.age\"\r\n                                   [formControl]=\"age\" type=\"text\" class=\"form-control\" id=\"inputAge3\" >\r\n                    <span *ngIf=\"!age.valid && age.touched && inEditMode\"\r\n                          class=\"help-block sub-little-text\">Invalid Age!</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <button *ngIf=\"inEditMode\"\r\n                                    [disabled]=\"!editUserForm.valid\"\r\n                                    type=\"submit\" class=\"btn-ghost btn-auth btn-ghost-tf btn-save\">Save\r\n                            </button>\r\n                            <button *ngIf=\"inEditMode\"\r\n                                    (click)=\"toggleEditMode(false)\"\r\n                                    type=\"button\" class=\"btn-ghost btn-auth btn-ghost-tf btn-leave\">Leave edit mode\r\n                            </button>\r\n                            <button *ngIf=\"!inEditMode\"\r\n                                    (click)=\"toggleEditMode(true)\"\r\n                                    type=\"button\"\r\n                                    class=\"btn-ghost btn-auth btn-ghost-tf\">Edit Mode\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-dashboard>\r\n"

/***/ },

/***/ 974:
/***/ function(module, exports) {

module.exports = "<main id=\"content\">\r\n    <div class=\"auth-main container\">\r\n        <div class=\"auth-block register-component\">\r\n            <div class=\"title col-sm-12\">\r\n                <h1>CashFlow Registration</h1>\r\n                <span class=\"border\"></span>\r\n            </div>\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal col-sm-6\">\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!username.valid && username.touched), 'has-success': (username.valid && username.touched)}\">\r\n                    <label for=\"inputName3\" class=\"col-sm-12 control-label\">Name</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"username\" type=\"text\" class=\"form-control\" id=\"inputName3\" >\r\n                        <span *ngIf=\"!username.valid && username.touched && username.hasError('required')\" class=\"help-block sub-little-text\">Username cannot be empty.</span>\r\n                        <span *ngIf=\"!username.valid &&(username.hasError('minlength') || username.hasError('maxlength'))\" class=\"help-block sub-little-text\">Username must be between 3 and 30 symbols.</span>\r\n                        <span *ngIf=\"!username.valid &&(username.hasError('pattern') || username.hasError('maxlength'))\" class=\"help-block sub-little-text\">Username must be alphanumeric.</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\r\n                    <label for=\"inputEmail3\" class=\"col-sm-12 control-label\">Email</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" >\r\n                        <span *ngIf=\"!email.valid && email.touched\" class=\"help-block sub-little-text\">Enter a valid Email!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\r\n                    <label for=\"inputPassword3\" class=\"col-sm-12 control-label\">Password</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" >\r\n                        <span *ngIf=\"!password.valid && password.touched && password.hasError('required')\" class=\"help-block sub-little-text\">Password cannot be empty.</span>\r\n                        <span *ngIf=\"!password.valid &&(password.hasError('minlength') || password.hasError('maxlength'))\" class=\"help-block sub-little-text\">Password must be between 3 and 30 symbols.</span>\r\n                        <span *ngIf=\"!password.valid &&(password.hasError('pattern') || password.hasError('maxlength'))\" class=\"help-block sub-little-text\">Password must be alphanumeric.</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\" [ngClass]=\"{'has-error': (!repeatPassword.valid && repeatPassword.touched), 'has-success': (repeatPassword.valid && repeatPassword.touched)}\">\r\n                    <label for=\"inputPassword4\" class=\"col-sm-12 control-label\">Repeat</label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input [formControl]=\"repeatPassword\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" >\r\n                        <span *ngIf=\"!passwords.valid && (password.touched || repeatPassword.touched)\" class=\"help-block sub-little-text\">Passwords don't match.</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn-purple btn-auth\">Sign up</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <div class=\"col-sm-12 login-block\">\r\n                <h2>Already have a CashFlow account? Sign in!</h2>\r\n                <a routerLink=\"/login\">\r\n                    <i class=\"fa fa-arrow-circle-o-left fa-fw\"></i>\r\n                    Back to Login\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ },

/***/ 977:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 978:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 979:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 980:
/***/ function(module, exports) {

module.exports = "#dashboard:before {\n  content: '';\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url(\"../../assets/images/sky-bg.jpg\") no-repeat center center;\n  background-size: cover;\n  will-change: transform;\n  z-index: 0; }\n\n.dashboard-main {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  font: 14px/16px \"roboto-regular\", sans-serif; }\n\n.dashboard-main .main-panel {\n  /*background-color: #37a0fe;\r\n  background-image: none;\r\n  background: #37a0fe;\r\n  background: -webkit-linear-gradient(135deg,rgba(55,160,254, 0.5) 30%,rgba(136,70,253, 0.5) 100%);\r\n  background: linear-gradient(135deg,rgba(55,160,254, 0.8) 30%,rgba(136,70,253, 0.8) 100%);*/ }\n\n/*           Font Smoothing      */\nbody,\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6,\np,\n.navbar,\n.brand,\n.btn-simple,\n.alert,\na,\n.td-name,\ntd,\nbutton.close {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Roboto\",\"Helvetica Neue\",Arial,sans-serif;\n  font-weight: 400; }\n\nh1, .h1, h2, .h2, h3, .h3, h4, .h4 {\n  font-weight: 300;\n  margin: 30px 0 15px; }\n\nh1, .h1 {\n  font-size: 52px; }\n\nh2, .h2 {\n  font-size: 36px; }\n\nh3, .h3 {\n  font-size: 28px;\n  margin: 20px 0 10px; }\n\nh4, .h4 {\n  font-size: 22px;\n  line-height: 30px; }\n\nh5, .h5 {\n  font-size: 16px;\n  margin-bottom: 15px; }\n\nh6, .h6 {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\np {\n  font-size: 16px;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small, h1 .small, h2 .small, h3 .small, h4 .small, h5 .small, h6 .small, .h1 .small, .h2 .small, .h3 .small, .h4 .small, .h5 .small, .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.5; }\n\nh1 small, h2 small, h3 small, h1 .small, h2 .small, h3 .small {\n  font-size: 60%; }\n\nh1 .subtitle {\n  display: block;\n  margin: 0 0 30px; }\n\n.text-muted {\n  color: #9A9A9A; }\n\n/*     General overwrite     */\nbody,\n.wrapper {\n  min-height: 100vh;\n  position: relative; }\n\na {\n  color: #1DC7EA; }\n\na:hover, a:focus {\n  color: #42d0ed;\n  text-decoration: none; }\n\na:focus, a:active,\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"] > input[type=\"button\"]::-moz-focus-inner {\n  outline: 0; }\n\n.ui-slider-handle:focus,\n.navbar-toggle,\ninput:focus {\n  outline: 0 !important; }\n\n/*           Animations              */\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear; }\n\n.sidebar .nav a,\n.table > tbody > tr .td-actions .btn {\n  -webkit-transition: all 150ms ease-in;\n  transition: all 150ms ease-in; }\n\n.btn {\n  -webkit-transition: all 100ms ease-in;\n  transition: all 100ms ease-in; }\n\n.fa {\n  width: 18px;\n  text-align: center; }\n\n.margin-top {\n  margin-top: 50px; }\n\n.wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh; }\n\n.main-panel {\n  background: rgba(203, 203, 210, 0.15);\n  position: relative;\n  z-index: 2;\n  float: right;\n  width: calc(100% - 260px);\n  min-height: 100%; }\n\n.main-panel > .content {\n  padding: 30px 15px;\n  min-height: calc(100% - 123px); }\n\n.main-panel > .footer {\n  border-top: 1px solid #e7e7e7; }\n\n.main-panel .navbar {\n  margin-bottom: 0; }\n\n.sidebar,\n.main-panel {\n  overflow: auto;\n  max-height: 100%;\n  height: 100%;\n  -webkit-transition-property: top,bottom;\n  transition-property: top,bottom;\n  -webkit-transition-duration: .2s,.2s;\n  transition-duration: .2s,.2s;\n  -webkit-transition-timing-function: linear,linear;\n  transition-timing-function: linear,linear;\n  -webkit-overflow-scrolling: touch; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  background-color: #F5F5F5;\n  color: #888888;\n  cursor: not-allowed; }\n\n.input-group-btn .btn {\n  border-width: 1px;\n  padding: 9px 16px; }\n\n.input-group-btn .btn-default:not(.btn-fill) {\n  border-color: #DDDDDD; }\n\n.input-group-btn:last-child > .btn {\n  margin-left: 0; }\n\n.input-group-focus .input-group-addon {\n  border-color: #9A9A9A; }\n\n.alert {\n  border: 0;\n  border-radius: 0;\n  color: #FFFFFF;\n  padding: 10px 15px;\n  font-size: 14px; }\n\n.container .alert {\n  border-radius: 4px; }\n\n.navbar .alert {\n  border-radius: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 85px;\n  width: 100%;\n  z-index: 3; }\n\n.control-label {\n  text-align: left; }\n\n@media (min-width: 992px) {\n  .table-full-width {\n    margin-left: -15px;\n    margin-right: -15px; }\n  .table-responsive {\n    overflow: visible; } }\n\n@media (max-width: 991px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    -webkit-overflow-scrolling: touch; } }\n"

/***/ },

/***/ 981:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 982:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 983:
/***/ function(module, exports) {

module.exports = "#dashboard-top-nav {\n  background-color: #282828;\n  color: #fff;\n  border-radius: 0;\n  border-color: #282828;\n  padding: 4px 0px; }\n\n#dashboard-top-nav .navbar-brand,\n#dashboard-top-nav i,\n#dashboard-top-nav a {\n  color: #fff; }\n\n#dashboard-top-nav a:hover,\n#dashboard-top-nav i:hover {\n  text-transform: none;\n  color: #fff;\n  text-decoration: none; }\n"

/***/ },

/***/ 984:
/***/ function(module, exports) {

module.exports = "body.homepage .sidebar {\n  display: none; }\n\n.sidebar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 260px;\n  display: block;\n  z-index: 1;\n  color: #fff;\n  font-weight: 200;\n  background-size: cover;\n  background-position: center center; }\n\n.sidebar .sidebar-wrapper {\n  position: relative;\n  max-height: none;\n  min-height: 100%;\n  overflow: hidden;\n  width: 260px;\n  z-index: 4;\n  background-color: #282828; }\n\n.sidebar .sidebar-background {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center; }\n\n.sidebar .logo {\n  padding: 10px 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n\n.sidebar .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.sidebar .logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: block;\n  font-size: 18px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px; }\n\n.sidebar .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden; }\n\n.sidebar .logo-tim img {\n  width: 60px;\n  height: 60px; }\n\n.sidebar .nav {\n  margin-top: 20px; }\n\n.sidebar .nav li > a {\n  color: #FFFFFF;\n  margin: 5px 15px;\n  opacity: .86;\n  border-radius: 4px; }\n\n.sidebar .nav li:hover > a {\n  background: rgba(255, 255, 255, 0.13);\n  opacity: 1; }\n\n.sidebar .nav li.active > a {\n  color: #FFFFFF;\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.23); }\n\n.sidebar .nav p {\n  margin: 0;\n  line-height: 30px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.sidebar .nav i {\n  font-size: 28px;\n  float: left;\n  margin-right: 15px;\n  line-height: 30px;\n  width: 30px;\n  text-align: center; }\n\n.sidebar .logo,\nbody > .navbar-collapse .logo {\n  padding: 10px 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n\n.sidebar .logo p,\nbody > .navbar-collapse .logo p {\n  float: left;\n  font-size: 20px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  line-height: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.sidebar .logo .simple-text,\nbody > .navbar-collapse .logo .simple-text {\n  text-transform: uppercase;\n  padding: 5px 0px;\n  display: block;\n  font-size: 18px;\n  color: #FFFFFF;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px; }\n\n.sidebar .logo-tim,\nbody > .navbar-collapse .logo-tim {\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: block;\n  height: 61px;\n  width: 61px;\n  float: left;\n  overflow: hidden; }\n\n.sidebar .logo-tim img,\nbody > .navbar-collapse .logo-tim img {\n  width: 60px;\n  height: 60px; }\n\n.sidebar:after, .sidebar:before,\nbody > .navbar-collapse:after,\nbody > .navbar-collapse:before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2; }\n\n.sidebar:before,\nbody > .navbar-collapse:before {\n  opacity: .33;\n  background: #000000; }\n\n.sidebar:after,\nbody > .navbar-collapse:after {\n  background: #787878;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #787878), color-stop(100%, #343434));\n  background: -webkit-linear-gradient(top, #787878 0%, #343434 100%);\n  background: linear-gradient(to bottom, #787878 0%, #343434 100%);\n  background-size: 150% 150%;\n  z-index: 3;\n  opacity: 1; }\n\n.sidebar[data-image]:after, .sidebar.has-image:after,\nbody > .navbar-collapse[data-image]:after,\nbody > .navbar-collapse.has-image:after {\n  opacity: .77; }\n\n.sidebar[data-color=\"blue\"]:after,\nbody > .navbar-collapse[data-color=\"blue\"]:after {\n  background-color: #37a0fe;\n  background-image: none;\n  background: #37a0fe;\n  background: -webkit-linear-gradient(135deg, #37a0fe 30%, #8846fd 100%);\n  background: -webkit-linear-gradient(315deg, #37a0fe 30%, #8846fd 100%);\n  background: linear-gradient(135deg, #37a0fe 30%, #8846fd 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"azure\"]:after,\nbody > .navbar-collapse[data-color=\"azure\"]:after {\n  background: #1DC7EA;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #1DC7EA), color-stop(100%, #4091ff));\n  background: -webkit-linear-gradient(top, #1DC7EA 0%, #4091ff 100%);\n  background: linear-gradient(to bottom, #1DC7EA 0%, #4091ff 100%);\n  background-size: 150% 150%; }\n\n.sidebar[data-color=\"purple\"]:after,\nbody > .navbar-collapse[data-color=\"purple\"]:after {\n  background: #9368E9;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #9368E9), color-stop(100%, #943bea));\n  background: -webkit-linear-gradient(top, #9368E9 0%, #943bea 100%);\n  background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);\n  background-size: 150% 150%; }\n"

/***/ },

/***/ 985:
/***/ function(module, exports) {

module.exports = ".about-us-page .about-intro-section {\n  padding-top: 70px;\n  padding-bottom: 50px; }\n\n.about-us-page .about-image {\n  padding-left: 0;\n  padding-right: 30px; }\n\n.about-us-page .about-image figure {\n  max-width: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin: 0; }\n\n.about-us-page .about-image figure .image-wrapper {\n  display: inline-block;\n  vertical-align: top;\n  max-width: 100%;\n  line-height: 0; }\n\n.about-us-page .about-image figure img {\n  height: auto;\n  max-width: 100%;\n  vertical-align: top; }\n\n.about-us-page .about-intro h2 {\n  margin-bottom: 25px;\n  line-height: 40px;\n  color: #3b3f4a;\n  font: normal 500 34px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif; }\n\n.about-us-page .about-intro p {\n  font: normal 15px / 28px \"Open Sans\", Helvetica, Arial, Verdana, sans-serif;\n  color: #787d85; }\n\n.about-us-page .founders {\n  background: rgba(183, 191, 199, 0.1) none repeat scroll 0% 0%;\n  float: left;\n  position: relative;\n  width: 100%;\n  padding-top: 40px;\n  padding-bottom: 25px; }\n\n.about-us-page .founders .title h2 {\n  color: #3b3f4a;\n  font-size: 22px;\n  line-height: 32px;\n  font-family: roboto-medium; }\n\n.about-us-page .founder-wrapper:first-child {\n  padding-left: 0;\n  padding-right: 30px; }\n\n.about-us-page .founder-wrapper:last-child {\n  padding-right: 0;\n  padding-left: 30px; }\n\n.about-us-page .founder-wrapper .image {\n  width: 100%;\n  max-height: 290px;\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: inline-block; }\n\n.about-us-page .founder-wrapper .image img {\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05);\n  -webkit-transition: all .4s ease-in-out;\n  transition: all .4s ease-in-out;\n  width: 100%;\n  max-width: 100%;\n  display: block; }\n\n.about-us-page .founder-wrapper .heading h3 {\n  text-align: center;\n  color: #3b3f4a;\n  font-size: 18px;\n  text-transform: none; }\n\n.about-us-page .founder-wrapper .position h4 {\n  text-align: center;\n  color: #1ebbf0;\n  font: normal 15px / 28px \"Open Sans\", Helvetica, Arial, Verdana, sans-serif; }\n"

/***/ },

/***/ 986:
/***/ function(module, exports) {

module.exports = ".underline-small {\n  display: block;\n  border-style: solid;\n  border-bottom: 0px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 0px auto 20px;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n\n.title {\n  margin-bottom: 7px;\n  line-height: 32px;\n  color: #3b3f4a;\n  font: normal 500 30px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  text-transform: none;\n  text-align: center; }\n\n#contact-page-form input,\n#contact-page-form textarea {\n  display: block;\n  margin-bottom: 10px;\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  color: #000;\n  background: #fff;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: border-color .3s ease;\n  transition: border-color .3s ease;\n  height: auto;\n  border-radius: 0; }\n\n.control-label {\n  text-align: left; }\n"

/***/ },

/***/ 987:
/***/ function(module, exports) {

module.exports = ".settings-list ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.info-box {\n  display: inline-block; }\n\n.aio-icon-left {\n  display: table-cell;\n  vertical-align: top;\n  padding: 0 10px; }\n\n.aio-block {\n  display: table-cell;\n  vertical-align: middle; }\n\n.aio-header {\n  float: left;\n  width: 100%; }\n\n.aio-header h5 {\n  margin: 0;\n  display: block;\n  font-size: 16px;\n  line-height: 26px;\n  font-weight: bold;\n  color: #3b3f4a; }\n\n.aio-description {\n  float: left;\n  width: 100%;\n  margin-top: 10px;\n  color: #787d85; }\n"

/***/ },

/***/ 988:
/***/ function(module, exports) {

module.exports = ".contact-us-page .inner {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin-right: 25px;\n  margin-bottom: 50px;\n  margin-left: 25px;\n  padding-top: 35px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n  padding-left: 30px;\n  background-color: rgba(170, 170, 170, 0.1); }\n\n.row-contact {\n  float: left;\n  position: relative;\n  width: 100%;\n  margin-top: 30px; }\n"

/***/ },

/***/ 989:
/***/ function(module, exports) {

module.exports = ".sebm-google-map-container {\n  height: 300px; }\n\n.underline-small {\n  display: block;\n  border-style: solid;\n  border-bottom: 0px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 0px auto 20px;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n\n.title {\n  margin-bottom: 7px;\n  line-height: 32px;\n  color: #3b3f4a;\n  font: normal 500 30px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  text-transform: none;\n  text-align: center; }\n"

/***/ },

/***/ 990:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 991:
/***/ function(module, exports) {

module.exports = ".homepage-slider,\n.homepage-slider > div {\n  padding: 0;\n  overflow: hidden; }\n\n.homepage-slider img {\n  /*position: absolute;*/\n  /*width:100%;*/ }\n\n.carousel-control {\n  display: none; }\n\n.homepage-slider-overlay {\n  z-index: 5;\n  position: absolute;\n  background: transparent -webkit-linear-gradient(230deg, rgba(169, 70, 253, 0.4), rgba(8, 43, 174, 0.6), rgba(0, 240, 255, 0.6)) repeat scroll 0% 0%;\n  background: transparent linear-gradient(-140deg, rgba(169, 70, 253, 0.4), rgba(8, 43, 174, 0.6), rgba(0, 240, 255, 0.6)) repeat scroll 0% 0%;\n  visibility: inherit;\n  -webkit-transition: none 0s ease 0s;\n  transition: none 0s ease 0s;\n  text-align: left;\n  line-height: 23px;\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  font-size: 12px;\n  white-space: nowrap;\n  min-height: 100%;\n  min-width: 100%;\n  opacity: 1; }\n\n.homepage-slider-captions {\n  min-height: 100%;\n  min-height: 100vh;\n  background: transparent;\n  position: absolute;\n  z-index: 9999;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n#homepage-slider-title {\n  white-space: nowrap;\n  font-size: 93px;\n  line-height: 102px;\n  font-weight: 700;\n  color: white;\n  font-family: Oswald;\n  visibility: inherit;\n  text-align: center;\n  letter-spacing: 0px; }\n\n#homepage-slider-subtitle {\n  font-size: 52px;\n  line-height: 61px;\n  font-weight: 300;\n  font-family: 'roboto-light';\n  visibility: inherit;\n  text-align: left;\n  letter-spacing: 0px;\n  text-align: center;\n  color: #fff; }\n\n#homepage-slider-buttons {\n  margin-top: 50px; }\n\n#homepage-slider-buttons .btn-ghost {\n  margin: 0 auto;\n  float: none;\n  display: block; }\n\n.homepage-slider-clouds {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: url(\"../../../assets/images/slider/cl-03.png\");\n  z-index: 8;\n  visibility: inherit;\n  -webkit-transition: none 0s ease 0s;\n  transition: none 0s ease 0s;\n  text-align: left;\n  line-height: 0px;\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  font-size: 14px;\n  white-space: nowrap;\n  min-height: 0px;\n  min-width: 0px;\n  max-height: 100%;\n  max-width: 100%;\n  opacity: 1;\n  -moz-animation-duration: 275s;\n  -webkit-animation-duration: 275s;\n  -webkit-animation-name: slidein;\n  animation-name: slidein;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate; }\n\n.homepage-slider-scroll {\n  left: 0;\n  bottom: 20px;\n  width: 100%;\n  position: absolute; }\n\n#scroll-icon {\n  width: 26px;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 3px;\n  border-radius: 500px;\n  visibility: inherit;\n  -webkit-transition: none 0s ease 0s;\n  transition: none 0s ease 0s;\n  text-align: left;\n  line-height: 23px;\n  padding: 0px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  font-size: 14px;\n  white-space: nowrap;\n  min-height: 50px;\n  min-width: 30px;\n  max-height: 68px;\n  max-width: 32px;\n  opacity: 1;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  -webkit-transform-origin: 50% 50% 0px;\n          transform-origin: 50% 50% 0px;\n  margin: 0 auto;\n  display: block; }\n\n#scroll-icon .dot {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  float: none;\n  top: 10px;\n  z-index: 14;\n  background-color: white;\n  border-color: rgba(255, 255, 255, 0);\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 5px;\n  visibility: inherit;\n  -webkit-transition: none 0s ease 0s;\n  transition: none 0s ease 0s;\n  text-align: left;\n  line-height: 23px;\n  padding: 0px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  font-size: 14px;\n  white-space: nowrap;\n  min-height: 5px;\n  min-width: 5px;\n  max-height: 5px;\n  max-width: 5px;\n  opacity: 1;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  -webkit-transform-origin: 50% 50% 0px;\n          transform-origin: 50% 50% 0px; }\n"

/***/ },

/***/ 992:
/***/ function(module, exports) {

module.exports = ".pricing-tables {\n  padding-top: 70px;\n  float: left;\n  position: relative;\n  width: 100%;\n  padding-bottom: 50px; }\n\n.pr-table .wrapper {\n  padding: 10px 80px; }\n\n.pr-table .box {\n  width: 100%;\n  background-color: #23262d;\n  border: none;\n  -webkit-transition: box-shadow 0.2s linear;\n  transition: box-shadow 0.2s linear;\n  overflow: hidden;\n  font-family: \"open_sans\";\n  color: #fff; }\n\n.pr-table .header-top {\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%; }\n\n.pr-table .header-top h3 {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: bold;\n  font-family: \"open_sans\"; }\n\n.pr-table .coin-wrap {\n  height: 90px;\n  margin: 0 auto;\n  width: 90px;\n  background: #fff;\n  border-radius: 100%;\n  display: table; }\n\n.pr-table .coin-wrap > div {\n  display: table-cell;\n  vertical-align: middle; }\n\n.pr-table .coin-wrap span {\n  color: #23262d;\n  font-size: 28px;\n  font-weight: normal; }\n\n.pr-table .description {\n  padding: 10px 20px 10px 20px;\n  -ms-word-wrap: break-word;\n  word-wrap: break-word;\n  text-align: center;\n  margin: 30px 0 20px; }\n\n.pr-table .body-modules ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.pr-table .body-modules ul li {\n  font-size: 14px;\n  line-height: 20px;\n  padding: 10px 5px;\n  text-align: center;\n  width: 100%; }\n\n.pr-table i.fa-close {\n  background: firebrick;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.pr-table i {\n  background-color: #37a0fe;\n  background-image: none;\n  background: #37a0fe;\n  background: -webkit-linear-gradient(135deg, #37a0fe 30%, #8846fd 100%);\n  background: -webkit-linear-gradient(315deg, #37a0fe 30%, #8846fd 100%);\n  background: linear-gradient(135deg, #37a0fe 30%, #8846fd 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent; }\n\n.pr-table .buttons {\n  text-align: center;\n  margin: 20px 0 30px; }\n"

/***/ },

/***/ 993:
/***/ function(module, exports) {

module.exports = "#wrapper ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n#page-testimonials {\n  padding: 70px 0 70px 0; }\n\n#page-testimonials .masonry {\n  /* Masonry container */\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  -webkit-column-gap: 1em;\n     -moz-column-gap: 1em;\n          column-gap: 1em; }\n\n#page-testimonials .masonry .item {\n  /* Masonry bricks or child elements */\n  display: inline-block;\n  margin: 0 0 1em;\n  width: 100%; }\n\n#page-testimonials .masonry {\n  margin: 1.5em 0;\n  padding: 0;\n  -moz-column-gap: 1.5em;\n  -webkit-column-gap: 1.5em;\n  column-gap: 1.5em;\n  font-size: .85em; }\n\n#page-testimonials .masonry .item {\n  display: inline-block;\n  background-color: #f8f8f9;\n  padding: 20px 25px 20px;\n  margin: 0 0 1.5em;\n  width: 100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-shadow: 2px 2px 4px 0 #ccc; }\n\n#page-testimonials .item img {\n  width: 100%; }\n\n#page-testimonials .content p {\n  font: normal 15px / 28px \"open_sans\", Helvetica, Arial, Verdana, sans-serif;\n  word-spacing: normal;\n  color: #787d85; }\n\n#page-testimonials .testimonial-vcard {\n  display: table;\n  margin: 20px 0 0 0;\n  overflow: hidden; }\n\n#page-testimonials .testimonial-vcard .image {\n  display: table-cell;\n  vertical-align: middle; }\n\n#page-testimonials .testimonial-vcard .image span {\n  margin: 0 20px 5px 0;\n  font-size: 0;\n  line-height: 0; }\n\n#page-testimonials .testimonial-vcard .image span img {\n  border-radius: 50%;\n  width: 60px; }\n\n#page-testimonials .testimonial-vcard .primary {\n  font-size: 14px;\n  line-height: 26px;\n  font-weight: bold;\n  color: #3b3f4a;\n  font-family: \"open_sans\", sans-serif; }\n\n#page-testimonials .testimonial-vcard .secondary {\n  font-size: 13px;\n  line-height: 25px;\n  font-weight: bold;\n  color: #3b3f4a;\n  font-family: \"open_sans\", sans-serif; }\n"

/***/ },

/***/ 994:
/***/ function(module, exports) {

module.exports = ".page-banner {\n  position: relative;\n  width: 100%;\n  background-attachment: scroll;\n  background-position: 50% -27px;\n  height: 505px;\n  overflow: hidden; }\n\n.page-banner img {\n  width: 100%; }\n\n.caption {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  font: normal 500 60px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif; }\n\n.page-banner .overlay {\n  color: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100% !important;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.page-banner .underline {\n  display: block;\n  border-style: solid;\n  border-bottom: 3px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 20px auto;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n"

/***/ },

/***/ 995:
/***/ function(module, exports) {

module.exports = "footer {\n  float: left;\n  width: 100%;\n  position: relative;\n  height: 162px; }\n\nfooter .logo {\n  padding: 8px 12px 8px 0px; }\n\nfooter .logo img {\n  width: 50px;\n  float: left; }\n\nfooter .copyright {\n  float: left;\n  position: relative;\n  color: #fff;\n  margin: 14px 0; }\n\nfooter .copyright p {\n  margin: 0;\n  font-size: 15px;\n  font-weight: normal;\n  font-family: \"open_sans\"; }\n\nfooter ul.social-network {\n  list-style: none;\n  display: inline;\n  margin-left: 0 !important;\n  padding: 0; }\n\nfooter ul.social-network li {\n  display: inline;\n  margin: 0 5px; }\n\nfooter .footer-menu {\n  padding: 8px 12px 8px 0px; }\n\nfooter .footer-menu a {\n  color: #fff !important;\n  font-size: 15px;\n  font-weight: normal;\n  font-family: \"open_sans\"; }\n\nfooter .footer-menu a:hover {\n  text-decoration: underline; }\n\nfooter .ft-m {\n  border-top: 1px solid rgba(255, 255, 255, 0.13); }\n\nfooter .socials {\n  text-align: center;\n  margin: 40px 0 20px; }\n\n/* footer social icons */\n.social-network a.icoRss {\n  background-color: #F56505; }\n\n.social-network a.icoFacebook {\n  background-color: #3B5998; }\n\n.social-network a.icoTwitter {\n  background-color: #33ccff; }\n\n.social-network a.icoGoogle {\n  background-color: #BD3518; }\n\n.social-network a.icoLinkedin {\n  background-color: #007bb7; }\n\n.social-network a.icoRss:hover i, .social-network a.icoFacebook:hover i, .social-network a.icoTwitter:hover i,\n.social-network a.icoGoogle:hover i, .social-network a.icoVimeo:hover i, .social-network a.icoLinkedin:hover i {\n  color: #fff; }\n\na.socialIcon:hover, .socialHoverClass {\n  color: #44BCDD; }\n\n.social-circle li a {\n  display: inline-block;\n  position: relative;\n  margin: 0 auto 0 auto;\n  text-align: center;\n  width: 35px;\n  height: 35px;\n  font-size: 20px; }\n\n.social-circle li i {\n  margin: 0;\n  line-height: 35px;\n  text-align: center; }\n\n.social-circle li a:hover i, .triggeredHover {\n  -moz-transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n  -ms--transform: rotate(360deg);\n  transform: rotate(360deg);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n\n.social-circle i {\n  color: #fff;\n  -webkit-transition: all 0.8s;\n  transition: all 0.8s; }\n"

/***/ },

/***/ 996:
/***/ function(module, exports) {

module.exports = ".homepage header {\n  position: absolute;\n  width: 100%;\n  z-index: 99999;\n  padding: 0 50px;\n  float: none;\n  background: transparent;\n  border: none; }\n\nheader {\n  position: relative;\n  width: 100%;\n  float: left;\n  border-bottom: 1px solid rgba(173, 176, 182, 0.3);\n  background: #fff; }\n\nheader .container {\n  position: relative;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-align-items: stretch;\n  -ms-align-items: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  align-content: stretch;\n  -ms-flex-line-pack: stretch;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -ms-flex-pack: justify;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap; }\n\n#primary-menu {\n  -moz-align-items: stretch;\n  -ms-align-items: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -ms-align-content: stretch;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -ms-flex-pack: center;\n  -moz-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -ms-flex-grow: 1;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -ms-flex-pack: start;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n\n#primary-menu li {\n  display: -webkit-box;\n  display: flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  position: relative; }\n\n.homepage #primary-menu li a {\n  color: #fff;\n  -webkit-text-fill-color: #fff; }\n\n.homepage #primary-menu li:hover a {\n  color: #fff; }\n\n#primary-menu li a {\n  color: #3b3f4a;\n  -webkit-text-fill-color: #3b3f4a;\n  background: none;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -ms-align-content: center;\n  align-content: center;\n  -ms-flex-line-pack: stretch;\n  -moz-flex-grow: 1;\n  -ms-flex-positive: 1;\n  -ms-flex-grow: 1;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -moz-justify-content: center;\n  -ms-flex-pack: center;\n  -ms-justify-content: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  margin: 30px 16px 30px 16px;\n  padding: 5px 0px 5px 0px;\n  font: normal bold 16px / 19px \"Open Sans\",Helvetica,Arial,Verdana,sans-serif;\n  word-spacing: normal;\n  text-transform: uppercase; }\n\n#menu {\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  padding: 0;\n  margin: 0;\n  -webkit-box-flex: 2.6;\n      -ms-flex: 2.6;\n          flex: 2.6; }\n\n#menu li:hover a {\n  color: #3b3f4a; }\n\n.branding {\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.homepage .branding a {\n  padding: 0px 50px 0px 50px;\n  color: #fff;\n  text-decoration: none;\n  background: url(\"../../assets/images/logo.png\");\n  height: 120px;\n  background-size: cover; }\n\n.branding a {\n  padding: 0px 50px 0px 50px;\n  color: #fff;\n  text-decoration: none;\n  height: 120px;\n  background: url(\"../../assets/images/logo_pu.png\");\n  background-size: cover; }\n\n.branding a img {\n  width: 120px; }\n"

/***/ },

/***/ 997:
/***/ function(module, exports) {

module.exports = "@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    /* Firefox 16+, IE 10+, Opera */ }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    /* Firefox 16+, IE 10+, Opera */ } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    /* Firefox 16+, IE 10+, Opera */ }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    /* Firefox 16+, IE 10+, Opera */ } }\n\n#preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999999;\n  background: #37a0fe;\n  background: -webkit-linear-gradient(135deg, #37a0fe 30%, #8846fd 100%);\n  background: -webkit-linear-gradient(315deg, #37a0fe 30%, #8846fd 100%);\n  background: linear-gradient(135deg, #37a0fe 30%, #8846fd 100%); }\n  #preloader > div {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #fff;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n    /* Chrome, Firefox 16+, IE 10+, Opera */ }\n    #preloader > div:before {\n      content: \"\";\n      position: absolute;\n      top: 5px;\n      left: 5px;\n      right: 5px;\n      bottom: 5px;\n      border-radius: 50%;\n      border: 3px solid transparent;\n      border-top-color: #fff;\n      -webkit-animation: spin 3s linear infinite;\n      /* Chrome, Opera 15+, Safari 5+ */\n      animation: spin 3s linear infinite;\n      /* Chrome, Firefox 16+, IE 10+, Opera */ }\n    #preloader > div:after {\n      content: \"\";\n      position: absolute;\n      top: 15px;\n      left: 15px;\n      right: 15px;\n      bottom: 15px;\n      border-radius: 50%;\n      border: 3px solid transparent;\n      border-top-color: #fff;\n      -webkit-animation: spin 1.5s linear infinite;\n              animation: spin 1.5s linear infinite;\n      /* Chrome, Firefox 16+, IE 10+, Opera */ }\n"

/***/ },

/***/ 998:
/***/ function(module, exports) {

module.exports = ".title {\n  margin: 40px 0 30px; }\n\n.title h1 {\n  font-size: 50px;\n  line-height: 60px;\n  color: black;\n  margin-bottom: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center; }\n\n.title .border {\n  display: block;\n  border-style: solid;\n  border-bottom: 3px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 0px auto;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n\n.forgotten-password-component .control-label {\n  display: block;\n  margin-bottom: 0;\n  color: #555;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: left; }\n\n.forgotten-password-component input {\n  display: block;\n  margin-bottom: 10px;\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  color: #000;\n  background: #fff;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: border-color .3s ease;\n  transition: border-color .3s ease;\n  height: auto;\n  border-radius: 0; }\n\n.forgotten-password-component form {\n  margin: 0 auto;\n  display: block;\n  position: relative;\n  float: none; }\n\n.forgotten-password-component .login-block {\n  text-align: center; }\n\n.forgotten-password-component .login-block a {\n  text-decoration: none;\n  -webkit-transition: color .2s ease,opacity .2s ease;\n  transition: color .2s ease,opacity .2s ease;\n  font: 400 20px/1.25 \"Roboto\"; }\n\n.forgotten-password-component .login-block h2 {\n  font-size: 24px;\n  text-align: center; }\n"

/***/ },

/***/ 999:
/***/ function(module, exports) {

module.exports = ".title {\n  margin: 40px 0 30px; }\n\n.title h1 {\n  font-size: 50px;\n  line-height: 60px;\n  color: black;\n  margin-bottom: 15px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: center; }\n\n.title .border {\n  display: block;\n  border-style: solid;\n  border-bottom: 3px solid #cccccc;\n  border-color: #cccccc;\n  width: 150px;\n  margin: 0px auto;\n  border-color: transparent;\n  -o-border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n     border-image: -webkit-linear-gradient(top left, #37a0fe 30%, #8846fd 100%);\n     border-image: linear-gradient(to bottom right, #37a0fe 30%, #8846fd 100%);\n  border-image-slice: 1; }\n\n.login-component h3 {\n  font: normal 500 30px / 44px \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-size: 30px; }\n\n.login-component .control-label {\n  display: block;\n  margin-bottom: 0;\n  color: #555;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: left; }\n\n.login-component input {\n  display: block;\n  margin-bottom: 10px;\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  color: #000;\n  background: #fff;\n  font-family: \"Roboto\", Helvetica, Arial, Verdana, sans-serif;\n  font-weight: 400;\n  font-size: 19px;\n  -webkit-transition: border-color .3s ease;\n  transition: border-color .3s ease;\n  height: auto;\n  border-radius: 0; }\n\n.login-component .forgotten-pass-wrap {\n  padding-right: 0; }\n\n.login-component .forgot-pass {\n  text-align: right;\n  float: right;\n  padding-top: 7px; }\n\n.login-component .password-wrap {\n  padding-left: 0;\n  text-align: left; }\n\n.login-component .password-wrap label {\n  padding-left: 0; }\n\n.login-component .social-login:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: block;\n  width: 1px;\n  margin-left: -31px;\n  background-color: #d2d2d2;\n  background-color: rgba(210, 210, 210, 0.49); }\n\n.login-component .social-login:after {\n  content: \"or\";\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -51px;\n  font: 400 24px/40px \"Roboto\";\n  text-align: center;\n  background: #fff; }\n\n.login-component .social-login ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  margin-top: 23px; }\n\n.login-component .social-login ul li {\n  margin-bottom: 25px; }\n\n.login-component .register-block {\n  text-align: center; }\n\n.login-component .register-block a {\n  text-decoration: none;\n  -webkit-transition: color .2s ease,opacity .2s ease;\n  transition: color .2s ease,opacity .2s ease;\n  font: 400 20px/1.25 \"Roboto\"; }\n\n.login-component .register-block h2 {\n  font-size: 24px;\n  text-align: center; }\n"

/***/ }

},[1310]);
//# sourceMappingURL=main.bundle.map