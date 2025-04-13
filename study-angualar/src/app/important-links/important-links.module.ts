import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportantLinksRoutingModule } from './important-links-routing.module';
import { ImportantLinksComponent } from './important-links.component';


@NgModule({
  declarations: [
    ImportantLinksComponent
  ],
  imports: [
    CommonModule,
    ImportantLinksRoutingModule
  ]
})
export class ImportantLinksModule { }
