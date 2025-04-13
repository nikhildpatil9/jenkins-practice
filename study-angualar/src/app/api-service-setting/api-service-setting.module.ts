import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiServiceSettingRoutingModule } from './api-service-setting-routing.module';
import { ApiServiceSettingComponent } from './api-service-setting.component';


@NgModule({
  declarations: [
    ApiServiceSettingComponent
  ],
  imports: [
    CommonModule,
    ApiServiceSettingRoutingModule
  ]
})
export class ApiServiceSettingModule { }
