import {
	AfterViewInit,
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	forwardRef,
	inject,
	Input,
	Output,
	Renderer2,
} from '@angular/core';
import BRSelect from '@govbr-ds/core/dist/components/select/select';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptions } from '../../models/select.model';

@Component({
	selector: 'app-select',
	standalone: true,
	imports: [],
	templateUrl: './select.component.html',
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }],
})
export class SelectComponent implements AfterViewInit, ControlValueAccessor {
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input() placeholder = 'Selecione o item';
	@Input() hint: string = '';
	@Input({ transform: booleanAttribute }) disabled: boolean = false;
	@Input() options: SelectOptions = [];
	@Output() selectedEvent = new EventEmitter<string>();

	instance: any;

	protected _value: string;

	get value(): string {
		return this._value;
	}

	set value(val: string) {
		if (this.disabled) return;
		this._value = val;
		this._change(val);
		this.selectedEvent.emit(val);
	}

	protected _touched: () => void = () => void undefined;

	protected _change: (value: string) => void = () => void undefined;

	brSelect = inject(ElementRef);
	renderer = inject(Renderer2);

	constructor() {}

	ngAfterViewInit(): void {
		this.instance = new BRSelect('br-select', this.brSelect.nativeElement.querySelector('.br-select'));
		this._populateItemSelected();

		if (this.instance) {
			this.instance.resetOptionsList();
		}
	}

	private _populateItemSelected(): void {
		if (this.value) {
			const optionValue = this.brSelect.nativeElement.querySelector(`div.br-item[data-value="${this.value}`);
			if (optionValue) this.renderer.addClass(optionValue, 'selected');
		}
		document.body.click();
	}

	setSelected() {
		this.value = this.instance.selectedValue;
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

	onBlur(): void {
		this._touched();
	}
}
