/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />

import { Component, Input, ViewChild }  from '@angular/core';  

import { CorporationService } from '../../service/corporation/corporation.service'; 

import { EvaluationSupplierInfo , CorporationGradeList, CorporationGrade }  from  '../../model/corporation';

import { EvaluationDetailComponent } from './evaluation.detail.component';

@Component(
	{
  		selector: 'corporation-evaluation-list',
  		template: `
  		    <!-- start : corporation-evaluation-list -->
  			<div class="container"><!--/container start-->
  				<div class="row-fluid row-offcanvas row-offcanvas-right">
  				
  				    <div class="row"><!--/row-search-bar start-->
    		  			<div class="col-xs-12 col-sm-8 col-lg-4">
    		  				<form>
    		  					<div class="input-group">
									<input class="form-control" id="orderFuzzyInput" placeholder="Supplier Name" #sale_order_states_searchParameters />
									<span class="input-group-btn">
    		            				<button class="btn btn-default" type="button" (click)="refreshList( null );">
    		            					<span class="glyphicon glyphicon-search"></span>
    		            				</button>
    		           				</span>
    		           				<span class="input-group-btn">
    		            				<button class="btn btn-default" type="button" (click)="refreshList( null );">
    		            					<span><i class="fa fa-times" aria-hidden="true"></i></span>
    		            				</button>
    		           				</span>
								</div>
							</form>
    		  			</div>
    		  		</div><!--/row-search-end start-->
    		  		
  				    <div class="row"><!-- start : data table -->
  				        <div class="col-xs-12 col-sm-12 col-lg-12">
  			                <table class="table table-striped">
  			                    <thead>
 				                    <tr>
    			                	   <th>Supplier Name</th>
    			                	   <th></th>
    			                       <th>Score</th>
    			                       <th>Last Grade Time</th>
    			                    </tr>
    			                </thead>
				                <tbody>
				                    <template ngFor let-gradeList [ngForOf]="gradeLists">
				                	<tr (click)="showEvaluationDetail( gradeList.FNUMBER )">
				                		<td>{{gradeList?.corporationEName}}</td>
				                		<td>{{gradeList?.corporationName}}</td>
				                		<td>{{gradeList?.gradeScore}}</td>
				                		<td>{{gradeList?.lastGradeTime | date: 'MM/dd/yyyy'}}</td>
				                	</tr>
				                	</template>
				                </tbody>
                            </table>
                        </div>
                    </div><!-- end : data table -->
                </div>
  			</div>
  			<corporation-evaluation-detail-modal></corporation-evaluation-detail-modal>
  			<!-- end : corporation-evaluation-list -->
  		`,
	}
)

export class CorporationEvaluationListComponent {     

	errorMessage : String;
	
    gradeLists : CorporationGradeList[];

    @ViewChild(EvaluationDetailComponent) evaluationDetailComponent : EvaluationDetailComponent;

  	constructor (
  	    private corporationService  : CorporationService
  	) {}
  	
  	ngOnInit() {
  	    this.refreshList( null );
  	}
  	
  	refreshList( corporationGradeSearchParameters : any ){
  	
  	    event.stopPropagation(); 
  	    
  	    if( corporationGradeSearchParameters ){
  	        corporationGradeSearchParameters.corporationGroup = ["9907"];
  	    }else{
  	        corporationGradeSearchParameters = { "corporationGroup":["9907"] };
  	    }
  		
  		this.corporationService.queryEvaluationList( corporationGradeSearchParameters ).subscribe(
  		    reponseData => { 
  			    this.gradeLists = reponseData.data;
  		    },
  	        error => { this.errorMessage = <any>error }
  	    );
  	}
  	
  	showEvaluationDetail( corporationNumber : string ){
  	    $('#corporation-evaluation-detail-modal').modal();
  	    this.evaluationDetailComponent.freshEvaluation( corporationNumber );
  	}
}