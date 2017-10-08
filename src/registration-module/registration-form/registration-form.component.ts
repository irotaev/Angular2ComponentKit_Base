import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSlideToggle} from '@angular/material';
import {forbiddenNameValidator} from '../../directive-base/password-confirm/password-confirm.directive';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'sck-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, AfterViewInit {

    @Input() backgroundImgUrl: string;

    //#region Register form group
    @ViewChild('emailInput') emailInputEl: ElementRef;
    @ViewChild('passwordInput') passwordInputEl: ElementRef;
    @ViewChild('passwordConfirmationInput') passwordConfirmationInputEl: ElementRef;
    @ViewChild('passwordNeedToggle') passwordNeedToggle: MatSlideToggle;

    isPasswordFieldNeed = false;
    isPasswordConfirmationFieldNeed = false;

    registerFormGroup: FormGroup;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    ]);

    passwordFormControl = new FormControl({
        value: 'Будет задан автоматически',
        disabled: true
    }, [
        Validators.required,
        Validators.pattern(/^.{6,10}$/)
    ]);

    passwordConfirmationFormControl: FormControl;
    //#endregion

    //#region Confirm registration form group
    @ViewChild('confirmationCodeInput') confirmationCodeInputEl: ElementRef;

    confirmRegistrationFormGroup: FormGroup;

    confirmNumberFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]{4}$/)
    ]);
    //#endregion

    //#region Additional information form group
    additionalInformationFormGroup: FormGroup;

    nameFormControl = new FormControl('', [
        Validators.pattern(/^[a-zA-Zа-яА-Я0-9]{4,20}$/)
    ]);

    phoneFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9\-\s()]{14,16}$/)
    ]);

    phoneInputMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    //#endregion

    constructor(private _formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.registerFormGroup = this._formBuilder.group({
            'emailFormControl': this.emailFormControl,
            'passwordFormControl': this.passwordFormControl
        });

        this.confirmRegistrationFormGroup = this._formBuilder.group({
            'confirmNumberFormControl': this.confirmNumberFormControl
        });

        this.additionalInformationFormGroup = this._formBuilder.group({
            'nameFormControl': this.nameFormControl,
            'phoneFormControl': this.phoneFormControl
        });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.emailInputEl.nativeElement.focus();
        }, 400);

        this.passwordConfirmationFormControl = new FormControl('', [
            Validators.required,
            forbiddenNameValidator(this.passwordInputEl)
        ]);
        this.passwordConfirmationFormControl.disable();
    }

    onBtnToStepConfirmationClick() {
        setTimeout(() => {
            this.confirmationCodeInputEl.nativeElement.focus();
            this.emailInputEl.nativeElement.disabled = true;
            this.passwordInputEl.nativeElement.disabled = true;
            this.passwordNeedToggle.setDisabledState(true);
        }, 400);
    }

    onBtnToStepRegistrationClick() {
        setTimeout(() => {
            this.emailInputEl.nativeElement.focus();
            this.isPasswordConfirmationFieldNeed = false;
        }, 400);
    }

    onBtnToStepAdditionalInfoClick() {
        setTimeout(() => {
            this.confirmationCodeInputEl.nativeElement.disabled = true;
        }, 400);
    }

    onPasswordNeedToggleChange(event) {
        this.isPasswordFieldNeed = event.checked;
        this.isPasswordConfirmationFieldNeed = event.checked;

        if (this.isPasswordFieldNeed) {
            this.registerFormGroup.get('passwordFormControl').enable();
            this.passwordInputEl.nativeElement.value = '';
            this.passwordConfirmationFormControl.enable();
            this.passwordConfirmationFormControl.setValue('');
            this.passwordInputEl.nativeElement.type = 'password';
            setTimeout(() => {
                this.passwordInputEl.nativeElement.focus();
            }, 200);
        } else {
            this.registerFormGroup.get('passwordFormControl').setValue(null);
            this.registerFormGroup.get('passwordFormControl').disable();
            this.passwordInputEl.nativeElement.value = 'Будет задан автоматически';
            this.passwordConfirmationFormControl.disable();
            this.passwordInputEl.nativeElement.type = 'text';
        }
    }


}
