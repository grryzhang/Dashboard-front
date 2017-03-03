/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/maxazan-jquery-treegrid/treegrid.d.ts" />
/// <reference path="../../../resources/twbsPagination/twbsPagination.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  
import { ChangeDetectionStrategy }  from '@angular/core';  

import { RecommendService } from '../../service/inquiry/recommend.service'; 

import { RecommendIndex }  from  '../../model/recommend';

import { InquiryRecommendSupplierFirstComponent } from './inquiry.recommend.supplierfirst.component'

@Component(
	{
  		selector: 'router-anchor',
  		template:`    
  			<div class="container"><!--/container start-->
  				<div class="row-fluid row-offcanvas row-offcanvas-right">
  				
  					<div class="row">
  						<div class="col-xs-12 col-sm-8 col-lg-4">
  							<a class="btn btn-default" routerLink="/inquiryRecommend" href="javascript:;">
    							New Inquiry
    						</a>
  						</div>
  					</div>
  					<hr/>
    		  	<div class="row"><!--/row-search-bar start-->
    		  		<div class="col-xs-12 col-sm-8 col-lg-4">
    		  			<form>
    		  				<div class="input-group">
										<input class="form-control" id="inquiryFuzzyInput" placeholder="Recommend Search" #recommend_searchParameters />
										<span class="input-group-btn">
    		          		<button 
    		          			class="btn btn-default" 
    		          			type="button" 
    		          			(click)="getSaleOrderState( { 'fuzzy' : recommend_searchParameters.value } );">
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
    									<th>Inquiry Index No.</th>
    									<th>Inquiry Condition</th>
    								</tr>
    							</thead>
    							<tbody> 
    							    <template ngFor let-recommendIndex [ngForOf]="recommendIndexes" let-numberIndex="index" >
    								<tr>
    									<td (click)="showSupplierFirstSearch( recommendIndex.indexId , $event )">
    										<span>{{recommendIndex?.indexId}}</span>
    									</td>
    									<td>
    										<span class="front-label-12">Criteria <i class="fa fa-filter" aria-hidden="true"></i>{{recommendIndex?.indexCondition}}</span>
    									</td>
    								</tr>
    								</template>
    							</tbody>
								</table>   
							</div>
						</div>	
					</div><!--row-1 end-->
				</div>
    	</div><!--/container-->          
    	<inquiry-recommend-supplierfisrt-modal></inquiry-recommend-supplierfisrt-modal>
		`
	}
)

export class InquiryRecommendSupplierFirstIndexListComponent {     
	
    @ViewChild(InquiryRecommendSupplierFirstComponent) supplierFirstModal : InquiryRecommendSupplierFirstComponent;
    
    errorMessage : String;

    recommendIndexes : RecommendIndex[];
	  
  	constructor (
  		private recommendService  : RecommendService
  	) {}
  	
  	ngOnInit() { 
  	
        this.freshIndexList(null);
  	}                            
  	
  	freshIndexList( searchParameters : any ){
  	    
  	    this.recommendService.queryRecommendList( null ).subscribe(
  		    reponseData => { 
  			    this.recommendIndexes = reponseData.data;
  		    },
  	        error => { this.errorMessage = <any>error }
  	    );
  	}
  	
  	showSupplierFirstSearch( indexId :string , event : any ){
  		
  		event.stopPropagation(); 
  		$('#inquiry-recommend-supplierfisrt-modal').modal();
  		this.supplierFirstModal.getRecommendSuppliers( indexId );
  	}
}