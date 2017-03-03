"use strict";
var router_1 = require('@angular/router');
var mainPanel_component_1 = require('./mainPanel.component');
//import { SchedulerListComponent }  from './scheduler/scheduler.list.component';
var mainPanelRoutes = [
    {
        path: 'main',
        component: mainPanel_component_1.MainPanelComponent,
        children: [
            {
                path: '',
                children: []
            }
        ]
    }
];
exports.mainPanelRouting = router_1.RouterModule.forChild(mainPanelRoutes);
//# sourceMappingURL=mainPanel.routing.js.map