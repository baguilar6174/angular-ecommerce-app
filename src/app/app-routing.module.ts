import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INTERNAL_PATHS } from '@data/constants/routes';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { Page400Component } from '@modules/server/page400/page400.component';
import { Page403Component } from '@modules/server/page403/page403.component';
import { Page404Component } from '@modules/server/page404/page404.component';
import { Page500Component } from '@modules/server/page500/page500.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_404,
    component: Page404Component,
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_400,
    component: Page400Component,
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_403,
    component: Page403Component,
  },
  {
    path: INTERNAL_PATHS.SERVER_ERROR_500,
    component: Page500Component,
  },
  {
    path:'', component: SkeletonComponent,
    children:[
      {
        path: INTERNAL_PATHS.ECOMMERCE_DEFAULT,
        loadChildren:() => 
          import('@modules/home/home.module').then( (m)=> m.HomeModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_ABOUT,
        loadChildren:() => 
          import('@modules/about/about.module').then( (m)=> m.AboutModule)
      },
      {
        path: INTERNAL_PATHS.AUTH_DEFAULT,
        loadChildren: () =>
          import('@modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_CONTACT,
        loadChildren:() => 
          import('@modules/contact/contact.module').then( (m)=> m.ContactModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_PRODUCTS,
        loadChildren:() => 
          import('@modules/products/products.module').then( (m)=> m.ProductsModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_PROMOTIONS,
        loadChildren:() => 
          import('@modules/promotions/promotions.module').then( (m)=> m.PromotionsModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_CATEGORIES,
        loadChildren:() => 
          import('@modules/categories/categories.module').then( (m)=> m.CategoriesModule)
      },
      {
        path: INTERNAL_PATHS.ECOMMERCE_BUSINESS,
        loadChildren:() => 
          import('@modules/business/business.module').then( (m)=> m.BusinessModule)
      },
      { path:'**', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  { path:'**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
