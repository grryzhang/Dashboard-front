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
				<div class="modal-dialog">
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
									<img src="http://192.168.0.29/image/web/{{corporation.imageId}}.jpg" class="img-responsive" alt=""/>
								</div>
							</div>
    				  		<div class="row"><!--/row start-->
    				  			<div class="col-xs-12 col-sm12 col-lg-12">
    				  				<ul id="myTab" class="nav nav-tabs">
										<li class="active">
											<a href="#supplierDetail-supplierTab" data-toggle="tab" class="bg-grey"><Strong>Introduction</Strong></a>
										</li>
									</ul>
									<div id="myTabContent" class="tab-content">
										<div class="tab-pane fade in active" id="supplIerDetail-supplierTab">
											<div class="col-xs-12 col-sm12 col-lg-12">
												<table class="table" style="table-layout:fixed;">
													<tbody>
														<tr>
															<td width="35%">Factory Size</td>
															<td>{{corporation.factorySize}}</td>
														</tr>
														<tr>
															<td>Address</td>
															<td>{{corporation.address}}</td>
														</tr>
                                                        <tr>
															<td>Factory Address</td>
															<td>{{corporation.factoryAddress}}</td>
														</tr>
														<tr>
															<td>Contact</td>
															<td>{{corporation.contact}}</td>
														</tr>
														<tr>
															<td>Fax</td>
															<td>{{corporation.fax}}</td>
														</tr>
														<tr>
															<td>TelePhone</td>
															<td>{{corporation.telePhone}}</td>
														</tr>
														<tr>
															<td>Business Type</td>
															<td>{{corporation.businessType}}</td>
														</tr>
														<tr>
															<td>Factory Size</td>
															<td>{{corporation.factorySize}}</td>
														</tr>
														<tr>
															<td>Year Established</td>
															<td>{{corporation.yearEstablished}}</td>
														</tr>
														<tr>
															<td>Annual OutputValue</td>
															<td>{{corporation.annualOutputValue}}</td>
														</tr>
														<tr>
															<td>Annual ExportRevenue</td>
															<td>{{corporation.annualExportRevenue}}</td>
														</tr>
														<tr>
															<td>Highest Ever AnnualOutput</td>
															<td>{{corporation.highestEverAnnualOutput}}</td>
														</tr>
                                                        <tr>
															<td>Number Of ProductionLines</td>
															<td>{{corporation.noOfProductionLines}}</td>
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