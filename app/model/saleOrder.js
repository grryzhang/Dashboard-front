"use strict";
var SaleOrderState = (function () {
    function SaleOrderState(isTheLastVersion, version, lastVersion, changed, customerOrderId, orderTime, invoiceCode, customerName, customerBuyer, tradeTerm, businessUser, items, state, isLeaf, htmlClass) {
    }
    return SaleOrderState;
}());
exports.SaleOrderState = SaleOrderState;
var SaleOrderItemState = (function () {
    function SaleOrderItemState(orderId, customerOrderId, code, type, name, specification, forecastDeliveryTime, deliveryTime, productionEndTime, inspection, inspectionDate, invoicedTime, paymentTerm, totalNumber, unit, unitPrice, totalPrice, freightInfos, state, isLeaf, htmlClass) {
    }
    return SaleOrderItemState;
}());
exports.SaleOrderItemState = SaleOrderItemState;
var FreightInfo = (function () {
    function FreightInfo(contractNo, custContractNo, goodsCode, custGoodsCode, invoiceNumber, invoiceDate, estimatedTimeofDelivery, estimatedTimeOfArrival, receiptDate, customerContractNumber, container, startPlace, endPlace, transportMode, totalBulk, shipmentTracing) {
    }
    return FreightInfo;
}());
exports.FreightInfo = FreightInfo;
var ShipmentTracing = (function () {
    function ShipmentTracing(mbl, containerId, consignee, loading, ETD, finalDestination, discharge, ETAPortOfDischarge, destination, ETAFinalDestination, currentPortOfDischarge, dischargeCurrentETA, currentPortOfDestination, destinationcurrentETA, customsReleaseDate, dateStorageBegins, dateOfDeliveryOrPickUp) {
    }
    return ShipmentTracing;
}());
exports.ShipmentTracing = ShipmentTracing;
//# sourceMappingURL=saleOrder.js.map