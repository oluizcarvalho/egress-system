import { afterNextRender, AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LIST_MENU } from './const/list-menu';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent {
	list = LIST_MENU;
	instance: unknown;

	constructor() {
		afterNextRender(() => {
			this.instance = new BRMenu('br-menu', document.querySelector('.br-menu'));
		});
	}
}
