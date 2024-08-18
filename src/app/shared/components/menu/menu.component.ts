import { afterNextRender, Component, ElementRef, inject, OnInit } from '@angular/core';
import { LIST_MENU_BY_ROLE } from './const/list-menu';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';
import { RouterLink } from '@angular/router';
import { Role } from '../../../features/login/models/credentials.model';
import { AuthService } from '../../../core/auth/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IMenu } from './types/menu.type';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, RouterLink],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent {
	list: IMenu[] = [];
	instance: unknown;
	authService = inject(AuthService);
	private brMenu = inject(ElementRef);

	constructor() {
		afterNextRender(() => {
			this.instance = new BRMenu('br-menu', document.querySelector('.br-menu'));
			if (!this.authService.credentials() || this.authService.credentials().role === Role.PUBLIC) {
				this.brMenu.nativeElement.querySelector('[data-dismiss="menu"]').click();
			}
		});

		this.authService.credentials$.pipe(takeUntilDestroyed()).subscribe(result => {
			if (!result) {
				this.list = LIST_MENU_BY_ROLE.get(Role.PUBLIC);
			} else {
				this.list = LIST_MENU_BY_ROLE.get(result.role || Role.PUBLIC);
			}
		});
	}
}
