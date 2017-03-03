import { Component, Input, Output, EventEmitter }  from '@angular/core';    

@Component({
  	selector: 'navbar',
  	template:`
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar" aria-expanded="false"
						aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span> 
						<span class="icon-bar"></span>
					</button>
					<img src="/image/logo_small.png" class="navbar-brand" width="150"/>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<form class="navbar-form navbar-right">
						<button class="btn btn-default" type="button">
							Log Out
						</button>
					</form>
					<ul class="nav navbar-nav navbar-right">
						<li><a><span class="glyphicon glyphicon-user" aria-hidden="true"></span>System</a></li>
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<!-- <li><a routerLink="/main" routerLinkActive="active">Home</a></li> -->
					</ul>
				</div>
			</div>
		</nav>
	`,
})

export class HeaderComponent {         
}