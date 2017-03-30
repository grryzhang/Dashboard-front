/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />

import { Component, Input, ViewChild }  from '@angular/core';  

import { Corporation } from '../../model/corporation'

@Component(
	{
  		selector: 'corporation-detail-modal',
  		template: `
  			<div class="modal fade" id="corporation-detail-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-width-normal">
			      	<div class="modal-content">
			         	<div class="modal-header">
			         	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		      		            &times;
		      		        </button>
			            	<h4 class="modal-title" id="myModalLabel">&nbsp;</h4>
			         	</div>
			         	<template [ngIf]="corporation != null ">
 						<div class="container-fluid">
    				  		<div class="row">
								<div class="col-xs-12 col-lg-12">
									<h4>{{corporation.name}}</h4>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12 col-lg-12">
									<img src="http://192.168.0.29/image/web/{{corporation.imageId}}.jpg" class="img-responsive" alt="" height="300" width="400"/>
								</div>
							</div>
    				  		<div class="row"><!--/row start-->
    				  			<div class="col-xs-12 col-sm12 col-lg-12">
    				  			    <tabset #evaluationDetailTabs>
    				  			        <tab id="evaluation-info-tab" heading="Info">
                                            <table class="table" style="table-layout:fixed;">
									    		<tbody>
									    			<tr>
									    				<td width="35%">Main Product</td>
									    				<td>{{corporation.mainProducts}}</td>
									    			</tr>
									    			<tr>
									    				<td>Year Established</td>
									    				<td>{{corporation.yearEstablished}}</td>
									    			</tr>
									    			<tr>
									    				<td>Factory Size</td>
									    				<td>{{corporation.factorySize}}</td>
									    			</tr>
									    			<tr>
									    				<td>Highest Ever AnnualOutput</td>
									    				<td>{{corporation.highestEverAnnualOutput}}</td>
									    			</tr>
									    			<tr>
									    				<td>Annual Output</td>
									    				<td>{{corporation.annualOutputValue}}</td>
									    			</tr>
									    			<tr>
						 					        	<td>Address</td>
						 					        	<td>
						 					        	    <template [ngIf]="corporation.factoryAddress != null">
						 					        	    	{{corporation.factoryAddress}}
						 					        	    </template>
						 					        	    <template [ngIf]="corporation.address != null && corporation.factoryAddress == null">
						 					        	    	{{corporation.address}}
						 					        	    </template>
						 					        	</td>
						 					        </tr>
									    			<tr>
									    				<td>Contact</td>
									    				<td>{{corporation.contact}}</td>
									    			</tr>
									    			<tr>
									    				<td>Telephone</td>
									    				<td>{{corporation.telePhone}}</td>
									    			</tr>
									    			<tr>
									    				<td>Fax</td>
									    				<td>{{corporation.fax}}</td>
									    			</tr>
									    			<!--
									    			<tr>
									    				<td>Annual ExportRevenue</td>
									    				<td>{{corporation.annualExportRevenue}}</td>
									    			</tr>
									    			-->
									    			<!--
									    			<tr>
									    				<td>Main Markets</td>
									    				<td>{{corporation.mainMarkets}}</td>
									    			</tr>
									    			-->
									    			<tr>
									    				<td>Nearest Port</td>
									    				<td>{{corporation.nearestPort}}</td>
									    			</tr>
									    			<!--
									    			<tr>
									    				<td>Management System Certification</td>
									    				<td>{{corporation.managementSystemCertification}}</td>
									    			</tr>
									    			<tr>
									    				<td>Certifications</td>
									    				<td>
									    				    <table class="table" style="table-layout: fixed;">
						 			    	        			<tbody>
						 			    	        				<template ngFor let-itemCert [ngForOf]="corporation?.certifications"> 
						 			    	        				<tr>
						 			    	        					<td width="15px">{{ itemCert?.name}}</td>
						 			    	        				</tr>
						 			    	        				</template>
						 			    	        			</tbody>
						 			    	        		</table>
						 			    	            </td> 
									    			</tr>
									    			-->
									    		</tbody>
									    	</table>
                                        </tab>
                                        <tab id="evaluation-introduction-tab" heading="Introduction">
                                            <table class="table" style="table-layout:fixed;">
									    		<tbody>
									    			<tr>
									    				<td width="35%">Introduction</td>
													    <td><div [innerHTML]="corporation.introduction"></div></td>
									    			</tr>
									    		</tbody>
									    	</table>
                                        </tab>
                                    </tabset>
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

export class CorporationDetailComponent {     

	errorMessage : String;
	
	corporation : Corporation;   

  	constructor (
  	) {}
  	
  	ngOnInit() {
  	}
  	
  	changeCorporation( inputCorporation : Corporation ){
  	    
  	    console.log( inputCorporation );
  	    this.corporation = inputCorporation;
  	}
}