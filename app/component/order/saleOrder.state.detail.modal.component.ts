/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />

import { Component , Input }      from '@angular/core';  

import { SaleOrderState, SaleOrderItemState, FreightInfo }  from  '../../model/saleOrder';

@Component(
	{
  		selector: 'sale-order-state-detail-modal',
  		template:`    
  			<!--start : model window-->  
      		<div class="modal fade" id="sale-order-state-detail-modal" role="dialog" aria-labelledby="saleOrderStateDetailModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-width-normal">
					<!-- start modal-content -->
			      	<div class="modal-content">
			         	<div class="modal-header">
		        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		        		      &times;
		        			</button>
		        			<h4 class="modal-title" id="inquire-status-modal-ModalLabel">Item State</h4>
		     			</div>
			         	<div class="modal-body modal-active-scroll">
			         	
    						<div class="container"><!--/container start-->
  								<div class="row-fluid" >
									<div class="col-xs-5 col-sm-4 col-lg-3  non-padding-left-right">
										<nav id="navbar-example" class="navbar navbar-default" role="navigation" style="height:300px;overflow:auto; position: relative;"> 
											<ul class="nav nav-pills nav-stacked">
											    <li>
											    	<a href="#inProducting" target="_self" class="list-group-item">Checking
											    		<span style="float:right" ><i class="fa fa-cogs"></i></span>
											    	</a>
											    </li>
											    <template [ngIf]="stateInProduction">
											    <li>
											    	<a href="#inProducting" target="_self" class="list-group-item"> In Production
											    		<span style="float:right" ><i class="fontello-icon-industry icon-large2"></i></span>
											    	</a>
											    </li>
											    </template>
											    <template [ngIf]="stateInQI">
											    <li>
											    	<a href="#inQI" target="_self" class="list-group-item"> Quality Inspection
											    		<span style="float:right" ><i class="fa fa-user-md"></i></span>
											    	</a>
											    </li>
											    </template>
											    <template [ngIf]="stateBooking">
											    <li>
											    	<a href="#isInShipment" target="_self" class="list-group-item"> Booking 
											    		<span style="float:right" ><i class="fontello-icon-edit icon-large2"></i></span>
											    	</a>
											    </li>
											    </template>
											    <template [ngIf]="stateInShipment">
											    <li>
											    	<a href="#isInShipment" target="_self" class="list-group-item"> In Transport
											    		<span style="float:right" ><i class="fontello-icon-ship icon-large2"></i></span>
											    	</a>
											    </li>
											    </template>
											</ul>
										</nav> 
									</div>
									<div class="col-xs-6 col-sm-7 col-lg-8 non-padding-left-right">
										<div class="panel panel-default non-padding-left-right" style="border-left:none;">
        									<div class="panel-body non-padding-left-right" data-spy="scroll" data-target="#navbar-example" data-offset="50" style="max-height:450px;overflow:auto; position: relative;">
											    
											    <!-- start - item in production info -->
											    <div id="inProducting" class="shadow-panel" >
											    	<div  class="row">
													 	<div class="col-xs-12 col-lg-12">
													 		<ul class="list-group-item active">{{saleOrderItemState?.type}} : Order Detail</ul>
													 		<li class="list-group-item">
													 			<div  class="row">
													 				<div class="col-xs-12 col-lg-6">
													 					<table>
													 						<tbody>
													 							<tr>
													 								<td>Part Number<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.type}}</p></td>
													 							</tr>
													 							<tr>
													 								<td>Unit<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.unit}}</p></td>
													 							</tr>
													 							<tr>
													 								<td>Qty<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.totalNumber}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.totalNumberChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.totalNumberChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.totalNumberChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 							<tr>
													 								<td>Unit Price<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.unitPrice}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.unitPriceChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.unitPriceChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.unitPriceChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 							<tr>
													 								<td>Amount<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.totalPrice}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.totalPriceChanged">
													 							<tr class="warning">
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.totalPriceChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.totalPriceChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 						</tbody>
													 					</table>
													 				</div>
													 				<div class="col-xs-12 col-lg-6">
													 					<table>
													 						<tbody>
													 							<tr>
													 								<td>Forecast Delivery Date<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.forecastDeliveryTime}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.forecastDeliveryTimeChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.forecastDeliveryTimeChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.forecastDeliveryTimeChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 							<tr>
													 								<td>Forecast Ex-factory Date<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.deliveryTime}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.deliveryTimeChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.deliveryTimeChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.deliveryTimeChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 							<tr>
													 								<td>Actual Delivery date<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.productionEndTime}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.productionEndTimeChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.productionEndTimeChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.productionEndTimeChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 						</tbody>
													 					</table>
													 				</div>
													 			</div>
													 		</li>
													 	</div>
													</div>
											    </div>
											    <!-- end - item in production info -->
											    
											    <!-- start - item QI -->
											    <template [ngIf]="stateInQI">
											    <div id="inQI" class="shadow-panel" >
											    	<div  class="row">
													 	<div class="col-xs-12 col-lg-12">
													 		<ul class="list-group-item active">{{saleOrderItemState?.type}} : QI </ul>
													 		<li class="list-group-item">
													 			<div  class="row">
													 				<div class="col-xs-12 col-lg-6">
													 					<table>
													 						<tbody>
													 							<tr>
													 								<td>Inspection<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.inspection}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.inspectionChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.inspectionChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.inspectionChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 							<tr>
													 								<td>Inspection Date<p style="float:right ">:</p></td>
													 								<td><p> &nbsp;{{saleOrderItemState?.inspectionDate}}</p></td>
													 							</tr>
													 							<template [ngIf]="saleOrderItemState?.inspectionDateChanged">
													 							<tr>
													 								<td></td>
													 								<td class="bg-warning">
													 									<p> &nbsp;{{saleOrderItemState?.inspectionDateChanged?.old}} 
													 									<span><i class="fa fa-arrow-circle-right"></i></span> 
													 									{{saleOrderItemState?.inspectionDateChanged?.new}}</p>
													 								</td>
													 							</tr>
													 							</template>
													 						</tbody>
													 					</table>
													 				</div>
													 			</div>
													 		</li>
													 	</div>
													</div>
											    </div>
											    </template>
											    <!-- end - item QI -->
											    
											    <!-- start - item Shipment -->
											    <template [ngIf]="stateBooking || stateInShipment">
											    <div id="isInShipment" class="shadow-panel" >
											    	<div  class="row">
													 	<div class="col-xs-12 col-lg-12">
													 		<ul class="list-group-item active">{{saleOrderItemState?.type}} : Shipment </ul>
													 		<template ngFor let-freightInfo [ngForOf]="saleOrderItemState.freightInfos">
													 			<li class="list-group-item">
													 				<div class="row">
													 					<div class="col-xs-12 col-lg-6">
													 						<table>
													 							<tbody>
													 								<tr>
													 									<td>Invoice No<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.invoiceNumber}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Container No<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.container}}</p></td>
													 								</tr>
													 								<template [ngIf]="freightInfo?.containerChanged">
													 								<tr>
													 									<td></td>
													 									<td class="bg-warning">
													 										<p> &nbsp;{{freightInfo?.containerChanged?.old}} 
													 										<span><i class="fa fa-arrow-circle-right"></i></span> 
													 										{{freightInfo?.containerChanged?.new}}</p>
													 									</td>
													 								</tr>
													 								</template>
													 								<tr>
													 									<td>Booking Date<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.invoiceDate}}</p></td>
													 								</tr>
													 								<template [ngIf]="freightInfo?.invoiceDateChanged">
													 								<tr>
													 									<td></td>
													 									<td class="bg-warning">
													 										<p> &nbsp;{{freightInfo?.invoiceDateChanged?.old}} 
													 										<span><i class="fa fa-arrow-circle-right"></i></span> 
													 										{{freightInfo?.invoiceDateChanged?.new}}</p>
													 									</td>
													 								</tr>
													 								</template>
													 								<tr>
													 									<td>Delivery Port<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.startPlace}}</p></td>
													 								</tr>
													 								<template [ngIf]="freightInfo?.startPlaceChanged">
													 								<tr>
													 									<td></td>
													 									<td class="bg-warning">
													 										<p> &nbsp;{{freightInfo?.startPlaceChanged?.old}} 
													 										<span><i class="fa fa-arrow-circle-right"></i></span> 
													 										{{freightInfo?.startPlaceChanged?.new}}</p>
													 									</td>
													 								</tr>
													 								</template>
													 								<tr>
													 									<td>Destination Port<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.endPlace}}</p></td>
													 								</tr>
													 								<template [ngIf]="freightInfo?.endPlaceChanged">
													 								<tr>
													 									<td></td>
													 									<td class="bg-warning">
													 										<p> &nbsp;{{freightInfo?.endPlaceChanged?.old}} 
													 										<span><i class="fa fa-arrow-circle-right"></i></span> 
													 										{{freightInfo?.endPlaceChanged?.new}}</p>
													 									</td>
													 								</tr>
													 								</template>
													 								<tr>
													 									<td>Transportation<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.transportMode}}</p></td>
													 								</tr>
													 								<template [ngIf]="freightInfo?.transportModeChanged">
													 								<tr>
													 									<td></td>
													 									<td class="bg-warning">
													 										<p> &nbsp;{{freightInfo?.transportModeChanged?.old}} 
													 										<span><i class="fa fa-arrow-circle-right"></i></span> 
													 										{{freightInfo?.transportModeChanged?.new}}</p>
													 									</td>
													 								</tr>
													 								</template>
													 							</tbody>
													 						</table>
													 					</div>
													 					<div class="col-xs-12 col-lg-6">
													 						<table>
													 							<tbody>
													 								<tr>
													 									<td>ETD/ON BOARD DATE<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.ETD}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>ETA<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.destinationcurrentETA}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Receipt Date<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.dateOfDeliveryOrPickUp}}</p></td>
													 								</tr>
													 							</tbody>
													 						</table>
													 					</div>
													 				</div>
													 			</li>
													 			<!-- shipment tracing start  -->
													 			<template [ngIf]="freightInfo?.shipmentTracing">
													 			<li class="list-group-item">
													 				<div class="row">
													 					<div class="col-xs-12 col-lg-6">
													 						Shipment Tracing:
													 					</div>
													 					<hr/>
													 				</div>
													 				<div class="row">
													 					<div class="col-xs-12 col-lg-6">
													 						<table>
													 							<tbody>
													 								<tr>
													 									<td>MBL<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.mbl}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Container ID<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.containerId}}</p></td>
													 								</tr>
													 								<!--
													 								<tr>
													 									<td>Consignee<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.consignee}}</p></td>
													 								</tr>-->
													 								<tr>
													 									<td>Loading<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.loading}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Discharge<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.discharge}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Destination<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.destination}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>ETD<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.ETD}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>ETA Port of Discharge<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.ETAPortOfDischarge}}</p></td>
													 								</tr>
													 								
													 							</tbody>
													 						</table>
													 					</div>
													 					<div class="col-xs-12 col-lg-6">
													 						<table>
													 							<tbody>
													 								<!--
													 								<tr>
													 									<td>Current Port of Discharge<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.currentPortOfDischarge}}</p></td>
													 								</tr>-->
													 								<tr>
													 									<td>Discharge Current ETA<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.dischargeCurrentETA}}</p></td>
													 								</tr>
													 								<!--<tr>
													 									<td>Current Port of Destination<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.currentPortOfDestination}}</p></td>
													 								</tr>-->
													 								<tr>
													 									<td>Destination Current ETA<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.destinationcurrentETA}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Customs Release Date<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.customsReleaseDate}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Date Storage Begins<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.dateStorageBegins}}</p></td>
													 								</tr>
													 								<tr>
													 									<td>Date of Delivery or Pick up<p style="float:right ">:</p></td>
													 									<td><p>&nbsp;{{freightInfo?.shipmentTracing?.dateOfDeliveryOrPickUp}}</p></td>
													 								</tr>
													 							</tbody>
													 						</table>
													 					</div>
													 				</div>
													 			</li>
													 			</template>
													 			<!-- shipment tracing end  -->
													 		</template>
													 		
													 	</div>
													</div>
											    </div>
											    </template>
											    <!-- end - item Shipment -->
											</div>
										</div>
									</div>
  								</div>
  							</div>	
    						
    					</div>	

			         	<div class="modal-footer">
			            	<button type="button" class="btn btn-default" data-dismiss="modal">
			            		Close
			            	</button>
			        	 </div>
			      	</div><!-- /.modal-content -->
				</div>     
      		</div><!--end : model window-->  
		`
	}
)

