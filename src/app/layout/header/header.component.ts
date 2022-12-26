import { Component } from '@angular/core';
import { openMobileMenuFromBody, openMobileMenuSidebar } from '../utils';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	openMobileMenu(): void {
		openMobileMenuFromBody();
		openMobileMenuSidebar();
	}
}
