import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event } from '@angular/router';
import { BreadCrumb } from '@data/interfaces';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
	public breadcrumbs: BreadCrumb[];

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {
		this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
	}

	ngOnInit(): void {
		this.router.events
			.pipe(
				filter((event: Event) => event instanceof NavigationEnd),
				distinctUntilChanged()
			)
			.subscribe(() => {
				this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
			});
	}

	/**
	 * Recursively build breadcrumb according to activated route.
	 * @param route
	 * @param url
	 * @param breadcrumbs
	 */
	buildBreadCrumb(route: ActivatedRoute, url = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
		//If no routeConfig is avalailable we are on the root path
		let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
		// const isClickable = route.routeConfig && route.routeConfig.data && route.routeConfig.data['isClickable'];
		let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

		// If the route is dynamic route such as ':id', remove it
		const lastRoutePart = path && path.split('/').pop();
		const isDynamicRoute = lastRoutePart && lastRoutePart.startsWith(':');
		if (isDynamicRoute && !!route.snapshot) {
			const paramName = lastRoutePart.split(':')[1];
			path = path && path.replace(lastRoutePart, route.snapshot.params[paramName]);
			label = route.snapshot.params[paramName];
		}

		//In the routeConfig the complete path is not available,
		//so we rebuild it each time
		const nextUrl = path ? `${url}/${path}` : url;

		const breadcrumb: BreadCrumb = {
			label: label,
			url: nextUrl,
			isClickable: false,
		};
		// Only adding route with non-empty label
		const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
		if (route.firstChild) {
			//If we are not on our current path yet,
			//there will be more children to look after, to build our breadcumb
			return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
		}
		return newBreadcrumbs;
	}
}
