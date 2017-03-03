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
    
        let queryUrl = '/MD/recommend/new/wheel';
        
        let noEmtpy = this.commonUtil.clearEmptyForJsonData( indexCreateParameters );
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , noEmtpy );
    }
    
    queryRecommendList( searchParameters : any ) : Observable<any>{
    
        let queryUrl = '/MD/recommend/list/wheel';
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , searchParameters );;
    }
    
    queryRecommendCorpList( indexId : string , otherSearchParameter : any ) : Observable<any>{
    
        let queryUrl = '/MD/recommend/wheel/' + indexId +'/corpList';
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , otherSearchParameter );
    }
  	
    queryOneRecommendIndex( indexId : string ) : Observable<any>{
	
		let queryUrl = '/MD/recommend/wheel/' + indexId;
		
		let searchParameters = {};
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , searchParameters );;
	}
	
}