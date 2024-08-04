import {
	afterNextRender,
	booleanAttribute,
	Component,
	ElementRef,
	forwardRef,
	inject,
	Input,
	OnInit,
} from '@angular/core';
import BRDateTimePicker from '@govbr-ds/core/dist/components/datetimepicker/datetimepicker';
import dayjs from 'dayjs';
import { NgClass } from '@angular/common';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

export const TYPE_DATE_PICKER = {
	date: 'text',
	time: 'time',
	date_time: 'datetime-local',
};

export type TypesDatePicker = keyof typeof TYPE_DATE_PICKER;

@Component({
	selector: 'app-date-time-picker',
	standalone: true,
	imports: [NgClass, FormsModule],
	templateUrl: './date-time-picker.component.html',
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimePickerComponent), multi: true }],
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor {
	@Input({ required: true }) label = '';
	@Input({ required: true }) id: string;
	@Input({ transform: booleanAttribute }) range = false;
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input() minDate: Date | string;
	@Input() maxDate: Date | string;
	@Input() placeholder = '';
	@Input() hint = '';

	get type(): string {
		return TYPE_DATE_PICKER[this._type];
	}

	@Input()
	set type(value: TypesDatePicker) {
		this._type = value;
	}

	private _type: TypesDatePicker = 'date';

	get required(): boolean {
		return this._required ?? this.control?.hasValidator(Validators.required) ?? false;
	}

	@Input({ transform: booleanAttribute })
	set required(value: boolean) {
		this._required = value;
	}

	public control?: AbstractControl;

	protected _required: boolean | undefined;

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

	protected readonly TypeDatePicker = TYPE_DATE_PICKER;
	instance: unknown;

	private brDatePicker = inject(ElementRef);

	constructor() {
		afterNextRender(() => {
			let dates = {};
			if (this.maxDate) {
				dates = {
					maxDate: this.normalizeDate(this.maxDate),
				};
			}
			if (this.minDate) {
				dates = {
					...dates,
					minDate: this.normalizeDate(this.minDate),
				};
			}
			this.instance = new BRDateTimePicker(
				'br-datetimepicker',
				this.brDatePicker.nativeElement.querySelector('.br-datetimepicker'),
				{
					...dates,
				}
			);
		});
	}

	normalizeDate(date: string | Date): string {
		if (date instanceof Date) {
			return dayjs(date).format('DD/MM/YYY');
		}
		if (!date) return date;
		const [day, month, year] = date.split('/');
		return dayjs(`${year}-${month}-${day}`).format('DD/MM/YYYY');
	}

	ngOnInit(): void {
		this.mountPlaceholder();
	}

	mountPlaceholder() {
		if (this.placeholder) return;

		if (this.range) {
			this.placeholder =
				this.type === TYPE_DATE_PICKER.date_time
					? 'exemplo: 02/02/2024 02:02 até 03/02/2025 02:02'
					: 'exemplo: 02/02/2024 até 03/02/2025';
		} else if (this.type === TYPE_DATE_PICKER.date) {
			this.placeholder = 'exemplo: 02/02/2024';
		} else if (this.type === TYPE_DATE_PICKER.time) {
			this.placeholder = 'exemplo: 02:40';
		} else {
			this.placeholder = 'exemplo: 02/02/2024 02:02';
		}
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
}
