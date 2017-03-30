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
var inquiry_recommend_routing_1 = require('./inquiry.recommend.routing');
var common_util_service_1 = require('../../service/common/common.util.service');
var common_http_service_1 = require('../../service/common/common.http.service');
var recommend_service_1 = require('../../service/inquiry/recommend.service');
var wheel_service_1 = require('../../service/item/wheel.service');
var corporation_service_1 = require('../../service/corporation/corporation.service');
var inquiry_recommend_component_1 = require('./inquiry.recommend.component');
var inquiry_recommend_main_component_1 = require('./inquiry.recommend.main.component');
var inquiry_recommend_supplierfirst_component_1 = require('./inquiry.recommend.supplierfirst.component');
var inquiry_recommend_supplierFirst_index_list_component_1 = require('./inquiry.recommend.supplierFirst.index.list.component');
var index_condition_format_pipe_shared_module_1 = require('../../pipe/index.condition.format.pipe.shared.module');
var item_detail_component_1 = require('../item/item.detail.component');
var item_list_component_1 = require('../item/item.list.component');
var corporation_detail_component_1 = require('../corporation/corporation.detail.component');
var evaluation_shared_module_1 = require('../corporation/evaluation.shared.module');
var InquiryRecommendModule = (function () {
    function InquiryRecommendModule() {
    }
    InquiryRecommendModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_bootstrap_1.TooltipModule,
                ng2_bootstrap_1.CollapseModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_bootstrap_1.DropdownModule.forRoot(),
                ng2_bootstrap_1.TabsModule.forRoot(),
                evaluation_shared_module_1.EvaluationSharedModule,
                index_condition_format_pipe_shared_module_1.IndexConditionFormatPipeSharedModule.forRoot(),
                inquiry_recommend_routing_1.inquiryRecommendRouting,
            ],
            declarations: [
                inquiry_recommend_main_component_1.InquiryRecommendMain,
                inquiry_recommend_component_1.InquiryRecommendComponent,
                inquiry_recommend_supplierfirst_component_1.InquiryRecommendSupplierFirstComponent,
                inquiry_recommend_supplierFirst_index_list_component_1.InquiryRecommendSupplierFirstIndexListComponent,
                item_detail_component_1.ItemDetailComponent,
                item_list_component_1.ItemListComponent,
                corporation_detail_component_1.CorporationDetailComponent
            ],
            providers: [
                common_util_service_1.CommonUtil,
                common_http_service_1.CommonHttpService,
                recommend_service_1.RecommendService,
                wheel_service_1.ItemWheelService,
                corporation_service_1.CorporationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InquiryRecommendModule);
    return InquiryRecommendModule;
}());
exports.InquiryRecommendModule = InquiryRecommendModule;
//# sourceMappingURL=inquiry.recommend.module.js.map