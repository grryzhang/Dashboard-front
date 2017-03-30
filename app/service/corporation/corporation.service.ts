import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';

import { CommonHttpService } from '../common/common.http.service';
import { CommonUtil }        from '../common/common.util.service';

@Injectable()
export class CorporationService {

	constructor (
		private http : Http,
		private commonHttpService  : CommonHttpService,
		private commonUtil : CommonUtil
	) {}
  
    queryCorporation( corpSearchParameters : any ): Observable<any>{
    
        let queryUrl = '/MD/corporations';
        
        let noEmtpy = this.commonUtil.clearEmptyForJsonData( corpSearchParameters );
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , noEmtpy );
    }
    
    queryEvaluationList( corporationGradeSearchParameters : any ): Observable<any>{
    
        let queryUrl = '/MD/corporation/evaluation/list';
        
        let noEmtpy = this.commonUtil.clearEmptyForJsonData( corporationGradeSearchParameters );
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , noEmtpy );
    }
    
    queryEvaluation( corporationNumber : string ): Observable<any>{
    
        if( corporationNumber && corporationNumber.length > 0 ){
        
            let queryUrl = '/MD/corporation/evaluation/' + corporationNumber;
        
            let noEmpty = {};
		
		    return this.commonHttpService.doDefaultJsonPost( queryUrl , noEmpty );
        }
        
    }
}


