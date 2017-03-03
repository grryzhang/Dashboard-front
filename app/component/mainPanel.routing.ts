import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPanelComponent     }  from './mainPanel.component';
//import { SchedulerListComponent }  from './scheduler/scheduler.list.component';

const mainPanelRoutes: Routes = [
  	{
  	  	path: 'main',
  	  	component: MainPanelComponent,
  	  	children: [
  	  	  	{
  	  	  	  	path: '',
  	  	  	  	children: [
  	  	  	  	  	//{ path: '', component: SchedulerListComponent },
  	  	  	  	]
  	  	  	}
  	  	]
  	}
];

export const mainPanelRouting : ModuleWithProviders = RouterModule.forChild( mainPanelRoutes );