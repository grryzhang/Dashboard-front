import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { InquiryRecommendComponent }  from './inquiry.recommend.component';
import { InquiryRecommendMain }  from './inquiry.recommend.main.component';
import { InquiryRecommendSupplierFirstIndexListComponent } from './inquiry.recommend.supplierFirst.index.list.component';

export const inquriyRecommendRoutes: Routes = [
  	{
    	path: '',
    	component: InquiryRecommendMain
  	},
  	{
  		path: 'supplierFirstIndexList',
  		component: InquiryRecommendSupplierFirstIndexListComponent
  	}
];

export const inquiryRecommendRouting: ModuleWithProviders = RouterModule.forChild( inquriyRecommendRoutes );