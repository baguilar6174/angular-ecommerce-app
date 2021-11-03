import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from 'ng-sidebar';

import { Page400Component } from './modules/server/page400/page400.component';
import { Page403Component } from './modules/server/page403/page403.component';
import { Page404Component } from './modules/server/page404/page404.component';
import { Page500Component } from './modules/server/page500/page500.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent,
    Page400Component,
    Page403Component,
    Page404Component,
    Page500Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    SidebarModule.forRoot(),
    CoreModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
