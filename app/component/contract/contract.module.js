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
var contract_routing_1 = require('./contract.routing');
var contract_state_component_1 = require('./contract.state.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_3 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_4 = require('ng2-bootstrap/ng2-bootstrap');
var contract_service_1 = require('../../service/corporation/contract.service');
var ContractModule = (function () {
    function ContractModule() {
    }
    ContractModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                contract_routing_1.contractRouting,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_2.CollapseModule,
                ng2_bootstrap_3.TooltipModule,
                ng2_bootstrap_4.TabsModule,
            ],
            declarations: [
                contract_state_component_1.ContractStateComponent
            ],
            providers: [
                contract_service_1.ContractService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContractModule);
    return ContractModule;
}());
exports.ContractModule = ContractModule;
//# sourceMappingURL=contract.module.js.map