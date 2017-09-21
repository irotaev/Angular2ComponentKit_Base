import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponentN1Component } from './cover-component-n1/cover-component-n1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoverComponentN1Component
  ],
  declarations: [CoverComponentN1Component]
})
export class StaticComponentsModule { }
