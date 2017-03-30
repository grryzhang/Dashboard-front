import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers, 
         ResponseContentType  }    from '@angular/http';
         
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
	
	private extractDataDirectly( res: Response) {
		
		return res ;
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
    
    doDefaultPostDownload( url : string , parameters : any ) : Observable<any> {
    
        let body = this.prepareSearchParameters2Body( parameters );
	    
	    let requestOptions = this.getDefaultPostDownloadOptions();
	    
	    return this.http.post(url, body, requestOptions);
    }
    
    getDefaultPostDownloadOptions(): RequestOptions {
    
		let headers  = new Headers( 
			{ 
				"Content-Type": "application/json",
				"Accept":"application/*",
			} 
		);

		let options = new RequestOptions (  
		    { 
		        'headers': headers , 
		        'responseType': ResponseContentType.Blob 
		    }  
		);
		
		return options;
    }
	
	doDefaultJsonPost( url : string , parameters : any ) : Observable<any> {
	
	    let body = this.prepareSearchParameters2Body( parameters );
	    
	    let requestOptions = this.getDefaultJsonRequestOptions();
	    
	    return this.http.post(url, body, requestOptions).map(this.extractData).catch( this.handleError );
	}
	
	doAccessControlAllowPost( url : string , parameters : any ) : Observable<any> {
	
	    let body = this.prepareSearchParameters2Body( parameters );
	    
	    let requestOptions = this.getAccessControlAllowOptions();
	    
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
    
    getAccessControlAllowOptions(): RequestOptions {
    
		let headers  = new Headers( 
			{ 
				"Content-Type": "application/json",
				"Accept":"application/json",
				"Access-Control-Allow-Origin":"*",
				"Access-Control-Allow-Methods":"POST",
				"Access-Control-Allow-Headers":"x-requested-with,content-type",
			} 
		);
		
		let options = new RequestOptions (  { 'headers': headers }  );
		
		return options;
    }
    
    getDefaultJsonRequestOptions(): RequestOptions {
    
		let headers  = new Headers( 
			{ 
				"Content-Type": "application/json",
				"Accept":"application/json",
			} 
		);

		let options = new RequestOptions (  { 'headers': headers }  );
		
		return options;
    }
}