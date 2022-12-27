import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants';
import { ButtonsComponent, DefaultComponent } from './pages';

const routes: Routes = [
	{
		path: EMPTY_STRING,
		component: DefaultComponent,
	},
	{
		path: INTERNAL_PATHS.ECOMMERCE_ELEMENTS_BUTTONS,
		component: ButtonsComponent,
		data: {
			breadcrumb: 'Buttons',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ElementsRoutingModule {}
