import {AfterContentInit, afterNextRender, afterRender, Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import { MenuStateService } from '../menu/state/menu-state.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterContentInit {
	menuState = inject(MenuStateService);

	constructor() {
    afterNextRender(() => {
			const header = document.getElementById('header');
			if (!header) return;

			const button = header.shadowRoot.querySelector('#navigation');
			if (button) {
				button.addEventListener('click', () => {
					this.menuState.expanded.set(!this.menuState.expanded());
				});
			}
		});
	}

	ngAfterContentInit(): void {}
}
