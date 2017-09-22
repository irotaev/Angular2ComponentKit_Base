import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { HeaderTextComponent } from './header-text/header-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CoverComponent
  ],
  declarations: [CoverComponent, HeaderTextComponent]
})
export class SimplyComponentKitModule { }
