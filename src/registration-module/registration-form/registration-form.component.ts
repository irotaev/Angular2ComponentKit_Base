import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'sck-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

    isPasswordFieldNeed = false;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ]);

    passwordFormControl = new FormControl({
        value: null,
        disabled: true
    }, [
        Validators.required,
        Validators.pattern(/^.{6,10}$/)
    ]);

    @Input() backgroundImgUrl: string;

    constructor() {
    }

    ngOnInit() {
    }

    onPasswordNeedToggleChange(event) {
        this.isPasswordFieldNeed = event.checked;

        if (this.isPasswordFieldNeed) {
            this.passwordFormControl.enable();
        }
        else {
            this.passwordFormControl.setValue(null);
            this.passwordFormControl.disable();
        }
    }
}
