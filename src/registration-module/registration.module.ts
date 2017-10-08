import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

import {MatCardModule, MdInputModule, MdButtonModule, MatSlideToggleModule} from '@angular/material';
import {SimplyComponentKitModule} from '../simply-component-kit.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        MatCardModule,
        MdInputModule,
        MdButtonModule,
        SimplyComponentKitModule,
        MatSlideToggleModule
    ],
    exports: [
        RegistrationFormComponent
    ],
    declarations: [RegistrationFormComponent]
})
export class RegistrationModule {
}
