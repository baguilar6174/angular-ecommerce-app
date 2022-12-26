export const openMobileMenuFromBody = (): void => {
	const {
		body: { classList },
	} = document;
	const isMobileMenuActive = classList.contains('mmenu-active');
	isMobileMenuActive ? classList.remove('mmenu-active') : classList.add('mmenu-active');
};

export const openMobileMenuSidebar = (): void => {
	const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
	mobileMenu.style.visibility = 'visible';
	mobileMenu.style.transform = 'translateX(280px)';

	const mobileMenuOverlay = document.getElementById('mobile-menu-overlay') as HTMLElement;
	mobileMenuOverlay.style.visibility = 'visible';
	mobileMenuOverlay.style.opacity = '1';
};

export const closeMobileMenuSidebar = (): void => {
	const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;
	mobileMenu.style.removeProperty('visibility');
	mobileMenu.style.removeProperty('transform');

	const mobileMenuOverlay = document.getElementById('mobile-menu-overlay') as HTMLElement;
	mobileMenuOverlay.style.removeProperty('visibility');
	mobileMenuOverlay.style.removeProperty('opacity');
};
