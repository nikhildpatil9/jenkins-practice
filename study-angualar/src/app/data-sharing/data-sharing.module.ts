import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSharingRoutingModule } from './data-sharing-routing.module';
import { DataSharingComponent } from './data-sharing.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [
    DataSharingComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    DataSharingRoutingModule
  ]
})
export class DataSharingModule { }
