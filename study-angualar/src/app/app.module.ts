import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './generate-command/my-new-component/my-new-component.component';
import { MyNewDirectiveDirective } from './generate-command/my-new-directive.directive';
import { MyNewPipePipe } from './generate-command/my-new-pipe.pipe';
import { HeaderSidenavModule } from './header/header-sidenav/header-sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponentsModule } from './angular-material-components/angular-material-components.module';
import { DivPositionModule } from './div-position/div-position.module';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewDirectiveDirective,
    MyNewPipePipe
  ],
  imports: [
    HeaderSidenavModule,
  
    BrowserModule,
    AppRoutingModule,
    DivPositionModule,
    AngularMaterialComponentsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
