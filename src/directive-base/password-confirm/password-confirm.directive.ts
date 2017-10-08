import {AbstractControl, ValidatorFn} from '@angular/forms';
import {ElementRef} from '@angular/core';
import {isNullOrUndefined} from 'util';

export function forbiddenNameValidator(passwordInputEl: ElementRef): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (isNullOrUndefined(passwordInputEl)) return null;

        return passwordInputEl.nativeElement.value !== control.value ? {'passwordNotMatch': {value: control.value}} : null;
    };
}
