import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { HeaderTextComponent } from './text-header/text-header.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoverComponent,
    HeaderTextComponent
  ],
  declarations: [CoverComponent, HeaderTextComponent, WrapperComponent]
})
export class SimplyComponentKitModule { }
