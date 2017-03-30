/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var wheel_service_1 = require('../../service/item/wheel.service');
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemWheelService) {
        this.itemWheelService = itemWheelService;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent.prototype.freshItemDetail = function (itemId) {
        var _this = this;
        var wheelSearchParameters = { "wheelIds": [itemId] };
        this.itemWheelService.queryWheel(wheelSearchParameters).subscribe(function (reponseData) {
            _this.wheels = reponseData.data;
        }, function (error) { _this.errorMessage = error; });
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'item-detail-modal',
            template: "\n  \t\t\t<div class=\"modal fade\" id=\"item-detail-modal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t      \t<div class=\"modal-content\">\n\t\t\t         \t<div class=\"modal-header\">\n\t\t\t         \t    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t      \t\t            &times;\n\t\t      \t\t        </button>\n\t\t\t            \t<h4 class=\"modal-title\" id=\"myModalLabel\">&nbsp;</h4>\n\t\t\t         \t</div>\n\t\t\t         \t<template [ngIf]=\"wheels != null && wheels[0] != null\">\n \t\t\t\t\t\t<div class=\"container-fluid\">\n    \t\t\t\t  \t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h4>{{wheels[0]?.name}}</h4>\n\t\t\t\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t\t\t<p><a class=\"btn btn-primary\" href=\"http://www.xingmin.com/show-12-102-1.html\" target=\"_blank\" role=\"button\">View data source \u00BB</a></p>\n\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.0.29/image/web/{{wheels[0]?.imageId}}.jpg\" class=\"img-responsive\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t<div class=\"row\"><!--/row start-->\n    \t\t\t\t  \t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n    \t\t\t\t  \t\t\t\t<ul id=\"myTab\" class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#supplierDetail-supplierTab\" data-toggle=\"tab\" class=\"bg-grey\"><Strong>Technical Parameters</Strong></a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div id=\"myTabContent\" class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane fade in active\" id=\"supplIerDetail-supplierTab\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\" style=\"table-layout:fixed;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"35%\">Material</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.material}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Price</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    <table class=\"table\" style=\"table-layout: fixed;\">\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t<thead>\n \t\t\t\t\t\t \t\t\t\t\t            \t\t\t    <tr>\n    \t\t\t\t \t\t\t\t\t\t            \t\t\t\t    <th>Quantity</th>\n    \t\t\t\t \t\t\t\t\t\t            \t\t\t        <th>Unit price</th>\n    \t\t\t\t \t\t\t\t\t\t            \t\t\t    </tr>\n    \t\t\t\t \t\t\t\t\t\t            \t\t\t</thead>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t<tbody>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t<template ngFor let-onePrice [ngForOf]=\"wheels[0].price\"> \n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t<tr>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t\t<td width=\"15px\">{{onePrice?.purchaseQuantity}}</td>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t\t<td>{{onePrice?.unitPrice}}</td>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t</tr>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t\t</tbody>\n\t\t\t\t\t\t \t\t\t\t\t            \t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Wheel Hub Diameter</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.wheelHubDiameter}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>PCD</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.pcd}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>ET</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.et}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Hole</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.hole}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Width</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.width}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Production Capacity</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{wheels[0]?.productionCapacity}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t\t</div><!-- end : column-items  col-xs-8 col-lg-8 --> \t\t\n    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div><!--/container-->\n\t\t\t\t\t\t</template>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t    \t   \t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t    \t    \t     Close\n\t\t    \t   \t        </button>\n\t\t    \t\t    </div>\n\t\t\t      \t</div><!-- /.modal-content -->\n\t\t\t\t</div><!--end : model window-->     \n      \t\t</div>\n      \t\t<!--end : model window-->  \n  \t\t",
        }), 
        __metadata('design:paramtypes', [wheel_service_1.ItemWheelService])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item.detail.component.js.map