import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public isMobileMenuOpen = false;

	openMobileMenu(): void {
		this.isMobileMenuOpen = !this.isMobileMenuOpen;
		this.isMobileMenuOpen
			? document.body.classList.add('mmenu-active')
			: document.body.classList.remove('mmenu-active');

		// if (document.body.classList.contains('mmenu-active')) {
		// 	document.body.classList.remove('mmenu-active');
		// }

		const mobileMenu = document.getElementById('mobile-menu');
		if (mobileMenu != null) {
			mobileMenu.style.visibility = 'visible';
			mobileMenu.style.transform = 'translateX(280px)';
		}

		const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
		if (mobileMenuOverlay != null) {
			mobileMenuOverlay.style.visibility = 'visible';
			mobileMenuOverlay.style.opacity = '1';
		}
	}
}
