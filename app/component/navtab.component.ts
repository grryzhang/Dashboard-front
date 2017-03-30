import { Component, Input, Output, EventEmitter } from '@angular/core'; 

import 'rxjs/add/operator/pairwise';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  	selector: 'navtab',
  	template:`
		<div class="container">
    	    <div class="jumbotron">
    	        <ul class="nav nav-tabs" role="tablist">
					<li dropdown class="dropdown" >
			    		<a dropdownToggle id="dropdownMenu" class="dropdown-toggle bg-black" href="javascript:;">
			    			<strong></strong><b class="caret"></b>
			    		</a>
			    		<!--
			    		<ul dropdownMenu id="home" class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu" >
    	      			    <li><a href="javascript:;">一级菜单XXXXXXXXXXXXXXXXXXXXXX</a></li>
    	      			    <li><a href="javascript:;">一级菜单</a></li>
    	      			    <li class="divider"></li>
    	      			    <li class="dropdown-submenu">
    	      			        <a tabindex="-1" href="javascript:;">Wheel</a>
    	      			        <ul class="dropdown-menu">
    	      			            <li><a tabindex="-1" href="javascript:;">Steel Wheel</a></li>
    	      			            <li><a tabindex="-1" href="javascript:;">trailer</a></li>
    	      			            <li class="divider"></li>
    	      			            <li class="dropdown-submenu">
    	      			                <a href="javascript:;">二级菜单</a>
    	      			                <ul class="dropdown-menu">
    	      			                    <li><a href="javascript:;">三级菜单</a></li>
    	      			                </ul>
    	      			            </li>
    	      			        </ul>
    	      			    </li>
    	      			</ul>
    	      			-->
					</li> <!--  class="active" -->
					<li role="presentation"><a routerLink="/order" href="javascript:;">Orders</a></li>
					<li role="presentation"><a routerLink="/inquiryRecommend" href="javascript:;">Inquiry Recommend</a></li>
					<li role="presentation"><a routerLink="/corporation" href="javascript:;">Supplier evaluation</a></li>
				</ul>
				<div class="row" style="margin:5px">
				    <!--
				    <i class="fa fa-caret-right" aria-hidden="true"></i>
			        <a routerLink="/order" href="javascript:;">Inquiry</a>
			        -->
	            </div>
    	    </div>
		</div>  		
	`,
})

export class NavTabComponent {     

    constructor(private router: Router) {
        
        /*
        router.events.subscribe(
            ( event ) => {
                console.log( event instanceof NavigationEnd );
                console.log( event );
            }
        );
        */
        
        /* also work
        this.router.events.pairwise().subscribe(
            ( event ) => {
                console.log(event);
            }
        );
        */
    };
}