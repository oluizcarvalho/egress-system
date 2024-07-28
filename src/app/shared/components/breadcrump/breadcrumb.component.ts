import { afterNextRender, Component, inject, OnInit } from '@angular/core';
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
})
export class BreadcrumbComponent implements OnInit {
	instance: unknown;
	crumbs: Array<{ label: string; url: string; home?: boolean; active?: boolean }> = [];
	showBreadcrumb = false;

	router = inject(Router);
	route = inject(ActivatedRoute);

	constructor() {
		afterNextRender(() => {
			this.instance = new BRBreadcrumb('br-breadcrumb', document.querySelector('.br-breadcrumb'));
		});
	}

	ngOnInit(): void {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				const firstChild = this.route.root.firstChild;

				if (firstChild) {
					const currentRoute = firstChild.snapshot;

					this.crumbs = [
						{
							label: 'Página Inicial',
							url: '/',
							home: true,
						},
					];
					this.showBreadcrumb = false;

					if (currentRoute.routeConfig && currentRoute.routeConfig.path !== 'home') {
						this.crumbs.push({
							label: currentRoute.data['breadCrumb'],
							url: currentRoute.routeConfig.path,
							active: true,
						});

						this.showBreadcrumb = true;
					}
				}
			}
		});
	}
}
