import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartIntegrationRoutingModule } from './chart-integration-routing.module';
import { ChartIntegrationComponent } from './chart-integration.component';


@NgModule({
  declarations: [
    ChartIntegrationComponent
  ],
  imports: [
    CommonModule,
    ChartIntegrationRoutingModule
  ]
})
export class ChartIntegrationModule { }
