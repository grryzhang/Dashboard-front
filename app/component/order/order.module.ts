import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { OrderService } from '../../service/order/order.service'; 

import { orderRouting } from './order.routing';

import { OrderStateComponent                 }  from './order.state.component';
import { SaleOrderStateDetailModalComponents }  from './saleOrder.state.detail.modal.component';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule(
	{
  	  	imports: [
  	  	  	CommonModule,
    		orderRouting,
    		
    		TooltipModule.forRoot()
  	  	],
  	  	declarations: [
  	  	  	OrderStateComponent,
  	  	  	SaleOrderStateDetailModalComponents
  	  	],
  	  	providers: [
    		OrderService
  		]
	}
)

export class OrderModule {

}