import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { EvaluationDetailComponent          }  from './evaluation.detail.component';

import { CorporationService } from '../../service/corporation/corporation.service'; 

@NgModule(
	{
  	  	imports: [
  	  	    CommonModule,
    		TabsModule.forRoot()
  	  	],
  	  	declarations: [
  	  	  	EvaluationDetailComponent
  	  	],
  	  	providers: [
  	  		CorporationService
  		],
  		exports : [
  		    EvaluationDetailComponent
  		]
	}
)

export class EvaluationSharedModule {

}