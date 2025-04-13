import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyNewModuleRoutingModule } from './my-new-module-routing.module';
import { MyNewModuleComponent } from './my-new-module.component';


@NgModule({
  declarations: [
    MyNewModuleComponent
  ],
  imports: [
    CommonModule,
    MyNewModuleRoutingModule
  ]
})
export class MyNewModuleModule { }
