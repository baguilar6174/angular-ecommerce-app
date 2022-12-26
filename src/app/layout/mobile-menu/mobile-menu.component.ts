import { Component } from '@angular/core';
import { closeMobileMenuSidebar, openMobileMenuFromBody } from '../utils';

@Component({
	selector: 'app-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
	closeMobileMenu(): void {
		openMobileMenuFromBody();
		closeMobileMenuSidebar();
	}

	openSubmenu(event: Event): void {
		const a = event.target as HTMLElement;
		// you can use alse currentTarget
		const li = a.closest('li') as HTMLElement;
		li.classList.add('open');
		const ul = a.nextElementSibling;
		console.log(ul);
	}
}
