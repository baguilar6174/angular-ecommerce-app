import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EMPTY_STRING } from '@data/constants';
import { LoginComponent } from './pages';

const routes: Routes = [{ path: EMPTY_STRING, component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
