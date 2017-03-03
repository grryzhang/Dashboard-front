/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/maxazan-jquery-treegrid/treegrid.d.ts" />
/// <reference path="../../../resources/twbsPagination/twbsPagination.d.ts" />

import { ChangeDetectionStrategy, Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  

import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipModule  } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule     } from 'ng2-bootstrap/ng2-bootstrap';

import { ContractService } from '../../service/corporation/contract.service'; 

@Component(
	{
  		selector: 'router-anchor',
  		changeDetection: ChangeDetectionStrategy.OnPush,
  		template:`    
  			<div class="container"><!--/container start-->
  				<div class="row-fluid row-offcanvas row-offcanvas-right">
    		  		<div class="row"><!--/row-search-bar start-->
    		  			<div class="col-xs-12 col-sm-8 col-lg-4">
    		  				<form>
    		  					<div class="input-group">
									<input class="form-control" id="orderFuzzyInput" placeholder="Supplier Search" #contract_searchParameters />
									<span class="input-group-btn">
    		            				<button 
    		            					class="btn btn-default" 
    		            					type="button" 
    		            					(click)="getSaleOrderState( { 'fuzzy' : contract_searchParameters.value } );">
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
    		  		
    		  		<hr/>
    		  		
    		  		<div class="row"><!--/row-1 start-->
 						<div class="col-xs-5 col-sm-3" id="sidebar" role="navigation">
 							<ul class="list-group">
 								<template ngFor let-corpContract [ngForOf]="contracts">
								  	<li class="list-group-item">
								  		<a (click)="addContract2InShow( corpContract?.corpName );">{{corpContract?.corpName}}</a>
								  	</li>
								</template>
							</ul>
 							<!--
 							<div class="shadow-panel">
 								<span dropdown>
  								  	<a id="simple-dropdown" class="list-group-item" dropdownToggle>
  								    	Lu Xiang
  								  	</a>
  								  	
  								  	<ul class="dropdown-menu" dropdownMenu aria-labelledby="simple-dropdown">
  								    	<li>
  								     	 	<a class="dropdown-item">Contract-1</a>
  								   		</li>
  								 	</ul>
  								</span>
        						<a href="#" class="list-group-item">XXXXXXX</a>
        					</div>
        					-->
						</div>	
						
						<div class="col-xs-7 col-sm-9">
  							<tabset>
   								<tab *ngFor="let contractInShow of contractsInShow" 
   									[active]="contractInShow.active"
         							(select)="contractInShow.active = true"
         							(deselect)="contractInShow.active = false"
         							>
         							<template tabHeading>
      									{{contractInShow?.corpName}} <a (click)="closeTab( $event , contractInShow.corpName )"><i id="contract.state.component.closeTab" class="fa fa-times" aria-hidden="true"></i></a>
    								</template>
									<div class="white-panel">
										<h4><p>Core Clauses</p></h4>
										<hr/>
										<ul>
										  	<li>
										  		<h4>
										  			Warranty Rules
										  			<br/>
										  		</h4>
										  		<template ngFor let-warrantyRule [ngForOf]="contractInShow?.warrantyRules">
										  			<a [tooltipHtml]="tipContent" placement="right">
										  				{{warrantyRule?.ruleName}}
										  			</a>
										  			<template #tipContent><div innerHTML="{{warrantyRule?.ruleExplain}}"></div></template>
										  		</template>
										  	</li>
										  	<!--
										  	<button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed">Item In Controll</button>
											<div [collapse]="isCollapsed" class="card card-block card-header">
											  	<div class="row">
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item 1</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											  <div class="col-xs-6 col-sm-4 col-lg-3">item X</div>
      											</div>
											</div>
											-->
											<hr/>
										</ul>
										<ul>
											<li>
												<h4>Quality Standards</h4>
												<template ngFor let-qualityStandard [ngForOf]="contractInShow?.qualityStandards">
													<i class="fa fa-file-pdf-o fa-3" aria-hidden="true"></i>
													<a href="doc/{{qualityStandard?.link}}" target="_blank">{{qualityStandard?.link}}</a>
												</template>
											</li>
											<hr/>
										</ul>
										<ul>
											<li>
												<h4>Lastest Quarterly Supplier Evaluation</h4>
												<i class="fa fa-calendar" aria-hidden="true"></i><a target="_blank">  {{contractInShow?.lastestEvaluation?.date}}</a>
												<i class="fa fa-area-chart" aria-hidden="true"></i><a target="_blank">  {{contractInShow?.lastestEvaluation?.grade}}</a>
											</li>
											<hr/>
										</ul>
									</div>							
								</tab>
							</tabset>
						</div>	
					</div><!--row-1 end-->
				</div>
    		</div><!--/container-->
		`,
		//providers: [OrderService]
	}
)

export class ContractStateComponent {   

	public isCollapsed:boolean = true;  
	
	private contracts : any[] ;
	private contractsInShow : Array<any> = new Array<any>();

  	constructor (
  		private contractService  : ContractService
  	) {}
  	
  	ngOnInit() {
  		
  		this.getSupplierContract(); 
  	}
  	
  	getSupplierContract(){
  	
  		this.contracts = this.contractService.querySupplierContract(null);
  		
  		
  		if( this.contracts && this.contracts[0] ){
  			this.contracts[0].active = "active";
  			this.contractsInShow.push( this.contracts[0] );
  		}
  	}
  	
  	addContract2InShow( supplierName : any ){
  	
  		for( let i = 0 ; i < this.contractsInShow.length ; i ++  ){
  		
  			let contractInShow = this.contractsInShow[i];
  			contractInShow.active = false; 
  			
  			if( contractInShow.corpName == supplierName ){
  				contractInShow.active = true; 
  				return;
  			}
  		}
  		
  		for( let i = 0 ; i < this.contracts.length ; i ++ ){
  		
  			let contract = this.contracts[i];
  		
  			if( contract.corpName == supplierName ){
  			
  				let index = this.contractsInShow.length;
  				
  				contract.active = true;
  				this.contractsInShow.push( contract );
  				break;
  			}
  		}
  	}
  	
  	closeTab( event : any , corpName : any ) {
  	
  		event = event ? event : window.event;
		var obj = event.srcElement ? event.srcElement : event.target; 
		
		if( obj.id && obj.id == "contract.state.component.closeTab" ){
		
			event.stopPropagation(); 
			
			for( let i = 0 ; i < this.contractsInShow.length ; i ++  ){
  		    	
  				let contractInShow = this.contractsInShow[i];
  				
  				if( contractInShow.corpName == corpName ){
  					this.contractsInShow.splice( i , 1 );
  					return;
  				}
  			}
		}
  	}
}