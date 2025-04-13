import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/api-service-setting', pathMatch: 'full' },
{ path: 'div-position', pathMatch: 'full', loadChildren: () => import('./div-position/div-position.module').then(m => m.DivPositionModule) },
  { path: 'api-service-setting',pathMatch: 'full', loadChildren: () => import('./api-service-setting/api-service-setting.module').then(m => m.ApiServiceSettingModule) },
{ path: 'table-with-expansion', loadChildren: () => import('./table-with-expansion/table-with-expansion.module').then(m => m.TableWithExpansionModule) },
{ path: 'data-sharing', loadChildren: () => import('./data-sharing/data-sharing.module').then(m => m.DataSharingModule) },
{ path: 'form-handling', loadChildren: () => import('./form-handling/form-handling.module').then(m => m.FormHandlingModule) },
{ path: 'important-links', loadChildren: () => import('./important-links/important-links.module').then(m => m.ImportantLinksModule) },
{ path: 'chart-integration', loadChildren: () => import('./chart-integration/chart-integration.module').then(m => m.ChartIntegrationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
