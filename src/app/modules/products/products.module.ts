import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { pages } from './pages';

@NgModule({
	declarations: [...pages],
	imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
