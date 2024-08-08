import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs/operators';

export const KEY_NO_LOADING = 'noLoading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
	let clonedRequest = req;
	const loadingService = inject(LoadingService);

	if (!clonedRequest.params.has(KEY_NO_LOADING)) {
		loadingService.setLoading(true, clonedRequest.url);
	} else {
		clonedRequest = clonedRequest.clone({
			params: clonedRequest.params.delete(KEY_NO_LOADING),
		});
	}

	return next(req).pipe(finalize(() => loadingService.setLoading(false, clonedRequest.url)));
};
