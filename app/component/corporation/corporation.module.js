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
var corporation_routing_1 = require('./corporation.routing');
var corporation_evaluation_list_component_1 = require('./corporation.evaluation.list.component');
var evaluation_shared_module_1 = require('./evaluation.shared.module');
var contract_service_1 = require('../../service/corporation/contract.service');
var corporation_service_1 = require('../../service/corporation/corporation.service');
var common_util_service_1 = require('../../service/common/common.util.service');
var common_http_service_1 = require('../../service/common/common.http.service');
var CorporationModule = (function () {
    function CorporationModule() {
    }
    CorporationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                corporation_routing_1.corporationRouting,
                ng2_bootstrap_1.TabsModule.forRoot(),
                evaluation_shared_module_1.EvaluationSharedModule
            ],
            declarations: [
                corporation_evaluation_list_component_1.CorporationEvaluationListComponent
            ],
            providers: [
                common_util_service_1.CommonUtil,
                common_http_service_1.CommonHttpService,
                contract_service_1.ContractService,
                corporation_service_1.CorporationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CorporationModule);
    return CorporationModule;
}());
exports.CorporationModule = CorporationModule;
//# sourceMappingURL=corporation.module.js.map