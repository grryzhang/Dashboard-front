/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/maxazan-jquery-treegrid/treegrid.d.ts" />
/// <reference path="../../../resources/twbsPagination/twbsPagination.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  
import { ChangeDetectionStrategy }  from '@angular/core';  

import { OrderService } from '../../service/order/order.service'; 

import { SaleOrderState, SaleOrderItemState, FreightInfo }  from  '../../model/saleOrder';
import { SaleOrderStateDetailModalComponents }  from './saleOrder.state.detail.modal.component';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component(
	{
  		selector: 'router-anchor',
  		template:`    
  			<div class="container"><!--/container start-->
  				<div class="row-fluid row-offcanvas row-offcanvas-right">
    		  		<div class="row"><!--/row-search-bar start-->
    		  			<div class="col-xs-12 col-sm-8 col-lg-4">
    		  				<form>
    		  					<div class="input-group">
									<input class="form-control" id="orderFuzzyInput" placeholder="Order Search" #sale_order_states_searchParameters />
									<span class="input-group-btn">
    		            				<button 
    		            					class="btn btn-default" 
    		            					type="button" 
    		            					(click)="getSaleOrderState( { 'fuzzy' : sale_order_states_searchParameters.value } );">
    		            					<span class="glyphicon glyphicon-search"></span>
    		            				</button>
    		           				</span>
    		           				<span class="input-group-btn">
    		            				<button class="btn btn-default" type="button" (click)="clearAndSearch();">
    		            					<span><i class="fa fa-times" aria-hidden="true"></i></span>
    		            				</button>
    		           				</span>
								</div>
							</form>
    		  			</div>
    		  		</div><!--/row-search-end start-->
    		  		
    		  		<div class="row"><!--start : Pagination:row start-->
    			  		<div class="col-xs-12 col-lg-12">
    			  		    <nav>    
								<div>                                                                
							    	<ul id="item-detail-pagination" class="pagination-sm non-padding-top-bottom pull-right">
							    		<li class="disabled">
							      			<a href="#">Total:{{total}}</a>
							      		</li>
							    	</ul>
							    </div>
							</nav>
    			  		</div>
    			  	</div> <!--end : Pagination:row start-->  
    		  		
    		  		<div class="row"><!--/row-1 start-->
 						<div class="col-xs-12 col-lg-12">
 							<div class="table-responsive">
 								<table class="table table-hover tree" id="order_status_tree_table">
 									<thead>
 										<tr>
    								  	  	<th>PO NO.</th>
    								    	<th>Order Status</th>
    								    	<th>Order Date</th>
    								    	<th>Incoterm</th>
    								    	<th>Customer</th>
    								    	<th>Buyer</th>
    								    	<th>PR Service</th>
    								    	<th>Last Update</th>
    								  	</tr>
    								</thead>
    								<tbody>
    									<template ngFor let-orderState [ngForOf]="formatedsaleOrderStates" let-i="index" > 
    										<tr id={{orderState.id}} *ngIf="!orderState.isLeaf" [ngClass]="orderState.htmlClass" 
    											[class.warning]="orderState.changed && orderState.changed.length > 0"
    											(click)="orderClick( $event, orderState )">
												<td>
    												<span>{{orderState?.customerOrderId}}</span>
    											</td>
    											<td td-type="orderState">
    												<span *ngFor="let state of orderState.states" 
    													[tooltip]="state.desc" #tooltip="bs-tooltip" 
    													[ngClass]="state.class">
    												</span>
    											</td>
    											<td>
    												<span>{{orderState?.orderTime}}</span>
    											</td>
    											<td>
    												<span>{{orderState?.tradeTerm}}</span>
    											</td>
    											<td>
    												<span>{{orderState?.customerName}}</span>
    											</td>
    											<td>
    												<span>{{orderState?.customerBuyer}}</span>
    											</td>
    											<td>
    												<span>{{orderState?.businessUser}}</span>
    											</td>
    											<td>
    												<span>{{orderState?.lastUpdateTime}}</span>
    											</td>
    										</tr>
    										<template [ngIf]="orderState.items && orderState.items.length>0 ">
    											<tr [ngClass]="orderState.items[0].htmlClass">
    												<td></td>
    												<td colspan="7">
    													<table class="table table-striped table-condensed">
    														<thead>
 																<tr>
 																	<th>Item State</th>
    														  	  	<th>Item No.</th>
    														  	  	<th>Name</th>
    														    	<th>Unit Price</th>
    														    	<th>Cost Price</th>
    														    	<th>Total Number</th>
    														    	<th>Unit</th>
    														    	<th>Total Price</th>
    														  	</tr>
    														  	<tr *ngFor="let orderItemState of orderState.items" 
    														  		[class.warning]="orderItemState.isChanged"
    														  		(click)="itemStateClick( $event, orderState, orderItemState )">
    														  		<td>
    														  			<span [tooltip]="orderItemState.state.desc" #tooltip="bs-tooltip" [ngClass]="orderItemState.state.class"></span>
    														  		</td>
    														  		<td>{{orderItemState?.type}}</td>
    														  		<td>{{orderItemState?.name}}</td>
    														  		<td>{{orderItemState?.unitPrice}}</td>
    														  		<td></td>
    														  		<td>{{orderItemState?.totalNumber}}</td>
    														  		<td>{{orderItemState?.unit}}</td>
    														  		<td>{{orderItemState?.totalPrice}}</td>
    														  	</tr>
    														</thead>
    													</table>
    												</td>
    											</tr>
    										</template>	
    									</template>
    								</tbody>
								</table>   
							</div>
						</div>	
					</div><!--row-1 end-->
				</div>
    		</div><!--/container-->
    		<sale-order-state-detail-modal></sale-order-state-detail-modal>
		`,
		//providers: [OrderService]
	}
)

