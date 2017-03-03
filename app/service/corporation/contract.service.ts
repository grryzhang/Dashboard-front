import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';

@Injectable()
export class ContractService {

	constructor () {}
	
	
	private extractData(res: Response) {
		let body = res.json();
		
		return body || { } ;
	}
	
	private handleError (error: Response | any) {
    	let errMsg: string;
    	if (error instanceof Response) {
      		const body = error.json() || '';
      		const err = body.error || JSON.stringify(body);
      		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} else {
      		errMsg = error.message ? error.message : error.toString();
    	}
    	console.error(errMsg);
    	return Observable.throw(errMsg);
  	}
  	
  	querySupplierContract( searchParameters : any ) : any{
  	
  		let contracts = [
  			{
  				"corpName":"Bao Steel",
  				"warrantyRules" : [
  					{ 
  						"ruleName" : "Free compensation, rate 0.5%", 
  						"ruleExplain" : "<p align='left'>For reducing the manual work and time on customer claim disposition procedure for RTX, Part Rich will offer RTX free compensation rates for all the corresponding claimed products according to RTX's annual products claim rates.<br/><br/> The deductible discount of the corresponding ordered products will be reflected in the according Pro forma Invoice so as that all the possible subsequent claiming products will be free of claim handling process.<br/><br/> The products from RTX's designated factories are not included in this condition.</p>"
  					}
  				],
  				"qualityStandards" : [
  					{ "link" : "SW_Standard_English-Version.pdf" }
  				],
  				"lastestEvaluation" : { "grade" : "90" , "date":"2016-12-19" }
  			},
  			{
  				"corpName":"Ningbo Lu Xiang",
  				"warrantyRules" : [
  					{ "ruleName" : "Free compensation, rate 1%" }
  				],
  				"qualityStandards" : [
  					{ "link" : "SW_Standard_English-Version.pdf" }
  				],
  				"lastestEvaluation" : { "grade" : "70" , "date":"2016-12-19" }
  			},
  			{
  				"corpName":"Shandong Xingmin",
  				"warrantyRules" : [
  					{ "ruleName" : "No Compensation" }
  				],
  				"qualityStandards" : [
  					{ "link" : "SW_Standard_English-Version.pdf" }
  				],
  				"lastestEvaluation" : { "grade" : "80" , "date":"2016-12-19" }
  			}
  		];
  		
  		return contracts;
	}
	
}