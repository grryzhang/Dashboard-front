import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TooltipModule, 
         CollapseModule, 
         DropdownModule,
         TabsModule }  from 'ng2-bootstrap/ng2-bootstrap';

import { inquiryRecommendRouting } from './inquiry.recommend.routing';

import { CommonUtil         } from '../../service/common/common.util.service';
import { CommonHttpService  } from '../../service/common/common.http.service';
import { RecommendService   } from '../../service/inquiry/recommend.service'; 
import { ItemWheelService   } from '../../service/item/wheel.service'; 
import { CorporationService } from '../../service/corporation/corporation.service'; 


import { InquiryRecommendComponent              } from './inquiry.recommend.component';
import { InquiryRecommendMain                   } from './inquiry.recommend.main.component';
import { InquiryRecommendSupplierFirstComponent } from './inquiry.recommend.supplierfirst.component';
import { InquiryRecommendSupplierFirstIndexListComponent } from './inquiry.recommend.supplierFirst.index.list.component';

import { IndexConditionFormatPipeSharedModule  }  from '../../pipe/index.condition.format.pipe.shared.module';


import { ItemDetailComponent } from '../item/item.detail.component';
import { ItemListComponent   } from '../item/item.list.component';

import { CorporationDetailComponent   } from '../corporation/corporation.detail.component';
import { EvaluationSharedModule       } from '../corporation/evaluation.shared.module';

@NgModule(
	{
  	  	imports: [
  	  	  	CommonModule,
  	  	  	
  	  	  	TooltipModule,  	
    		CollapseModule,
    		DropdownModule,
    		DropdownModule.forRoot(),
    		TabsModule.forRoot(),
    		EvaluationSharedModule,
    		IndexConditionFormatPipeSharedModule.forRoot(),
    		
    		inquiryRecommendRouting,
  	  	],
  	  	declarations: [
  	  		InquiryRecommendMain,
  	  		InquiryRecommendComponent,
  	  		InquiryRecommendSupplierFirstComponent,
  	  		InquiryRecommendSupplierFirstIndexListComponent,
  	  		ItemDetailComponent,
  	  		ItemListComponent,
  	  		CorporationDetailComponent
  	  	],
  	  	providers: [
  	  	    CommonUtil,
  	  	    CommonHttpService,
  	  		RecommendService,
  	  		ItemWheelService,
  	  		CorporationService
  		]
	}
)

export class InquiryRecommendModule {

}