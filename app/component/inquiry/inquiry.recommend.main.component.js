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
var recommend_service_1 = require('../../service/inquiry/recommend.service');
var InquiryRecommendMain = (function () {
    function InquiryRecommendMain(recommendService) {
        this.recommendService = recommendService;
        this.requiringNumber = 0;
        this.indexCreateParameter = {};
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
    InquiryRecommendMain.prototype.showSupplierFirstSearch = function (event) {
        event.stopPropagation();
        $('#inquiry-recommend-supplierfisrt-modal').modal();
    };
    InquiryRecommendMain.prototype.newRecommend = function () {
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
            _this.requiringNumber++;
            $('#new-recommend-result-modal').modal();
        }, function (error) { _this.errorMessage = error; });
    };
    InquiryRecommendMain.prototype.moveInquiryRecommendConditionDiv = function () {
        $("div.inquiry-recommend-condition-title-vertical-center").each(function (index, element) {
            var _this = this;
            requirejs(['jquery', 'velocity'], function ($, Velocity) {
                $(_this).velocity({ translateX: "-50%", translateY: "-50%" }, { duration: 10 }).velocity({ top: 30, translateX: "-50%", scale: 0.7 }, { duration: 1000 });
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
    InquiryRecommendMain = __decorate([
        core_1.Component({
            selector: 'router-anchor',
            template: "    \n  \t\t\t<div id=\"inquiry-recommend-condition-title-container\" style=\"min-width:400px;min-height:300px;position:relative;\">\n  \t\t\t\t\n  \t\t\t\t<div class=\"container\">\n  \t\t\t\t\t<div class=\"row\">\n    \t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-lg-12\">\n    \t\t\t\t\t\t<a routerLink=\"/inquiryRecommend/supplierFirstIndexList\" href=\"javascript:;\">\n    \t\t\t\t\t\t\t<i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i>\n    \t\t\t\t\t\t\t<span>Inquiry Result</span>\n    \t\t\t\t\t\t\t<span class=\"badge badge-success\">2</span>\n    \t\t\t\t\t\t</a>\n    \t\t\t\t\t\t<a routerLink=\"/inquiryRecommend/supplierFirstIndexList\" href=\"javascript:;\">\n    \t\t\t\t\t\t\t<i class=\"fa fa-spinner\" aria-hidden=\"true\"></i>\n    \t\t\t\t\t\t\t<span>Inquirying</span>\n    \t\t\t\t\t\t\t<span class=\"badge badge-success\">\n    \t\t\t\t\t\t\t    {{requiringNumber}}\n    \t\t\t\t\t\t\t</span>\n    \t\t\t\t\t\t</a>\n    \t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t\n  \t\t\t\t<div class=\"container-fluid inquiry-recommend-condition-title-vertical-center\" (click)=\"moveInquiryRecommendConditionDiv();\"><!--/container start-->\n    \t\t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-lg-12\">\n    \t\t\t\t\t\t<ul class=\"nav nav-pills\" role=\"tablist\">\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h3>Wheel</h3></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a class=\"just-left-border\"><h3>Tire</h3></a></li>\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a class=\"just-left-border\"><h3>Tools</h3></a></li>\n\t\t\t\t\t\t\t</ul>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t</div><!--/container-->\n  \t\t\t</div>\n  \t\t\t<div id=\"inquiry-recommend-condition-container\" class=\"container\" style=\"display:none\" ><!--/container start-->\n  \t\t\t\t\n    \t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-8\">\n    \t\t\t\t\t<div class=\"white-panel\" style=\"border:none;\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\"><!--/row-search-bar start-->\n\t\t\t\t\t\t\t\t<div class=\"col-xs-4 col-xs-offset-8  col-md-2 col-md-offset-10\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"newRecommend();\">Search</button>\n\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t<form>\n  \t\t\t\t\t\t\t    <div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tMaterial\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-11\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"recommend.index.createform.material\" type=\"checkbox\" value=\"steel,iron\"     >Steel   </label>\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"recommend.index.createform.material\" type=\"checkbox\" value=\"aluminum,alloy\" >Aluminum</label> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tWheel Hub Diameter\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-11\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t    <!--  r_i_c_h_a : recommend.index.createform.hubDiameter.one  r_i_c_h_all  recommend.index.createform.hubDiameter.all-->\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"14\"/> 14\"</label>\n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"15\"/> 15\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"16\"/> 16\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"17\"/> 17\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"18\"/> 18\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_a\" type=\"checkbox\" value=\"19\"/> 19\"</label> \n\t\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input class=\"i-check\" id=\"r_i_c_h_all\" type=\"checkbox\" /> All</label> \n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t\t\tPCD\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t    <!--  r_i_c_pcd : recommend.index.createform.PCD -->\n                                            <input type=\"text\" class=\"form-control\" id=\"r_i_c_pcd\" placeholder=\"PCD\" />\n                                        </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t</div>\n    \t\t</div><!--/container-->\n    \t\t\n    \t\t<!-- start:new-recommend-result-modal  -->\n    \t\t<div class=\"modal fade\" id=\"new-recommend-result-modal\" role=\"dialog\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog modal-width-normal\">\n\t\t\t\t<!-- start modal-content -->\n\t\t    \t<div class=\"modal-content\">\n\t\t      \t    <div class=\"modal-header\">\n\t\t      \t\t    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t      \t\t        &times;\n\t\t      \t\t    </button>\n\t\t      \t\t    <h4 class=\"modal-title\" id=\"inquire-status-modal-ModalLabel\">New Recommed Inquiry in Running</h4>\n\t\t      \t\t    <span class=\"front-label-12\">Criteria <i class=\"fa fa-filter\" aria-hidden=\"true\"></i> Wheel Hub Diameter : 17, 18</span>\n\t\t   \t\t\t</div>\n\t\t            <div class=\"modal-body modal-active-scroll\">\n\t\t                The recommend index ID is : <strong>{{newRecommendIndexId}}</strong>\n\t\t                <p>It's in running now, please wait for some time and check it in the \"Inquiry Result\".\n  \t\t\t\t\t</div>\t\t\n            \n\t\t    \t\t<div class=\"modal-footer\">\n\t\t    \t   \t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t    \t    \tClose\n\t\t    \t   \t</button>\n\t\t    \t\t</div>\n\t\t  \t\t</div><!-- /.modal-content -->\n\t\t    </div>\n    \t\t<!-- end:new-recommend-result-modal  -->\n    \t\t<inquiry-recommend-supplierfisrt-modal></inquiry-recommend-supplierfisrt-modal>\n    \t\t\n    \t\t<style> \n\t\t\t\t.inquiry-recommend-condition-title-vertical-center{                  \n\t\t\t\t   \tposition: absolute;    \n\t\t\t\t  \ttop  : 50%;\n\t\t\t\t \tleft : 50%;                                                   \n\t\t\t\t  \ttransform: translate(-50%,-50%);\n\t\t\t\t}     \t\t\n\t\t\t\t    \t\t\n\t\t\t\t.inquiry-recommend-condition-div-move{\n\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\tanimation:move 1s;\n\t\t\t\t-webkit-animation:condition-div-shrink 1s; /*Safari and Chrome*/\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@keyframes condition-div-shrink\n\t\t\t\t{\n\t\t\t\t \tfrom{transform: translate(-50% , -50%) scale( 1 , 1 ) } \n\t\t\t\t \tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 ) } \n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@-webkit-keyframes condition-div-shrink /*Safari and Chrome*/\n\t\t\t\t{\n\t\t\t\t\tfrom{transform: translate(-50% , -50%) scale( 1 , 1 )} \n\t\t\t\t\tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 )} \n\t\t\t\t}\n    \t\t</style> \n\t\t"
        }), 
        __metadata('design:paramtypes', [recommend_service_1.RecommendService])
    ], InquiryRecommendMain);
    return InquiryRecommendMain;
}());
exports.InquiryRecommendMain = InquiryRecommendMain;
//# sourceMappingURL=inquiry.recommend.main.component.js.map