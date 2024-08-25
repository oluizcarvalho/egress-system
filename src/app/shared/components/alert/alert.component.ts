import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { GetIconByStatePipe } from '../../pipes/get-icon-by-state.pipe';
import { AlertEvent, AlertService } from './alert.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-alert',
	standalone: true,
	imports: [NgClass, GetIconByStatePipe],
	host: {
		class: 'alert-container',
	},
	templateUrl: './alert.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('scaleFadeIn', [
			transition(':enter', [
				style({
					transform: 'scale(0.8)',
					opacity: 0,
				}),
				animate(
					`500ms cubic-bezier(0.35, 0, 0.25, 1)`,
					style({
						transform: 'scale(1)',
						opacity: 1,
					})
				),
			]),
			transition(':leave', [style({ opacity: 1 }), animate(`300ms ease-in`, style({ opacity: 0 }))]),
		]),
	],
})
export class AlertComponent implements OnInit {
	alert = signal<AlertEvent | null>(null);
	private alertService = inject(AlertService);

	constructor() {}

	ngOnInit(): void {
		this.alertService.alertEvents$.subscribe(event => {
			this.alert.set(event);
			if (event.autoClose) this.registerCloseTime(event);
		});
		this.alertService.clearEvent$.subscribe(() => this.onHide());
	}

	public onHide(): void {
		this.alert.set(null);
	}

	protected registerCloseTime(event: AlertEvent): void {
		event.closeTimeId = setTimeout(() => this.onHide(), event.duration);
	}

	public onMouseEnter(event: AlertEvent): void {
		if (!event.autoClose) return;
		clearTimeout(event.closeTimeId);
	}

	public onMouseDown(event: AlertEvent): void {
		if (!event.autoClose) return;
		this.registerCloseTime(event);
	}
}
