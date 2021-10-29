import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import * as components from './components';
import * as pipes from './pipes';
import * as directives from './directives';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    ...components.components,
    ...pipes.pipes,
    ...directives.directives,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ...components.components,
    ...pipes.pipes,
    ...directives.directives,
  ],
})
export class SharedModule { }
