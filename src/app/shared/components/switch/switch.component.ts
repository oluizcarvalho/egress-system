import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { SizeOptions } from '../../types/size.type';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-switch',
	standalone: true,
	imports: [NgClass],
	templateUrl: './switch.component.html',
})
export class SwitchComponent {
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input() hintActive: string = '';
	@Input() hintInactive: string = '';
	@Input() size: SizeOptions = 'medium';
	@Input({ transform: booleanAttribute, alias: 'showIcon' }) icon = false;
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) checked = false;
	@Input() position: 'left' | 'right' | 'top' = 'left';

	private _value = this.checked;

	@Input()
	get value(): boolean {
		return this._value;
	}

	set value(val: boolean) {
		if (this.disabled) return;
		this._value = val;
		this.valueChange.emit(val);
	}

	@Output() valueChange = new EventEmitter<boolean>();

	toggle() {
		this.value = !this.value;
	}
}
