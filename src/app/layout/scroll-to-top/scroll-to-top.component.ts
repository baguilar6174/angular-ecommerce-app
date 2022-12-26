import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-scroll-to-top',
	templateUrl: './scroll-to-top.component.html',
	styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {
	public isShow = false;
	// TODO: posibly const
	public topPosToStartShowing = 400;

	@HostListener('window:scroll')
	checkScroll(): void {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollPosition >= this.topPosToStartShowing) {
			this.isShow = true;
		} else {
			this.isShow = false;
		}
	}

	gotoTop(): void {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}
}
