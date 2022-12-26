import { FooterComponent, HeaderComponent, MobileMenuComponent } from './organisms';
import { ScrollToTopComponent } from './molecules';
import { SkeletonComponent } from './templates';

export const components = [
	SkeletonComponent,
	HeaderComponent,
	FooterComponent,
	MobileMenuComponent,
	ScrollToTopComponent,
];

export * from './organisms';
export * from './templates';
export * from './molecules';
