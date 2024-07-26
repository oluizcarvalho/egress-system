import { booleanAttribute, Directive, Input } from '@angular/core';

@Directive({
	selector: '[appButton]',
	host: {
		'[class.primary]': 'type === "primary"',
		'[class.secondary]': 'type === "secondary"',
		'[class.tertiary]': 'type === "tertiary"',
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
  inputs: ['type', 'size', 'disabled', 'block', 'loading', 'active', 'circle', 'inverted'],
	standalone: true,
})
export class ButtonDirective {
	@Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
	@Input() size: 'small' | 'medium' | 'large' = 'medium';
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) block = false;
	@Input({ transform: booleanAttribute }) loading = false;
	@Input({ transform: booleanAttribute }) active = false;
	@Input({ transform: booleanAttribute }) circle = false;
	@Input({ transform: booleanAttribute }) inverted = false;
	constructor() {}
}
