import { Corporation            }    from './corporation';
import { Wheel                  }    from './wheel';
import { CorporationGradeList   }    from './corporation';

export class RecommendCorporation { 

	corpId           : string       ;
	corpScore        : string       ;
	corp             : Corporation  ;
	wheelIDs         : string []    ; 
	wheels           : Wheel[]      ;
	indexId          : string       ;
 	indexCondition   : string       ;
	dataType         : string       ;
	
	gradeInfo        : CorporationGradeList ;

	constructor(
	
		corpId           ?: string        ,
		corpScore        ?: string        ,
		corp             ?: Corporation   ,
		wheelIDs         ?: string []     , 
		wheels           ?: Wheel[]       ,
		indexId          ?: string        ,
 		indexCondition   ?: string        ,
		dataType         ?: string        ,
		
		gradeInfo        ?: CorporationGradeList
	){}
}

export class RecommendIndex {

    indexId          : string       ;
 	indexCondition   : string       ;
	dataType         : string       ;
	count            : string       ;
	
	complete         : boolean      ;
	
	constructor(
	
		indexId          ?: string        ,
 		indexCondition   ?: string        ,
		dataType         ?: string        ,
		count            ?: string        ,
		
		complete         ?: boolean       
	){}
}

export class RecommendSearchParameters {
    
    start    : number;
    limit    : number;
    indexIds : string [];
    
    constructor(
        start    ?: number,
        limit    ?: number,
        indexIds ?: string []
    ){}
};