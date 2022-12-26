import { Component } from '@angular/core';

import { Category, Demo, Element } from '@data/interfaces';
import { CATEGORIES_DATA_ITEMS, DEMOS_DATA_ITEMS, ELEMENTS_DATA_ITEMS } from '@data/mocks';
import { openMobileMenuFromBody, openMobileMenuSidebar } from '../../../utils';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	// consts and variables
	public categories: Category[] = CATEGORIES_DATA_ITEMS;
	public demos: Demo[] = DEMOS_DATA_ITEMS;
	public elements: Element[] = ELEMENTS_DATA_ITEMS;

	// trackBy functions
	trackByCategories = (_: number, item: Category): string => item.id;
	trackByDemos = (_: number, item: Demo): string => item.id;
	trackByElements = (_: number, item: Element): string => item.id;

	// methods
	openMobileMenu(): void {
		openMobileMenuFromBody();
		openMobileMenuSidebar();
	}
}
