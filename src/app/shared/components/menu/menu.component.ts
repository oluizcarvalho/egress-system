import { AfterContentInit, afterNextRender, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { LIST_MENU } from './const/list-menu';
import { MenuStateService } from './state/menu-state.service';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgClass],
	host: {
		'[class.col-xl-2]': 'state.expanded()',
		'[class.col-lg-3]': 'state.expanded()',
		'[class.col-md-4]': 'state.expanded()',
		'[class.col-sm-5]': 'state.expanded()',
    '[class.d-none]': '!state.expanded()',
	},
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent implements AfterContentInit {
	list = LIST_MENU;
	state = inject(MenuStateService);
	value = false;

	constructor() {
		afterNextRender(() => {
			const menu = document.getElementById('main-navigation');
			console.log(menu);
			if (!menu) return;

			const navigation = menu.shadowRoot.getElementById('main-navigation');
			this.subscribeEvent(navigation);
		});
	}

	ngAfterContentInit(): void {}

	private subscribeEvent(navigation: HTMLElement) {
		console.log(navigation);
		this.state.expanded$.pipe().subscribe({
			next: value => {
				console.log(value);
				value ? navigation.classList.add('active') : navigation.classList.remove('active');
			},
		});
	}
}
