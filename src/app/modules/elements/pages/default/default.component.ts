import { Component } from '@angular/core';
import { BASE_ELEMENTS_DATA_ITEMS } from '@data/mocks';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
	constructor() {
		window.scrollTo(0, 0);
	}

	// const and variables
	public elements: { name: string; link: string }[] = BASE_ELEMENTS_DATA_ITEMS;

	// trackBy functions
	trackByElements = (_: number, item: { name: string; link: string }): string => item.name;
}
