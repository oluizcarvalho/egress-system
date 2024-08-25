import {
	AfterViewChecked,
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
import { SelectOption } from '../../models/select.model';

@Component({
	selector: 'app-multi-select',
	standalone: true,
	imports: [],
	templateUrl: './multi-select.component.html',
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MultiSelectComponent), multi: true }],
})
export class MultiSelectComponent implements AfterViewInit, AfterViewChecked, ControlValueAccessor {
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input() placeholder = 'Selecione o item';
	@Input() hint: string = '';
	@Input({ transform: booleanAttribute }) disabled: boolean = false;
	@Input() data: SelectOption[] = [];
	@Output() selectedEvent = new EventEmitter<Array<string>>();

	instance: any;

	protected _value: Array<string>;

	get value(): Array<string> {
		return this._value;
	}

	set value(val: Array<string>) {
		if (this.disabled) return;
		if (!Array.isArray(val)) {
			val = [val];
		}
		this._value = val;
		this._change(val);
		this.selectedEvent.emit(val);
	}

	protected _touched: () => void = () => void undefined;

	protected _change: (value: Array<string>) => void = () => void undefined;

	private brSelect = inject(ElementRef);
	private renderer = inject(Renderer2);

	constructor() {}

	ngAfterViewInit(): void {
		this.instance = new BRSelect('br-select', this.brSelect.nativeElement.querySelector('.br-select'));
		this._populateItensSelected();
	}

	private _populateItensSelected(): void {
		const values = this.value;
		if (Array.isArray(values) && values.length > 0) {
			values.forEach(value => {
				if (value)
					this.renderer.setAttribute(
						this.brSelect.nativeElement.querySelector(`input[type="checkbox"][value="${value}"]`),
						'checked',
						''
					);
			});
		}
		document.body.click();
	}

	setSelected() {
		this.value = this.instance.selectedValue;
	}

	writeValue(value: Array<string>): void {
		this.value = value;
	}

	setDisabledState(disabled: boolean): void {
		this.disabled = disabled;
	}

	registerOnChange(fn: (value: Array<string>) => void): void {
		this._change = fn;
	}

	registerOnTouched(fn: () => void): void {
		this._touched = fn;
	}

	public onBlur(): void {
		this._touched();
	}

	ngAfterViewChecked() {
		if (this.instance) {
			this.instance.resetOptionsList();
		}
	}
}
