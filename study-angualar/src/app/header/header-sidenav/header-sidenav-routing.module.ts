import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSidenavComponent } from './header-sidenav.component';

const routes: Routes = [{ path: '', component: HeaderSidenavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSidenavRoutingModule { }
