import { Component } from '@angular/core';
import { INTERNAL_PATHS } from '@data/constants';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
	// const and variables
	public INTERNAL_PATHS = INTERNAL_PATHS;
}
