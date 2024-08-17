import { Inject, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from '../../../shared/services/storage';
import { Credentials } from '../../../features/login/models/credentials.model';
import { isPlatformBrowser } from '@angular/common';

const KEY_STORAGE = 'credentials';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private localStorage = inject(LocalStorageService);
	private router = inject(Router);
	credentials = signal<Credentials | null>(null);

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		if (isPlatformBrowser(this.platformId)) {
			this.credentials.set(this.localStorage.getParseItem<Credentials>(KEY_STORAGE));
		}
	}

	setCredentials(credentials: Credentials): void {
		this.credentials.set(credentials);

		this.localStorage.setItem(KEY_STORAGE, credentials);
	}

	logout(redirect = true): void {
		this.credentials.set(null);

		this.localStorage.removeItem(KEY_STORAGE);

		if (redirect) this.router.navigate(['/login']);
	}

	get isAuthenticated(): boolean {
		return !!this.credentials()?.accessToken;
	}

	canActivate(): boolean {
		if (!this.isAuthenticated) {
			this.router.navigate(['/login']);
		}
		return this.isAuthenticated;
	}
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	return inject(AuthService).canActivate();
};
