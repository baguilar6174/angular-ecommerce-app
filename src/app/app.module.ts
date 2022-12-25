import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { serverPages } from './modules/server';
import { skeletonComponents } from './layout';

@NgModule({
	declarations: [AppComponent, ...skeletonComponents, ...serverPages],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CoreModule, SharedModule],
	providers: [
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
