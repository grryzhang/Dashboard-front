/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
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
var recommend_service_1 = require('../../service/inquiry/recommend.service');
var corporation_service_1 = require('../../service/corporation/corporation.service');
var recommend_1 = require('../../model/recommend');
var item_detail_component_1 = require('../item/item.detail.component');
var corporation_detail_component_1 = require('../corporation/corporation.detail.component');
var evaluation_detail_component_1 = require('../corporation/evaluation.detail.component');
var InquiryRecommendSupplierFirstComponent = (function () {
    function InquiryRecommendSupplierFirstComponent(recommendService, corporationService) {
        this.recommendService = recommendService;
        this.corporationService = corporationService;
        this.total = 0;
        this.currentPage = 1;
        this.steelIndex = [];
        this.alloyIndex = [];
        this.isSteelLeftCollapsed = true;
        this.isAlloyLeftCollapsed = true;
    }
    InquiryRecommendSupplierFirstComponent.prototype.ngOnInit = function () {
        this.getDefaultRecommendList();
    };
    InquiryRecommendSupplierFirstComponent.prototype.collapsed = function (event) {
    };
    InquiryRecommendSupplierFirstComponent.prototype.expanded = function (event) {
    };
    InquiryRecommendSupplierFirstComponent.prototype.getRecommendSuppliers = function (indexId) {
        $('#recommend-supplierFirst-top-pagination').empty();
        $('#recommend-supplierFirst-top-pagination').removeData("twbs-pagination");
        $('#recommend-supplierFirst-top-pagination').unbind("page");
        this.recommendSearchParameters = new recommend_1.RecommendSearchParameters();
        this.recommendSearchParameters.indexIds = [indexId];
        this.refreshRecommendSuppliers(this.recommendSearchParameters);
    };
    InquiryRecommendSupplierFirstComponent.prototype.refreshRecommendSuppliers = function (recommendSearchParameters) {
        var _this = this;
        this.recommendSearchParameters = recommendSearchParameters;
        this.recommendService.queryOneRecommendIndex(this.recommendSearchParameters).subscribe(function (reponseData) {
            _this.recommendCorps = reponseData.data;
            if (reponseData.totalResult) {
                _this.total = reponseData.totalResult;
            }
            var corporationENames = [];
            for (var i = 0; i < _this.recommendCorps.length; i++) {
                corporationENames.push(_this.recommendCorps[i].corp.name);
            }
            var corporationGradeSearchParameters = { "corporationGroup": ["9911"] };
            corporationGradeSearchParameters.corporationENames = corporationENames;
            _this.corporationService.queryEvaluationList(corporationGradeSearchParameters).subscribe(function (reponseData) {
                _this.gradeLists = reponseData.data;
                for (var i = 0; i < _this.recommendCorps.length; i++) {
                    for (var j = 0; j < _this.gradeLists.length; j++) {
                        if (_this.recommendCorps[i].corp.name == _this.gradeLists[j].corporationEName) {
                            _this.recommendCorps[i].gradeInfo = _this.gradeLists[j];
                        }
                    }
                }
            }, function (error) { _this.errorMessage = error; });
            _this.createPagenation();
        }, function (error) { _this.errorMessage = error; });
    };
    InquiryRecommendSupplierFirstComponent.prototype.getDefaultRecommendList = function () {
        var _this = this;
        var aluminumRecommendSearchParameters = new recommend_1.RecommendSearchParameters();
        aluminumRecommendSearchParameters.indexIds = ["wheel-aluminum-index"];
        aluminumRecommendSearchParameters.limit = -1;
        aluminumRecommendSearchParameters.start = -1;
        this.recommendService.queryRecommendCorpList(aluminumRecommendSearchParameters).subscribe(function (reponseData) {
            _this.alloyIndex = reponseData.data;
        }, function (error) { _this.errorMessage = error; });
        var steelRecommendSearchParameters = new recommend_1.RecommendSearchParameters();
        steelRecommendSearchParameters.indexIds = ["wheel-steel-index"];
        steelRecommendSearchParameters.limit = -1;
        steelRecommendSearchParameters.start = -1;
        this.recommendService.queryRecommendCorpList(steelRecommendSearchParameters).subscribe(function (reponseData) {
            _this.steelIndex = reponseData.data;
        }, function (error) { _this.errorMessage = error; });
    };
    InquiryRecommendSupplierFirstComponent.prototype.showItemDetail = function (itemId, event) {
        event.stopPropagation();
        $('#item-detail-modal').modal();
        this.itemDetailModal.freshItemDetail(itemId);
    };
    InquiryRecommendSupplierFirstComponent.prototype.showCorporationDetail = function (corporation, event) {
        event.stopPropagation();
        $('#corporation-detail-modal').modal();
        this.corporationDetailModal.changeCorporation(corporation);
    };
    InquiryRecommendSupplierFirstComponent.prototype.showEvaluationDetail = function (corporationNumber) {
        $('#corporation-evaluation-detail-modal').modal();
        this.evaluationDetailComponent.freshEvaluation(corporationNumber);
    };
    InquiryRecommendSupplierFirstComponent.prototype.createPagenation = function () {
        var _this = this;
        requirejs(['twbsPagination'], function () {
            $('#recommend-supplierFirst-top-pagination').twbsPagination({
                totalPages: Math.ceil(_this.total / 10),
                total: _this.total,
                visiblePages: 7,
                "first": "<<",
                "prev": "<",
                "next": ">",
                "last": ">>",
                "initiateStartPageClick": false,
                "onPageClick": function (event, page) {
                    if (_this.recommendSearchParameters) {
                        _this.recommendSearchParameters.start = (page - 1) * 10;
                        _this.recommendSearchParameters.limit = 10;
                        if (_this.recommendSearchParameters.indexIds && _this.recommendSearchParameters.indexIds[0]) {
                            _this.refreshRecommendSuppliers(_this.recommendSearchParameters);
                        }
                    }
                }
            });
        });
    };
    __decorate([
        core_1.ViewChild(item_detail_component_1.ItemDetailComponent), 
        __metadata('design:type', item_detail_component_1.ItemDetailComponent)
    ], InquiryRecommendSupplierFirstComponent.prototype, "itemDetailModal", void 0);
    __decorate([
        core_1.ViewChild(corporation_detail_component_1.CorporationDetailComponent), 
        __metadata('design:type', corporation_detail_component_1.CorporationDetailComponent)
    ], InquiryRecommendSupplierFirstComponent.prototype, "corporationDetailModal", void 0);
    __decorate([
        core_1.ViewChild(evaluation_detail_component_1.EvaluationDetailComponent), 
        __metadata('design:type', evaluation_detail_component_1.EvaluationDetailComponent)
    ], InquiryRecommendSupplierFirstComponent.prototype, "evaluationDetailComponent", void 0);
    InquiryRecommendSupplierFirstComponent = __decorate([
        core_1.Component({
            selector: 'inquiry-recommend-supplierfisrt-modal',
            template: "    \n  \t\t<!--start : model window-->  \n    \t<div class=\"modal fade\" id=\"inquiry-recommend-supplierfisrt-modal\" role=\"dialog\" aria-labelledby=\"saleOrderStateDetailModalLabel\" aria-hidden=\"true\">\n\t\t    <div class=\"modal-dialog modal-width-normal\">\n\t\t\t\t<!-- start modal-content -->\n\t\t    \t<div class=\"modal-content\">\n\t\t      \t    <div class=\"modal-header\">\n\t\t      \t\t    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t      \t\t      &times;\n\t\t      \t\t    </button>\n\t\t      \t\t    <h4 class=\"modal-title\" id=\"inquire-status-modal-ModalLabel\">Matched Items</h4>\n\t\t      \t\t    <template [ngIf]=\" recommendCorps && recommendCorps[0]\">\n\t\t      \t\t        <span class=\"front-label-12\">Criteria <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>{{recommendCorps[0]?.indexCondition}}</span>\n\t\t      \t\t    </template>\n\t\t      \t\t    \n\t\t      \t\t    <div class=\"row\"><!--start : Pagination:row start-->\n    \t\t\t  \t\t    <div class=\"col-xs-12 col-lg-12\">\n    \t\t\t  \t\t        <nav>    \n\t\t\t\t\t\t    \t\t<div>                                                                \n\t\t\t\t\t\t    \t    \t<ul id=\"recommend-supplierFirst-top-pagination\" class=\"pagination-sm non-padding-top-bottom pull-right\">\n\t\t\t\t\t\t    \t    \t\t<li class=\"disabled\">\n\t\t\t\t\t\t    \t      \t\t\t<a href=\"#\">Total:{{total}}</a>\n\t\t\t\t\t\t    \t      \t\t</li>\n\t\t\t\t\t\t    \t    \t</ul>\n\t\t\t\t\t\t    \t    </div>\n\t\t\t\t\t\t    \t</nav>\n    \t\t\t  \t\t    </div>\n    \t\t\t  \t    </div> <!--end : Pagination:row start-->  \n\t\t   \t\t\t</div>\n\t\t            <div class=\"modal-body fixed-scrollable\">\n    \t\t\t\t\t<div class=\"container\"><!--/container start-->\n  \t\t\t\t\t \t\t<div class=\"row-fluid\" >\n\t\t\t\t\t\t \t\t<div class=\"col-xs-4 col-md-3 col-lg-3\">\n\t\t\t\t\t\t \t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t \t\t\t    <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                                <a role=\"button\" href=\"javascript:;\" (click)=\"isSteelLeftCollapsed = !isSteelLeftCollapsed\" >\n                                                    Steel Wheel Supplier Ranking\n                                                </a>\n                                            </div>\n                                            <div class=\"panel-collapse collapse in\" (collapsed)=\"collapsed($event)\" (expanded)=\"expanded($event)\" [collapse]=\"isSteelLeftCollapsed\">\n                                                <div class=\"panel-body\">\n                                                    <template ngFor let-oneIndex [ngForOf]=\"steelIndex\" let-i=\"index\" > \n                                                        {{oneIndex?.corp?.name}}\n    \t\t\t\t\t\t\t                        <span class=\"badge badge-success\">{{oneIndex?.corpScore}}</span>\n    \t\t\t\t\t\t\t                        <hr/>\n    \t\t\t\t\t\t\t                    </template>\n                                                </div>\n                                            </div>\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                                <a role=\"button\" href=\"javascript:;\" (click)=\"isAlloyLeftCollapsed = !isAlloyLeftCollapsed\" >\n                                                    Aluminum Wheel Suppliers Ranking\n                                                </a>\n                                            </div>\n                                            <div class=\"panel-collapse collapse in\" (collapsed)=\"collapsed($event)\" (expanded)=\"expanded($event)\" [collapse]=\"isAlloyLeftCollapsed\">\n                                                <div class=\"panel-body\">\n                                                    <template ngFor let-oneIndex [ngForOf]=\"alloyIndex\" let-i=\"index\" > \n                                                        {{oneIndex?.corp?.name}}\n    \t\t\t\t\t\t\t                        <span class=\"badge badge-success\">{{oneIndex?.corpScore}}</span>\n    \t\t\t\t\t\t\t                        <hr/>\n    \t\t\t\t\t\t\t                    </template>\n                                                </div>\n                                            </div>\n                                        </div>\n\t\t\t\t\t\t \t\t\t</div>\n\t\t\t\t\t\t \t\t</div>          \n\t\t\t\t\t\t \t\t\n\t\t\t\t\t\t \t\t<!--  start : main content   -->         \n\t\t\t\t\t\t \t\t<div class=\"col-xs-8 col-md-9 col-lg-9\" style=\"font-size:12px;\">    \n\t\t\t\t\t\t \t\t\t<template ngFor let-recommendCorp [ngForOf]=\"recommendCorps\" let-i=\"index\" > \n\t\t\t\t\t\t \t\t\t<div class=\"row border-around\">\n\t\t\t\t\t\t \t\t\t\t<div class=\"col-xs-12 col-md-12 col-lg-12\">\n\t\t\t\t\t\t \t\t\t\t\t<div class=\"row\" style=\"padding-left:5px;padding-top:5px;\">\n\t\t\t\t\t\t \t\t\t\t\t    <div class=\"col-xs-5 col-md-3 col-lg-3\">\n\t\t\t\t\t\t \t\t\t\t\t        <template [ngIf]=\"recommendCorp.corp && recommendCorp.corp.imageId\">\n\t\t\t\t\t\t \t\t\t\t\t            <template ngFor let-imageId [ngForOf]=\"recommendCorp.corp.imageId\">\n\t\t\t\t\t\t \t\t\t\t\t                <a href=\"javascript:;\" (click)=\"showCorporationDetail( recommendCorp.corp, $event )\">\n\t\t\t\t\t\t \t\t\t\t                        <img src=\"http://192.168.0.29/image/web/{{imageId}}.jpg\" class=\"img-responsive\" alt=\"\"/>\n\t\t\t\t\t\t \t\t\t\t                    </a>\n\t\t\t\t\t\t \t\t\t\t\t            </template>\n\t\t\t\t\t\t \t\t\t\t            </template>\n\t\t\t\t\t\t \t\t\t\t\t    </div>\n\t\t\t\t\t\t \t\t\t\t\t    <div class=\"col-xs-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t \t\t\t\t\t        <template [ngIf]=\"recommendCorp.corp.recommended != null\">\n\t\t\t\t\t\t \t\t\t\t\t            <img src=\"http://192.168.0.29/image/common/recommendation.jpg\" class=\"img-responsive\" alt=\"\" height=\"100\" width=\"100\"/>\n\t\t\t\t\t\t \t\t\t\t\t        </template>\n\t\t\t\t\t\t \t\t\t\t\t        <template [ngIf]=\"recommendCorp.corp.cooperator != null\">\n\t\t\t\t\t\t \t\t\t\t\t            <img src=\"http://192.168.0.29/image/common/cooperation.jpg\" class=\"img-responsive\" alt=\"\" height=\"100\" width=\"100\"/>\n\t\t\t\t\t\t \t\t\t\t\t        </template>\n\t\t\t\t\t\t \t\t\t\t\t    </div>\n\t\t\t\t\t\t \t\t\t\t\t    <div class=\"col-xs-5 col-md-7 col-lg-7\">\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\tSupplier Name\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp?.corp?.name}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\tMain Products\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp?.corp?.mainProducts}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\tYear Established\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp?.corp?.yearEstablished}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\tProduction capacity\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp?.corp?.highestEverAnnualOutput}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t        <!--\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\tAnnual Output\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t\n\t\t\t\t\t\t \t\t\t\t\t        \t<template [ngIf]=\"recommendCorp.corp.annualOutputValue != null\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp.corp.annualOutputValue}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t</template>\n\t\t\t\t\t\t \t\t\t\t\t        \t<template [ngIf]=\"recommendCorp.corp.annualExportRevenue != null && recommendCorp.corp.annualOutputValue == null\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp.corp.annualExportRevenue}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t</template>\n\t\t\t\t\t\t \t\t\t\t\t        \t\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t        -->\n\t\t\t\t\t\t \t\t\t\t\t        <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-6 col-md-4 col-lg-3 front-label-12\">  \n\t\t\t\t\t\t \t\t\t\t\t        \t\tFactory Size \n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        \t<div class=\"col-xs-5 col-md-7 col-lg-8\">\n\t\t\t\t\t\t \t\t\t\t\t        \t\t{{recommendCorp?.corp?.factorySize}}\n\t\t\t\t\t\t \t\t\t\t\t        \t</div>\n\t\t\t\t\t\t \t\t\t\t\t        </div>\n\t\t\t\t\t\t \t\t\t\t\t    </div>\n\t\t\t\t\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t\t<template [ngIf]=\"recommendCorp.gradeInfo\">\n\t\t\t\t\t\t \t\t\t\t\t<div class=\"row\" style=\"font-size:14px;\"><!-- start:evaluation -->\n\t\t\t\t\t\t \t\t\t\t\t    <div class=\"col-xs-12\">\n\t\t\t\t\t\t \t\t\t\t\t        <a href=\"javascript:;\" (click)=\"showEvaluationDetail( recommendCorp.gradeInfo.FNUMBER )\">\n\t\t\t\t\t\t \t\t\t\t\t            Evaluation:\n\t\t\t\t\t\t \t\t\t\t\t            <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t \t\t\t\t\t            {{recommendCorp?.gradeInfo?.lastGradeTime | date: 'MM/dd/yyyy'}}\n\t\t\t\t\t\t \t\t\t\t\t            <i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t \t\t\t\t\t            {{recommendCorp?.gradeInfo?.gradeScore}}\n\t\t\t\t\t\t \t\t\t\t\t        </a>\n\t\t\t\t\t\t \t\t\t\t\t    </div>   \n\t\t\t\t\t\t \t\t\t\t\t</div><!-- end:evaluation -->\n\t\t\t\t\t\t \t\t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t\t<hr/>\n\t\t\t\t\t\t \t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t\t<template ngFor let-otherWheel [ngForOf]=\"recommendCorp.wheels\" let-wheelsIndex=\"index\" >\n\t\t\t\t\t\t \t\t\t\t\t\t<template [ngIf]=\"wheelsIndex < 3\">\n\t\t\t\t\t\t \t\t\t\t            <div class=\"col-xs-6 col-md-4 col-lg-4 non-padding-left-right\">\n\t\t\t\t\t\t \t\t\t\t            \t<div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<a href=\"javascript:;\" (click)=\"showItemDetail( otherWheel.id , $event )\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t    <img src=\"http://192.168.0.29/image/web/{{otherWheel.imageId}}.jpg\" class=\"img-responsive\" alt=\"\"/>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t</a>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            </div>\n\t\t\t\t\t\t \t\t\t\t         </template>\n\t\t\t\t\t\t \t\t\t\t\t\t </template>\n\t\t\t\t\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t\t<template ngFor let-otherWheel [ngForOf]=\"recommendCorp.wheels\" let-wheelsIndex=\"index\" >\n\t\t\t\t\t\t \t\t\t\t\t\t<template [ngIf]=\"wheelsIndex < 3\">\n\t\t\t\t\t\t \t\t\t\t            <div class=\"col-xs-6 col-md-4 col-lg-4 non-padding-left-right\">\n\t\t\t\t\t\t \t\t\t\t            \t<div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-11 bg-grey\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<span><strong>{{otherWheel.name}}</strong></span>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            </div>\n\t\t\t\t\t\t \t\t\t\t         </template>\n\t\t\t\t\t\t \t\t\t\t\t\t </template>\n\t\t\t\t\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t\t<template ngFor let-otherWheel [ngForOf]=\"recommendCorp.wheels\" let-wheelsIndex=\"index\" >\n\t\t\t\t\t\t \t\t\t\t\t\t<template [ngIf]=\"wheelsIndex < 3\">\n\t\t\t\t\t\t \t\t\t\t            <div class=\"col-xs-6 col-md-4 col-lg-4 non-padding-left-right\">\n\t\t\t\t\t\t \t\t\t\t            \t<template [ngIf]=\"otherWheel.price && otherWheel.price.length>0\">\n\t\t\t\t\t\t \t\t\t\t            \t<div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-11\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<table class=\"table\" style=\"table-layout: fixed;\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t<thead>\n \t\t\t\t\t\t \t\t\t\t            \t\t\t\t    <tr>\n    \t\t\t\t \t\t\t\t\t            \t\t\t\t\t    <th>Quantity</th>\n    \t\t\t\t \t\t\t\t\t            \t\t\t\t        <th>Unit price</th>\n    \t\t\t\t \t\t\t\t\t            \t\t\t\t    </tr>\n    \t\t\t\t \t\t\t\t\t            \t\t\t\t</thead>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t<tbody>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t<template ngFor let-onePrice [ngForOf]=\"otherWheel.price\"> \n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t<tr>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t\t<td width=\"15px\">{{onePrice?.purchaseQuantity}}</td>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t\t<td>{{onePrice?.unitPrice}}</td>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t</tr>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t\t</tbody>\n\t\t\t\t\t\t \t\t\t\t            \t\t\t</table>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</template>\n\t\t\t\t\t\t \t\t\t\t            </div>\n\t\t\t\t\t\t \t\t\t\t        </template>\n\t\t\t\t\t\t \t\t\t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t \t\t\t\t\t\t<template ngFor let-otherWheel [ngForOf]=\"recommendCorp.wheels\" let-wheelsIndex=\"index\" >\n\t\t\t\t\t\t \t\t\t\t\t\t<template [ngIf]=\"wheelsIndex < 3\">\n\t\t\t\t\t\t \t\t\t\t            <div class=\"col-xs-6 col-md-4 col-lg-4 non-padding-left-right\">\n\t\t\t\t\t\t \t\t\t\t                <div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6 front-label-12\" >\n\t\t\t\t\t\t \t\t\t\t            \t\t\tMaterial\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<mark>{{otherWheel.material}}</mark>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            \t<div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6 front-label-12\" >\n\t\t\t\t\t\t \t\t\t\t            \t\t\tWheel Hub Diameter\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<mark>{{otherWheel.wheelHubDiameter}}</mark>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            \t<div class=\"row\" style=\"padding-left:5px\">\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6 front-label-12\" >\n\t\t\t\t\t\t \t\t\t\t            \t\t\tPCD\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t \t\t\t\t            \t\t\t<mark>{{otherWheel.pcd}}</mark>\n\t\t\t\t\t\t \t\t\t\t            \t\t</div>\n\t\t\t\t\t\t \t\t\t\t            \t</div>\n\t\t\t\t\t\t \t\t\t\t            </div>\n\t\t\t\t\t\t \t\t\t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t\t\t</template>\n\t\t\t\t\t\t \t\t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t\t\t<hr/>\n\t\t\t\t\t\t \t\t\t\t</div>\n\t\t\t\t\t\t \t\t\t</div>    \n\t\t\t\t\t\t \t\t\t</template>\n\t\t\t\t\t\t \t\t</div>                    \n\t\t\t\t\t\t \t\t<!-- end : main content -->\n\t\t\t\t\t\t    </div>\n            \n\t\t\t\t\t\t</div>\t\n  \t\t\t\t\t</div>\t\t\n\n\t\t    \t\t<div class=\"modal-footer\">\n\t\t    \t\t    <div style=\"float:left\">\n\t\t    \t\t        Contact us : \n\t\t    \t\t        <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i> 0086-21-6888 6117 EX: 237 \n\t\t    \t\t        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>&nbsp;<a href=\"mailto:xujing@zhongzhou.net&subject=Inquiry\">xujing@zhongzhou.net</a>\n\t\t    \t\t    </div>\n\t\t    \t\t    \n\t\t    \t   \t    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t    \t    \t    Close\n\t\t    \t   \t    </button>\n\t\t    \t\t</div>\n\t\t  \t\t</div><!-- /.modal-content -->\n\t\t    </div>     \n    \t</div><!--end : model window-->  \n    \t<item-detail-modal></item-detail-modal>\n    \t<corporation-detail-modal></corporation-detail-modal>\n    \t<corporation-evaluation-detail-modal></corporation-evaluation-detail-modal>\n\t\t"
        }), 
        __metadata('design:paramtypes', [recommend_service_1.RecommendService, corporation_service_1.CorporationService])
    ], InquiryRecommendSupplierFirstComponent);
    return InquiryRecommendSupplierFirstComponent;
}());
exports.InquiryRecommendSupplierFirstComponent = InquiryRecommendSupplierFirstComponent;
//# sourceMappingURL=inquiry.recommend.supplierfirst.component.js.map