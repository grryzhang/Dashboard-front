/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/Velocity.js/velocity.d.ts" />
/// <reference path="../../../resources/icheck.js/icheck.d.ts" />
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
var inquiry_recommend_supplierfirst_component_1 = require('./inquiry.recommend.supplierfirst.component');
var recommend_service_1 = require('../../service/inquiry/recommend.service');
var recommend_1 = require('../../model/recommend');
var InquiryRecommendMain = (function () {
    function InquiryRecommendMain(recommendService) {
        this.recommendService = recommendService;
        this.indexCreateParameter = {};
        this.newInquiryingList = [];
        this.completeInquiryingList = [];
        this.newInquiryingListDropdownStatus = { isopen: false };
    }
    InquiryRecommendMain.prototype.ngOnInit = function () {
        requirejs(['jquery', 'icheck', 'css!./icheck.js/skins/flat/blue'], function ($, ICheck) {
            $('input.i-check').iCheck({
                checkboxClass: 'icheckbox_flat-blue',
                radioClass: 'iradio_flat-blue'
            });
            /*
            $("input.i-check[id!='r_i_c_h_all']").on('ifChecked', function( event : any ){
                event = event ? event : window.event;
                var obj = event.srcElement ? event.srcElement : event.target;
                alert( obj.value );
            });
            */
            $("input.i-check[id='r_i_c_h_all']").on('ifChecked', function (event) {
                $("input.i-check[id='r_i_c_h_a']").iCheck('check');
            });
            $("input.i-check[id='r_i_c_h_all']").on('ifUnchecked', function (event) {
                $("input.i-check[id='r_i_c_h_a']").iCheck('uncheck');
            });
        });
    };
    InquiryRecommendMain.prototype.showSupplierFirstSearch = function (indexId, event) {
        event.stopPropagation();
        $('#inquiry-recommend-supplierfisrt-modal').modal();
        this.supplierFirstModal.getRecommendSuppliers(indexId);
    };
    InquiryRecommendMain.prototype.newRecommend = function (event) {
        var _this = this;
        var thisComponent = this;
        this.indexCreateParameter = { "PCD": [], "hubDiameter": [], "material": [] };
        $("input.i-check[id='recommend.index.createform.material']").each(function (index, element) {
            if ($(element).prop("checked")) {
                if (element.value != null) {
                    var temp = element.value.replace(/\s*/g, "");
                    var materials = temp.split(",");
                    for (var i = 0, len = materials.length; i < len; i++) {
                        thisComponent.indexCreateParameter.material.push(materials[i]);
                    }
                }
            }
        });
        $("input.i-check[id='r_i_c_h_a']").each(function (index, element) {
            if ($(element).prop("checked")) {
                thisComponent.indexCreateParameter.hubDiameter.push(element.value);
            }
        });
        $("input[id='c_r_i_c_h']").each(function (index, element) {
            thisComponent.indexCreateParameter.hubDiameter.push(element.value);
        });
        $("input[id='r_i_c_pcd']").each(function (index, element) {
            if (element.value != null) {
                var temp = element.value.replace(/\s*/g, "");
                var PCDs = temp.split(",");
                for (var i = 0, len = PCDs.length; i < len; i++) {
                    thisComponent.indexCreateParameter.PCD.push(PCDs[i]);
                }
            }
        });
        this.recommendService.newRecommendIndex(this.indexCreateParameter).subscribe(function (reponseData) {
            _this.newRecommendIndexId = reponseData.data.indexId;
            var inquiryingAhref = $("#inquiry-recommend-inquirying-ahref");
            var target = $(event.target);
            if (inquiryingAhref && target) {
                var curleft = inquiryingAhref.offset().left;
                var curtop = inquiryingAhref.offset().top + inquiryingAhref.outerHeight();
                var targetLeft = target.offset().left;
                var targetTop = target.offset().top + target.outerHeight();
                var moveX_1 = curleft - targetLeft;
                var moveY_1 = curtop - targetTop;
                requirejs(['jquery', 'velocity'], function ($, Velocity) {
                    $("#inquiry-recommend-animation-search-button").velocity({ translateX: moveX_1, translateY: (moveY_1 - 30), scale: 0.0 }, {
                        duration: 800, display: "table",
                        begin: function () {
                            thisComponent.newInquiryingListDropdownStatus.isopen = true;
                        },
                        complete: function () {
                            var newRecommend = new recommend_1.RecommendIndex();
                            newRecommend.indexCondition = JSON.stringify(thisComponent.indexCreateParameter);
                            newRecommend.indexId = reponseData.data.indexId;
                            thisComponent.newInquiryingList.push(newRecommend);
                            var intervalInquiryRunningIndexStatus = function () {
                                return thisComponent.intervalInquiryRunningIndexStatus();
                            };
                            if (thisComponent.indexRunningInterval == null) {
                                thisComponent.indexRunningInterval = setInterval(intervalInquiryRunningIndexStatus, 4000);
                            }
                        }
                    }).velocity({ translateX: 0, translateY: 0, scale: 1 }, { duration: 10, display: "none" });
                });
            }
        }, function (error) { _this.errorMessage = error; });
    };
    InquiryRecommendMain.prototype.intervalInquiryRunningIndexStatus = function () {
        var _this = this;
        var thisComponent = this;
        var indexIds = [];
        if (thisComponent.newInquiryingList) {
            for (var i = 0; i < thisComponent.newInquiryingList.length; i++) {
                indexIds.push(thisComponent.newInquiryingList[i].indexId);
            }
        }
        if (indexIds.length > 0) {
            this.recommendService.queryRecommendList({ "indexIds": indexIds }).subscribe(function (reponseData) {
                var finished = reponseData.data;
                if (finished) {
                    for (var i = 0; i < finished.length; i++) {
                        if (finished[i].indexId) {
                            for (var j = 0; j < thisComponent.newInquiryingList.length; j++) {
                                if (finished[i].indexId == thisComponent.newInquiryingList[j].indexId) {
                                    thisComponent.completeInquiryingList.push(thisComponent.newInquiryingList[j]);
                                    thisComponent.newInquiryingList.splice(j, 1);
                                    j--;
                                }
                            }
                        }
                    }
                }
                if (thisComponent.newInquiryingList.length <= 0) {
                    clearInterval(thisComponent.indexRunningInterval);
                    thisComponent.indexRunningInterval = null;
                }
            }, function (error) { _this.errorMessage = error; });
        }
    };
    InquiryRecommendMain.prototype.newInquiryingListDropdownToggled = function (open) {
        var thisComponent = this;
        thisComponent.newInquiryingListDropdownStatus.isopen = open;
    };
    InquiryRecommendMain.prototype.moveInquiryRecommendConditionDiv = function () {
        $("div.inquiry-recommend-condition-title-vertical-center").each(function (index, element) {
            var _this = this;
            requirejs(['jquery', 'velocity'], function ($, Velocity) {
                $(_this).velocity({ translateX: "-50%", translateY: "-50%" }, { duration: 10 }).velocity({ top: 50, translateX: "-50%", scale: 0.9 }, { duration: 1000 });
            });
            //$(this).addClass("inquiry-recommend-condition-div-move");
            //$(this).css("transform", "translate( -50% , -150px ) scale( 0.7, 0.7 )");
        });
        $("#inquiry-recommend-condition-title-container").each(function (index, element) {
            var _this = this;
            requirejs(['jquery', 'velocity'], function ($, Velocity) {
                $(_this).velocity({ "min-height": 100 }, { duration: 1000 });
            });
        });
        requirejs(['jquery', 'velocity'], function ($, Velocity) {
            $("#inquiry-recommend-condition-container").velocity("fadeIn", { duration: 1000, display: "table" });
        });
    };
    __decorate([
        core_1.ViewChild(inquiry_recommend_supplierfirst_component_1.InquiryRecommendSupplierFirstComponent), 
        __metadata('design:type', inquiry_recommend_supplierfirst_component_1.InquiryRecommendSupplierFirstComponent)
    ], InquiryRecommendMain.prototype, "supplierFirstModal", void 0);
    InquiryRecommendMain = __decorate([
        core_1.Component({
            selector: 'router-anchor',
            template: "    \n  \t\t\t<div id=\"inquiry-recommend-condition-title-container\" style=\"min-width:400px;min-height:300px;position:relative;\">\n  \t\t\t\t\n  \t\t\t\t<div class=\"container\">\n  \t\t\t\t\t<div class=\"row\">\n    \t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-lg-12\">\n    \t\t\t\t\t\t<a routerLink=\"/inquiryRecommend/supplierFirstIndexList\" href=\"javascript:;\">\n    \t\t\t\t\t\t\t<i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i>\n    \t\t\t\t\t\t\t<span>Previous Inquiries</span>\n    \t\t\t\t\t\t</a>\n    \t\t\t\t\t\t<a id=\"inquiry-recommend-inquirying-ahref\" routerLink=\"/inquiryRecommend/supplierFirstIndexList\" href=\"javascript:;\">\n    \t\t\t\t\t\t\t<i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n    \t\t\t\t\t\t\t<span dropdown [isOpen]=\"newInquiryingListDropdownStatus.isopen\" (onToggle)=\"newInquiryingListDropdownToggled($event)\">\n                                    <a href=\"javascript:;\" id=\"new-inquirying-list\" dropdownToggle>\n                                        Running Inquiries\n                                    </a>\n                                    <ul class=\"dropdown-menu\" dropdownMenu aria-labelledby=\"new-inquirying-list\">\n                                        <template ngFor let-newRecommendIndex [ngForOf]=\"newInquiryingList\" let-numberIndex=\"index\" >\n                                        <li role=\"menuitem\" >\n                                            <a href=\"javascript:;\" class=\"dropdown-item\">Running : {{newRecommendIndex?.indexCondition | indexConditionFormat }}</a>\n                                        </li>\n                                        </template>\n                                        <hr/>\n                                        <template ngFor let-completeRecommendIndex [ngForOf]=\"completeInquiryingList\">\n                                        <li role=\"menuitem\" >\n                                            <a (click)=\"showSupplierFirstSearch( completeRecommendIndex.indexId , $event )\" class=\"dropdown-item bg-green\" href=\"javascript:;\">\n                                                Complete : {{completeRecommendIndex?.indexCondition | indexConditionFormat }}\n                                            </a>\n                                        </li>\n                                        </template>\n                                    </ul>\n                                </span>\t\n    \t\t\t\t\t\t\t<span class=\"badge badge-success\">\n    \t\t\t\t\t\t\t    {{newInquiryingList?.length}}\n    \t\t\t\t\t\t\t</span>\n    \t\t\t\t\t\t\t<span class=\"badge badge-success bg-green\">\n    \t\t\t\t\t\t\t    {{completeInquiryingList?.length}}\n    \t\t\t\t\t\t\t</span>\n    \t\t\t\t\t\t</a>\t\n    \t\t\t\t\t\t\n    \t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t\n  \t\t\t\t<div class=\"container-fluid inquiry-recommend-condition-title-vertical-center\" (click)=\"moveInquiryRecommendConditionDiv();\"><!--/container start-->\n    \t\t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-lg-12\">\n    \t\t\t\t\t\t<ul class=\"nav nav-pills\" role=\"tablist\">\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Wheel           </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Tire            </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Tools           </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Electronics     </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Trailer Parts   </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>RV Accessories  </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Decorations     </h4></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h4>Others          </h4></a></li>\n\t\t\t\t\t\t\t</ul>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t</div><!--/container-->\n  \t\t\t</div>\n  \t\t\t\n  \t\t\t\n  \t\t\t\n  \t\t\t<div id=\"inquiry-recommend-condition-container\" class=\"container\" style=\"display:none\" ><!--/container start-->\n  \t\t\t\t\n    \t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-8\">\n    \t\t\t\t\t<div class=\"white-panel\" style=\"border:none;\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\"><!--/row-search-bar start-->\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4 col-xs-offset-8  col-md-2 col-md-offset-10\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"newRecommend( $event );\">Search</button>\n\t\t\t\t\t\t\t\t\t<div id=\"inquiry-recommend-animation-search-button\" style=\"display:none;position:absolute;\">\n\t\t\t\t\t\t\t\t\t    <template [ngIf]=\"newRecommendIndexId != null\">\n\t\t\t\t\t\t\t\t\t        {{newRecommendIndexId}}\n\t\t\t\t\t\t\t\t\t    </template>\n\t\t\t\t\t\t\t\t\t    <template [ngIf]=\"newRecommendIndexId == null\">\n\t\t\t\t\t\t\t\t\t        Inquirying\n\t\t\t\t\t\t\t\t\t    </template>\n\t\t\t                        </div>\n\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<form>\n  \t\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tMaterial\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-11\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"recommend.index.createform.material\" type=\"checkbox\" value=\"steel,iron\"     >Steel   </label>\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"recommend.index.createform.material\" type=\"checkbox\" value=\"aluminum,alloy\" >Aluminum</label> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tWheel Hub Diameter\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-11\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t    <!--  r_i_c_h_a : recommend.index.createform.hubDiameter.one  r_i_c_h_all  recommend.index.createform.hubDiameter.all-->\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"14\"/> 14\"</label>\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"15\"/> 15\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"16\"/> 16\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"17\"/> 17\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"18\"/> 18\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"19\"/> 19\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_all\" type=\"checkbox\" /> All</label> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t        <input type=\"text\" class=\"form-control\" id=\"c_r_i_c_h\" placeholder=\"Hub Diameter Manual\" />\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tPCD\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t    <!--  r_i_c_pcd : recommend.index.createform.PCD -->\n                                            <input type=\"text\" class=\"form-control\" id=\"r_i_c_pcd\" placeholder=\"PCD\" />\n                                        </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t</div>\n    \t\t</div><!--/container-->\n\n    \t\t<!-- end:new-recommend-result-modal  -->\n    \t\t<inquiry-recommend-supplierfisrt-modal></inquiry-recommend-supplierfisrt-modal>\n    \t\t\n    \t\t<style> \n\t\t\t\t.inquiry-recommend-condition-title-vertical-center{                  \n\t\t\t\t   \tposition: absolute;    \n\t\t\t\t  \ttop  : 50%;\n\t\t\t\t \tleft : 50%;                                                   \n\t\t\t\t  \ttransform: translate(-50%,-50%);\n\t\t\t\t}     \t\t\n\t\t\t\t    \t\t\n\t\t\t\t.inquiry-recommend-condition-div-move{\n\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\tanimation:move 1s;\n\t\t\t\t-webkit-animation:condition-div-shrink 1s; /*Safari and Chrome*/\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@keyframes condition-div-shrink\n\t\t\t\t{\n\t\t\t\t \tfrom{transform: translate(-50% , -50%) scale( 1 , 1 ) } \n\t\t\t\t \tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 ) } \n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@-webkit-keyframes condition-div-shrink /*Safari and Chrome*/\n\t\t\t\t{\n\t\t\t\t\tfrom{transform: translate(-50% , -50%) scale( 1 , 1 )} \n\t\t\t\t\tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 )} \n\t\t\t\t}\n    \t\t</style> \n\t\t"
        }), 
        __metadata('design:paramtypes', [recommend_service_1.RecommendService])
    ], InquiryRecommendMain);
    return InquiryRecommendMain;
}());
exports.InquiryRecommendMain = InquiryRecommendMain;
//# sourceMappingURL=inquiry.recommend.main.component.js.map