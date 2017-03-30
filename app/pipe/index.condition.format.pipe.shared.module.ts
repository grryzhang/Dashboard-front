import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { Pipe, PipeTransform } from '@angular/core';

import { IndexConditionFormatPipe } from './index.condition.format.pipe'

@NgModule(
	{
  	  	imports: [
  	  	],
  	  	declarations: [
  	  	  	IndexConditionFormatPipe
  	  	],
  	  	providers: [
  		],
  		exports : [
  		    IndexConditionFormatPipe
  		]
	}
)

export class IndexConditionFormatPipeSharedModule {

    static forRoot() {
      return {
          ngModule: IndexConditionFormatPipeSharedModule
      };
   }
}