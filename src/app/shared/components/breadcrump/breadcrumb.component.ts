import { afterNextRender, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import BRBreadcrumb from '@govbr-ds/core/dist/components/breadcrumb/breadcrumb';

@Component({
	selector: 'app-breadcrumb',
	standalone: true,
	imports: [RouterLink],
	host: {
		'[class.d-none]': '!showBreadcrumb',
	},
	templateUrl: './breadcrumb.component.html',
	styleUrl: './breadcrumb.component.scss',
	encapsulation: ViewEncapsulation.None,
})
export class BreadcrumbComponent {
	instance: unknown;
	crumbs: Array<{ label: string; url: string; home?: boolean; active?: boolean }> = [];
	showBreadcrumb = false;

	router = inject(Router);
	route = inject(ActivatedRoute);

	constructor() {
		afterNextRender(() => {
			this.instance = new BRBreadcrumb('br-breadcrumb', document.querySelector('.br-breadcrumb'));
		});

		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.crumbs = [
					{
						label: 'Página Inicial',
						url: '/home',
						home: true,
					},
				];

				this.showBreadcrumb = false;

				const buildBreadcrumbs = (route: ActivatedRoute, url: string = '') => {
					if (route.snapshot.routeConfig) {
						const routePath = route.snapshot.routeConfig.path;

						if (routePath) {
							url += `/${routePath}`;
						}

						if (route.snapshot.data['breadCrumb'] && routePath) {
							this.crumbs.push({
								label: route.snapshot.data['breadCrumb'],
								url: url,
								active: route.children.length === 0,
							});
						}
					}

					if (route.firstChild) {
						buildBreadcrumbs(route.firstChild, url);
					}
				};

				const firstChild = this.route.root.firstChild;
				if (firstChild) {
					buildBreadcrumbs(firstChild);

					const lastCrumb = this.crumbs[this.crumbs.length - 1];
					if (lastCrumb && lastCrumb.url !== '/home' && lastCrumb.url !== '/login') {
						this.showBreadcrumb = true;
					}
				}
			}
		});
	}
}
