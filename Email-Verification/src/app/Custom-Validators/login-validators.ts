import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class LoginValidators{
    static passwordLength(control:AbstractControl):ValidationErrors|null{
        if(control &&control.value && control.value.length<8){
            return {'passwordLength':true};
        }
        return null;
    }
}