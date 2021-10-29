import { NgModule } from '@angular/core';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PromotionsComponent } from './page/promotions.component';


@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    SharedModule,
    PromotionsRoutingModule
  ]
})
export class PromotionsModule { }
