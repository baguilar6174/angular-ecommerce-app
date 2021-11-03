import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { FinishComponent } from './pages/finish/finish.component';
import { OrderComponent } from './pages/order/order.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
