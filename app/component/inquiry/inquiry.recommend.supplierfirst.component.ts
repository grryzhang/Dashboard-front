/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />

import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { Component , Input, Output, EventEmitter, ViewChild  } from '@angular/core';  

import { RecommendService   } from '../../service/inquiry/recommend.service'; 
import { CorporationService } from '../../service/corporation/corporation.service'; 

import { RecommendCorporation, 
         RecommendSearchParameters } from  '../../model/recommend';
import { Corporation               } from  '../../model/corporation';
import { EvaluationSupplierInfo , 
         CorporationGradeList, 
         CorporationGrade          } from  '../../model/corporation';

import { ItemDetailComponent }        from '../item/item.detail.component';
import { CorporationDetailComponent } from '../corporation/corporation.detail.component';
import { EvaluationDetailComponent  } from '../corporation/evaluation.detail.component';

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
		      		    <template [ngIf]=" recommendCorps && recommendCorps[0]">
		      		        <span class="front-label-12">Criteria <i class="fa fa-filter" aria-hidden="true"></i>{{recommendCorps[0]?.indexCondition}}</span>
		      		    </template>
		      		    
		      		    <div class="row"><!--start : Pagination:row start-->
    			  		    <div class="col-xs-12 col-lg-12">
    			  		        <nav>    
						    		<div>                                                                
						    	    	<ul id="recommend-supplierFirst-top-pagination" class="pagination-sm non-padding-top-bottom pull-right">
						    	    		<li class="disabled">
						    	      			<a href="#">Total:{{total}}</a>
						    	      		</li>
						    	    	</ul>
						    	    </div>
						    	</nav>
    			  		    </div>
    			  	    </div> <!--end : Pagination:row start-->  
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
						 					    <div class="col-xs-5 col-md-3 col-lg-3">
						 					        <template [ngIf]="recommendCorp.corp && recommendCorp.corp.imageId">
						 					            <template ngFor let-imageId [ngForOf]="recommendCorp.corp.imageId">
						 					                <a href="javascript:;" (click)="showCorporationDetail( recommendCorp.corp, $event )">
						 				                        <img src="http://192.168.0.29/image/web/{{imageId}}.jpg" class="img-responsive" alt=""/>
						 				                    </a>
						 					            </template>
						 				            </template>
						 					    </div>
						 					    <div class="col-xs-2 col-md-2 col-lg-2">
						 					        <template [ngIf]="recommendCorp.corp.recommended != null">
						 					            <img src="http://192.168.0.29/image/common/recommendation.jpg" class="img-responsive" alt="" height="100" width="100"/>
						 					        </template>
						 					        <template [ngIf]="recommendCorp.corp.cooperator != null">
						 					            <img src="http://192.168.0.29/image/common/cooperation.jpg" class="img-responsive" alt="" height="100" width="100"/>
						 					        </template>
						 					    </div>
						 					    <div class="col-xs-5 col-md-7 col-lg-7">
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Supplier Name
						 					        	</div>
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp?.corp?.name}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Main Products
						 					        	</div>
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp?.corp?.mainProducts}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Year Established
						 					        	</div>
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp?.corp?.yearEstablished}}
						 					        	</div>
						 					        </div>
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Production capacity
						 					        	</div>
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp?.corp?.highestEverAnnualOutput}}
						 					        	</div>
						 					        </div>
						 					        <!--
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">
						 					        		Annual Output
						 					        	</div>
						 					        	
						 					        	<template [ngIf]="recommendCorp.corp.annualOutputValue != null">
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp.corp.annualOutputValue}}
						 					        	</div>
						 					        	</template>
						 					        	<template [ngIf]="recommendCorp.corp.annualExportRevenue != null && recommendCorp.corp.annualOutputValue == null">
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp.corp.annualExportRevenue}}
						 					        	</div>
						 					        	</template>
						 					        	
						 					        </div>
						 					        -->
						 					        <div class="row">
						 					        	<div class="col-xs-6 col-md-4 col-lg-3 front-label-12">  
						 					        		Factory Size 
						 					        	</div>
						 					        	<div class="col-xs-5 col-md-7 col-lg-8">
						 					        		{{recommendCorp?.corp?.factorySize}}
						 					        	</div>
						 					        </div>
						 					    </div>
						 					</div>
						 					<template [ngIf]="recommendCorp.gradeInfo">
						 					<div class="row" style="font-size:14px;"><!-- start:evaluation -->
						 					    <div class="col-xs-12">
						 					        <a href="javascript:;" (click)="showEvaluationDetail( recommendCorp.gradeInfo.FNUMBER )">
						 					            Evaluation:
						 					            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
						 					            {{recommendCorp?.gradeInfo?.lastGradeTime | date: 'MM/dd/yyyy'}}
						 					            <i class="fa fa-bar-chart" aria-hidden="true"></i>
						 					            {{recommendCorp?.gradeInfo?.gradeScore}}
						 					        </a>
						 					    </div>   
						 					</div><!-- end:evaluation -->
						 					</template>
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
		    		    <div style="float:left">
		    		        Contact us : 
		    		        <i class="fa fa-phone-square" aria-hidden="true"></i> 0086-21-6888 6117 EX: 237 
		    		        <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;<a href="mailto:xujing@zhongzhou.net&subject=Inquiry">xujing@zhongzhou.net</a>
		    		    </div>
		    		    
		    	   	    <button type="button" class="btn btn-default" data-dismiss="modal">
		    	    	    Close
		    	   	    </button>
		    		</div>
		  		</div><!-- /.modal-content -->
		    </div>     
    	</div><!--end : model window-->  
    	<item-detail-modal></item-detail-modal>
    	<corporation-detail-modal></corporation-detail-modal>
    	<corporation-evaluation-detail-modal></corporation-evaluation-detail-modal>
		`
	}
)

export class InquiryRecommendSupplierFirstComponent{   
  
    errorMessage : String;
    
    recommendCorps : RecommendCorporation[];
    
    gradeLists : CorporationGradeList[];
    
    total : number = 0;
    currentPage : number = 1;
    
    recommendSearchParameters : RecommendSearchParameters;
    
    steelIndex     : RecommendCorporation[] = [];
    alloyIndex     : RecommendCorporation[] = [];
    
    public isSteelLeftCollapsed:boolean = true;
    public isAlloyLeftCollapsed:boolean = true;
    
    @ViewChild(ItemDetailComponent)        itemDetailModal          : ItemDetailComponent;
    @ViewChild(CorporationDetailComponent) corporationDetailModal   : CorporationDetailComponent;
    @ViewChild(EvaluationDetailComponent)  evaluationDetailComponent : EvaluationDetailComponent;
    
    constructor (
	  	private recommendService    : RecommendService,
	  	private corporationService  : CorporationService
    ){}
    	
    ngOnInit() {	
        this.getDefaultRecommendList();
    }
    
    public collapsed(event:any):void {
    }
 
    public expanded(event:any):void {
    }
    
    getRecommendSuppliers( indexId : string ){
    
        $('#recommend-supplierFirst-top-pagination').empty();
  		$('#recommend-supplierFirst-top-pagination').removeData("twbs-pagination");
  		$('#recommend-supplierFirst-top-pagination').unbind("page");
    
        this.recommendSearchParameters = new RecommendSearchParameters();
        this.recommendSearchParameters.indexIds = [ indexId ];
    	this.refreshRecommendSuppliers( this.recommendSearchParameters );
    }
    
    private refreshRecommendSuppliers( recommendSearchParameters : RecommendSearchParameters ){
    
        this.recommendSearchParameters = recommendSearchParameters;
    	this.recommendService.queryOneRecommendIndex( this.recommendSearchParameters ).subscribe(
    		reponseData => { 
    			this.recommendCorps = reponseData.data;
    			if( reponseData.totalResult ){
    			    this.total = reponseData.totalResult;
    			}
    			
    			let corporationENames : any[] = [];
    			for( let i = 0;i < this.recommendCorps.length; i++ ){
    			    corporationENames.push( this.recommendCorps[i].corp.name );
    			}
  	           
  	            let corporationGradeSearchParameters : any = { "corporationGroup":["9911"] };
  	            corporationGradeSearchParameters.corporationENames = corporationENames;
  		        
  		        this.corporationService.queryEvaluationList( corporationGradeSearchParameters ).subscribe(
  		            reponseData => { 
  		        	    this.gradeLists = reponseData.data;
  		        	    
  		        	    for( let i = 0;i < this.recommendCorps.length; i++ ){
  		        	        for( let j = 0;j < this.gradeLists.length; j++  ){
  		        	            
  		        	            if( this.recommendCorps[i].corp.name == this.gradeLists[j].corporationEName ){
  		        	                this.recommendCorps[i].gradeInfo = this.gradeLists[j];
  		        	            }
  		        	        }
    			        }
  		            },
  	                error => { this.errorMessage = <any>error }
  	            );
    			
    			this.createPagenation();
    		},
    	    error => { this.errorMessage = <any>error }
    	);
    }
    
    getDefaultRecommendList(){	
        let aluminumRecommendSearchParameters = new RecommendSearchParameters();
        aluminumRecommendSearchParameters.indexIds = [ "wheel-aluminum-index" ];
        aluminumRecommendSearchParameters.limit    = -1;
        aluminumRecommendSearchParameters.start    = -1;
    	this.recommendService.queryRecommendCorpList( aluminumRecommendSearchParameters ).subscribe(
    		reponseData => { 
    			this.alloyIndex = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
    	
    	let steelRecommendSearchParameters = new RecommendSearchParameters();
        steelRecommendSearchParameters.indexIds = [ "wheel-steel-index" ];
        steelRecommendSearchParameters.limit    = -1;
        steelRecommendSearchParameters.start    = -1;
    	this.recommendService.queryRecommendCorpList( steelRecommendSearchParameters ).subscribe(
    		reponseData => { 
    			this.steelIndex = reponseData.data;
    		},
    	    error => { this.errorMessage = <any>error }
    	);
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
  	
  	showEvaluationDetail( corporationNumber : string ){
  	    $('#corporation-evaluation-detail-modal').modal();
  	    this.evaluationDetailComponent.freshEvaluation( corporationNumber );
  	}
  	
  	private createPagenation(){
  	    
  		requirejs(
  			['twbsPagination'],
  			() => {
  				$('#recommend-supplierFirst-top-pagination').twbsPagination(
        			{
    			    	totalPages: Math.ceil( this.total / 10 ) ,
    			    	total: this.total,
    			    	visiblePages: 7,
    			    	"first" : "<<",
    			    	"prev"  : "<",
    			    	"next"  : ">",
    			    	"last"  : ">>",
    			    	"initiateStartPageClick": false,
    			    	"onPageClick" : ( event : any, page : any ) => {

    			    		if( this.recommendSearchParameters ){
    			    			this.recommendSearchParameters.start = ( page - 1 ) * 10;
    			    		    this.recommendSearchParameters.limit = 10;
    			    		    
    			    		    if( this.recommendSearchParameters.indexIds && this.recommendSearchParameters.indexIds[0] ){
    			    		        this.refreshRecommendSuppliers( this.recommendSearchParameters );
    			    		    }
    			    		}
    			    	}
    				}
    			);
			}
  		);
  	}
}