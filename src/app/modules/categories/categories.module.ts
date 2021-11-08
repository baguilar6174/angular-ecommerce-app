import { NgModule } from '@angular/core';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CategoriesDetailComponent } from './pages/categories-detail/categories-detail.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesDetailComponent
  ],
  imports: [
    SharedModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }