/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/maxazan-jquery-treegrid/treegrid.d.ts" />
/// <reference path="../../../resources/twbsPagination/twbsPagination.d.ts" />
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
var contract_service_1 = require('../../service/corporation/contract.service');
var ContractStateComponent = (function () {
    function ContractStateComponent(contractService) {
        this.contractService = contractService;
        this.isCollapsed = true;
        this.contractsInShow = new Array();
    }
    ContractStateComponent.prototype.ngOnInit = function () {
        this.getSupplierContract();
    };
    ContractStateComponent.prototype.getSupplierContract = function () {
        this.contracts = this.contractService.querySupplierContract(null);
        if (this.contracts && this.contracts[0]) {
            this.contracts[0].active = "active";
            this.contractsInShow.push(this.contracts[0]);
        }
    };
    ContractStateComponent.prototype.addContract2InShow = function (supplierName) {
        for (var i = 0; i < this.contractsInShow.length; i++) {
            var contractInShow = this.contractsInShow[i];
            contractInShow.active = false;
            if (contractInShow.corpName == supplierName) {
                contractInShow.active = true;
                return;
            }
        }
        for (var i = 0; i < this.contracts.length; i++) {
            var contract = this.contracts[i];
            if (contract.corpName == supplierName) {
                var index = this.contractsInShow.length;
                contract.active = true;
                this.contractsInShow.push(contract);
                break;
            }
        }
    };
    ContractStateComponent.prototype.closeTab = function (event, corpName) {
        event = event ? event : window.event;
        var obj = event.srcElement ? event.srcElement : event.target;
        if (obj.id && obj.id == "contract.state.component.closeTab") {
            event.stopPropagation();
            for (var i = 0; i < this.contractsInShow.length; i++) {
                var contractInShow = this.contractsInShow[i];
                if (contractInShow.corpName == corpName) {
                    this.contractsInShow.splice(i, 1);
                    return;
                }
            }
        }
    };
    ContractStateComponent = __decorate([
        core_1.Component({
            selector: 'router-anchor',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "    \n  \t\t\t<div class=\"container\"><!--/container start-->\n  \t\t\t\t<div class=\"row-fluid row-offcanvas row-offcanvas-right\">\n    \t\t  \t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t  \t\t\t<div class=\"col-xs-12 col-sm-8 col-lg-4\">\n    \t\t  \t\t\t\t<form>\n    \t\t  \t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"orderFuzzyInput\" placeholder=\"Supplier Search\" #contract_searchParameters />\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button \n    \t\t            \t\t\t\t\tclass=\"btn btn-default\" \n    \t\t            \t\t\t\t\ttype=\"button\" \n    \t\t            \t\t\t\t\t(click)=\"getSaleOrderState( { 'fuzzy' : contract_searchParameters.value } );\">\n    \t\t            \t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n    \t\t           \t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"clearAndSearch();\">\n    \t\t            \t\t\t\t\t<span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n    \t\t  \t\t\t</div>\n    \t\t  \t\t</div><!--/row-search-end start-->\n    \t\t  \t\t\n    \t\t  \t\t<hr/>\n    \t\t  \t\t\n    \t\t  \t\t<div class=\"row\"><!--/row-1 start-->\n \t\t\t\t\t\t<div class=\"col-xs-5 col-sm-3\" id=\"sidebar\" role=\"navigation\">\n \t\t\t\t\t\t\t<ul class=\"list-group\">\n \t\t\t\t\t\t\t\t<template ngFor let-corpContract [ngForOf]=\"contracts\">\n\t\t\t\t\t\t\t\t  \t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t  \t\t<a (click)=\"addContract2InShow( corpContract?.corpName );\">{{corpContract?.corpName}}</a>\n\t\t\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t</ul>\n \t\t\t\t\t\t\t<!--\n \t\t\t\t\t\t\t<div class=\"shadow-panel\">\n \t\t\t\t\t\t\t\t<span dropdown>\n  \t\t\t\t\t\t\t\t  \t<a id=\"simple-dropdown\" class=\"list-group-item\" dropdownToggle>\n  \t\t\t\t\t\t\t\t    \tLu Xiang\n  \t\t\t\t\t\t\t\t  \t</a>\n  \t\t\t\t\t\t\t\t  \t\n  \t\t\t\t\t\t\t\t  \t<ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n  \t\t\t\t\t\t\t\t    \t<li>\n  \t\t\t\t\t\t\t\t     \t \t<a class=\"dropdown-item\">Contract-1</a>\n  \t\t\t\t\t\t\t\t   \t\t</li>\n  \t\t\t\t\t\t\t\t \t</ul>\n  \t\t\t\t\t\t\t\t</span>\n        \t\t\t\t\t\t<a href=\"#\" class=\"list-group-item\">XXXXXXX</a>\n        \t\t\t\t\t</div>\n        \t\t\t\t\t-->\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-9\">\n  \t\t\t\t\t\t\t<tabset>\n   \t\t\t\t\t\t\t\t<tab *ngFor=\"let contractInShow of contractsInShow\" \n   \t\t\t\t\t\t\t\t\t[active]=\"contractInShow.active\"\n         \t\t\t\t\t\t\t(select)=\"contractInShow.active = true\"\n         \t\t\t\t\t\t\t(deselect)=\"contractInShow.active = false\"\n         \t\t\t\t\t\t\t>\n         \t\t\t\t\t\t\t<template tabHeading>\n      \t\t\t\t\t\t\t\t\t{{contractInShow?.corpName}} <a (click)=\"closeTab( $event , contractInShow.corpName )\"><i id=\"contract.state.component.closeTab\" class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\n    \t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t<div class=\"white-panel\">\n\t\t\t\t\t\t\t\t\t\t<h4><p>Core Clauses</p></h4>\n\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t  \t<li>\n\t\t\t\t\t\t\t\t\t\t  \t\t<h4>\n\t\t\t\t\t\t\t\t\t\t  \t\t\tWarranty Rules\n\t\t\t\t\t\t\t\t\t\t  \t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t  \t\t</h4>\n\t\t\t\t\t\t\t\t\t\t  \t\t<template ngFor let-warrantyRule [ngForOf]=\"contractInShow?.warrantyRules\">\n\t\t\t\t\t\t\t\t\t\t  \t\t\t<a [tooltipHtml]=\"tipContent\" placement=\"right\">\n\t\t\t\t\t\t\t\t\t\t  \t\t\t\t{{warrantyRule?.ruleName}}\n\t\t\t\t\t\t\t\t\t\t  \t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t  \t\t\t<template #tipContent><div innerHTML=\"{{warrantyRule?.ruleExplain}}\"></div></template>\n\t\t\t\t\t\t\t\t\t\t  \t\t</template>\n\t\t\t\t\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t\t\t\t\t  \t<!--\n\t\t\t\t\t\t\t\t\t\t  \t<button type=\"button\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\">Item In Controll</button>\n\t\t\t\t\t\t\t\t\t\t\t<div [collapse]=\"isCollapsed\" class=\"card card-block card-header\">\n\t\t\t\t\t\t\t\t\t\t\t  \t<div class=\"row\">\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item 1</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t  <div class=\"col-xs-6 col-sm-4 col-lg-3\">item X</div>\n      \t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t-->\n\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Quality Standards</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<template ngFor let-qualityStandard [ngForOf]=\"contractInShow?.qualityStandards\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-file-pdf-o fa-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"doc/{{qualityStandard?.link}}\" target=\"_blank\">{{qualityStandard?.link}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4>Lastest Quarterly Supplier Evaluation</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><a target=\"_blank\">  {{contractInShow?.lastestEvaluation?.date}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i><a target=\"_blank\">  {{contractInShow?.lastestEvaluation?.grade}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</tab>\n\t\t\t\t\t\t\t</tabset>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div><!--row-1 end-->\n\t\t\t\t</div>\n    \t\t</div><!--/container-->\n\t\t",
        }), 
        __metadata('design:paramtypes', [contract_service_1.ContractService])
    ], ContractStateComponent);
    return ContractStateComponent;
}());
exports.ContractStateComponent = ContractStateComponent;
//# sourceMappingURL=contract.state.component.js.map