export class OrderStateComponent {     

	searchParameters : any;

	saleOrderStates : SaleOrderState[];
	formatedsaleOrderStates : any[];
	
	total : number = 0;
	currentPage  : number = 1;
	
	errorMessage : String;
	
	//@Output('showItemDetailEvent') itemDetailClickEvent: EventEmitter<any> = new EventEmitter();
	@ViewChild(SaleOrderStateDetailModalComponents) itemDetailComponent : SaleOrderStateDetailModalComponents;

  	constructor (
  		private orderService  : OrderService
  	) {}
  	
  	ngOnInit() { 
  	
		this.getSaleOrderState( null );
  	}
  	
  	createTreeGride(){
  	
  		requirejs(
  		
  			['treegrid/jquery.treegrid','css!./maxazan-jquery-treegrid/css/jquery.treegrid'],

  			function( Treegrid : any ){
  				$("#order_status_tree_table").treegrid( { 'initialState':'collapsed' } );
			}
  		);
  	}
  	
  	createPagenation(){
  	
  		requirejs(
  			['twbsPagination'],
  			() => {
  				$('#item-detail-pagination').twbsPagination(
        			{
    			    	totalPages: Math.ceil( this.total / 20 ) ,
    			    	total: this.total,
    			    	visiblePages: 7,
    			    	"first" : "<<",
    			    	"prev"  : "<",
    			    	"next"  : ">",
    			    	"last"  : ">>",
    			    	"initiateStartPageClick": false,
    			    	"onPageClick" : ( event : any, page : any ) => {
        		
    			    		let searchParameters : any = {};
    			    		if( this.searchParameters ){
    			    			searchParameters = JSON.parse( JSON.stringify( this.searchParameters ) );
    			    		}
    			    		searchParameters.start = ( page - 1 ) * 20;
    			    		searchParameters.limit = 20;
    			    		
    			    		this.getSaleOrderState( searchParameters );
    			    	}
    				}
    			);
    			
    			$('#item-detail-pagination-blow').twbsPagination(
        			{
    			    	totalPages: Math.ceil( this.total / 20 ) ,
    			    	total: this.total,
    			    	visiblePages: 7,
    			    	"first" : "<<",
    			    	"prev"  : "<",
    			    	"next"  : ">",
    			    	"last"  : ">>",
    			    	"initiateStartPageClick": false,
    			    	"onPageClick" : ( event : any, page : any ) => {
    			    	
    			    		let searchParameters : any = {};
    			    		if( this.searchParameters ){
    			    			searchParameters = JSON.parse( JSON.stringify( this.searchParameters ) );
    			    		}
    			    		searchParameters.start = ( page - 1 ) * 20;
    			    		searchParameters.limit = 20;

    			    		this.getSaleOrderState( searchParameters );
    			    	}
    				}
    			);
			}
  		);
  	}
  	
  	clearAndSearch(){
  	
  		$("#orderFuzzyInput").val("");
  		this.getSaleOrderState( {} );
  	}
  	
  	getSaleOrderState( searchParameters : any ){
  	
  		this.searchParameters = searchParameters;
  		this.orderService.querySaleOrderState( searchParameters ).subscribe(
  		
        	reponseData => { 
        	
        		this.saleOrderStates = reponseData.data;
        		this.total           = reponseData.totalResult;
        		
        		this.formateSaleOrderStatesForDisplay();
        		
        		this.createTreeGride();
        		
        		this.createPagenation();
        	},
            error =>  this.errorMessage = <any>error
        );
  	}
  	
