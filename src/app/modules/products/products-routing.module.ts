import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EMPTY_STRING } from '@data/constants';
import { ProductDetailComponent, ProductListComponent } from './pages';

const routes: Routes = [
  { path: EMPTY_STRING, component: ProductListComponent },
  { path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
