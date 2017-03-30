export class Corporation { 

	
	name                    : string      ;/** 公司名称 **/
	address                 : string      ;/**公司地址* */
	factoryAddress          : string      ;/**工厂地址**/
	contact                 : string      ;/** 联系人 **/
	fax                     : string      ;/** 传真 **/
	telePhone               : string      ;/** 联系电话 **/
	mainProducts            : string      ;/**主营产品*/
	resourceUrl             : string      ;/**产品资源所在url**/
	businessType            : string      ;/**贸易类型**/
	                                      
	factorySize             : string      ;
	yearEstablished         : string      ;
	annualOutputValue       : string      ;     
	annualExportRevenue     : string      ;   
	highestEverAnnualOutput : string      ; 
	noOfProductionLines     : string      ; 	 
	
	imageId                 : string  []  ;
	
	cooperator              : string      ;
	recommended             : string      ;
	
	constructor(
	
		name                     ?: string     ,
		address                  ?: string     ,
		factoryAddress           ?: string     ,
		contact                  ?: string     , 
		fax                      ?: string     ,
		telePhone                ?: string     ,
 		mainProducts             ?: string     ,
		resourceUrl              ?: string     ,
	    businessType             ?: string     ,
	    
	    factorySize              ?: string     , 
	    yearEstablished          ?: string     ,     
	    annualOutputValue        ?: string     ,     
	    annualExportRevenue      ?: string     ,     
	    highestEverAnnualOutput  ?: string     ,     
	    noOfProductionLines      ?: string     ,
	    
	    imageId                  ?: string[]   ,
	    
	    	
	    cooperator               ?: string     ,
	    recommended              ?: string 
	){}
	
}


export class EvaluationSupplierInfo{
    
    FNUMBER      : string ;       
	FNAME        : string ;
	FSHORTNAME   : string ;
	FPARENTNO    : string ;
	FADDR        : string ;
	FID          : string ;
	FNAME_EN     : string ;
	INDUSTRY     : string ;
	INDUSTRY_EN  : string ; 
	
	constructor( 
	    FNUMBER      ?: string ,          
	    FNAME        ?: string ,
	    FSHORTNAME   ?: string ,
	    FPARENTNO    ?: string ,
	    FADDR        ?: string ,
	    FID          ?: string ,          
	    FNAME_EN     ?: string ,
	    INDUSTRY     ?: string ,          
	    INDUSTRY_EN  ?: string           
	){}
}

export class CorporationGradeList{

	corporationName   : string ;
	corporationEName  : string ;
	FNUMBER           : string ;
	gradeScore        : string ;
	lastGradeTime     : string ;
	count             : string ;
	
	constructor( 
	    corporationName   ?: string ,
	    corporationEName  ?: string ,
	    FNUMBER           ?: string ,
	    gradeScore        ?: string ,
	    lastGradeTime     ?: string ,
	    count             ?: string
	){}
}


export class CorporationGrade{

    id                  : string ;
	corporationId       : string ;
	corporationGroup    : string ;
	gradeId             : string ;
	gradeScore          : string ;
	gradeLevel          : string ;
	createTime          : Date   ;
	
	gradeItems          : CorporationGradeItems;
	
	corporation         : EvaluationSupplierInfo ;
	
	constructor( 
	    id                  ?: string ,
	    corporationId       ?: string ,
	    corporationGroup    ?: string ,
	    gradeId             ?: string ,
	    gradeScore          ?: string ,
	    gradeLevel          ?: string ,
	    createTime          ?: Date   ,
	    
	    gradeItems          ?: CorporationGradeItems,
	    
	    corporation         ?: EvaluationSupplierInfo
	){}
}

export class CorporationGradeItems{

    itemId           : string; 
	gradeId          : string;
	gradeItemId      : string;
	gradeItemScore   : string;
	gradeItemWeight  : string;
	gradeItemGroup   : string;
	gradeItem        : string;  
	
	constructor(         
	    itemId           ?: string,
	    gradeId          ?: string,
	    gradeItemId      ?: string,
	    gradeItemScore   ?: string,
	    gradeItemWeight  ?: string,
	    gradeItemGroup   ?: string,
	    gradeItem        ?: string
	){}
}