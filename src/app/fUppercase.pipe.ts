import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "fUppercase"
})

export class fUppercase implements PipeTransform{
    transform(value: string, args?: any){
        if(!value)
            return null;

        return value.charAt(0).toUpperCase() + value.substr(1)    
    }
}
