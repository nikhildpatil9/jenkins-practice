import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableWithExpansionComponent } from './table-with-expansion.component';

const routes: Routes = [{ path: '', component: TableWithExpansionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableWithExpansionRoutingModule { }
