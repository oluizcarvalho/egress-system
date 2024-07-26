import { afterNextRender, booleanAttribute, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import BRInput from '@govbr-ds/core/dist/components/input/input';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [NgClass],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
})
export class InputComponent {
	@Input({ required: true }) label = '';
	@Input({ required: true }) id: string;
	@Input() size: 'small' | 'medium' | 'large' = 'medium';
	@Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
	@Input() state: 'success' | 'danger' | 'info' | 'warning' | '' = '';
	@Input() placeholder = '';
	@Input() hint = '';
	@Input() feedback = '';
	@Input({ transform: booleanAttribute }) hasButton = false;
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) hasIcon = false;
	@Input() icon = 'fas fa-search';
	@Output() clickButton = new EventEmitter<void>();

	instance: unknown;

	constructor(private brInput: ElementRef) {
		afterNextRender(() => {
			this.instance = new BRInput('.br-input', this.brInput.nativeElement.querySelector('.br-input'));
		});
	}
}
