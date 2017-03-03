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
var CorporationDetailComponent = (function () {
    function CorporationDetailComponent() {
    }
    CorporationDetailComponent.prototype.ngOnInit = function () {
    };
    CorporationDetailComponent.prototype.changeCorporation = function (inputCorporation) {
        console.log(inputCorporation);
        this.corporation = inputCorporation;
    };
    CorporationDetailComponent = __decorate([
        core_1.Component({
            selector: 'corporation-detail-modal',
            template: "\n  \t\t\t<div class=\"modal fade\" id=\"corporation-detail-modal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t      \t<div class=\"modal-content\">\n\t\t\t         \t<div class=\"modal-header\">\n\t\t\t         \t    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t      \t\t            &times;\n\t\t      \t\t        </button>\n\t\t\t            \t<h4 class=\"modal-title\" id=\"myModalLabel\">&nbsp;</h4>\n\t\t\t         \t</div>\n\t\t\t         \t<template [ngIf]=\"corporation != null \">\n \t\t\t\t\t\t<div class=\"container-fluid\">\n    \t\t\t\t  \t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h4>{{corporation.name}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t<img src=\"http://192.168.0.29/image/web/{{corporation.imageId}}.jpg\" class=\"img-responsive\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t<div class=\"row\"><!--/row start-->\n    \t\t\t\t  \t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n    \t\t\t\t  \t\t\t\t<ul id=\"myTab\" class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#supplierDetail-supplierTab\" data-toggle=\"tab\" class=\"bg-grey\"><Strong>Introduction</Strong></a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div id=\"myTabContent\" class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane fade in active\" id=\"supplIerDetail-supplierTab\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\" style=\"table-layout:fixed;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td width=\"35%\">Factory Size</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.factorySize}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.address}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n                                                        <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Factory Address</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.factoryAddress}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Contact</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.contact}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Fax</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.fax}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>TelePhone</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.telePhone}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Business Type</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.businessType}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Factory Size</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.factorySize}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Year Established</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.yearEstablished}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Annual OutputValue</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.annualOutputValue}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Annual ExportRevenue</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.annualExportRevenue}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Highest Ever AnnualOutput</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.highestEverAnnualOutput}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n                                                        <tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Number Of ProductionLines</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{corporation.noOfProductionLines}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t\t</div><!-- end : column-items  col-xs-8 col-lg-8 --> \t\t\n    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div><!--/container-->\n\t\t\t\t\t\t</template>\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t    \t   \t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t    \t    \t     Close\n\t\t    \t   \t        </button>\n\t\t    \t\t    </div>\n\t\t\t      \t</div><!-- /.modal-content -->\n\t\t\t\t</div><!--end : model window-->     \n      \t\t</div>\n      \t\t<!--end : model window-->  \n  \t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], CorporationDetailComponent);
    return CorporationDetailComponent;
}());
exports.CorporationDetailComponent = CorporationDetailComponent;
//# sourceMappingURL=corporation.detail.component.js.map