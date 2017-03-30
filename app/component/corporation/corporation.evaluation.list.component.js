/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
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
var corporation_service_1 = require('../../service/corporation/corporation.service');
var evaluation_detail_component_1 = require('./evaluation.detail.component');
var CorporationEvaluationListComponent = (function () {
    function CorporationEvaluationListComponent(corporationService) {
        this.corporationService = corporationService;
    }
    CorporationEvaluationListComponent.prototype.ngOnInit = function () {
        this.refreshList(null);
    };
    CorporationEvaluationListComponent.prototype.refreshList = function (corporationGradeSearchParameters) {
        var _this = this;
        event.stopPropagation();
        if (corporationGradeSearchParameters) {
            corporationGradeSearchParameters.corporationGroup = ["9907"];
        }
        else {
            corporationGradeSearchParameters = { "corporationGroup": ["9907"] };
        }
        this.corporationService.queryEvaluationList(corporationGradeSearchParameters).subscribe(function (reponseData) {
            _this.gradeLists = reponseData.data;
        }, function (error) { _this.errorMessage = error; });
    };
    CorporationEvaluationListComponent.prototype.showEvaluationDetail = function (corporationNumber) {
        $('#corporation-evaluation-detail-modal').modal();
        this.evaluationDetailComponent.freshEvaluation(corporationNumber);
    };
    __decorate([
        core_1.ViewChild(evaluation_detail_component_1.EvaluationDetailComponent), 
        __metadata('design:type', evaluation_detail_component_1.EvaluationDetailComponent)
    ], CorporationEvaluationListComponent.prototype, "evaluationDetailComponent", void 0);
    CorporationEvaluationListComponent = __decorate([
        core_1.Component({
            selector: 'corporation-evaluation-list',
            template: "\n  \t\t    <!-- start : corporation-evaluation-list -->\n  \t\t\t<div class=\"container\"><!--/container start-->\n  \t\t\t\t<div class=\"row-fluid row-offcanvas row-offcanvas-right\">\n  \t\t\t\t\n  \t\t\t\t    <div class=\"row\"><!--/row-search-bar start-->\n    \t\t  \t\t\t<div class=\"col-xs-12 col-sm-8 col-lg-4\">\n    \t\t  \t\t\t\t<form>\n    \t\t  \t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"orderFuzzyInput\" placeholder=\"Supplier Name\" #sale_order_states_searchParameters />\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"refreshList( null );\">\n    \t\t            \t\t\t\t\t<span class=\"glyphicon glyphicon-search\"></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n    \t\t           \t\t\t\t<span class=\"input-group-btn\">\n    \t\t            \t\t\t\t<button class=\"btn btn-default\" type=\"button\" (click)=\"refreshList( null );\">\n    \t\t            \t\t\t\t\t<span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n    \t\t            \t\t\t\t</button>\n    \t\t           \t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n    \t\t  \t\t\t</div>\n    \t\t  \t\t</div><!--/row-search-end start-->\n    \t\t  \t\t\n  \t\t\t\t    <div class=\"row\"><!-- start : data table -->\n  \t\t\t\t        <div class=\"col-xs-12 col-sm-12 col-lg-12\">\n  \t\t\t                <table class=\"table table-striped\">\n  \t\t\t                    <thead>\n \t\t\t\t                    <tr>\n    \t\t\t                \t   <th>Supplier Name</th>\n    \t\t\t                \t   <th></th>\n    \t\t\t                       <th>Score</th>\n    \t\t\t                       <th>Last Grade Time</th>\n    \t\t\t                    </tr>\n    \t\t\t                </thead>\n\t\t\t\t                <tbody>\n\t\t\t\t                    <template ngFor let-gradeList [ngForOf]=\"gradeLists\">\n\t\t\t\t                \t<tr (click)=\"showEvaluationDetail( gradeList.FNUMBER )\">\n\t\t\t\t                \t\t<td>{{gradeList?.corporationEName}}</td>\n\t\t\t\t                \t\t<td>{{gradeList?.corporationName}}</td>\n\t\t\t\t                \t\t<td>{{gradeList?.gradeScore}}</td>\n\t\t\t\t                \t\t<td>{{gradeList?.lastGradeTime | date: 'MM/dd/yyyy'}}</td>\n\t\t\t\t                \t</tr>\n\t\t\t\t                \t</template>\n\t\t\t\t                </tbody>\n                            </table>\n                        </div>\n                    </div><!-- end : data table -->\n                </div>\n  \t\t\t</div>\n  \t\t\t<corporation-evaluation-detail-modal></corporation-evaluation-detail-modal>\n  \t\t\t<!-- end : corporation-evaluation-list -->\n  \t\t",
        }), 
        __metadata('design:paramtypes', [corporation_service_1.CorporationService])
    ], CorporationEvaluationListComponent);
    return CorporationEvaluationListComponent;
}());
exports.CorporationEvaluationListComponent = CorporationEvaluationListComponent;
//# sourceMappingURL=corporation.evaluation.list.component.js.map