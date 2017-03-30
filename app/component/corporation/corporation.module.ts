import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { corporationRouting } from './corporation.routing';

import { CorporationEvaluationListComponent }  from './corporation.evaluation.list.component';

import { EvaluationSharedModule                }  from './evaluation.shared.module';

import { ContractService    } from '../../service/corporation/contract.service'; 
import { CorporationService } from '../../service/corporation/corporation.service'; 
import { CommonUtil         } from '../../service/common/common.util.service';
import { CommonHttpService  } from '../../service/common/common.http.service';

@NgModule(
	{
  	  	imports: [
  	  	  	CommonModule,
    		corporationRouting,
    		TabsModule.forRoot(),
    		EvaluationSharedModule
  	  	],
  	  	declarations: [
  	  	  	CorporationEvaluationListComponent
  	  	],
  	  	providers: [
  	  	    CommonUtil,
  	  	    CommonHttpService,
  	  	    
  	  		ContractService,
  	  		CorporationService
  		]
	}
)

export class CorporationModule {

}