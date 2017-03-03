import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './component/dashboard.component';

const appRoutes: Routes = [
  	{ path: '',        redirectTo : '/dashboard', pathMatch: 'full' },
  	
  	{ path: 'dashboard',       component:DashboardComponent     },
  	  	
  	{ path: 'order',           	  loadChildren: 'app/component/order/order.module#OrderModule' },
  	{ path: 'inquiryRecommend',   loadChildren: 'app/component/inquiry/inquiry.recommend.module#InquiryRecommendModule' },
  	{ path: 'contract',           loadChildren: 'app/component/contract/contract.module#ContractModule' },
];

export const appRoutingProviders: any[] = [
];

export const routing : ModuleWithProviders = RouterModule.forRoot( appRoutes, { useHash: true } );