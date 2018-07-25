import { FormControl } from "@angular/forms";

export function fechaNValidator(control: FormControl){
    let pattern =  "^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$";
    if(!control.value.match(pattern)){
        return {defaultvalue:true}
    }
}


