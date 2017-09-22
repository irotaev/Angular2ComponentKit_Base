import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponentN1Component } from './cover-component/cover-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoverComponentN1Component
  ],
  declarations: [CoverComponentN1Component]
})
export class ComponentBaseModule { }
