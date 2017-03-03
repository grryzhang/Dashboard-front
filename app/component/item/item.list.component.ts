/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />


import { Component, ViewChild  }        from '@angular/core';  

import { ItemDetailComponent }    from './item.detail.component';

@Component(
	{
  		selector: 'item-list',
  		template:`    
  			<div><!-- component start. itemList -->
 				<div class="container">
 					<div class="item-list"><!-- start : item-list  -->
    			  		<div class="row">
    			  			<div class="col-xs-3 col-lg-3"> 
    			  				<a href="javascript:;" class="color-dark">
    			  					<div class="col-xs-12 col-lg-12" >
    			  						<h3>61/2JX17</h3> 
    			  						<img src="http://www.xingmin.com/uploadfile/2014/0701/20140701035719630.jpg" class="img-responsive" alt=""/>
    			  					</div>
    			  				</a>
    			  			</div>
    			  			<div class="col-xs-3 col-lg-3"> 
    			  				<a href="javascript:;" class="color-dark">
    			  					<div class="col-xs-12 col-lg-12" >
    			  						<h3>7JX17</h3> 
    			  						<img src="http://www.xingmin.com/uploadfile/2014/0701/20140701035719630.jpg" class="img-responsive" alt=""/>
    			  					</div>
    			  				</a>
    			  			</div>
    			  			<div class="col-xs-3 col-lg-3"> 
    			  				<a href="javascript:;" class="color-dark">
    			  					<div class="col-xs-12 col-lg-12" >
    			  						<h3></h3> 
    			  						<img src="" class="img-responsive" alt=""/>
    			  					</div>
    			  				</a>
    			  			</div>
    			  		</div>
    			  		<div class="row"><!--/row start-->     
    			  			<div class="col-xs-3 col-lg-3" >
    			  			    <p>Matched Key Field : 5 fields</p> 
    			  			</div>
    			  			<div class="col-xs-3 col-lg-3" >
    			  			    <p>Matched Key Field : 4 fields</p> 
    			  			</div>
    			  			<div class="col-xs-3 col-lg-3" >
    			  			    <p></p> 
    			  			</div>
    			  		</div><!--/row-->
    			  				
    			  		<div class="row">
    			  			<div class="col-xs-3 col-lg-3">
    			  				<table class="table">
									<tbody>
										<tr>
											<td>Offset</td>
											<td>39</td>
										</tr>
										<tr>
											<td>Center hole</td>
											<td>71.5</td>
										</tr>
										<tr>
											<td>PCD</td>
											<td>114.3</td>
										</tr>
									</tbody>
								</table>
								<p><a class="btn btn-primary" role="button" (click)="showItemStateDetail();">More »</a></p>
    			  			</div>
    			  			<div class="col-xs-3 col-lg-3">
    			  				<table class="table">
									<tbody>
										<tr>
											<td>Offset</td>
											<td>22</td>
										</tr>
										<tr>
											<td>Center hole</td>
											<td>71.5</td>
										</tr>
										<tr>
											<td>PCD</td>
											<td>114.3</td>
										</tr>
									</tbody>
								</table>
    			  			</div>
    			  		</div><!--/row-->
    			  		<div class="row">
    			  			<div class="col-xs-12 col-lg-12">
    			  				<hr/>
    			  			</div>
    			  		</div><!--/row end -->
    			  	</div><!-- end : item-list  -->		
    			</div><!--/container-->
    		</div><!-- component end -->
			<item-detail-modal></item-detail-modal>
		`,
	}
)

export class ItemListComponent {     

  	constructor (
  	) {}
  	
  	ngOnInit() { 
  	}
  	
  	ngAfterViewInit() {
  	}
  	
    showItemStateDetail(){
  	
  		$('#item_detail_modal').modal();
  	}
}