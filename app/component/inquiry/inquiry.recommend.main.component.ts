/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/Velocity.js/velocity.d.ts" />
/// <reference path="../../../resources/icheck.js/icheck.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { InquiryRecommendSupplierFirstComponent } from './inquiry.recommend.supplierfirst.component';

import { RecommendService } from '../../service/inquiry/recommend.service'; 

@Component(
	{
  		selector: 'router-anchor',
  		template:`    
  			<div id="inquiry-recommend-condition-title-container" style="min-width:400px;min-height:300px;position:relative;">
  				
  				<div class="container">
  					<div class="row">
    					<div class="col-xs-12 col-sm-12 col-lg-12">
    						<a routerLink="/inquiryRecommend/supplierFirstIndexList" href="javascript:;">
    							<i class="fa fa-calendar-check-o" aria-hidden="true"></i>
    							<span>Inquiry Result</span>
    							<span class="badge badge-success">2</span>
    						</a>
    						<a routerLink="/inquiryRecommend/supplierFirstIndexList" href="javascript:;">
    							<i class="fa fa-spinner" aria-hidden="true"></i>
    							<span>Inquirying</span>
    							<span class="badge badge-success">
    							    {{requiringNumber}}
    							</span>
    						</a>
    					</div>
  					</div>
  				</div>
  			
  				<div class="container-fluid inquiry-recommend-condition-title-vertical-center" (click)="moveInquiryRecommendConditionDiv();"><!--/container start-->
    				<div class="row"><!--/row-search-bar start-->
    					<div class="col-xs-12 col-sm-12 col-lg-12">
    						<ul class="nav nav-pills" role="tablist">
							  <li role="presentation"><a><h3>Wheel</h3></a></li>
							  <li role="presentation"><a class="just-left-border"><h3>Tire</h3></a></li>
							  <li role="presentation"><a class="just-left-border"><h3>Tools</h3></a></li>
							</ul>
    					</div>
    				</div>
    			</div><!--/container-->
  			</div>
  			<div id="inquiry-recommend-condition-container" class="container" style="display:none" ><!--/container start-->
  				
    			<div class="row"><!--/row-search-bar start-->
    				<div class="col-xs-0  col-sm-1 col-md-2 col-lg-2"></div>
    				<div class="col-xs-12 col-sm-10 col-md-8 col-lg-8">
    					<div class="white-panel" style="border:none;">
							
							<div class="row"><!--/row-search-bar start-->
								<div class="col-xs-4 col-xs-offset-8  col-md-2 col-md-offset-10">
									<button class="btn btn-default" (click)="newRecommend();">Search</button>
								</div>
  							</div>
  							<form>
  							    <div class="row">
									<div class="col-xs-6">
										Material
									</div>
								</div>
								<div class="row">
									<div class="col-xs-1"></div>
									<div class="col-xs-11">
										<div class="form-group">
											<label style="margin-right:15px"><input class="i-check" id="recommend.index.createform.material" type="checkbox" value="steel,iron"     >Steel   </label>
											<label style="margin-right:15px"><input class="i-check" id="recommend.index.createform.material" type="checkbox" value="aluminum,alloy" >Aluminum</label> 
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-6">
										Wheel Hub Diameter
									</div>
								</div>
								<div class="row">
									<div class="col-xs-1"></div>
									<div class="col-xs-11">
										<div class="form-group">
										    <!--  r_i_c_h_a : recommend.index.createform.hubDiameter.one  r_i_c_h_all  recommend.index.createform.hubDiameter.all-->
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="14"/> 14"</label>
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="15"/> 15"</label> 
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="16"/> 16"</label> 
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="17"/> 17"</label> 
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="18"/> 18"</label> 
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_a" type="checkbox" value="19"/> 19"</label> 
											<label style="margin-right:15px"><input class="i-check" id="r_i_c_h_all" type="checkbox" /> All</label> 
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-xs-6">
										PCD
									</div>
								</div>
								<div class="row">
									<div class="col-xs-1"></div>
									<div class="col-xs-7">
										<div class="form-group">
										    <!--  r_i_c_pcd : recommend.index.createform.PCD -->
                                            <input type="text" class="form-control" id="r_i_c_pcd" placeholder="PCD" />
                                        </div>
									</div>
								</div>
							</form>
						</div>
    				</div>
    				<div class="col-xs-0  col-sm-1 col-md-2 col-lg-2"></div>
    			</div>
    		</div><!--/container-->
    		
    		<!-- start:new-recommend-result-modal  -->
    		<div class="modal fade" id="new-recommend-result-modal" role="dialog" aria-hidden="true">
				<div class="modal-dialog modal-width-normal">
				<!-- start modal-content -->
		    	<div class="modal-content">
		      	    <div class="modal-header">
		      		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		      		        &times;
		      		    </button>
		      		    <h4 class="modal-title" id="inquire-status-modal-ModalLabel">New Recommed Inquiry in Running</h4>
		      		    <span class="front-label-12">Criteria <i class="fa fa-filter" aria-hidden="true"></i> Wheel Hub Diameter : 17, 18</span>
		   			</div>
		            <div class="modal-body modal-active-scroll">
		                The recommend index ID is : <strong>{{newRecommendIndexId}}</strong>
		                <p>It's in running now, please wait for some time and check it in the "Inquiry Result".
  					</div>		
            
		    		<div class="modal-footer">
		    	   	<button type="button" class="btn btn-default" data-dismiss="modal">
		    	    	Close
		    	   	</button>
		    		</div>
		  		</div><!-- /.modal-content -->
		    </div>
    		<!-- end:new-recommend-result-modal  -->
    		<inquiry-recommend-supplierfisrt-modal></inquiry-recommend-supplierfisrt-modal>
    		
    		<style> 
				.inquiry-recommend-condition-title-vertical-center{                  
				   	position: absolute;    
				  	top  : 50%;
				 	left : 50%;                                                   
				  	transform: translate(-50%,-50%);
				}     		
				    		
				.inquiry-recommend-condition-div-move{
				animation-fill-mode: forwards;
				animation:move 1s;
				-webkit-animation:condition-div-shrink 1s; /*Safari and Chrome*/
				}
				
				@keyframes condition-div-shrink
				{
				 	from{transform: translate(-50% , -50%) scale( 1 , 1 ) } 
				 	to {transform: translate( -50% , -150px ) scale( 0.7, 0.7 ) } 
				}
				
				@-webkit-keyframes condition-div-shrink /*Safari and Chrome*/
				{
					from{transform: translate(-50% , -50%) scale( 1 , 1 )} 
					to {transform: translate( -50% , -150px ) scale( 0.7, 0.7 )} 
				}
    		</style> 
		`
	}
)

