import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgxNumberSpinnerModule,
    CarouselModule
  ]
})
export class ProductsModule { }
