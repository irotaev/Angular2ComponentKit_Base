import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import { CoverComponent } from './cover-component/cover.component';
import { HeaderTextComponent } from './text-header-component/text-header.component';
import { WrapperComponent } from './wrapper-component/wrapper.component';
import { GalleryComponent } from './gallery-component/gallery.component';
import { ModalComponent } from './modal-component/modal.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    CoverComponent,
    HeaderTextComponent,
    GalleryComponent
  ],
  declarations: [CoverComponent, HeaderTextComponent, WrapperComponent, GalleryComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class SimplyComponentKitModule { }
