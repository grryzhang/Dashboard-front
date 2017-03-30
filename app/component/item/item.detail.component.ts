/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />

import { Component, Input, ViewChild }  from '@angular/core';  

import { ItemWheelService } from '../../service/item/wheel.service'

import { Wheel } from '../../model/wheel'

@Component(
	{
  		selector: 'item-detail-modal',
  		template: `
  			<div class="modal fade" id="item-detail-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
			      	<div class="modal-content">
			         	<div class="modal-header">
			         	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		      		            &times;
		      		        </button>
			            	<h4 class="modal-title" id="myModalLabel">&nbsp;</h4>
			         	</div>
			         	<template [ngIf]="wheels != null && wheels[0] != null">
 						<div class="container-fluid">
    				  		<div class="row">
								<div class="col-xs-12 col-lg-12">
									<h4>{{wheels[0]?.name}}</h4>
									<!--
									<p><a class="btn btn-primary" href="http://www.xingmin.com/show-12-102-1.html" target="_blank" role="button">View data source »</a></p>
									-->
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12 col-lg-12">
									<img src="http://192.168.0.29/image/web/{{wheels[0]?.imageId}}.jpg" class="img-responsive" alt=""/>
								</div>
							</div>
    				  		<div class="row"><!--/row start-->
    				  			<div class="col-xs-12 col-sm12 col-lg-12">
    				  				<ul id="myTab" class="nav nav-tabs">
										<li class="active">
											<a href="#supplierDetail-supplierTab" data-toggle="tab" class="bg-grey"><Strong>Technical Parameters</Strong></a>
										</li>
									</ul>
									<div id="myTabContent" class="tab-content">
										<div class="tab-pane fade in active" id="supplIerDetail-supplierTab">
											<div class="col-xs-12 col-sm12 col-lg-12">
												<table class="table" style="table-layout:fixed;">
													<tbody>
														<tr>
															<td width="35%">Material</td>
															<td>{{wheels[0]?.material}}</td>
														</tr>
														<tr>
															<td>Price</td>
															<td>
															    <table class="table" style="table-layout: fixed;">
						 					            			<thead>
 						 					            			    <tr>
    				 						            				    <th>Quantity</th>
    				 						            			        <th>Unit price</th>
    				 						            			    </tr>
    				 						            			</thead>
						 					            			<tbody>
						 					            				<template ngFor let-onePrice [ngForOf]="wheels[0].price"> 
						 					            				<tr>
						 					            					<td width="15px">{{onePrice?.purchaseQuantity}}</td>
						 					            					<td>{{onePrice?.unitPrice}}</td>
						 					            				</tr>
						 					            				</template>
						 					            			</tbody>
						 					            		</table>
															</td>
														</tr>
														<tr>
															<td>Wheel Hub Diameter</td>
															<td>{{wheels[0]?.wheelHubDiameter}}</td>
														</tr>
														<tr>
															<td>PCD</td>
															<td>{{wheels[0]?.pcd}}</td>
														</tr>
														<tr>
															<td>ET</td>
															<td>{{wheels[0]?.et}}</td>
														</tr>
														<tr>
															<td>Hole</td>
															<td>{{wheels[0]?.hole}}</td>
														</tr>
														<tr>
															<td>Width</td>
															<td>{{wheels[0]?.width}}</td>
														</tr>
														<tr>
															<td>Production Capacity</td>
															<td>{{wheels[0]?.productionCapacity}}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
    				  			</div><!-- end : column-items  col-xs-8 col-lg-8 --> 		
    						</div>
						</div><!--/container-->
						</template>
						<div class="modal-footer">
		    	   	        <button type="button" class="btn btn-default" data-dismiss="modal">
		    	    	     Close
		    	   	        </button>
		    		    </div>
			      	</div><!-- /.modal-content -->
				</div><!--end : model window-->     
      		</div>
      		<!--end : model window-->  
  		`,
	}
)

export class ItemDetailComponent {     

	errorMessage : String;
	
	wheels : Wheel[];   

  	constructor (
  	    private itemWheelService  : ItemWheelService
  	) {}
  	
  	ngOnInit() {
  	}
  	
  	freshItemDetail( itemId : string ){
  	    
  	    let wheelSearchParameters = { "wheelIds":[ itemId ] };
  	    
  	    this.itemWheelService.queryWheel( wheelSearchParameters ).subscribe(
    		reponseData => { 
    			this.wheels = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
  	}
}