export class SaleOrderStateDetailModalComponents {     

		
	@Input('saleOrderItemState') saleOrderItemState : SaleOrderItemState;
	@Input('saleOrderState')     saleOrderState     : SaleOrderState;
	
	stateChecking     : boolean = true;
	stateInProduction : boolean = false;
	stateInQI         : boolean = false;
	stateBooking      : boolean = false;
	stateInShipment   : boolean = false;
	
	constructor (
  	) {}
  	
  	ngOnInit() {
  		this.itemStateCheck();
  	}
  	
  	setStateDate( saleOrderState : SaleOrderState, saleOrderItemState : SaleOrderItemState ){
  	
  		this.saleOrderState     = saleOrderState;
  		this.saleOrderItemState = saleOrderItemState;
  		
  		this.itemStateCheck();
  	}
  	
  	itemStateCheck(){
  	
  	  		
  		this.stateChecking      = true;
		this.stateInProduction  = false;
		this.stateInQI          = false;
		this.stateBooking       = false;
		this.stateInShipment    = false;
  	
  		if( this.saleOrderItemState ){
  		
  			if( this.saleOrderItemState.forecastDeliveryTime &&  this.saleOrderItemState.forecastDeliveryTime.length > 0 ){
  				this.stateInProduction = true;
  			}
  			if( this.saleOrderItemState.productionEndTime && this.saleOrderItemState.productionEndTime.length > 0 ){
  				this.stateInQI = true;
  			}
  			
  			if( this.saleOrderItemState.freightInfos && Array.isArray( this.saleOrderItemState.freightInfos ) ){
  				for( var freightInfo of this.saleOrderItemState.freightInfos ){
  				
  					if( freightInfo.invoiceDate && freightInfo.invoiceDate.length > 0 ){
  						this.stateBooking = true;
  					}
  					if( freightInfo.estimatedTimeofDelivery && freightInfo.estimatedTimeofDelivery.length > 0 ){
  						this.stateInShipment = true;
  					}
  				}
  			}
  		}
  	}
}