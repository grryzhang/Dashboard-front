import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { OrderStateComponent }  from './order.state.component';

export const orderRoutes: Routes = [
  	{
    	path: '',
    	component: OrderStateComponent
  	}
];

export const orderRouting: ModuleWithProviders = RouterModule.forChild( orderRoutes );