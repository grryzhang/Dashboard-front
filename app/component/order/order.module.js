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
var order_service_1 = require('../../service/order/order.service');
var order_routing_1 = require('./order.routing');
var order_state_component_1 = require('./order.state.component');
var saleOrder_state_detail_modal_component_1 = require('./saleOrder.state.detail.modal.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                order_routing_1.orderRouting,
                ng2_bootstrap_1.TooltipModule,
            ],
            declarations: [
                order_state_component_1.OrderStateComponent,
                saleOrder_state_detail_modal_component_1.SaleOrderStateDetailModalComponents
            ],
            providers: [
                order_service_1.OrderService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map