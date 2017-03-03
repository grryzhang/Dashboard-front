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
var common_http_service_1 = require('../common/common.http.service');
var common_util_service_1 = require('../common/common.util.service');
var RecommendService = (function () {
    function RecommendService(http, commonHttpService, commonUtil) {
        this.http = http;
        this.commonHttpService = commonHttpService;
        this.commonUtil = commonUtil;
    }
    RecommendService.prototype.newRecommendIndex = function (indexCreateParameters) {
        var queryUrl = '/MD/recommend/new/wheel';
        var noEmtpy = this.commonUtil.clearEmptyForJsonData(indexCreateParameters);
        return this.commonHttpService.doDefaultJsonPost(queryUrl, noEmtpy);
    };
    RecommendService.prototype.queryRecommendList = function (searchParameters) {
        var queryUrl = '/MD/recommend/list/wheel';
        return this.commonHttpService.doDefaultJsonPost(queryUrl, searchParameters);
        ;
    };
    RecommendService.prototype.queryRecommendCorpList = function (indexId, otherSearchParameter) {
        var queryUrl = '/MD/recommend/wheel/' + indexId + '/corpList';
        return this.commonHttpService.doDefaultJsonPost(queryUrl, otherSearchParameter);
    };
    RecommendService.prototype.queryOneRecommendIndex = function (indexId) {
        var queryUrl = '/MD/recommend/wheel/' + indexId;
        var searchParameters = {};
        return this.commonHttpService.doDefaultJsonPost(queryUrl, searchParameters);
        ;
    };
    RecommendService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, common_http_service_1.CommonHttpService, common_util_service_1.CommonUtil])
    ], RecommendService);
    return RecommendService;
}());
exports.RecommendService = RecommendService;
//# sourceMappingURL=recommend.service.js.map