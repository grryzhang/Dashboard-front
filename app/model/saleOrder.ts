
export class SaleOrderState { 

	isTheLastVersion : boolean;
	version          : number;
	lastVersion      : number;
	changed          : string [];

	orderId          : string;
	customerOrderId  : string;
	orderTime        : string;
	invoiceCode      : string;
	customerName     : string;
	customerBuyer    : string;
	tradeTerm        : string;
	businessUser     : string;
	
	items            : SaleOrderItemState[];
	
	state            : any; // not from server
	isLeaf			 : any; // not from server
	htmlClass 	     : any; // not from server

	constructor(
		
		
		isTheLastVersion ?: boolean,
		version          ?: number,
		lastVersion      ?: number,
		changed          ?: string [],
	
		customerOrderId  ?: string,
		orderTime        ?: string,
		invoiceCode      ?: string,
		customerName     ?: string,
		customerBuyer    ?: string,
		tradeTerm        ?: string,
		businessUser     ?: string,
		
		items            ?: SaleOrderItemState,
		
		state            ?: any,
		isLeaf           ?: any,
		htmlClass        ?: any
	){}
}


export class SaleOrderItemState { 

	orderId            : string;
	customerOrderId    : string;
	code               : string;
	type               : string;
	name               : string;
	specification      : string;
	
	forecastDeliveryTime : string;
	deliveryTime         : string;
	productionEndTime    : string;
	
	
	inspection         : string;
	inspectionDate     : string;
	invoicedTime       : string;
	paymentTerm        : string;
	
		
	totalNumber        : string; 
	unit               : string;
	unitPrice          : string;
	totalPrice         : string;
	
	freightInfos       : FreightInfo[];
	
	state              : any; // not from server
	isLeaf			   : any; // not from server
	htmlClass 		   : any; // not from server

	constructor(
		
		orderId              ?: string,
		customerOrderId      ?: string,
		code                 ?: string,
		type                 ?: string,
		name                 ?: string,
		specification        ?: string,
		forecastDeliveryTime ?: string,
		deliveryTime         ?: string,
		productionEndTime    ?: string,
		inspection           ?: string,
		inspectionDate       ?: string,
		invoicedTime         ?: string,
		paymentTerm          ?: string,   
		                     
		totalNumber          ?: string, 
		unit                 ?: string,
		unitPrice            ?: string,
		totalPrice           ?: string,
		                     
		freightInfos         ?: FreightInfo,
		                     
		state                ?: any,
		isLeaf               ?: any,
		htmlClass            ?: any
	){}
}

export class FreightInfo { 
	
	contractNo                 : string;
	custContractNo             : string;
	goodsCode                  : string;
	custGoodsCode              : string;
	invoiceNumber              : string;
	invoiceDate                : string;
	estimatedTimeofDelivery    : string;
	estimatedTimeOfArrival     : string;
	receiptDate                : string;
	customerContractNumber     : string;
	container                  : string;
	startPlace                 : string;
	endPlace                   : string;
	transportMode              : string;
	totalBulk                  : string;

	shipmentTracing            : ShipmentTracing;

	constructor(
		
		contractNo                 ?: string,
		custContractNo             ?: string,
		goodsCode                  ?: string,
		custGoodsCode              ?: string,
		invoiceNumber              ?: string,
		invoiceDate                ?: string,
		estimatedTimeofDelivery    ?: string,
		estimatedTimeOfArrival     ?: string,
		receiptDate                ?: string,
		customerContractNumber     ?: string,
		container                  ?: string,
		startPlace                 ?: string,
		endPlace                   ?: string,
		transportMode              ?: string,
		totalBulk                  ?: string,
		
		shipmentTracing            ?: ShipmentTracing
	){}
}


export class ShipmentTracing { 

	mbl                        : string;
	containerId                : string;
	consignee                  : string;
	loading                    : string;
	ETD                        : string;
	finalDestination           : string;
	discharge                  : string;
	ETAPortOfDischarge         : string;
	destination                : string;
	ETAFinalDestination        : string;
	currentPortOfDischarge     : string;
	dischargeCurrentETA        : string;
	currentPortOfDestination   : string;
	destinationcurrentETA      : string;
	customsReleaseDate         : string;
	dateStorageBegins          : string;
	dateOfDeliveryOrPickUp     : string;

	constructor(
		mbl                        ?: string,
		containerId                ?: string,
		consignee                  ?: string,
		loading                    ?: string,
		ETD                        ?: string,
		finalDestination           ?: string,
		discharge                  ?: string,
		ETAPortOfDischarge         ?: string,
		destination                ?: string,
		ETAFinalDestination        ?: string,
		currentPortOfDischarge     ?: string,
		dischargeCurrentETA        ?: string,
		currentPortOfDestination   ?: string,
		destinationcurrentETA      ?: string,
		customsReleaseDate         ?: string,
		dateStorageBegins          ?: string,
		dateOfDeliveryOrPickUp     ?: string
	){}
}