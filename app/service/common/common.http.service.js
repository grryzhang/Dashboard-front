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
var CommonHttpService = (function () {
    function CommonHttpService(http) {
        this.http = http;
    }
    CommonHttpService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CommonHttpService.prototype.extractDataDirectly = function (res) {
        return res;
    };
    CommonHttpService.prototype.handleError = function (error) {
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
    CommonHttpService.prototype.doDefaultPostDownload = function (url, parameters) {
        var body = this.prepareSearchParameters2Body(parameters);
        var requestOptions = this.getDefaultPostDownloadOptions();
        return this.http.post(url, body, requestOptions);
    };
    CommonHttpService.prototype.getDefaultPostDownloadOptions = function () {
        var headers = new http_2.Headers({
            "Content-Type": "application/json",
            "Accept": "application/*",
        });
        var options = new http_2.RequestOptions({
            'headers': headers,
            'responseType': http_2.ResponseContentType.Blob
        });
        return options;
    };
    CommonHttpService.prototype.doDefaultJsonPost = function (url, parameters) {
        var body = this.prepareSearchParameters2Body(parameters);
        var requestOptions = this.getDefaultJsonRequestOptions();
        return this.http.post(url, body, requestOptions).map(this.extractData).catch(this.handleError);
    };
    CommonHttpService.prototype.doAccessControlAllowPost = function (url, parameters) {
        var body = this.prepareSearchParameters2Body(parameters);
        var requestOptions = this.getAccessControlAllowOptions();
        return this.http.post(url, body, requestOptions).map(this.extractData).catch(this.handleError);
    };
    CommonHttpService.prototype.prepareSearchParameters2Body = function (parameters) {
        var body = null;
        if (parameters == null) {
            body = "{}";
        }
        else {
            body = JSON.stringify(parameters);
        }
        return body;
    };
    CommonHttpService.prototype.getAccessControlAllowOptions = function () {
        var headers = new http_2.Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "x-requested-with,content-type",
        });
        var options = new http_2.RequestOptions({ 'headers': headers });
        return options;
    };
    CommonHttpService.prototype.getDefaultJsonRequestOptions = function () {
        var headers = new http_2.Headers({
            "Content-Type": "application/json",
            "Accept": "application/json",
        });
        var options = new http_2.RequestOptions({ 'headers': headers });
        return options;
    };
    CommonHttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommonHttpService);
    return CommonHttpService;
}());
exports.CommonHttpService = CommonHttpService;
//# sourceMappingURL=common.http.service.js.map