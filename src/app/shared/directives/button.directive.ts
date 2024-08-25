import { booleanAttribute, Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { SizeOptions } from '../types/size.type';

@Directive({
	selector: 'button[br-button], a[br-button]',
	host: {
		'[class.primary]': 'color === "primary"',
		'[class.secondary]': 'color === "secondary"',
		'[class.tertiary]': 'color === "tertiary"',
		'[class.small]': 'size === "small"',
		'[class.medium]': 'size === "medium"',
		'[class.large]': 'size === "large"',
		'[class.disabled]': 'disabled',
		'[class.block]': 'block',
		'[class.loading]': 'loading',
		'[class.active]': 'active',
		'[class.circle]': 'circle',
		'[class.dark-mode]': 'inverted',
		'[disabled]': 'disabled',
		'[class.br-button]': 'true',
		role: 'button',
	},
	inputs: ['color', 'size', 'disabled', 'block', 'loading', 'active', 'circle', 'inverted'],
	standalone: true,
})
export class ButtonDirective implements OnInit {
	@Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	@Input() size: SizeOptions = 'medium';
	@Input() icon = '';
	@Input() fontSet = 'fas';
	@Input() positionIcon: 'before' | 'after' = 'before';
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) block = false;
	@Input({ transform: booleanAttribute }) loading = false;
	@Input({ transform: booleanAttribute }) active = false;
	@Input({ transform: booleanAttribute }) circle = false;
	@Input({ transform: booleanAttribute }) inverted = false;

	public el = inject(ElementRef);
	public renderer = inject(Renderer2);

	constructor() {}

	ngOnInit(): void {
		this.setIcon();
	}

	setIcon(): void {
		if (!this.icon) return;

		const icon = this.createIcon();

		if (this.positionIcon === 'after') {
			this.renderer.appendChild(this.el.nativeElement, icon);
		} else {
			this.renderer.insertBefore(this.el.nativeElement, icon, this.el.nativeElement.firstChild);
		}
	}

	createIcon(): HTMLElement {
		const icon = this.renderer.createElement('i');

		this.renderer.addClass(icon, this.fontSet);
		this.renderer.addClass(icon, this.icon);
		this.renderer.setAttribute(icon, 'aria-hidden', 'true');
		return icon;
	}
}
