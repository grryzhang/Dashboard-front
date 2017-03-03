"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./component/dashboard.component');
var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'order', loadChildren: 'app/component/order/order.module#OrderModule' },
    { path: 'inquiryRecommend', loadChildren: 'app/component/inquiry/inquiry.recommend.module#InquiryRecommendModule' },
    { path: 'contract', loadChildren: 'app/component/contract/contract.module#ContractModule' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map