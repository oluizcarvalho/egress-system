import {
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	forwardRef,
	Input,
	Output,
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RadioOptions } from '@shared/models/radio.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-radio',
	standalone: true,
	imports: [NgTemplateOutlet, NgClass],
	templateUrl: './radio.component.html',
	styleUrl: './radio.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioComponent), multi: true }],
})
export class RadioComponent implements ControlValueAccessor {
	@Input() options: RadioOptions = [];
	@Input() label = '';

	@Input() hint = '';
	@Input({ transform: booleanAttribute }) horizontal = false;

	@Input()
	get value(): string | number {
		return this._value;
	}

	set value(val: string | number) {
		this._value = val;
		this.valueChange.emit(val);
		this._change(val);
	}

	private _value: string | number = '';

	@Output() valueChange = new EventEmitter<string | number>();

	protected _touched: () => void = () => void undefined;

	protected _change: (value: string | number) => void = () => void undefined;

	onChange(value: string | number) {
		this.value = value;
	}

	writeValue(obj: string | number): void {
		this.value = obj;
	}

	registerOnChange(fn: (value: string | number) => void): void {
		this._change = fn;
	}

	registerOnTouched(fn: () => void): void {
		this._touched = fn;
	}
}
