import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-page-title',
	templateUrl: './page-title.component.html',
	styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
	@Input() header = '';
	@Input() subtitle = '';
	@Input() backgroundImage = 'assets/images/page-header-bg.jpg';
}
