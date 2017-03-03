/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/maxazan-jquery-treegrid/treegrid.d.ts" />
/// <reference path="../../../resources/twbsPagination/twbsPagination.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  

import { ItemDetailComponent } from '../item/item.detail.component';
import { ItemListComponent   } from '../item/item.list.component';

@Component(
	{
  		selector: 'router-anchor',
  		template:`    
  			<div class="container"><!--/container start-->
  				<!--title-row start-->
  				<div class="row-fluid row-offcanvas row-offcanvas-right">
    		  		<div class="row" style="border-bottom:1px solid rgba(221,221,221,1); padding-bottom:5px;padding-top:5px;"><!--/row-search-bar start-->
    		  			<div class="col-xs-4 col-sm-4 col-lg-3">
    		  				<span><h4>Supplier</h4></span>
    		  			</div>
    		  			<div class="col-xs-4 col-sm-2 col-lg-2">
    		  				<span><h4>Grade</h4></span>
    		  			</div>
    		  		</div>
    		  	</div>
    		  	<!--title-row end-->
    		  	
    		  	<!--content-rows start-->
    		  	<div class="row-fluid row-offcanvas row-offcanvas-right">
    		  		<div class="row" style="border-bottom:1px solid rgba(221,221,221,1); padding-bottom:5px;padding-top:5px;"><!--/row-search-bar start-->
    		  			<div class="col-xs-4 col-sm-4 col-lg-3">
    		  				<span><h4>Shandong Longkou Xingmin Wheel Co., Ltd.</h4></span>
    		  				<p><a class="btn btn-primary" href="http://xingminchelun.fm.alibaba.com/company_profile.html" target="_blank" role="button">View data source »</a></p>
    		  			</div>
    		  			<div class="col-xs-4 col-sm-2 col-lg2">
    		  				<h4><p>Grade : 3 </p></h4>
    		  				<p>Matched Key field : 7</p>
    		  			</div>
    		  			<div class="col-xs-12 col-sm-7 col-lg-7">
    		  				<div class="row">
    		  					<table class="table table-striped">
    		  						<thead>
 										<tr>
    								  	  	<th>Keys</th>
    								    	<th>Content</th>
    								    	<th>score</th>
    								    	<th>rule</th>
    								  	</tr>
    								</thead>
    		  						<tbody>
 										<tr>
    								  	  	<td>Factory Size</td>
    								  	  	<td>400000 sq.m.</td>
    								  	  	<td>0.6</td>
    								  	  	<td>
    								  	  		<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt;2000 </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 2000 - 50000 </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 50000 </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  	  	</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Established Time</td>
    								  		<td>1994</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; 6 years </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 6 - 16 years </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 16 years </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Annual value of production</td>
    								  		<td>US$10 Million - US$50 Million</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; $ 10 million </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> $ 10 - $ 50 million </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; $ 50 million </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Production Capacity</td>
    								  		<td>9 million</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; 1 million </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 1 - 3 million </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 3 million </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Production Lines</td>
    								  		<td> &gt; 10 </td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; 5 lines </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 5 - 10 lines </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 5 lines </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr class="info">
    								  		<td>OEM/ODM Availability</td>
    								  		<td> YES </td>
    								  		<td></td>
    								  		<td></td>
    								  	</tr>
    								  	<tr class="info">
    								  		<td>Products Standard Matched</td>
    								  		<td colspan="3">
    								  			<a class="btn btn-primary" target="_blank" role="button" (click)="showItemList()">
    								  				View matched products »
    								  			</a>
    								  		</td>
    								  	</tr>
    								</tbody>
    		  					</table>
    		  				</div>
    		  			</div>
    		  		</div><!--/row-search-end start-->
    		  		
    		  		
    		  		<div class="row" style="border-bottom:1px solid rgba(221,221,221,1); padding-bottom:5px;padding-top:5px;"><!--/row-search-bar start-->
    		  			<div class="col-xs-4 col-sm-4 col-lg-3">
    		  				<span><h4>Zhejiang Hanvos Autoparts Co., Ltd</h4></span>
    		  				<p><a class="btn btn-primary" href="http://www.made-in-china.com/showroom/ruiray/companyinfo/Zhejiang-Hanvos-Autoparts-Co-Ltd.html" target="_blank" role="button">View data source »</a></p>
    		  			</div>
    		  			<div class="col-xs-4 col-sm-2 col-lg2">
    		  				<h4><p>Grade : 2.1 </p></h4>
    		  				<p>Matched Key field : 5</p>
    		  			</div>
    		  			<div class="col-xs-12 col-sm-7 col-lg-7">
    		  				<div class="row">
    		  					<table class="table table-striped">
    		  						<thead>
 										<tr>
    								  	  	<th>Keys</th>
    								    	<th>Content</th>
    								    	<th>score</th>
    								    	<th>rule</th>
    								  	</tr>
    								</thead>
    		  						<tbody>
 										<tr>
    								  	  	<td>Factory Size</td>
    								  	  	<td>50000 sq.m.</td>
    								  	  	<td>0.6</td>
    								  	  	<td>
    								  	  		<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt;2000 </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 2000 - 50000 </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 50000 </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  	  	</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Established Time</td>
    								  		<td>2001</td>
    								  		<td>0.3</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; 6 years </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> 6 - 16 years </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> &gt; 16 years </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Annual value of production</td>
    								  		<td>USD 10,000,001 - 50,000,000</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; $ 10 million </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> $ 10 - $ 50 million </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; $ 50 million </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Production Capacity</td>
    								  		<td>3.6 million</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; 1 million </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 1 - 3 million </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 3 million </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr class="info">
    								  		<td>OEM/ODM Availability</td>
    								  		<td> YES </td>
    								  		<td></td>
    								  		<td></td>
    								  	</tr>
    								</tbody>
    		  					</table>
    		  				</div>
    		  			</div>
    		  		</div><!--/row-search-end start-->
    		  		
    		  		
    		  		<div class="row" style="border-bottom:1px solid rgba(221,221,221,1); padding-bottom:5px;padding-top:5px;"><!--/row-search-bar start-->
    		  			<div class="col-xs-4 col-sm-4 col-lg-3">
    		  				<span><h4>Qingdao Pujie Industry Co., Ltd.</h4></span>
    		  				<p><a class="btn btn-primary" href="https://pujie.en.alibaba.com/" target="_blank" role="button">View data source »</a></p>
    		  			</div>
    		  			<div class="col-xs-4 col-sm-2 col-lg2">
    		  				<h4><p>Grade : 1.9 </p></h4>
    		  				<p>Matched Key field : 5</p>
    		  			</div>
    		  			<div class="col-xs-12 col-sm-7 col-lg-7">
    		  				<div class="row">
    		  					<table class="table table-striped">
    		  						<thead>
 										<tr>
    								  	  	<th>Keys</th>
    								    	<th>Content</th>
    								    	<th>score</th>
    								    	<th>rule</th>
    								  	</tr>
    								</thead>
    		  						<tbody>
 										<tr>
    								  	  	<td>Factory Size</td>
    								  	  	<td>Above 100,000 square meters</td>
    								  	  	<td>0.6</td>
    								  	  	<td>
    								  	  		<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt;2000 </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 2000 - 50000 </td>
    								  	  					<td> 0.3 </td>
    								  	  				<tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 50000 </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  	  	</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Established Time</td>
    								  		<td>2012</td>
    								  		<td>0.1</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr class="success">
    								  	  					<td> &lt; 6 years </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 6 - 16 years </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> &gt; 16 years </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Annual value of production</td>
    								  		<td>Above US$100 Million</td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> &lt; $ 10 million </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> $ 10 - $ 50 million </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; $ 50 million </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr>
    								  		<td>Production Lines</td>
    								  		<td> &gt; 10 </td>
    								  		<td>0.6</td>
    								  		<td>
    								  			<table class="table table-striped table-condensed">
    								  	  			<tbody>
    								  	  				<tr>
    								  	  					<td> Above 10 </td>
    								  	  					<td> 0.1 </td>
    								  	  				</tr>
    								  	  				<tr>
    								  	  					<td> 5 - 10 lines </td>
    								  	  					<td> 0.3 </td>
    								  	  				</tr>
    								  	  				<tr class="success">
    								  	  					<td> &gt; 5 lines </td>
    								  	  					<td> 0.6 </td>
    								  	  				</tr>
    								  	  			</tbody>
    								  	  		</table>
    								  		</td>
    								  	</tr>
    								  	<tr class="info">
    								  		<td>OEM/ODM Availability</td>
    								  		<td> YES </td>
    								  		<td></td>
    								  		<td></td>
    								  	</tr>
    								</tbody>
    		  					</table>
    		  				</div>
    		  			</div>
    		  		</div><!--/row-search-end start-->
    		  		
    		  	</div>
    		  	<!--content-rows end-->
    		</div>
    		<div class="modal fade" id="item_list_modal" role="dialog" aria-labelledby="itemListModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-width-normal">
			      	<div class="modal-content">
			         	<div class="modal-header">
			            	<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
			                  &times;
			            	</button>
			            	<h4 class="modal-title" id="myModalLabel">Matched Items</h4>
			         	</div>
    					<item-list></item-list>
    				</div>
    			</div>
    		</div>			
		`,
	}
)

export class InquiryRecommendComponent {     

  	constructor (
  	) {}
  	
  	ngOnInit() { 
  	
  	}
  	
  	showItemList(){

  		$('#item_list_modal').modal();
  	}
}