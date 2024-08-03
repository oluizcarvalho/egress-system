import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpRequest,
	HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoadingService } from '../../shared/components/loading/loading.service';
import { AlertService } from '../../shared/components/alert/alert.service';
import { StateType } from '../../shared/utils/get-icon-by-state';

export const KEY_HIDE_NOTIFICATION = 'hideNotification';
export const KEY_NO_AUTH = 'noAuth';
export const KEY_NO_LOADING = 'noLoading';

export const globalInterceptor: HttpInterceptorFn = (
	req: HttpRequest<any>,
	next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
	const loadingService = inject(LoadingService);

	let clonedRequest = req;
	if (!clonedRequest.params.has(KEY_NO_LOADING)) {
		loadingService.setLoading(true, clonedRequest.url);
	} else {
		clonedRequest = clonedRequest.clone({
			params: clonedRequest.params.delete(KEY_NO_LOADING),
		});
	}

	if (clonedRequest.params.has(KEY_NO_AUTH)) {
		clonedRequest = clonedRequest.clone({
			params: clonedRequest.params.delete(KEY_NO_AUTH),
		});
	}
	// else if (this._authService.isAuthenticated() && !clonedRequest.url.includes('assets')) {
	// 	clonedRequest = clonedRequest.clone({
	// 		setHeaders: {
	// 			Authorization: `Bearer ${this._authService.credentials?.token}`,
	// 		},
	// 	});
	// }

	if (clonedRequest.params.has(KEY_HIDE_NOTIFICATION)) {
		clonedRequest = clonedRequest.clone({
			params: clonedRequest.params.delete(KEY_HIDE_NOTIFICATION),
		});
		return next(clonedRequest);
	}

	return next(clonedRequest).pipe(
		finalize(() => loadingService.setLoading(false, clonedRequest.url)),
		catchError(error => errorHandler(error))
	);
};

function errorHandler(response: HttpErrorResponse): Observable<HttpEvent<unknown>> {
	let errorMessage: string = '';
	const traceId = response.error?.traceId || '';

	if (response.error && response.error.message) {
		errorMessage = response.error.message;
	}
	switch (response.status) {
		case 0:
			showErrorMessages(errorMessage, traceId, 'Problemas com conexão com o servidor.');
			break;

		case HttpStatusCode.BadRequest:
			showErrorMessages(errorMessage, traceId, 'Ocorreu um erro inesperado de servidor.', 'warning');
			break;

		case HttpStatusCode.Unauthorized:
			showErrorMessages(errorMessage, traceId, 'Usuário sem acesso, por favor logue novamente!');
			// _authService.logout();
			break;

		case HttpStatusCode.Forbidden:
			showErrorMessages(errorMessage, traceId, 'Acesso negado, você não tem permissão para realizar essa operação!');
			break;

		case HttpStatusCode.NotFound:
			showErrorMessages(errorMessage, traceId, 'Houve algum erro, rota não encontrada.');
			break;

		case HttpStatusCode.PayloadTooLarge:
			showErrorMessages(errorMessage, traceId, 'Os dados enviados são grandes demais.');
			break;

		case HttpStatusCode.UnsupportedMediaType:
			showErrorMessages(errorMessage, traceId, 'Os dados enviados não são suportados.');
			break;

		case HttpStatusCode.TooManyRequests:
			showErrorMessages(errorMessage, traceId, 'Foram feitas muitas requisições em pouco tempo.');
			break;

		default:
			showErrorMessages(errorMessage, traceId, 'Ocorreu um erro inesperado de servidor.');
			break;
	}

	return throwError(() => response);
}

function showErrorMessages(message: string, traceId: string, defaultMessage?: string, type: StateType = 'danger') {
	const alertService = inject(AlertService);
	alertService.showAlert(type, message || defaultMessage, 'Alerta!', true, 5000);
}
