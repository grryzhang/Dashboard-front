import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { contractRouting } from './contract.routing';

import { ContractStateComponent                 }  from './contract.state.component';

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipModule  } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule     } from 'ng2-bootstrap/ng2-bootstrap';

import { ContractService } from '../../service/corporation/contract.service'; 

@NgModule(
	{
  	  	imports: [
  	  	  	CommonModule,
    		contractRouting,
    		
    		DropdownModule,
    		CollapseModule,
    		TooltipModule,
    		TabsModule,
  	  	],
  	  	declarations: [
  	  	  	ContractStateComponent
  	  	],
  	  	providers: [
  	  		ContractService
  		]
	}
)

export class ContractModule {

}