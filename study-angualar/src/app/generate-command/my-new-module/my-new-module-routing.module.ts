import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNewModuleComponent } from './my-new-module.component';

const routes: Routes = [{ path: '', component: MyNewModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNewModuleRoutingModule { }
