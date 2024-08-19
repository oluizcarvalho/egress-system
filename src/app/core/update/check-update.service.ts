import { ApplicationRef, inject, Injectable, isDevMode } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, first, interval, merge, tap } from 'rxjs';
import { minutesToMsConverterUtils } from '../../shared/utils/minutes-to-ms-converter.utils';

@Injectable({
	providedIn: 'root',
})
export class CheckUpdateService {
	readonly appRef = inject(ApplicationRef);
	readonly swUpdate = inject(SwUpdate);

	constructor() {
		if (isDevMode()) return;

		const appIsStable$ = this.appRef.isStable.pipe(
			first(isStable => isStable === true),
			tap(() => {
				console.log('App is stable now');
				this.setPromptUpdate();
			})
		);
		const everyTwentyMinutes$ = interval(minutesToMsConverterUtils(20));
		const everyTwentyMinutesOrAppIsStable$ = merge(appIsStable$, everyTwentyMinutes$);

		everyTwentyMinutesOrAppIsStable$.subscribe(async () => {
			await this.verifyUpdate();
		});
	}

	private async verifyUpdate() {
		try {
			const updateFound = await this.swUpdate.checkForUpdate();
			console.log(updateFound ? 'Nova versão disponível' : 'Sem novas versões');
		} catch (err) {
			console.error('Failed to check for updates:', err);
		}
	}

	private setPromptUpdate(): void {
		this.swUpdate.versionUpdates
			.pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
			.subscribe(() => {
				window.location.reload();
			});
	}
}
