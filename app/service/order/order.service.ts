import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';


import { SaleOrderState, SaleOrderItemState, FreightInfo }  from  '../../model/saleOrder';

@Injectable()
export class OrderService {

	constructor ( private http : Http ) {}
	
	
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
  	
  	querySaleOrderState( searchParameters : any ) : Observable<any>{
  	
  		let queryUrl = '/MD/SOState/theLast';
		
		let body : any = null;
		if( searchParameters == null ){
			body = "{}";
		}else{
			
			for( var prop in searchParameters ){
				if( searchParameters[prop].length == 0 ){
					searchParameters[prop] = null;
				}
			}
			body = JSON.stringify( searchParameters )
		}

		let headers  = new Headers( 
			{ 
				"Content-Type": "application/json",
				"Accept":"application/json"
			} 
		);
		let options = new RequestOptions (  { 'headers': headers }  );
		
		//return null;
		return this.http.post(queryUrl, body, options).map(this.extractData).catch( this.handleError );
	}
	
}