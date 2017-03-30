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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var corporation_service_1 = require('../../service/corporation/corporation.service');
var EvaluationDetailComponent = (function () {
    function EvaluationDetailComponent(corporationService) {
        this.corporationService = corporationService;
    }
    EvaluationDetailComponent.prototype.ngOnInit = function () {
    };
    EvaluationDetailComponent.prototype.freshEvaluation = function (corporationNumber) {
        var _this = this;
        this.evaluations = null;
        while (this.ts.tabs[0] != null) {
            this.ts.removeTab(this.ts.tabs[0]);
        }
        this.corporationService.queryEvaluation(corporationNumber).subscribe(function (reponseData) {
            _this.evaluations = reponseData.data;
        }, function (error) { _this.errorMessage = error; });
    };
    __decorate([
        core_1.ViewChild(ng2_bootstrap_1.TabsetComponent), 
        __metadata('design:type', ng2_bootstrap_1.TabsetComponent)
    ], EvaluationDetailComponent.prototype, "ts", void 0);
    EvaluationDetailComponent = __decorate([
        core_1.Component({
            selector: 'corporation-evaluation-detail-modal',
            template: "\n  \t\t\t<div class=\"modal fade\" id=\"corporation-evaluation-detail-modal\" role=\"dialog\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog modal-width-normal\">\n\t\t\t      \t<div class=\"modal-content\">\n\t\t\t         \t<div class=\"modal-header\">\n\t\t\t         \t    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n\t\t      \t\t            &times;\n\t\t      \t\t        </button>\n\t\t\t            \t<h4 class=\"modal-title\" id=\"myModalLabel\">&nbsp;</h4>\n\t\t\t         \t</div>\n\t\t\t         \t\n \t\t\t\t\t\t<div class=\"container-fluid\"><!--start : main content container-->\n    \t\t\t\t  \t\t<div class=\"row\"><!-- start : data table -->\n  \t\t\t\t                <div class=\"col-xs-12 col-sm-12 col-lg-12\">\n                                    <tabset #evaluationDetailTabs>\n                                        <template ngFor let-evaluation [ngForOf]=\"evaluations\">\n                                        <tab id=\"evaluation-tab\" heading=\"{{evaluation?.createTime | date: 'MM/dd/yyyy'}}\">\n                                            <template tabHeading>\n    \t\t\t\t\t\t\t                <span class=\"badge badge-success\">{{evaluation?.gradeScore}}</span>\n                                            </template>\n                                            <table class=\"table table-striped\">\n  \t\t\t                                     <thead>\n \t\t\t\t                                     <tr>\n    \t\t\t                                 \t    <th>Group</th>\n    \t\t\t                                 \t    <th></th>\n    \t\t\t                                        <th>Weight</th>\n    \t\t\t                                        <th>Score</th>\n    \t\t\t                                     </tr>\n    \t\t\t                                 </thead>\n\t\t\t\t                                 <tbody>\n\t\t\t\t                                    <template ngFor let-gradeItem [ngForOf]=\"evaluation.gradeItems\">\n\t\t\t\t                                 \t<tr>\n\t\t\t\t                                 \t\t<td>{{gradeItem?.gradeItemGroup}}</td>\n\t\t\t\t                                 \t\t<td>{{gradeItem?.gradeItem}}</td>\n\t\t\t\t                                 \t\t<td>{{gradeItem?.gradeItemWeight}}</td>\n\t\t\t\t                                 \t\t<td>{{gradeItem?.gradeItemScore}}</td>\n\t\t\t\t                                 \t</tr>\n\t\t\t\t                                 \t</template>\n\t\t\t\t                                 </tbody>\n                                             </table>\n                                        </tab>\n                                        </template>\n                                    </tabset> \n                                </div>\n                            </div><!-- end : data table -->\n\t\t\t\t\t\t</div><!--end : main content container-->\n\n\t\t\t\t\t\t<div class=\"modal-footer\">\n\t\t    \t   \t        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\n\t\t    \t    \t     Close\n\t\t    \t   \t        </button>\n\t\t    \t\t    </div>\n\t\t\t      \t</div><!-- /.modal-content -->\n\t\t\t\t</div><!--end : model window-->     \n      \t\t</div>\n      \t\t<!--end : model window-->  \n  \t\t",
        }), 
        __metadata('design:paramtypes', [corporation_service_1.CorporationService])
    ], EvaluationDetailComponent);
    return EvaluationDetailComponent;
}());
exports.EvaluationDetailComponent = EvaluationDetailComponent;
//# sourceMappingURL=evaluation.detail.component.js.map