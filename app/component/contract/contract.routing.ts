import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ContractStateComponent }  from './contract.state.component';

export const contractRoutes: Routes = [
  	{
    	path: '',
    	component: ContractStateComponent
  	}
];

export const contractRouting: ModuleWithProviders = RouterModule.forChild( contractRoutes );