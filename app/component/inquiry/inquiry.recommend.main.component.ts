/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/Velocity.js/velocity.d.ts" />
/// <reference path="../../../resources/icheck.js/icheck.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  

import { TooltipModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { InquiryRecommendSupplierFirstComponent } from './inquiry.recommend.supplierfirst.component';

import { RecommendService } from '../../service/inquiry/recommend.service'; 

import { RecommendIndex } from '../../model/recommend'

import { IndexConditionFormatPipe } from '../../pipe/index.condition.format.pipe'

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
    							<span>Previous Inquiries</span>
    						</a>
    						<a id="inquiry-recommend-inquirying-ahref" routerLink="/inquiryRecommend/supplierFirstIndexList" href="javascript:;">
    							<i class="fa fa-spinner" aria-hidden="true"></i>
    							<span dropdown [isOpen]="newInquiryingListDropdownStatus.isopen" (onToggle)="newInquiryingListDropdownToggled($event)">
                                    <a href="javascript:;" id="new-inquirying-list" dropdownToggle>
                                        Running Inquiries
                                    </a>
                                    <ul class="dropdown-menu" dropdownMenu aria-labelledby="new-inquirying-list">
                                        <template ngFor let-newRecommendIndex [ngForOf]="newInquiryingList" let-numberIndex="index" >
                                        <li role="menuitem" >
                                            <a href="javascript:;" class="dropdown-item">Running : {{newRecommendIndex?.indexCondition | indexConditionFormat }}</a>
                                        </li>
                                        </template>
                                        <hr/>
                                        <template ngFor let-completeRecommendIndex [ngForOf]="completeInquiryingList">
                                        <li role="menuitem" >
                                            <a (click)="showSupplierFirstSearch( completeRecommendIndex.indexId , $event )" class="dropdown-item bg-green" href="javascript:;">
                                                Complete : {{completeRecommendIndex?.indexCondition | indexConditionFormat }}
                                            </a>
                                        </li>
                                        </template>
                                    </ul>
                                </span>	
    							<span class="badge badge-success">
    							    {{newInquiryingList?.length}}
    							</span>
    							<span class="badge badge-success bg-green">
    							    {{completeInquiryingList?.length}}
    							</span>
    						</a>	
    						
    					</div>
  					</div>
  				</div>
  			
  				<div class="container-fluid inquiry-recommend-condition-title-vertical-center" (click)="moveInquiryRecommendConditionDiv();"><!--/container start-->
    				<div class="row"><!--/row-search-bar start-->
    					<div class="col-xs-12 col-sm-12 col-lg-12">
    						<ul class="nav nav-pills" role="tablist">
							  <li role="presentation"><a><h4>Wheel           </h4></a></li>
							  <li role="presentation"><a><h4>Tire            </h4></a></li>
							  <li role="presentation"><a><h4>Tools           </h4></a></li>
							  <li role="presentation"><a><h4>Electronics     </h4></a></li>
							  <li role="presentation"><a><h4>Trailer Parts   </h4></a></li>
							  <li role="presentation"><a><h4>RV Accessories  </h4></a></li>
							  <li role="presentation"><a><h4>Decorations     </h4></a></li>
							  <li role="presentation"><a><h4>Others          </h4></a></li>
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
									<button class="btn btn-default" (click)="newRecommend( $event );">Search</button>
									<div id="inquiry-recommend-animation-search-button" style="display:none;position:absolute;">
									    <template [ngIf]="newRecommendIndexId != null">
									        {{newRecommendIndexId}}
									    </template>
									    <template [ngIf]="newRecommendIndexId == null">
									        Inquirying
									    </template>
			                        </div>
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
									<div class="col-xs-1"></div>
									<div class="col-xs-7">
									    <div class="form-group">
									        <input type="text" class="form-control" id="c_r_i_c_h" placeholder="Hub Diameter Manual" />
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

    @ViewChild(InquiryRecommendSupplierFirstComponent) supplierFirstModal : InquiryRecommendSupplierFirstComponent;

    errorMessage : String;
    
    newRecommendIndexId : string;
    
    indexCreateParameter : any = {};
    
    newInquiryingList      : RecommendIndex [] = [];
    completeInquiryingList : RecommendIndex [] = [];
    
    newInquiryingListDropdownStatus      : {isopen: boolean} = {isopen: false};
    
    indexRunningInterval : any;

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
  	
  	showSupplierFirstSearch( indexId :string , event : any ){
  		event.stopPropagation(); 
  		$('#inquiry-recommend-supplierfisrt-modal').modal();
  		this.supplierFirstModal.getRecommendSuppliers( indexId );
  	}
  	
  	newRecommend( event : any ){
  	
  	    let thisComponent : any = this;
  	
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
        $("input[id='c_r_i_c_h']").each(
  	        function( index : any , element : any  ){
                thisComponent.indexCreateParameter.hubDiameter.push( element.value );
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
        		
        		let inquiryingAhref = $("#inquiry-recommend-inquirying-ahref");
                let target          = $(event.target);
  	            if( inquiryingAhref && target ){
  	                let curleft = inquiryingAhref.offset().left;
                    let curtop  = inquiryingAhref.offset().top + inquiryingAhref.outerHeight();
                    
                    let targetLeft = target.offset().left;
                    let targetTop  = target.offset().top + target.outerHeight();
                    
                    let moveX = curleft - targetLeft;
                    let moveY = curtop  - targetTop;
                    
                    requirejs(
  		        	    ['jquery', 'velocity'],
  		        	    ( $ : any , Velocity : any  ) => {
  		        		    $("#inquiry-recommend-animation-search-button").velocity(
  		        			    { translateX : moveX , translateY : ( moveY - 30 ) , scale:0.0 },
  		        			    { 
  		        			        duration: 800, display: "table",
  		        			        begin    : function(){
  		        			            thisComponent.newInquiryingListDropdownStatus.isopen = true;
  		        			        },
  		        			        complete : function(){
  		        			            let newRecommend : RecommendIndex = new RecommendIndex();
                                        newRecommend.indexCondition = JSON.stringify( thisComponent.indexCreateParameter );
                                        newRecommend.indexId        = reponseData.data.indexId;
                                        thisComponent.newInquiryingList.push( newRecommend );
                                        
                                        let intervalInquiryRunningIndexStatus = () => { 
                                            return thisComponent.intervalInquiryRunningIndexStatus();
                                        }
                                        
                                        if( thisComponent.indexRunningInterval == null ){
                                            thisComponent.indexRunningInterval=setInterval( intervalInquiryRunningIndexStatus, 4000 );
                                        }
  		        			        }
  		        			    }
  		        		    ).velocity(
  		        			    { translateX : 0 , translateY : 0, scale:1 },
  		        			    { duration: 10 , display: "none" }
  		        		    )
		        	    }
  		            );
  	            }
        	},
            error => { this.errorMessage = <any>error }
        ); 
  	}
  	
  	public intervalInquiryRunningIndexStatus():void{
  	
  	    var thisComponent = this;
  	    
  	    let indexIds : any[] = [];
  	    if( thisComponent.newInquiryingList ){
  	        for( let i=0; i<thisComponent.newInquiryingList.length ; i++ ){
  	            indexIds.push( thisComponent.newInquiryingList[i].indexId );
  	        }  
  	    }
  	    
  	    if( indexIds.length > 0 ){
  	        this.recommendService.queryRecommendList( { "indexIds" : indexIds } ).subscribe(
  		        reponseData => { 
  		        
  		    	    let finished : RecommendIndex []  = reponseData.data;
  		    	    
  		    	    if( finished ){
  		    	        for( let i = 0 ; i<finished.length ; i++ ){
  		    	            
  		    	            if( finished[i].indexId ){
  		    	            
  		    	                for( let j=0 ; j <thisComponent.newInquiryingList.length ; j++ ){
  		    	                    if( finished[i].indexId == thisComponent.newInquiryingList[j].indexId ){
  		    	                        thisComponent.completeInquiryingList.push( thisComponent.newInquiryingList[j] );
  		    	                        thisComponent.newInquiryingList.splice( j , 1 );
  		    	                        j--;
  		    	                    }
  		    	                }
  		    	            }
  		    	        }
  		    	    } 
  		    	    
  		    	    if( thisComponent.newInquiryingList.length <= 0 ){
  		    	        clearInterval( thisComponent.indexRunningInterval );
  		    	        thisComponent.indexRunningInterval = null;
  		    	    }
  		        },
  	            error => { this.errorMessage = <any>error }
  	        );
  	    } 
  	}
  	
  	private newInquiryingListDropdownToggled(open:boolean):void {
  	
        let thisComponent = this;
        thisComponent.newInquiryingListDropdownStatus.isopen = open ;
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
  							{ top:50 , translateX:"-50%" , scale:0.9  }, 
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