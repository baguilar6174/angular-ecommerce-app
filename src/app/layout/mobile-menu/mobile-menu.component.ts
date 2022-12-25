import { Component } from '@angular/core';

@Component({
	selector: 'app-mobile-menu',
	templateUrl: './mobile-menu.component.html',
	styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
	closeMobileMenu(): void {
		document.body.classList.remove('mmenu-active');
		const mobileMenu = document.getElementById('mobile-menu');
		if (mobileMenu) {
			mobileMenu.style.removeProperty('visibility');
			mobileMenu.style.removeProperty('transform');
		}
		const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
		if (mobileMenuOverlay) {
			mobileMenuOverlay.style.removeProperty('visibility');
			mobileMenuOverlay.style.removeProperty('opacity');
		}
	}
}
