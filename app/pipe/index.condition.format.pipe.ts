/// <reference path="../../resources/jquery/jquery.d.ts" />
/// <reference path="../../resources/Require.js/require.d.ts" />

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'indexConditionFormat'})
export class IndexConditionFormatPipe implements PipeTransform {
    transform( value: string ): string {
        let result = value.replace( /[\"\{\}\[\]]/g,"" );
        return result;
    }
}