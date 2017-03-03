/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />

import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Component , Input, Output, EventEmitter, ViewChild  } from '@angular/core';  

import { RecommendService } from '../../service/inquiry/recommend.service'; 

import { RecommendCorporation }  from  '../../model/recommend';
import { Corporation }           from  '../../model/corporation';

import { ItemDetailComponent }        from '../item/item.detail.component';
import { CorporationDetailComponent } from '../corporation/corporation.detail.component';

@Component(
	{
  	selector: 'inquiry-recommend-supplierfisrt-modal',
  	template:`    
  		<!--start : model window-->  
    	<div class="modal fade" id="inquiry-recommend-supplierfisrt-modal" role="dialog" aria-labelledby="saleOrderStateDetailModalLabel" aria-hidden="true">
		    <div class="modal-dialog modal-width-normal">
				<!-- start modal-content -->
		    	<div class="modal-content">
		      	    <div class="modal-header">
		      		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		      		      &times;
		      		    </button>
		      		    <h4 class="modal-title" id="inquire-status-modal-ModalLabel">Matched Items</h4>
		      		    <span class="front-label-12">Criteria <i class="fa fa-filter" aria-hidden="true"></i> Wheel Hub Diameter : 17, 18</span>
		   			</div>
		            <div class="modal-body fixed-scrollable">
    					<div class="container"><!--/container start-->
  					 		<div class="row-fluid" >
						 		<div class="col-xs-4 col-md-3 col-lg-3">
						 			<div class="panel-body">
						 			    <div class="panel panel-default">
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <a role="button" href="javascript:;" (click)="isSteelLeftCollapsed = !isSteelLeftCollapsed" >
                                                    Steel Wheel Supplier Ranking
                                                </a>
                                            </div>
                                            <div class="panel-collapse collapse in" (collapsed)="collapsed($event)" (expanded)="expanded($event)" [collapse]="isSteelLeftCollapsed">
                                                <div class="panel-body">
                                                    <template ngFor let-oneIndex [ngForOf]="steelIndex" let-i="index" > 
                                                        {{oneIndex?.corp?.name}}
    							                        <span class="badge badge-success">{{oneIndex?.corpScore}}</span>
    							                        <hr/>
    							                    </template>
                                                </div>
                                            </div>
                                            <div class="panel-heading" role="tab" id="headingOne">
                                                <a role="button" href="javascript:;" (click)="isAlloyLeftCollapsed = !isAlloyLeftCollapsed" >
                                                    Aluminum Wheel Suppliers Ranking
                                                </a>
                                            </div>
                                            <div class="panel-collapse collapse in" (collapsed)="collapsed($event)" (expanded)="expanded($event)" [collapse]="isAlloyLeftCollapsed">
                                                <div class="panel-body">
                                                    <template ngFor let-oneIndex [ngForOf]="alloyIndex" let-i="index" > 
                                                        {{oneIndex?.corp?.name}}
    							                        <span class="badge badge-success">{{oneIndex?.corpScore}}</span>
    							                        <hr/>
    							                    </template>
                                                </div>
                                            </div>
                                        </div>
						 			</div>
						 		</div>          
						 		
						 		<!--  start : main content   -->         
						 		<div class="col-xs-8 col-md-9 col-lg-9" style="font-size:12px;">    
						 			<template ngFor let-recommendCorp [ngForOf]="recommendCorps" let-i="index" > 
						 			<div class="row border-around">
						 				<div class="col-xs-12 col-md-12 col-lg-12">
						 					<div class="row" style="padding-left:5px;padding-top:5px;">
						 					    <div class="col-xs-6 col-md-4 col-lg-4">
						 					        <template [ngIf]="recommendCorp.corp && recommendCorp.corp.imageId">
						 					        <a href="javascript:;">
						 					            <a href="javascript:;" (click)="showCorporationDetail( recommendCorp.corp, $event )">
						 				                    <img src="http://192.168.0.29/image/web/{{recommendCorp.corp?.imageId}}.jpg" class="img-responsive" alt=""/>
						 				                </a>
						 				            </a>
						 				            </template>
						 					    </div>
						 					    <div class="col-xs-6 col-md-8 col-lg-8">
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Supplier Name
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.name}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Score
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corpScore}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">  
						 					        		Factory Size 
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.factorySize}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Year Established
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.yearEstablished}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Annual Output
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.annualOutputValue}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Ever Annual Output
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.highestEverAnnualOutput}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		NO of Production Lines
						 					        	</div>
						 					        	<div class="col-xs-6 col-md-8 col-lg-9">
						 					        		{{recommendCorp?.corp?.noOfProductionLines}}
						 					        	</div>
						 					        </div>
						 					    </div>
						 					</div>
						 					<hr/>
						 					<div class="row">
						 						<template ngFor let-otherWheel [ngForOf]="recommendCorp.wheels" let-wheelsIndex="index" >
						 						<template [ngIf]="wheelsIndex < 3">
						 				            <div class="col-xs-6 col-md-4 col-lg-4 non-padding-left-right">
						 				            	<div class="row" style="padding-left:5px">
						 				            		<div class="col-md-7">
						 				            			<a href="javascript:;" (click)="showItemDetail( otherWheel.id , $event )">
						 				            			    <img src="http://192.168.0.29/image/web/{{otherWheel.imageId}}.jpg" class="img-responsive" alt=""/>
						 				            			</a>
						 				            		</div>
						 				            	</div>
						 				            </div>
						 				         </template>
						 						 </template>
						 					</div>
						 					<div class="row">
						 						<template ngFor let-otherWheel [ngForOf]="recommendCorp.wheels" let-wheelsIndex="index" >
						 						<template [ngIf]="wheelsIndex < 3">
						 				            <div class="col-xs-6 col-md-4 col-lg-4 non-padding-left-right">
						 				            	<div class="row" style="padding-left:5px">
						 				            		<div class="col-lg-11 bg-grey">
						 				            			<span><strong>{{otherWheel.name}}</strong></span>
						 				            		</div>
						 				            	</div>
						 				            </div>
						 				         </template>
						 						 </template>
						 					</div>
						 					<div class="row">
						 						<template ngFor let-otherWheel [ngForOf]="recommendCorp.wheels" let-wheelsIndex="index" >
						 						<template [ngIf]="wheelsIndex < 3">
						 				            <div class="col-xs-6 col-md-4 col-lg-4 non-padding-left-right">
						 				            	<template [ngIf]="otherWheel.price && otherWheel.price.length>0">
						 				            	<div class="row" style="padding-left:5px">
						 				            		<div class="col-lg-11">
						 				            			<table class="table" style="table-layout: fixed;">
						 				            				<thead>
 						 				            				    <tr>
    				 					            					    <th>Quantity</th>
    				 					            				        <th>Unit price</th>
    				 					            				    </tr>
    				 					            				</thead>
						 				            				<tbody>
						 				            					<template ngFor let-onePrice [ngForOf]="otherWheel.price"> 
						 				            					<tr>
						 				            						<td width="15px">{{onePrice?.purchaseQuantity}}</td>
						 				            						<td>{{onePrice?.unitPrice}}</td>
						 				            					</tr>
						 				            					</template>
						 				            				</tbody>
						 				            			</table>
						 				            		</div>
						 				            	</div>
						 				            	</template>
						 				            </div>
						 				        </template>
						 						</template>
						 					</div>
						 				    <div class="row">
						 						<template ngFor let-otherWheel [ngForOf]="recommendCorp.wheels" let-wheelsIndex="index" >
						 						<template [ngIf]="wheelsIndex < 3">
						 				            <div class="col-xs-6 col-md-4 col-lg-4 non-padding-left-right">
						 				                <div class="row" style="padding-left:5px">
						 				            		<div class="col-lg-6 front-label-12" >
						 				            			Material
						 				            		</div>
						 				            		<div class="col-lg-6">
						 				            			<mark>{{otherWheel.material}}</mark>
						 				            		</div>
						 				            	</div>
						 				            	<div class="row" style="padding-left:5px">
						 				            		<div class="col-lg-6 front-label-12" >
						 				            			Wheel Hub Diameter
						 				            		</div>
						 				            		<div class="col-lg-6">
						 				            			<mark>{{otherWheel.wheelHubDiameter}}</mark>
						 				            		</div>
						 				            	</div>
						 				            	<div class="row" style="padding-left:5px">
						 				            		<div class="col-lg-6 front-label-12" >
						 				            			PCD
						 				            		</div>
						 				            		<div class="col-lg-6">
						 				            			<mark>{{otherWheel.pcd}}</mark>
						 				            		</div>
						 				            	</div>
						 				            </div>
						 						</template>
						 						</template>
						 					</div>
						 					<hr/>
						 				</div>
						 			</div>    
						 			</template>
						 		</div>                    
						 		<!-- end : main content -->
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
    	<item-detail-modal></item-detail-modal>
    	<corporation-detail-modal></corporation-detail-modal>
		`
	}
)

