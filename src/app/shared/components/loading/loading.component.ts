import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
	selector: 'app-loading',
	standalone: true,
	imports: [],
	host: { '[class.overlay-loader]': 'showLoading()', '[class.d-none]': '!showLoading()' },
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
	showLoading = computed(() => !!this.loadingService.loadingSignal());
	loadingService = inject(LoadingService);

	constructor() {}
}
