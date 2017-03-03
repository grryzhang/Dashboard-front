import { Component,ViewChild }    from '@angular/core';

@Component(
	{
  		selector: 'mainPanel',
  		template:`
  		  	<navbar></navbar> 
  			<navtab></navtab>
  			<router-outlet></router-outlet>
		`,
		providers  : []
	}
)

export class MainPanelComponent {       

	constructor( 
	){}  
}