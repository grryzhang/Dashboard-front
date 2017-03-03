import { Corporation   }    from './corporation';
import { Wheel         }    from './wheel';


export class RecommendCorporation { 

	corpId           : string       ;
	corpScore        : string       ;
	corp             : Corporation  ;
	wheelIDs         : string []    ; 
	wheels           : Wheel[]      ;
	indexId          : string       ;
 	indexCondition   : string       ;
	dataType         : string       ;

	constructor(
	
		corpId           ?: string        ,
		corpScore        ?: string        ,
		corp             ?: Corporation   ,
		wheelIDs         ?: string []     , 
		wheels           ?: Wheel[]       ,
		indexId          ?: string        ,
 		indexCondition   ?: string        ,
		dataType         ?: string
	){}
}

export class RecommendIndex {

    indexId          : string       ;
 	indexCondition   : string       ;
	dataType         : string       ;
	count            : string       ;
	
	constructor(
	
		indexId          ?: string        ,
 		indexCondition   ?: string        ,
		dataType         ?: string        ,
		count            ?: string
	){}
}