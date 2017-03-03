"use strict";
var router_1 = require('@angular/router');
var inquiry_recommend_main_component_1 = require('./inquiry.recommend.main.component');
var inquiry_recommend_supplierFirst_index_list_component_1 = require('./inquiry.recommend.supplierFirst.index.list.component');
exports.inquriyRecommendRoutes = [
    {
        path: '',
        component: inquiry_recommend_main_component_1.InquiryRecommendMain
    },
    {
        path: 'supplierFirstIndexList',
        component: inquiry_recommend_supplierFirst_index_list_component_1.InquiryRecommendSupplierFirstIndexListComponent
    }
];
exports.inquiryRecommendRouting = router_1.RouterModule.forChild(exports.inquriyRecommendRoutes);
//# sourceMappingURL=inquiry.recommend.routing.js.map