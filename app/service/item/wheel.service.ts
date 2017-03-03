import { Injectable      }    from '@angular/core';
import { Http, Response  }    from '@angular/http';
import { RequestOptions,
         Headers         }    from '@angular/http';
         
import '../../extraImport/rxjs-operators';
import { Observable }    from 'rxjs/Observable';

import { CommonHttpService } from '../common/common.http.service';
import { CommonUtil }        from '../common/common.util.service';

@Injectable()
export class ItemWheelService {

	constructor (
		private http : Http,
		private commonHttpService  : CommonHttpService,
		private commonUtil : CommonUtil
	) {}
  
    queryWheel( wheelSearchParameters : any ): Observable<any>{
    
        let queryUrl = '/MD/wheels';
        
        let noEmtpy = this.commonUtil.clearEmptyForJsonData( wheelSearchParameters );
		
		return this.commonHttpService.doDefaultJsonPost( queryUrl , noEmtpy );
    }
}