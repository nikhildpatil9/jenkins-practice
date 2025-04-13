import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivPositionRoutingModule } from './div-position-routing.module';
import { DivPositionComponent } from './div-position.component';


@NgModule({
  declarations: [
    DivPositionComponent
  ],
  imports: [
    CommonModule,
    DivPositionRoutingModule
  ]
})
export class DivPositionModule { }
