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
}