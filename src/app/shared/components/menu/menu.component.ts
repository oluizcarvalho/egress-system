import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LIST_MENU } from './const/list-menu';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent implements AfterViewInit {
	list = LIST_MENU;
	instance: any;

	constructor() {}

	ngAfterViewInit() {
		this.instance = new BRMenu('.br-menu', document.querySelector('.br-menu'));
	}
}
