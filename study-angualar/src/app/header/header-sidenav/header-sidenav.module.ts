import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderSidenavComponent } from './header-sidenav.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';


@NgModule({
  declarations: [
    HeaderSidenavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ],
  exports: [
    HeaderSidenavComponent
  ]

})
export class HeaderSidenavModule { }
