import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { StorageBase } from '../storage-base';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
	providedIn: 'root',
})
export class SessionStorageService extends StorageBase {
	constructor(@Inject(PLATFORM_ID) private platform: Object) {
		super(platform);
		if (isPlatformBrowser(this.platform)) {
			this.ourStorage = sessionStorage;
		}
	}
}
