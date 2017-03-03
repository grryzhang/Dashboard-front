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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n\t\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\"\n\t\t\t\t\t\tdata-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n\t\t\t\t\t\taria-controls=\"navbar\">\n\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span> \n\t\t\t\t\t\t<span class=\"icon-bar\"></span> \n\t\t\t\t\t\t<span class=\"icon-bar\"></span> \n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t\t<img src=\"/image/logo_small.png\" class=\"navbar-brand\" width=\"150\"/>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"navbar\" class=\"navbar-collapse collapse\">\n\t\t\t\t\t<form class=\"navbar-form navbar-right\">\n\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"button\">\n\t\t\t\t\t\t\tLog Out\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<li><a><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>System</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t\t<!-- <li><a routerLink=\"/main\" routerLinkActive=\"active\">Home</a></li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t",
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map