export class InquiryRecommendSupplierFirstComponent{   
  
    errorMessage : String;
    
    recommendCorps : RecommendCorporation[];
    
    steelIndex     : RecommendCorporation[] = [];
    alloyIndex     : RecommendCorporation[] = [];
    
    public isSteelLeftCollapsed:boolean = true;
    public isAlloyLeftCollapsed:boolean = true;
    
    @ViewChild(ItemDetailComponent)        itemDetailModal        : ItemDetailComponent;
    @ViewChild(CorporationDetailComponent) corporationDetailModal : CorporationDetailComponent;
    
    constructor (
	  	private recommendService  : RecommendService
    ){}
    	
    ngOnInit() {	
    }
    
    public collapsed(event:any):void {
    }
 
    public expanded(event:any):void {
    }
    
    getRecommendSuppliers( indexId : string ){
    
    	this.recommendService.queryOneRecommendIndex( indexId ).subscribe(
    		reponseData => { 
    			this.recommendCorps = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
    	

    	this.recommendService.queryRecommendCorpList( "wheel-aluminum-index" , {"limit":"-1","start":"-1"} ).subscribe(
    		reponseData => { 
    			this.alloyIndex = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
    	
    	this.recommendService.queryRecommendCorpList( "wheel-stell-index" , {"limit":"-1","start":"-1"} ).subscribe(
    		reponseData => { 
    			this.steelIndex = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
    	
    	console.log( this.steelIndex );
    }
    
    
    showItemDetail( itemId : string ,event : any ){
  		
  		event.stopPropagation(); 
  		$('#item-detail-modal').modal();
  	    this.itemDetailModal.freshItemDetail( itemId );
  	}
  	
  	showCorporationDetail( corporation : Corporation , event : any ){
  		
  		event.stopPropagation(); 
  		$('#corporation-detail-modal').modal();
  	    this.corporationDetailModal.changeCorporation( corporation );
  	}
}