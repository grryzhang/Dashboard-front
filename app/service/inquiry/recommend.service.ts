import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';

import { CommonHttpService } from '../common/common.http.service';
import { CommonUtil }        from '../common/common.util.service';

@Injectable()
export class RecommendService {

	constructor (
		private http : Http,
		private commonHttpService  : CommonHttpService,
		private commonUtil : CommonUtil
	) {}
  
    newRecommendIndex( indexCreateParameters : any ): Observable<any>{
    
        //let queryUrl = '/MD/recommend/new/wheel';
        
        let queryUrl = '/DataIndex/sieving/wheel';
        
        let noEmtpy = this.commonUtil.clearEmptyForJsonData( indexCreateParameters );
		
		return this.commonHttpService.doAccessControlAllowPost( queryUrl , noEmtpy );
    }
    
    downloadRecommendExcelReport( indexId : string ) : Observable<any> {
    
        let downloadUrl = '/DataIndex/export/recommend/wheel/' + indexId;
        
        return this.commonHttpService.doDefaultPostDownload( downloadUrl , {} );
    }
    
    queryRecommendList( searchParameters : any ) : Observable<any>{
    
        let queryUrl = '/DataIndex/recommend/list/wheel';
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , searchParameters );
    }
    
    queryRecommendCorpList( searchParameters : any ) : Observable<any>{
    
        if( searchParameters && searchParameters.indexIds ){
    
            let indexId = searchParameters.indexIds[0];
            
            if( indexId ){
                let queryUrl = '/DataIndex/recommend/wheel/' + indexId +'/corpList';
                
                let otherSearchParameter = searchParameters;
		
		        return this.commonHttpService.doDefaultJsonPost( queryUrl , otherSearchParameter );
            }
		}
    }
  	
    queryOneRecommendIndex( searchParameters : any ) : Observable<any>{
    
        if( searchParameters && searchParameters.indexIds ){
    
            let indexId = searchParameters.indexIds[0];
            
            if( indexId ){
                let queryUrl = '/DataIndex/recommend/wheel/' + indexId + '/default';
                
                let otherSearchParameter = searchParameters;
		
		        return this.commonHttpService.doDefaultJsonPost( queryUrl , otherSearchParameter );
            }
		}
	}
	
	queryOneRecommendCount( searchParameters : any ) : Observable<any>{
	
	     if( searchParameters && searchParameters.indexIds ){
    
            let indexId = searchParameters.indexIds[0];
            
            if( indexId ){
                let queryUrl = '/DataIndex/recommend/wheel/' + indexId + '/count';
		
		        let otherSearchParameter = searchParameters;
		
		        return this.commonHttpService.doDefaultJsonPost( queryUrl , otherSearchParameter );
            }
		}
	}
	
}