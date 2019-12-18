(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/analog-inputs/analog-inputs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/analog-inputs/analog-inputs.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Analog Inputs</h1>\r\n<div *ngFor=\"let analogInput of analogInputs\">\r\n    <app-slider [title]=\"analogInput['FullDisplayName']\"\r\n                [minValue]=\"'0'\"\r\n                [maxValue]=\"'10000000'\"\r\n                [address]=\"analogInput['address']\"\r\n                [value]=\"analogInput['value']\"\r\n                [gainOffset]=\"analogInput['gainOffset']\"></app-slider>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n    Change host:<input type=\"text\" [(ngModel)]=\"hostForRefresh\">\r\n    <input type=\"button\" value=\"refresh\" (click)=\"refresh()\">\r\n</div>\r\n<div style=\"max-width: 40%; border-style: solid; border-width: 1px; padding: 10px; margin: 5px\">\r\n    <app-analog-inputs></app-analog-inputs>\r\n</div>\r\n<div style=\"max-width: 40%; border-style: solid; border-width: 1px; padding: 10px; margin: 5px\">\r\n    <app-digital-outputs></app-digital-outputs>\r\n</div>\r\n<div style=\"max-width: 40%; border-style: solid; border-width: 1px; padding: 10px; margin: 5px\">\r\n    <app-digital-inputs></app-digital-inputs>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/digital-inputs/digital-inputs.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/digital-inputs/digital-inputs.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Digital Inputs</h1>\r\n<div *ngFor=\"let digitalInput of digitalInputs\" >\r\n    <input type=\"checkbox\" \r\n        [value]=\"digitalInput.address\" \r\n        [checked]=\"digitalInput.value == '1'\" \r\n        (change)=\"checkValue($event)\"\r\n        id=\"{{digitalInput.FullDisplayName | ioHtmlId}}_checkbox\"/>{{digitalInput.FullDisplayName}}<br />\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/digital-outputs/digital-outputs.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/digital-outputs/digital-outputs.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Digital Outputs</h1>\r\n<div *ngFor=\"let digitalOutput of digitalOutputs\">\r\n    <input \r\n        type=\"checkbox\" \r\n        [checked]=\"digitalOutput.value == '1'\"\r\n        disabled=\"disabled\"\r\n        id=\"{{digitalOutput.FullDisplayName | ioHtmlId}}_checkbox\"/>\r\n        {{digitalOutput.FullDisplayName}}\r\n        <br />\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/utils/slider/slider.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/utils/slider/slider.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>{{title}} ({{value | gainOffset: gainOffset}}) </label>\r\n<input type=\"number\" name=\"quantity\" [min]=\"minValue\" [max]=\"maxValue\" [(ngModel)]=\"value\" id=\"{{title | ioHtmlId}}_number\" (change)=\"checkValue($event)\">\r\n<input type=\"range\" [min]=\"minValue\" [max]=\"maxValue\" [(ngModel)]=\"value\" class=\"slider\" id=\"myRange\" (change)=\"checkValue($event)\" id=\"{{title | ioHtmlId}}_slider\">"

/***/ }),

/***/ "./src/app/analog-inputs/analog-inputs.component.css":
/*!***********************************************************!*\
  !*** ./src/app/analog-inputs/analog-inputs.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWxvZy1pbnB1dHMvYW5hbG9nLWlucHV0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/analog-inputs/analog-inputs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/analog-inputs/analog-inputs.component.ts ***!
  \**********************************************************/
/*! exports provided: AnalogInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogInputsComponent", function() { return AnalogInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-socket-service.service */ "./src/app/web-socket-service.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var AnalogInputsComponent = /** @class */ (function () {
    function AnalogInputsComponent(wsService) {
        this.wsService = wsService;
    }
    AnalogInputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.wsData.subscribe(function (data) {
            if (data == null || data['type'] !== 'deviceStructure') {
                return;
            }
            var tempData = data['data']['AnalogInput'];
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"](tempData, _this.analogInputs)) {
                _this.analogInputs = tempData;
            }
        });
    };
    AnalogInputsComponent.ctorParameters = function () { return [
        { type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"] }
    ]; };
    AnalogInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-analog-inputs',
            template: __webpack_require__(/*! raw-loader!./analog-inputs.component.html */ "./node_modules/raw-loader/index.js!./src/app/analog-inputs/analog-inputs.component.html"),
            styles: [__webpack_require__(/*! ./analog-inputs.component.css */ "./src/app/analog-inputs/analog-inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]])
    ], AnalogInputsComponent);
    return AnalogInputsComponent;
}());



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



