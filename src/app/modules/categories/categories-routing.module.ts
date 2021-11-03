import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDetailComponent } from './pages/categories-detail/categories-detail.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: ':category', component: CategoriesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
