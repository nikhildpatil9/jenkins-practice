import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableWithExpansionRoutingModule } from './table-with-expansion-routing.module';
import { TableWithExpansionComponent } from './table-with-expansion.component';
import { AngularMaterialComponentsModule } from '../angular-material-components/angular-material-components.module';
import { CallTableComponent } from './call-table/call-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TableWithExpansionComponent,
    CallTableComponent
  ],
  imports: [
    CommonModule,
    
    AngularMaterialComponentsModule,
    TableWithExpansionRoutingModule
  ]
})
export class TableWithExpansionModule { }
