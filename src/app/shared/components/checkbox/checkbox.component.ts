import {
	AfterViewInit,
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	Output,
} from '@angular/core';
import { NgClass } from '@angular/common';
import BRCheckbox from '@govbr-ds/core/dist/components/checkbox/checkbox';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [NgClass],
	templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements AfterViewInit {
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input({ transform: booleanAttribute }) disabled = false;
	@Input({ transform: booleanAttribute }) checked = false;
	@Input() state: 'valid' | 'invalid' | '' = '';

	private brCheckbox = inject(ElementRef);
	instance: unknown;

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

	constructor() {}

	ngAfterViewInit(): void {
		this.instance = new BRCheckbox('brCheckbox', this.brCheckbox.nativeElement.querySelector('.br-checkbox'));
	}
}
