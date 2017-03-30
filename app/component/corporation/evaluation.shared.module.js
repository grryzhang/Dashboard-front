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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var evaluation_detail_component_1 = require('./evaluation.detail.component');
var corporation_service_1 = require('../../service/corporation/corporation.service');
var EvaluationSharedModule = (function () {
    function EvaluationSharedModule() {
    }
    EvaluationSharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_bootstrap_1.TabsModule.forRoot()
            ],
            declarations: [
                evaluation_detail_component_1.EvaluationDetailComponent
            ],
            providers: [
                corporation_service_1.CorporationService
            ],
            exports: [
                evaluation_detail_component_1.EvaluationDetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EvaluationSharedModule);
    return EvaluationSharedModule;
}());
exports.EvaluationSharedModule = EvaluationSharedModule;
//# sourceMappingURL=evaluation.shared.module.js.map