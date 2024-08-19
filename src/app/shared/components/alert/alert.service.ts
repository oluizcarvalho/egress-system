import { Injectable } from '@angular/core';
import { StateType } from '../../utils/get-icon-by-state.utils';
import { Subject } from 'rxjs';

export type AlertEvent = {
	type: StateType;
	message: string;
	title?: string;
	duration?: number;
	autoClose?: boolean;
	closeTimeId?: any;
	closable?: boolean;
};

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	private readonly _alert = new Subject<AlertEvent>();
	private readonly _clear = new Subject<void>();

	public get alertEvents$() {
		return this._alert.asObservable();
	}

	private set alertEvents(value: AlertEvent) {
		this._alert.next(value);
	}

	public get clearEvent$() {
		return this._clear.asObservable();
	}

	public showAlert(
		type: StateType,
		message: string,
		title?: string,
		autoClose = true,
		duration = 4000,
		closable = true,
		delay = 0
	): void {
		if (delay) {
			setTimeout(() => {
				this.alertEvents = { type, message, title, duration, autoClose, closable };
			}, delay);
		} else {
			this.alertEvents = { type, message, title, duration, autoClose, closable };
		}
	}

	public clearAlerts(): void {
		this._clear.next();
	}
}
