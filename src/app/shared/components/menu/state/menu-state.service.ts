import { Injectable, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
	providedIn: 'root',
})
export class MenuStateService {
	private _expanded = signal(true);
	public expanded$ = toObservable(this.expanded);
	constructor() {}

	get expanded(): WritableSignal<boolean> {
		return this._expanded;
	}

	set expanded(value: WritableSignal<boolean>) {
		this._expanded = value;
	}
}
