import { booleanAttribute, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [],
	templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
	@Input() state: 'valid' | 'invalid' | '' = '';
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) checked = false;

	@HostBinding('class') class = 'br-checkbox' + (this.state ? ` ${this.state}` : '');
	@HostBinding('class.disabled') get disabledClass() {
		return this.disabled;
	}

	private _value = this.checked;

	@Input()
	get value(): boolean {
		return this._value;
	}

	set value(val: boolean) {
		if (this.disabled) return;
		this._value = val;
	}

	@Output() valueChange = new EventEmitter<boolean>();

	onChangeCheck(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target) this.value = target.checked;
		this.valueChange.emit(this.value);
	}
}
