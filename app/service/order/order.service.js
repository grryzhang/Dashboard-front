"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('../../extraImport/rxjs-operators');
var Observable_1 = require('rxjs/Observable');
var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    OrderService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    OrderService.prototype.querySaleOrderState = function (searchParameters) {
        var queryUrl = '/MD/SOState/theLast';
        var body = null;
        if (searchParameters == null) {
            body = "{}";
        }
        else {
            for (var prop in searchParameters) {
                if (searchParameters[prop].length == 0) {
                    searchParameters[prop] = null;
                }
            }
            body = JSON.stringify(searchParameters);
        }
        var headers = new http_2.Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        var options = new http_2.RequestOptions({ 'headers': headers });
        //return null;
        return this.http.post(queryUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map