
export class Wheel { 

	name               : string ;

	hole               : string ;
	paymentTerms       : string ;
	payment            : string ;
	transportPackage   : string ;
	packing            : string ;
	productionCapacity : string ;
	certification      : string ;
	standard           : string ;
	finishing          : string ;
	type               : string ;
	driveWheel         : string ;
	wheelAccessories   : string ;
	color              : string ;
	front              : string ;
	rear               : string ;
	wheelHubBrand      : string ;
	trademark          : string ;
	warranty           : string ;
	painting           : string ;
	wheelHubDiameter   : string ;
	
	price              : WheelPrice [] ;
	
	imageId            : string ;
	
	constructor(
	
		name               : string ,
	
		hole               : string ,
		paymentTerms       : string ,
		payment            : string ,
		transportPackage   : string ,
		packing            : string ,
		productionCapacity : string ,
 		certification      : string ,
		standard           : string ,
	    finishing          : string ,      
	    type               : string ,
	    driveWheel         : string ,
	    wheelAccessories   : string ,
	    color              : string ,
	    front              : string ,                                 
	    rear               : string ,                                 
	    wheelHubBrand      : string ,                                 
	    trademark          : string ,                                 
	    warranty           : string ,                                 
	    painting           : string ,
	    wheelHubDiameter   : string ,
	  
	    price              : WheelPrice [],
	  
	    imageId            : string 
	  
	){}
}

export class WheelPrice {

	purchaseQuantity   : string ;
	unitPrice          : string ;
	
	constructor(
	
		purchaseQuantity : string ,
		unitPrice        : string 
	  
	){}
}