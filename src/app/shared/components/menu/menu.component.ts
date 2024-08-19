import { afterNextRender, Component, ElementRef, inject, signal } from '@angular/core';
import { LIST_MENU_BY_ROLE } from './const/list-menu';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import BRMenu from '@govbr-ds/core/dist/components/menu/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Role } from '../../../features/login/models/credentials.model';
import { AuthService } from '../../../core/auth/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IMenu } from './types/menu.type';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, RouterLink, RouterLinkActive],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
})
export class MenuComponent {
	list: IMenu[] = [];
	instance: unknown;
	isMobile = signal<boolean>(false);

	private _brMenu = inject(ElementRef);
	private _authService = inject(AuthService);
	private _breakpointObserver = inject(BreakpointObserver);

	constructor() {
		this._breakpointObserver
			.observe([Breakpoints.Handset, Breakpoints.Web, Breakpoints.Tablet])
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this.isMobile.set(this._breakpointObserver.isMatched(Breakpoints.Handset));
			});

		afterNextRender(() => {
			this.instance = new BRMenu('br-menu', document.querySelector('.br-menu'));

			if (this._authService.isPublic()) {
				this.closeMenu();
			}
		});

		this._authService.credentials$.pipe(takeUntilDestroyed()).subscribe(result => {
			if (!result) {
				this.list = LIST_MENU_BY_ROLE.get(Role.PUBLIC);
			} else {
				this.list = LIST_MENU_BY_ROLE.get(result.role || Role.PUBLIC);
			}
		});
	}

	closeMenu() {
		this._brMenu.nativeElement.querySelector('[data-dismiss="menu"]').click();
	}

	closeMenuIfMobile() {
		if (this.isMobile()) {
			this.closeMenu();
		}
	}
}
