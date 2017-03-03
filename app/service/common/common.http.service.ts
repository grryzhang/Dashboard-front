import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';

@Injectable()
export class CommonHttpService {

	constructor (
	    private http : Http
	) {}
	
	
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
	
	doDefaultJsonPost( url : string , parameters : any ) : Observable<any> {
	
	    let body = this.prepareSearchParameters2Body( parameters );
	    
	    let requestOptions = this.getDefaultJsonRequestOptions();
	    
	    return this.http.post(url, body, requestOptions).map(this.extractData).catch( this.handleError );
	}

    prepareSearchParameters2Body( parameters : any ) : any {
    
        let body : any = null;
		if( parameters == null ){
		
			body = "{}";
		}else{
			
			body = JSON.stringify( parameters )
		}
        
        return body;
    }
    
    getDefaultJsonRequestOptions(): RequestOptions {
    
		let headers  = new Headers( 
			{ 
				"Content-Type": "application/json",
				"Accept":"application/json"
			} 
		);
		let options = new RequestOptions (  { 'headers': headers }  );
		
		return options;
    }
}