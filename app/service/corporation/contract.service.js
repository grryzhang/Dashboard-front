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
require('../../extraImport/rxjs-operators');
var Observable_1 = require('rxjs/Observable');
var ContractService = (function () {
    function ContractService() {
    }
    ContractService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ContractService.prototype.handleError = function (error) {
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
    ContractService.prototype.querySupplierContract = function (searchParameters) {
        var contracts = [
            {
                "corpName": "Bao Steel",
                "warrantyRules": [
                    {
                        "ruleName": "Free compensation, rate 0.5%",
                        "ruleExplain": "<p align='left'>For reducing the manual work and time on customer claim disposition procedure for RTX, Part Rich will offer RTX free compensation rates for all the corresponding claimed products according to RTX's annual products claim rates.<br/><br/> The deductible discount of the corresponding ordered products will be reflected in the according Pro forma Invoice so as that all the possible subsequent claiming products will be free of claim handling process.<br/><br/> The products from RTX's designated factories are not included in this condition.</p>"
                    }
                ],
                "qualityStandards": [
                    { "link": "SW_Standard_English-Version.pdf" }
                ],
                "lastestEvaluation": { "grade": "90", "date": "2016-12-19" }
            },
            {
                "corpName": "Ningbo Lu Xiang",
                "warrantyRules": [
                    { "ruleName": "Free compensation, rate 1%" }
                ],
                "qualityStandards": [
                    { "link": "SW_Standard_English-Version.pdf" }
                ],
                "lastestEvaluation": { "grade": "70", "date": "2016-12-19" }
            },
            {
                "corpName": "Shandong Xingmin",
                "warrantyRules": [
                    { "ruleName": "No Compensation" }
                ],
                "qualityStandards": [
                    { "link": "SW_Standard_English-Version.pdf" }
                ],
                "lastestEvaluation": { "grade": "80", "date": "2016-12-19" }
            }
        ];
        return contracts;
    };
    ContractService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContractService);
    return ContractService;
}());
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map