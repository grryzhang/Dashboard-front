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
require('rxjs/add/operator/pairwise');
var router_1 = require('@angular/router');
var NavTabComponent = (function () {
    function NavTabComponent(router) {
        /*
        router.events.subscribe(
            ( event ) => {
                console.log( event instanceof NavigationEnd );
                console.log( event );
            }
        );
        */
        this.router = router;
        /* also work
        this.router.events.pairwise().subscribe(
            ( event ) => {
                console.log(event);
            }
        );
        */
    }
    ;
    NavTabComponent = __decorate([
        core_1.Component({
            selector: 'navtab',
            template: "\n\t\t<div class=\"container\">\n    \t    <div class=\"jumbotron\">\n    \t        <ul class=\"nav nav-tabs\" role=\"tablist\">\n\t\t\t\t\t<li dropdown class=\"dropdown\" >\n\t\t\t    \t\t<a dropdownToggle id=\"dropdownMenu\" class=\"dropdown-toggle bg-black\" href=\"javascript:;\">\n\t\t\t    \t\t\t<strong></strong><b class=\"caret\"></b>\n\t\t\t    \t\t</a>\n\t\t\t    \t\t<!--\n\t\t\t    \t\t<ul dropdownMenu id=\"home\" class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\" >\n    \t      \t\t\t    <li><a href=\"javascript:;\">\u4E00\u7EA7\u83DC\u5355XXXXXXXXXXXXXXXXXXXXXX</a></li>\n    \t      \t\t\t    <li><a href=\"javascript:;\">\u4E00\u7EA7\u83DC\u5355</a></li>\n    \t      \t\t\t    <li class=\"divider\"></li>\n    \t      \t\t\t    <li class=\"dropdown-submenu\">\n    \t      \t\t\t        <a tabindex=\"-1\" href=\"javascript:;\">Wheel</a>\n    \t      \t\t\t        <ul class=\"dropdown-menu\">\n    \t      \t\t\t            <li><a tabindex=\"-1\" href=\"javascript:;\">Steel Wheel</a></li>\n    \t      \t\t\t            <li><a tabindex=\"-1\" href=\"javascript:;\">trailer</a></li>\n    \t      \t\t\t            <li class=\"divider\"></li>\n    \t      \t\t\t            <li class=\"dropdown-submenu\">\n    \t      \t\t\t                <a href=\"javascript:;\">\u4E8C\u7EA7\u83DC\u5355</a>\n    \t      \t\t\t                <ul class=\"dropdown-menu\">\n    \t      \t\t\t                    <li><a href=\"javascript:;\">\u4E09\u7EA7\u83DC\u5355</a></li>\n    \t      \t\t\t                </ul>\n    \t      \t\t\t            </li>\n    \t      \t\t\t        </ul>\n    \t      \t\t\t    </li>\n    \t      \t\t\t</ul>\n    \t      \t\t\t-->\n\t\t\t\t\t</li> <!--  class=\"active\" -->\n\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/order\" href=\"javascript:;\">Orders</a></li>\n\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/inquiryRecommend\" href=\"javascript:;\">Inquiry Recommend</a></li>\n\t\t\t\t\t<li role=\"presentation\"><a routerLink=\"/corporation\" href=\"javascript:;\">Supplier evaluation</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"row\" style=\"margin:5px\">\n\t\t\t\t    <!--\n\t\t\t\t    <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n\t\t\t        <a routerLink=\"/order\" href=\"javascript:;\">Inquiry</a>\n\t\t\t        -->\n\t            </div>\n    \t    </div>\n\t\t</div>  \t\t\n\t",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NavTabComponent);
    return NavTabComponent;
}());
exports.NavTabComponent = NavTabComponent;
//# sourceMappingURL=navtab.component.js.map