var routes = [];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'IoSimulator';
        this.hostForRefresh = '10.0.0.100';
    }
    AppComponent.prototype.refresh = function () {
        var queryParams = { simurl: this.hostForRefresh };
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _utils_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/slider/slider.component */ "./src/app/utils/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _analog_inputs_analog_inputs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analog-inputs/analog-inputs.component */ "./src/app/analog-inputs/analog-inputs.component.ts");
/* harmony import */ var _digital_outputs_digital_outputs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./digital-outputs/digital-outputs.component */ "./src/app/digital-outputs/digital-outputs.component.ts");
/* harmony import */ var _digital_inputs_digital_inputs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./digital-inputs/digital-inputs.component */ "./src/app/digital-inputs/digital-inputs.component.ts");
/* harmony import */ var _gain_offset_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gain-offset.pipe */ "./src/app/gain-offset.pipe.ts");
/* harmony import */ var _io_html_id_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./io-html-id.pipe */ "./src/app/io-html-id.pipe.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _utils_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _analog_inputs_analog_inputs_component__WEBPACK_IMPORTED_MODULE_7__["AnalogInputsComponent"],
                _digital_outputs_digital_outputs_component__WEBPACK_IMPORTED_MODULE_8__["DigitalOutputsComponent"],
                _digital_inputs_digital_inputs_component__WEBPACK_IMPORTED_MODULE_9__["DigitalInputsComponent"],
                _gain_offset_pipe__WEBPACK_IMPORTED_MODULE_10__["GainOffsetPipe"],
                _io_html_id_pipe__WEBPACK_IMPORTED_MODULE_11__["IOHtmlIdPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/digital-inputs/digital-inputs.component.css":
/*!*************************************************************!*\
  !*** ./src/app/digital-inputs/digital-inputs.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpZ2l0YWwtaW5wdXRzL2RpZ2l0YWwtaW5wdXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/digital-inputs/digital-inputs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/digital-inputs/digital-inputs.component.ts ***!
  \************************************************************/
/*! exports provided: DigitalInputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalInputsComponent", function() { return DigitalInputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-socket-service.service */ "./src/app/web-socket-service.service.ts");



var DigitalInputsComponent = /** @class */ (function () {
    function DigitalInputsComponent(wsService) {
        this.wsService = wsService;
    }
    DigitalInputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.wsData.subscribe(function (data) {
            if (data == null || data['type'] !== 'deviceStructure') {
                return;
            }
            _this.digitalInputs = data['data']['DigitalInput'];
        });
    };
    DigitalInputsComponent.prototype.checkValue = function (e) {
        var map = {};
        map['type'] = 'modBusSimulatorData';
        map['address'] = e.target.value;
        map['value'] = +e.target.checked;
        this.wsService.send(JSON.stringify(map));
    };
    DigitalInputsComponent.ctorParameters = function () { return [
        { type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"] }
    ]; };
    DigitalInputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-digital-inputs',
            template: __webpack_require__(/*! raw-loader!./digital-inputs.component.html */ "./node_modules/raw-loader/index.js!./src/app/digital-inputs/digital-inputs.component.html"),
            styles: [__webpack_require__(/*! ./digital-inputs.component.css */ "./src/app/digital-inputs/digital-inputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]])
    ], DigitalInputsComponent);
    return DigitalInputsComponent;
}());



/***/ }),

/***/ "./src/app/digital-outputs/digital-outputs.component.css":
/*!***************************************************************!*\
  !*** ./src/app/digital-outputs/digital-outputs.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpZ2l0YWwtb3V0cHV0cy9kaWdpdGFsLW91dHB1dHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/digital-outputs/digital-outputs.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/digital-outputs/digital-outputs.component.ts ***!
  \**************************************************************/
/*! exports provided: DigitalOutputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalOutputsComponent", function() { return DigitalOutputsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-socket-service.service */ "./src/app/web-socket-service.service.ts");



var DigitalOutputsComponent = /** @class */ (function () {
    function DigitalOutputsComponent(wsService) {
        this.wsService = wsService;
    }
    DigitalOutputsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wsService.wsData.subscribe(function (data) {
            if (data == null || data['type'] !== 'deviceStructure') {
                return;
            }
            _this.digitalOutputs = data['data']['DigitalOutput'];
        });
    };
    DigitalOutputsComponent.ctorParameters = function () { return [
        { type: _web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"] }
    ]; };
    DigitalOutputsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-digital-outputs',
            template: __webpack_require__(/*! raw-loader!./digital-outputs.component.html */ "./node_modules/raw-loader/index.js!./src/app/digital-outputs/digital-outputs.component.html"),
            styles: [__webpack_require__(/*! ./digital-outputs.component.css */ "./src/app/digital-outputs/digital-outputs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]])
    ], DigitalOutputsComponent);
    return DigitalOutputsComponent;
}());



