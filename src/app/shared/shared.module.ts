import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { components } from './components';
import { directives } from './directives';
import { pipes } from './pipes';

@NgModule({
	imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, CommonModule],
	declarations: [...components, ...directives, ...pipes],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule,
		...components,
		...directives,
		...pipes,
	],
})
export class SharedModule {}
