/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />

import { Component, Input, ViewChild }  from '@angular/core';  

import { TabsetComponent , TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CorporationService } from '../../service/corporation/corporation.service'; 

import { CorporationGrade } from '../../model/corporation';

@Component(
	{
  		selector: 'corporation-evaluation-detail-modal',
  		template: `
  			<div class="modal fade" id="corporation-evaluation-detail-modal" role="dialog" aria-hidden="true">
				<div class="modal-dialog modal-width-normal">
			      	<div class="modal-content">
			         	<div class="modal-header">
			         	    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
		      		            &times;
		      		        </button>
			            	<h4 class="modal-title" id="myModalLabel">&nbsp;</h4>
			         	</div>
			         	
 						<div class="container-fluid"><!--start : main content container-->
    				  		<div class="row"><!-- start : data table -->
  				                <div class="col-xs-12 col-sm-12 col-lg-12">
                                    <tabset #evaluationDetailTabs>
                                        <template ngFor let-evaluation [ngForOf]="evaluations">
                                        <tab id="evaluation-tab" heading="{{evaluation?.createTime | date: 'MM/dd/yyyy'}}">
                                            <template tabHeading>
    							                <span class="badge badge-success">{{evaluation?.gradeScore}}</span>
                                            </template>
                                            <table class="table table-striped">
  			                                     <thead>
 				                                     <tr>
    			                                 	    <th>Group</th>
    			                                 	    <th></th>
    			                                        <th>Weight</th>
    			                                        <th>Score</th>
    			                                     </tr>
    			                                 </thead>
				                                 <tbody>
				                                    <template ngFor let-gradeItem [ngForOf]="evaluation.gradeItems">
				                                 	<tr>
				                                 		<td>{{gradeItem?.gradeItemGroup}}</td>
				                                 		<td>{{gradeItem?.gradeItem}}</td>
				                                 		<td>{{gradeItem?.gradeItemWeight}}</td>
				                                 		<td>{{gradeItem?.gradeItemScore}}</td>
				                                 	</tr>
				                                 	</template>
				                                 </tbody>
                                             </table>
                                        </tab>
                                        </template>
                                    </tabset> 
                                </div>
                            </div><!-- end : data table -->
						</div><!--end : main content container-->

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

export class EvaluationDetailComponent {     

	errorMessage : String;
	
	evaluations : CorporationGrade[];
	
    @ViewChild(TabsetComponent) private ts: TabsetComponent;

  	constructor (
  	    private corporationService  : CorporationService
  	) {}
  	
  	ngOnInit() {
  	}
  	
  	freshEvaluation( corporationNumber : string ){
  	
  	    this.evaluations = null;
  	    while (this.ts.tabs[0] != null){
            this.ts.removeTab(this.ts.tabs[0])
        }

        this.corporationService.queryEvaluation( corporationNumber ).subscribe(
  		    reponseData => { 
  			    this.evaluations = reponseData.data;
  		    },
  	        error => { this.errorMessage = <any>error }
  	    );
  	}
}