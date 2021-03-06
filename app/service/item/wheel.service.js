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
var ItemWheelService = (function () {
    function ItemWheelService(http, commonHttpService, commonUtil) {
        this.http = http;
        this.commonHttpService = commonHttpService;
        this.commonUtil = commonUtil;
    }
    ItemWheelService.prototype.queryWheel = function (wheelSearchParameters) {
        var queryUrl = '/MD/wheels';
        var noEmtpy = this.commonUtil.clearEmptyForJsonData(wheelSearchParameters);
        return this.commonHttpService.doDefaultJsonPost(queryUrl, noEmtpy);
    };
    ItemWheelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, common_http_service_1.CommonHttpService, common_util_service_1.CommonUtil])
    ], ItemWheelService);
    return ItemWheelService;
}());
exports.ItemWheelService = ItemWheelService;
//# sourceMappingURL=wheel.service.js.map