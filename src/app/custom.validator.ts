import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidator{
    static usernameSpaceValidator(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return {noSpaceAllowed : true}

        return null;
    }

    static checkUniqueness(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string) == "sharath")
                    resolve( {uniquenessError: true});
                else 
                    resolve(null);
            }, 2000);
        })        
    }   
}