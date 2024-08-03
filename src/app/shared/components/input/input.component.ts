import {
	afterNextRender,
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	Input,
	Output,
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import BRInput from '@govbr-ds/core/dist/components/input/input';
import { SizeOptions } from '../../types/size.type';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [NgClass, NgTemplateOutlet, FormsModule],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true }],
})
export class InputComponent implements ControlValueAccessor {
	@Input({ required: true }) label = '';
	@Input({ required: true }) id: string;
	@Input() name = '';
	@Input() size: SizeOptions = 'medium';
	@Input() type: 'text' | 'password' | 'email' | 'number' = 'text';
	@Input() state: 'success' | 'danger' | 'info' | 'warning' | '' = '';
	@Input() placeholder = '';
	@Input() hint = '';
	@Input() autocomplete = '';
	@Input() feedback = '';
	@Input({ transform: booleanAttribute }) hasButton = false;
	@Input({ transform: booleanAttribute }) highlight = false;
	@Input({ transform: booleanAttribute }) readonly = false;
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) hasIcon = false;

	get required(): boolean {
		return this._required ?? this.control?.hasValidator(Validators.required) ?? false;
	}

	@Input({ transform: booleanAttribute })
	set required(value: boolean) {
		this._required = value;
	}

	protected _required: boolean | undefined;

	@Input() icon = 'fas fa-search';
	@Input() maxLength: number;
	@Input() min: number | string;
	@Input() max: number | string;
	@Input() pattern: string;
	@Input() step: number;

	@Output() change = new EventEmitter<string>();
	@Output() clickButton = new EventEmitter<void>();

	public control?: AbstractControl;

	protected _value: string;

	get value(): string {
		return this._value;
	}

	set value(val: string) {
		if (this.disabled) return;
		this._value = val;
		this._change(val);
	}

	protected _touched: () => void = () => void undefined;

	protected _change: (value: string) => void = () => void undefined;

	instance: unknown;

	constructor(private brInput: ElementRef) {
		afterNextRender(() => {
			this.instance = new BRInput('br-input', this.brInput.nativeElement.querySelector('.br-input'));
		});
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

	public onBlur(): void {
		this._touched();
	}

	onChangeInput(event: Event) {
		if (!this.disabled && (event.target as HTMLInputElement).value) {
			this.change.emit(this.value);
		}
	}

	onClickButton(event: MouseEvent) {
		event.stopPropagation();
		if (!this.disabled) {
			this.clickButton.emit();
		}
	}
}
