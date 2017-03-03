export class Corporation { 

	
	name                    : string  ;/** 公司名称 **/
	address                 : string  ;/**公司地址* */
	factoryAddress          : string  ;/**工厂地址**/
	contact                 : string  ;/** 联系人 **/
	fax                     : string  ;/** 传真 **/
	telePhone               : string  ;/** 联系电话 **/
	mainProducts            : string  ;/**主营产品*/
	resourceUrl             : string  ;/**产品资源所在url**/
	businessType            : string  ;/**贸易类型**/
	                        
	factorySize             : string  ;
	yearEstablished         : string  ;
	annualOutputValue       : string  ;     
	annualExportRevenue     : string  ;   
	highestEverAnnualOutput : string  ; 
	noOfProductionLines     : string  ; 	 
	
	imageId                 : string  ;
	
	
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
	    
	    imageId                  ?: string     
	  
	){}
	
}