/***/ }),

/***/ "./src/app/gain-offset.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/gain-offset.pipe.ts ***!
  \*************************************/
/*! exports provided: GainOffsetPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainOffsetPipe", function() { return GainOffsetPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GainOffsetPipe = /** @class */ (function () {
    function GainOffsetPipe() {
    }
    GainOffsetPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var gainOffset = args[0];
        value = value * gainOffset.gain + gainOffset.offset;
        return parseFloat((value * 100 / 100).toFixed(2));
    };
    GainOffsetPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'gainOffset' })
    ], GainOffsetPipe);
    return GainOffsetPipe;
}());



/***/ }),

/***/ "./src/app/io-html-id.pipe.ts":
/*!************************************!*\
  !*** ./src/app/io-html-id.pipe.ts ***!
  \************************************/
/*! exports provided: IOHtmlIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOHtmlIdPipe", function() { return IOHtmlIdPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IOHtmlIdPipe = /** @class */ (function () {
    function IOHtmlIdPipe() {
    }
    IOHtmlIdPipe.prototype.transform = function (value) {
        var ioTitle = value;
        var id = ioTitle.substring(0, ioTitle.indexOf(' ('));
        id = id.split(' ').join('_');
        return id;
    };
    IOHtmlIdPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ioHtmlId' })
    ], IOHtmlIdPipe);
    return IOHtmlIdPipe;
}());



/***/ }),

/***/ "./src/app/utils/slider/slider.component.css":
/*!***************************************************!*\
  !*** ./src/app/utils/slider/slider.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 25px;\r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n  }\r\n  \r\n  .slider:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #4CAF50;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBRVosdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnNsaWRlciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENBRjUwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRDQUY1MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/utils/slider/slider.component.ts":
/*!**************************************************!*\
  !*** ./src/app/utils/slider/slider.component.ts ***!
  \**************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/web-socket-service.service */ "./src/app/web-socket-service.service.ts");



var SliderComponent = /** @class */ (function () {
    function SliderComponent(wsService) {
        this.wsService = wsService;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.conversionValue = function () {
        return 0;
    };
    SliderComponent.prototype.checkValue = function (e) {
        var map = {};
        map['type'] = 'modBusSimulatorData';
        map['address'] = this.address;
        map['value'] = +e.target.value;
        this.wsService.send(JSON.stringify(map));
    };
    SliderComponent.ctorParameters = function () { return [
        { type: src_app_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SliderComponent.prototype, "minValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SliderComponent.prototype, "maxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SliderComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SliderComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SliderComponent.prototype, "gainOffset", void 0);
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/utils/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/utils/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_web_socket_service_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketServiceService"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/web-socket-service.service.ts":
/*!***********************************************!*\
  !*** ./src/app/web-socket-service.service.ts ***!
  \***********************************************/
/*! exports provided: WebSocketServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketServiceService", function() { return WebSocketServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WebSocketServiceService = /** @class */ (function () {
    function WebSocketServiceService(route) {
        var _this = this;
        this.route = route;
        this.wsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.initWebSocket();
        this.route.queryParams.subscribe(function (params) {
            _this.url = params['simurl'];
            _this.ws.close();
        });
    }
    WebSocketServiceService.prototype.send = function (message) {
        this.ws.send(message);
    };
    WebSocketServiceService.prototype.initWebSocket = function () {
        var _this = this;
        if (this.url === undefined || this.url === '') {
            this.ws = new WebSocket('ws:\\localhost:4202');
        }
        else {
            this.ws = new WebSocket('ws:\\' + this.url + ':4202');
        }
        this.ws.onmessage = function (e) {
            console.log('new message.', e.data);
            _this.wsData.next(JSON.parse(e.data));
        };
        this.ws.onerror = function (e) {
            console.error('An error in the web socket.', e);
            _this.ws.close();
        };
        this.ws.onclose = function (e) {
            console.warn('web socket connection closed.', e);
            var self = _this;
            setTimeout(function () {
                self.initWebSocket();
            }, 1000);
        };
        this.ws.onopen = function (e) {
            console.log('web socket opened.', e);
        };
    };
    WebSocketServiceService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    WebSocketServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WebSocketServiceService);
    return WebSocketServiceService;
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

module.exports = __webpack_require__(/*! C:\agent\_work\1\s\IoSimulator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map