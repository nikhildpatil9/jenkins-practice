import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartIntegrationComponent } from './chart-integration.component';

const routes: Routes = [{ path: '', component: ChartIntegrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartIntegrationRoutingModule { }
