import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {MdButtonModule, MdIconModule} from '@angular/material';

import {CoverComponent} from './cover-component/cover.component';
import {HeaderTextComponent} from './text-header-th36-component/text-header-th36.component';
import {WrapperComponent} from './wrapper-component/wrapper.component';
import {GalleryComponent} from './gallery-component/gallery.component';
import {ModalComponent} from './modal-component/modal.component';
import {ViewportComponent} from './viewport-component/viewport.component';
import {ImgComponent} from './img-component/img.component';
import { TextHeaderTh64Component } from './text-header-th64-component/text-header-th64.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MdButtonModule,
        MdIconModule
    ],
    exports: [
        CoverComponent,
        HeaderTextComponent,
        GalleryComponent,
        ViewportComponent
    ],
    declarations: [
        CoverComponent,
        HeaderTextComponent,
        WrapperComponent,
        GalleryComponent,
        ModalComponent,
        ViewportComponent,
        ImgComponent,
        TextHeaderTh64Component],
    entryComponents: [ModalComponent],
    bootstrap: [ViewportComponent]
})
export class SimplyComponentKitModule {
}
