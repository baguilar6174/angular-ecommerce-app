import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPTY_STRING } from '@data/constants';
import { HomeComponent } from './page/home.component';

const routes: Routes = [{ path: EMPTY_STRING, component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
