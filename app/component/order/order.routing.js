"use strict";
var router_1 = require('@angular/router');
var order_state_component_1 = require('./order.state.component');
exports.orderRoutes = [
    {
        path: '',
        component: order_state_component_1.OrderStateComponent
    }
];
exports.orderRouting = router_1.RouterModule.forChild(exports.orderRoutes);
//# sourceMappingURL=order.routing.js.map