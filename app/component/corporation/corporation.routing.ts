import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { CorporationEvaluationListComponent }  from './corporation.evaluation.list.component';

export const corporationRoutes: Routes = [
  	{
    	path: '',
    	component: CorporationEvaluationListComponent
  	}
];

export const corporationRouting: ModuleWithProviders = RouterModule.forChild( corporationRoutes );