import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiServiceSettingComponent } from './api-service-setting.component';

const routes: Routes = [{ path: '', component: ApiServiceSettingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiServiceSettingRoutingModule { }
