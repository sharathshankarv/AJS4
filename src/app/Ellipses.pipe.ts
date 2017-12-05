import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipses'
})

export class EllipsesPipe implements PipeTransform{
    transform(value: string, args?: number ){
         if(!value)  
            return null;
        let limit = (args) ? args : 50 ;             

        return value.substring(0, limit) + "...";
        
    }
}