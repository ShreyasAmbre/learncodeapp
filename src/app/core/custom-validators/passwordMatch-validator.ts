import { FormGroup } from '@angular/forms';

export function passwordMatchValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value
    const cpassword = formGroup.get('confirm_password')?.value
    return password === cpassword ? null : { mismatch: true };
}