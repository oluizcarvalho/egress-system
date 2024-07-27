import {
	afterNextRender,
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	numberAttribute,
	Output,
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
	AbstractControl,
	ControlValueAccessor,
	FormsModule,
	NG_VALUE_ACCESSOR,
	ValidationErrors,
	Validator,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-textarea',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, FormsModule],
	templateUrl: './textarea.component.html',
	styleUrl: './textarea.component.scss',
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextareaComponent), multi: true }],
})
export class TextareaComponent implements ControlValueAccessor, Validator {
	@Input({ required: true }) label = '';
	@Input({ required: true }) id: string;
	@Input() name = '';
	@Input() size: 'small' | 'medium' | 'large' = 'medium';
	@Input() placeholder = '';
	@Input() hint = '';
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) readonly = false;
	@Input({ transform: booleanAttribute }) showLimit = true;
	@Input({ transform: booleanAttribute }) showCounter = true;
	@Input({ transform: numberAttribute }) maxLength: number;

	get required(): boolean {
		return this._required ?? this.control?.hasValidator(Validators.required) ?? false;
	}

	@Input({ transform: booleanAttribute })
	set required(value: boolean) {
		this._required = value;
	}

	protected _required: boolean | undefined;

	@Output() change = new EventEmitter<string>();

	public control?: AbstractControl;

	protected _value = '';

	get value(): string {
		return this._value;
	}

	set value(val: string) {
		if (this.disabled) return;
		this._value = val;
		this._change(val);
	}

	protected _touched: () => void = () => void undefined;

	protected _validate: () => void = () => void undefined;

	protected _change: (value: string) => void = () => void undefined;

	validate(control: AbstractControl): ValidationErrors | null {
		this.control = control;
		return control.errors;
	}

	writeValue(value: string): void {
		this.value = value;
	}

	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}

	registerOnChange(fn: (value: string) => void): void {
		this._change = fn;
	}

	registerOnTouched(fn: () => void): void {
		this._touched = fn;
	}

	registerOnValidatorChange?(fn: () => void): void {
		this._validate = fn;
	}

	onChange(event: Event) {
		if (!this.disabled && (event.target as HTMLTextAreaElement).value) {
			this.change.emit(this.value);
		}
	}
}