export class InquiryRecommendMain {     

    errorMessage : String;
    
    newRecommendIndexId : String;
    
    requiringNumber : number = 0;
    
    indexCreateParameter : any = {};

  	constructor (
  		private recommendService  : RecommendService
  	) {}
  	
  	ngOnInit() { 
  	
  		requirejs(
  			['jquery', 'icheck','css!./icheck.js/skins/flat/blue'],
  			( $ : any , ICheck : any  ) => {
  				
  				$('input.i-check').iCheck(
  					{
    					checkboxClass: 'icheckbox_flat-blue',
    					radioClass: 'iradio_flat-blue'
  					}
  				);
  			
  				/*
  				$("input.i-check[id!='r_i_c_h_all']").on('ifChecked', function( event : any ){ 
                    event = event ? event : window.event;
		            var obj = event.srcElement ? event.srcElement : event.target; 
                    alert( obj.value );
                });
                */
                
  				$("input.i-check[id='r_i_c_h_all']").on(
  				    'ifChecked', 
  				    function( event : any ){ 
  				        $("input.i-check[id='r_i_c_h_a']").iCheck('check');
                    }
                );
                
                $("input.i-check[id='r_i_c_h_all']").on(
  				    'ifUnchecked', 
  				    function( event : any ){ 
  				        $("input.i-check[id='r_i_c_h_a']").iCheck('uncheck');
                    }
                );
  			}
  		);	
  	}
  	
  	showSupplierFirstSearch( event : any ){
  		
  		event.stopPropagation(); 
  		$('#inquiry-recommend-supplierfisrt-modal').modal();
  	}
  	
  	newRecommend(){
  	
  	    let thisComponent = this;
  	
  	    this.indexCreateParameter = { "PCD":[] , "hubDiameter":[] , "material":[] };
  	   
  	    $("input.i-check[id='recommend.index.createform.material']").each(
  	        function( index : any , element : any  ){
                if( $(element).prop("checked") ){
                    if( element.value != null ){
                        let temp = element.value.replace(/\s*/g,"");
                        let materials = temp.split(",");
                        for (var i=0,len=materials.length; i<len; i++){
                            thisComponent.indexCreateParameter.material.push( materials[i] );
                        }
                    }
                } 
            }
        );
  	
  	    $("input.i-check[id='r_i_c_h_a']").each(
  	        function( index : any , element : any  ){
                if( $(element).prop("checked") ){
                    thisComponent.indexCreateParameter.hubDiameter.push( element.value );
                } 
            }
        );
        $("input[id='r_i_c_pcd']").each(
  	        function( index : any , element : any  ){
                if( element.value != null ){
                    let temp = element.value.replace(/\s*/g,"");
                    let PCDs = temp.split(",");
                    for (var i=0,len=PCDs.length; i<len; i++){
                        thisComponent.indexCreateParameter.PCD.push( PCDs[i] );
                    }
                } 
            }
        );
        
        this.recommendService.newRecommendIndex( this.indexCreateParameter ).subscribe(
        	reponseData => { 
        		this.newRecommendIndexId = reponseData.data.indexId;
        		this.requiringNumber ++;
        		
        		$('#new-recommend-result-modal').modal();
        	},
            error => { this.errorMessage = <any>error }
        );
  	}
  	
  	moveInquiryRecommendConditionDiv(){
  		
    	$("div.inquiry-recommend-condition-title-vertical-center").each(
    	
    		function( index : any, element : any ){
 				
    			requirejs(
  					['jquery', 'velocity'],
  					( $ : any , Velocity : any  ) => {
  						$(this).velocity(
  							{ translateX:"-50%" , translateY:"-50%"  }, 
  							{ duration: 10 }
  						).velocity(
  							{ top:30 , translateX:"-50%" , scale:0.7  }, 
  							{ duration: 1000 }
  						);
					}
  				);
    			//$(this).addClass("inquiry-recommend-condition-div-move");
    			//$(this).css("transform", "translate( -50% , -150px ) scale( 0.7, 0.7 )");
    		}
    	);
    	
    	$("#inquiry-recommend-condition-title-container").each(
    	
    		function( index : any, element : any ){
 				
    			requirejs(
  					['jquery', 'velocity'],
  					( $ : any , Velocity : any  ) => {
  						$(this).velocity(
  							{ "min-height" : 100  }, 
  							{ duration: 1000 }
  						)
					}
  				);
    		}
    	);

    	requirejs(
  			['jquery', 'velocity'],
  			( $ : any , Velocity : any  ) => {
  				$("#inquiry-recommend-condition-container").velocity(
  					"fadeIn", 
  					{ duration: 1000 , display: "table" }
  				)
			}
  		);
  		
    }
}