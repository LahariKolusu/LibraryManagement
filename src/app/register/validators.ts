import { FormGroup } from "@angular/forms";


export function customValidators(group: FormGroup)
{
    let pwd = group.value.pwd;
    let confirmpwd= group.value.confirmpwd;
    if(pwd==confirmpwd)
    {
        return null;
    }
    else{
        return {'custom' : true}
    }
}