import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  EMPTY_STRING,
  INTERNAL_PATHS,
  INTERNAL_ROUTES,
  PATH_ANY,
} from '@data/constants';
import { SkeletonComponent } from './layout';
import {
  Page400Component,
  Page404Component,
  Page500Component,
} from './modules/server';
import { HomeModule } from '@modules/home/home.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ProductsModule } from '@modules/products/products.module';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    redirectTo: INTERNAL_ROUTES.ECOMMERCE_DEFAULT,
    pathMatch: 'full',
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_404,
    component: Page404Component,
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_400,
    component: Page400Component,
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_500,
    component: Page500Component,
  },
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
      {
        path: INTERNAL_PATHS.ECOMMERCE_DEFAULT,
        loadChildren: () =>
          import('@modules/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
      },
      {
        path: INTERNAL_PATHS.AUTH_DEFAULT,
        loadChildren: () =>
          import('@modules/auth/auth.module').then(
            (m): typeof AuthModule => m.AuthModule
          ),
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_PRODUCTS,
        loadChildren: () =>
          import('@modules/products/products.module').then(
            (m): typeof ProductsModule => m.ProductsModule
          ),
      },
      { path: PATH_ANY, redirectTo: EMPTY_STRING, pathMatch: 'full' },
    ],
  },
  { path: PATH_ANY, redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
