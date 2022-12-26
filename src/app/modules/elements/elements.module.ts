import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';

import { pages } from './pages';

@NgModule({
	declarations: [...pages],
	imports: [SharedModule, ElementsRoutingModule],
})
export class ElementsModule {}
