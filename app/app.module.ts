
import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { HttpModule,
         JsonpModule  }     from '@angular/http';

import { Observable }    from 'rxjs';

import { routing,
         appRoutingProviders    } from './app.routing';

import { AppComponent           }  from './app.component';
import { MainPanelComponent     }  from './component/mainPanel.component';
import { HeaderComponent        }  from './component/header.component';  
import { NavTabComponent        }  from './component/navtab.component';
import { DashboardComponent     }  from './component/dashboard.component';

import { CommonUtil } from './service/common/common.util.service';

@NgModule(
	{
  		imports:      [ 
  			BrowserModule, 
  			HttpModule,
  			JsonpModule,
  			
  			routing
  		],
  		declarations: [ 
  			AppComponent,
  			HeaderComponent,
  			NavTabComponent,
  			MainPanelComponent,
  			DashboardComponent
  		],
  		providers: [
    		appRoutingProviders,
    		CommonUtil
  		],
  		bootstrap:    [ AppComponent ]
	}
)
export class AppModule { }
