import { NgModule } from '@angular/core';
import { BusinessRoutingModule } from './business-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { FinishComponent } from './pages/finish/finish.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    CartComponent,
    OrderComponent,
    FinishComponent,
    WishlistComponent
  ],
  imports: [
    SharedModule,
    BusinessRoutingModule,
    NgxNumberSpinnerModule,
    NgxSpinnerModule,
  ]
})
export class BusinessModule { }
