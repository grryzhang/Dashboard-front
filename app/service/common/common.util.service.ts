import { Injectable      }    from '@angular/core';

@Injectable()
export class CommonUtil{

	constructor (
	    
	) {}
	
	isArray( obj : any ) : boolean {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    
    clearEmptyForJsonData( obj : any ) : any{
    
        
        let json = JSON.stringify( obj );
        
        /*
        json = json.replace(/(\"\"|\'\')/g,"null");
        
        json = json.replace(/( "*\S*"*\s*:\s*(null|Null|NULL)+\s*[,]* )/g,"");
         */
         
        let newObj = JSON.parse( json );
        
        return newObj;
        
    }
}