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
var order_service_1 = require('../../service/order/order.service');
var saleOrder_state_detail_modal_component_1 = require('./saleOrder.state.detail.modal.component');
var OrderStateComponent = (function () {
    function OrderStateComponent(orderService) {
        this.orderService = orderService;
        this.total = 0;
        this.currentPage = 1;
    }
    OrderStateComponent.prototype.ngOnInit = function () {
        this.getSaleOrderState(null);
    };
    OrderStateComponent.prototype.createTreeGride = function () {
        requirejs(['treegrid/jquery.treegrid', 'css!./maxazan-jquery-treegrid/css/jquery.treegrid'], function (Treegrid) {
            $("#order_status_tree_table").treegrid({ 'initialState': 'collapsed' });
        });
    };
    OrderStateComponent.prototype.createPagenation = function () {
        var _this = this;
        requirejs(['twbsPagination'], function () {
            $('#item-detail-pagination').twbsPagination({
                totalPages: Math.ceil(_this.total / 20),
                total: _this.total,
                visiblePages: 7,
                "first": "<<",
                "prev": "<",
                "next": ">",
                "last": ">>",
                "initiateStartPageClick": false,
                "onPageClick": function (event, page) {
                    var searchParameters = {};
                    if (_this.searchParameters) {
                        searchParameters = JSON.parse(JSON.stringify(_this.searchParameters));
                    }
                    searchParameters.start = (page - 1) * 20;
                    searchParameters.limit = 20;
                    _this.getSaleOrderState(searchParameters);
                }
            });
            $('#item-detail-pagination-blow').twbsPagination({
                totalPages: Math.ceil(_this.total / 20),
                total: _this.total,
                visiblePages: 7,
                "first": "<<",
                "prev": "<",
                "next": ">",
                "last": ">>",
                "initiateStartPageClick": false,
                "onPageClick": function (event, page) {
                    var searchParameters = {};
                    if (_this.searchParameters) {
                        searchParameters = JSON.parse(JSON.stringify(_this.searchParameters));
                    }
                    searchParameters.start = (page - 1) * 20;
                    searchParameters.limit = 20;
                    _this.getSaleOrderState(searchParameters);
                }
            });
        });
    };
    OrderStateComponent.prototype.clearAndSearch = function () {
        $("#orderFuzzyInput").val("");
        this.getSaleOrderState({});
    };
    OrderStateComponent.prototype.getSaleOrderState = function (searchParameters) {
        var _this = this;
        this.searchParameters = searchParameters;
        this.orderService.querySaleOrderState(searchParameters).subscribe(function (reponseData) {
            _this.saleOrderStates = reponseData.data;
            _this.total = reponseData.totalResult;
            _this.formateSaleOrderStatesForDisplay();
            _this.createTreeGride();
            _this.createPagenation();
        }, function (error) { return _this.errorMessage = error; });
    };
    OrderStateComponent.prototype.formateSaleOrderStatesForDisplay = function () {
        var i = 0;
        this.formatedsaleOrderStates = [];
        for (var _i = 0, _a = this.saleOrderStates; _i < _a.length; _i++) {
            var saleOrderState = _a[_i];
            saleOrderState.isLeaf = false;
            saleOrderState.htmlClass = {};
            saleOrderState.htmlClass["treegrid-" + i] = true;
            this.formatedsaleOrderStates[i] = saleOrderState;
            this.formatedsaleOrderStates[i].id = "treegrid-" + i;
            var parentIndex = i;
            i++;
            var orderSates = [];
            if (saleOrderState.items) {
                for (var _b = 0, _c = saleOrderState.items; _b < _c.length; _b++) {
                    var saleOrderItemState = _c[_b];
                    if (saleOrderItemState) {
                        this.formatedsaleOrderStates[i] = saleOrderItemState;
                        /*start - set state and class*/
                        this.formatedsaleOrderStates[i].state = { "desc": null, "class": { "fa": true } };
                        saleOrderItemState.state.desc = "Checking";
                        var stateClass = "fa-cogs";
                        if (saleOrderItemState.forecastDeliveryTime && saleOrderItemState.forecastDeliveryTime.length > 0) {
                            saleOrderItemState.state.desc = 'In Production';
                            stateClass = "fontello-icon-industry";
                        }
                        if (saleOrderItemState.productionEndTime && saleOrderItemState.productionEndTime.length > 0) {
                            saleOrderItemState.state.desc = "Quality Inspection";
                            stateClass = "fa-user-md";
                        }
                        if (saleOrderItemState.freightInfos && Array.isArray(saleOrderItemState.freightInfos)) {
                            for (var _d = 0, _e = saleOrderItemState.freightInfos; _d < _e.length; _d++) {
                                var freightInfo = _e[_d];
                                if (freightInfo.invoiceDate && freightInfo.invoiceDate.length > 0) {
                                    saleOrderItemState.state.desc = "Booking";
                                    stateClass = "fontello-icon-edit";
                                }
                                if (freightInfo.estimatedTimeofDelivery && freightInfo.estimatedTimeofDelivery.length > 0) {
                                    saleOrderItemState.state.desc = "In Transport";
                                    stateClass = "fontello-icon-ship";
                                }
                                if (saleOrderItemState.state && saleOrderItemState.state.length > 0) {
                                    break;
                                }
                            }
                        }
                        this.formatedsaleOrderStates[i].state.class[stateClass] = true;
                        var hasState = false;
                        for (var _f = 0, orderSates_1 = orderSates; _f < orderSates_1.length; _f++) {
                            var o = orderSates_1[_f];
                            if (o && o.class[stateClass] == true) {
                                hasState = true;
                                break;
                            }
                        }
                        if (!hasState) {
                            orderSates[orderSates.length] = this.formatedsaleOrderStates[i].state;
                        }
                        /*end - set state and class*/
                        saleOrderItemState.isLeaf = true;
                        saleOrderItemState.htmlClass = {};
                        saleOrderItemState.htmlClass["treegrid-" + i] = true;
                        saleOrderItemState.htmlClass["treegrid-parent-" + parentIndex] = true;
                        i++;
                    }
                }
            }
            /* start - attach item state class to order level */
            this.formatedsaleOrderStates[parentIndex].states = orderSates;
        }
        this.linkChanged();
    };
    OrderStateComponent.prototype.linkChanged = function () {
        for (var _i = 0, _a = this.saleOrderStates; _i < _a.length; _i++) {
            var saleOrderState = _a[_i];
            if (saleOrderState && saleOrderState.changed) {
                for (var _b = 0, _c = saleOrderState.changed; _b < _c.length; _b++) {
                    var change = _c[_b];
                    var propertyPath = "saleOrderState." + change.substring(0, change.indexOf(":"));
                    var propertyChange = change.substring(change.indexOf(":") + 1, change.length);
                    //console.log( propertyPath );
                    //console.log( propertyChange );
                    if (propertyChange == "{new}") {
                        if (propertyPath.slice(-"]".length) == "]") {
                            eval(propertyPath + ".isNew=true");
                        }
                    }
                    else if (propertyChange == "{remove}") {
                    }
                    else if (eval(propertyPath)) {
                        eval(propertyPath + "Changed=" + propertyChange);
                        //console.log( eval( propertyPath + "Changed" ) );
                        if (propertyPath.indexOf("[") > 0) {
                            var indexPath = propertyPath.substring(0, propertyPath.lastIndexOf("."));
                            eval(indexPath + ".isChanged = true");
                        }
                    }
                }
            }
        }
    };
    OrderStateComponent.prototype.itemStateClick = function (event, orderState, itemState) {
        event.stopPropagation();
        this.showItemStateDetail(orderState, itemState);
    };
    OrderStateComponent.prototype.orderClick = function (event, orderState) {
        event.stopPropagation();
        var node = $("#" + orderState.id);
        if (node && node.treegrid("isNode")) {
            if (node.treegrid("isExpanded")) {
                node.treegrid("collapse");
            }
            else {
                node.treegrid("expand");
            }
        }
    };
    OrderStateComponent.prototype.showItemStateDetail = function (orderState, itemState) {
        this.itemDetailComponent.setStateDate(orderState, itemState);
        $('#sale-order-state-detail-modal').modal();
        //this.itemDetailClickEvent.emit( { 'test' : 'test' } )
    };
    __decorate([
        core_1.ViewChild(saleOrder_state_detail_modal_component_1.SaleOrderStateDetailModalComponents), 
        __metadata('design:type', saleOrder_state_detail_modal_component_1.SaleOrderStateDetailModalComponents)
    ], OrderStateComponent.prototype, "itemDetailComponent", void 0);
    OrderStateComponent = __decorate([
        core_1.Component({
            selector: 'router-anchor',
            template: "    \n  \t\t\t<div class=\"container\"><!--/container start-->\n  \t\t\t\t<div class=\"row-fluid row-offcanvas row-offcanvas-right\">\n    \t\t  \t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t  \t\t\t<div class=\"col-xs-12 col-sm-8 col-lg-4\">\n    \t\t  \t\t\t\t<form>\n    \t\t  \t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"orderFuzzyInput\" placeholder=\"Order Search\" #sale_order_states_searchParameters />\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button \n    \t\t            \t\t\t\t\tclass=\"btn btn-default\" \n    \t\t            \t\t\t\t\ttype=\"button\" \n    \t\t            \t\t\t\t\t(click)=\"getSaleOrderState( { 'fuzzy' : sale_order_states_searchParameters.value } );\">\n    \t\t            \t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n    \t\t           \t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"clearAndSearch();\">\n    \t\t            \t\t\t\t\t<span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n    \t\t  \t\t\t</div>\n    \t\t  \t\t</div><!--/row-search-end start-->\n    \t\t  \t\t\n    \t\t  \t\t<div class=\"row\"><!--start : Pagination:row start-->\n    \t\t\t  \t\t<div class=\"col-xs-12 col-lg-12\">\n    \t\t\t  \t\t    <nav>    \n\t\t\t\t\t\t\t\t<div>                                                                \n\t\t\t\t\t\t\t    \t<ul id=\"item-detail-pagination\" class=\"pagination-sm non-padding-top-bottom pull-right\">\n\t\t\t\t\t\t\t    \t\t<li class=\"disabled\">\n\t\t\t\t\t\t\t      \t\t\t<a href=\"#\">Total:{{total}}</a>\n\t\t\t\t\t\t\t      \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</nav>\n    \t\t\t  \t\t</div>\n    \t\t\t  \t</div> <!--end : Pagination:row start-->  \n    \t\t  \t\t\n    \t\t  \t\t<div class=\"row\"><!--/row-1 start-->\n \t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n \t\t\t\t\t\t\t<div class=\"table-responsive\">\n \t\t\t\t\t\t\t\t<table class=\"table table-hover tree\" id=\"order_status_tree_table\">\n \t\t\t\t\t\t\t\t\t<thead>\n \t\t\t\t\t\t\t\t\t\t<tr>\n    \t\t\t\t\t\t\t\t  \t  \t<th>PO NO.</th>\n    \t\t\t\t\t\t\t\t    \t<th>Order Status</th>\n    \t\t\t\t\t\t\t\t    \t<th>Order Date</th>\n    \t\t\t\t\t\t\t\t    \t<th>Incoterm</th>\n    \t\t\t\t\t\t\t\t    \t<th>Customer</th>\n    \t\t\t\t\t\t\t\t    \t<th>Buyer</th>\n    \t\t\t\t\t\t\t\t    \t<th>PR Service</th>\n    \t\t\t\t\t\t\t\t    \t<th>Last Update</th>\n    \t\t\t\t\t\t\t\t  \t</tr>\n    \t\t\t\t\t\t\t\t</thead>\n    \t\t\t\t\t\t\t\t<tbody>\n    \t\t\t\t\t\t\t\t\t<template ngFor let-orderState [ngForOf]=\"formatedsaleOrderStates\" let-i=\"index\" > \n    \t\t\t\t\t\t\t\t\t\t<tr id={{orderState.id}} *ngIf=\"!orderState.isLeaf\" [ngClass]=\"orderState.htmlClass\" \n    \t\t\t\t\t\t\t\t\t\t\t[class.warning]=\"orderState.changed && orderState.changed.length > 0\"\n    \t\t\t\t\t\t\t\t\t\t\t(click)=\"orderClick( $event, orderState )\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.customerOrderId}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td td-type=\"orderState\">\n    \t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let state of orderState.states\" \n    \t\t\t\t\t\t\t\t\t\t\t\t\t[tooltip]=\"state.desc\" #tooltip=\"bs-tooltip\" \n    \t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"state.class\">\n    \t\t\t\t\t\t\t\t\t\t\t\t</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.orderTime}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.tradeTerm}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.customerName}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.customerBuyer}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.businessUser}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<span>{{orderState?.lastUpdateTime}}</span>\n    \t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t\t\t\t<template [ngIf]=\"orderState.items && orderState.items.length>0 \">\n    \t\t\t\t\t\t\t\t\t\t\t<tr [ngClass]=\"orderState.items[0].htmlClass\">\n    \t\t\t\t\t\t\t\t\t\t\t\t<td></td>\n    \t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-striped table-condensed\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Item State</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t  \t<th>Item No.</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t  \t<th>Name</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<th>Unit Price</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<th>Cost Price</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<th>Total Number</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<th>Unit</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t<th>Total Price</th>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t</tr>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t<tr *ngFor=\"let orderItemState of orderState.items\" \n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t[class.warning]=\"orderItemState.isChanged\"\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t(click)=\"itemStateClick( $event, orderState, orderItemState )\">\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t\t<span [tooltip]=\"orderItemState.state.desc\" #tooltip=\"bs-tooltip\" [ngClass]=\"orderItemState.state.class\"></span>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.type}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.name}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.unitPrice}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td></td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.totalNumber}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.unit}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t<td>{{orderItemState?.totalPrice}}</td>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t</tr>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n    \t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n    \t\t\t\t\t\t\t\t\t\t\t\t</td>\n    \t\t\t\t\t\t\t\t\t\t\t</tr>\n    \t\t\t\t\t\t\t\t\t\t</template>\t\n    \t\t\t\t\t\t\t\t\t</template>\n    \t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>   \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div><!--row-1 end-->\n\t\t\t\t</div>\n    \t\t</div><!--/container-->\n    \t\t<sale-order-state-detail-modal></sale-order-state-detail-modal>\n\t\t",
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService])
    ], OrderStateComponent);
    return OrderStateComponent;
}());
exports.OrderStateComponent = OrderStateComponent;
//# sourceMappingURL=order.state.component.js.map