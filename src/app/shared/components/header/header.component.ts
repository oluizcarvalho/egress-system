import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../../core/auth/services/auth.service';
import { CdkMenuModule } from '@angular/cdk/menu';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgOptimizedImage, CdkMenuModule, RouterLink],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	hideNavbar = input<boolean>(true);
	authService = inject(AuthService);
	user = this.authService.credentials;

	constructor() {}

	logout() {
		this.authService.logout();
	}
}
