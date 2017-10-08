import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

import {MatCardModule, MatInputModule, MatButtonModule, MatSlideToggleModule, MatStepperModule} from '@angular/material';
import {SimplyComponentKitModule} from '../simply-component-kit.module';
import {TextMaskModule} from 'angular2-text-mask';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        SimplyComponentKitModule,
        MatSlideToggleModule,
        MatStepperModule,
        TextMaskModule
    ],
    exports: [
        RegistrationFormComponent
    ],
    declarations: [RegistrationFormComponent]
})
export class RegistrationModule {
}