  	formateSaleOrderStatesForDisplay(){
  	
  		let i = 0;
  		this.formatedsaleOrderStates = [];

  		for( var saleOrderState of this.saleOrderStates ){
  		
  			saleOrderState.isLeaf = false;
  			saleOrderState.htmlClass = {};
  			saleOrderState.htmlClass["treegrid-" + i] = true;
  			
  			this.formatedsaleOrderStates[i] = saleOrderState;
  			this.formatedsaleOrderStates[i].id = "treegrid-" + i;
  			
  			let parentIndex = i;
  			i++;
  		
  			let orderSates : any = [];
  			
  			if( saleOrderState.items ){
  				for( var saleOrderItemState of saleOrderState.items ){
  				
  					if( saleOrderItemState ){
  					
  						this.formatedsaleOrderStates[i] = saleOrderItemState;
  					
  						/*start - set state and class*/
  						this.formatedsaleOrderStates[i].state = { "desc": null ,  "class" : { "fa":true } };
  						
  						saleOrderItemState.state.desc = "Checking";
  						let stateClass = "fa-cogs";
  						if( saleOrderItemState.forecastDeliveryTime &&  saleOrderItemState.forecastDeliveryTime.length > 0 ){
  							saleOrderItemState.state.desc = 'In Production';
  							stateClass = "fontello-icon-industry";
  						}
  						if( saleOrderItemState.productionEndTime && saleOrderItemState.productionEndTime.length > 0 ){
  							saleOrderItemState.state.desc = "Quality Inspection";
  							stateClass = "fa-user-md";
  						}
  						
  						if( saleOrderItemState.freightInfos && Array.isArray( saleOrderItemState.freightInfos ) ){
  							for( var freightInfo of saleOrderItemState.freightInfos ){
  							
  								if( freightInfo.invoiceDate && freightInfo.invoiceDate.length > 0 ){
  									saleOrderItemState.state.desc = "Booking";
  									stateClass = "fontello-icon-edit";
  								}
  								if( freightInfo.estimatedTimeofDelivery && freightInfo.estimatedTimeofDelivery.length > 0 ){
  									saleOrderItemState.state.desc = "In Transport";
  									stateClass = "fontello-icon-ship";
  								}
  								if( saleOrderItemState.state && saleOrderItemState.state.length > 0 ){
  									break;
  								}
  							}
  						}
  						
  						this.formatedsaleOrderStates[i].state.class[stateClass] = true;
  						
  						var hasState = false;
  						for( var o of orderSates ){
  							if( o && o.class[stateClass] == true ){
  								hasState = true;
  								break;
  							}
  						}
  						if( !hasState ){
  							orderSates[ orderSates.length ] = this.formatedsaleOrderStates[i].state;
   						}
  						/*end - set state and class*/
  							
  						saleOrderItemState.isLeaf = true;
  						saleOrderItemState.htmlClass = {};
  						saleOrderItemState.htmlClass["treegrid-" + i] = true;
  						saleOrderItemState.htmlClass["treegrid-parent-" + parentIndex] = true;
  						
  						i++;
  					}
  				}
  			}
  			
  			/* start - attach item state class to order level */
  			this.formatedsaleOrderStates[parentIndex].states = orderSates;
  			/* end - attach item state class to order level */
  		}
  		
  		this.linkChanged();
  	}
  	
  	linkChanged(){
  	
  		for( var saleOrderState of this.saleOrderStates ){
  			if( saleOrderState && saleOrderState.changed ){
  				
  				for( var change of saleOrderState.changed ){
  					let propertyPath : string = "saleOrderState." + change.substring( 0, change.indexOf(":") );
  					let propertyChange : string = change.substring( change.indexOf(":") + 1, change.length );
  					//console.log( propertyPath );
  					//console.log( propertyChange );
  					
  					if( propertyChange == "{new}" ){
  						if( propertyPath.slice(-"]".length) == "]" ){
  							eval( propertyPath + ".isNew=true" );
  							//console.log( eval( propertyPath + ".isNew" ) );
  						}
  					}else if( propertyChange == "{remove}" ){
  						
  					}else if( eval ( propertyPath ) ){
  						eval( propertyPath + "Changed=" + propertyChange );
  						//console.log( eval( propertyPath + "Changed" ) );
  						if( propertyPath.indexOf("[") > 0 ){
  							let indexPath = propertyPath.substring( 0, propertyPath.lastIndexOf(".") );
  							eval( indexPath + ".isChanged = true" );
  						}
  					}
  				}
  			}
  		}
  	}
  	
  	itemStateClick( event : any , orderState : any, itemState:any ){

  		event.stopPropagation(); 
  		this.showItemStateDetail( orderState, itemState );
  	}
  	
  	orderClick( event : any , orderState : any ){
  		
  		event.stopPropagation(); 
  		let node = $( "#" + orderState.id );
  		
  		if( node && node.treegrid("isNode") ){
  		
  			if( node.treegrid("isExpanded") ){
  				node.treegrid("collapse");
  			}else{
  				node.treegrid("expand");
  			}
  		}
  	}
  	
  	showItemStateDetail( orderState : any,  itemState:any ){
  	
  		this.itemDetailComponent.setStateDate ( orderState , itemState );
  		$('#sale-order-state-detail-modal').modal();
  		//this.itemDetailClickEvent.emit( { 'test' : 'test' } )
  	}
}