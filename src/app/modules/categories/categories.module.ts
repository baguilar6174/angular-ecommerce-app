import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CategoriesDetailComponent } from './pages/categories-detail/categories-detail.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
