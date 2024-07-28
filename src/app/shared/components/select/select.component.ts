import {
	afterNextRender,
	AfterViewChecked,
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import BRSelect from '@govbr-ds/core/dist/components/select/select';

export type SelectOptions = Array<SelectOption>;

export interface SelectOption {
	value: string | number;
	text: string;
}

@Component({
	selector: 'app-select',
	standalone: true,
	imports: [],
	templateUrl: './select.component.html',
})
export class SelectComponent implements AfterViewChecked {
	@Input({ required: true }) label: string = '';
	@Input({ required: true }) id: string = '';
	@Input() placeholder = 'Selecione o item';
	@Input() hint: string = '';
	@Input({ transform: booleanAttribute }) multiple: boolean = false;
	@Input({ transform: booleanAttribute }) disabled: boolean = false;
	@Input() data: SelectOption[] = [];
	@Output() selectedEvent = new EventEmitter<SelectOption>();

	instance: any;
	selected: Array<SelectOption> | SelectOption;

	constructor(private brSelect: ElementRef) {
		afterNextRender(() => {
			this.instance = new BRSelect('br-select', this.brSelect.nativeElement.querySelector('.br-select'));
		});
	}

	setSelected() {
		this.selectedEvent.emit(this.instance.selected);
	}

	getSelected() {
		this.selected = this.instance.selected;
	}

	ngAfterViewChecked() {
		if (this.instance) {
			this.instance.resetOptionsList();
		}
	}
}
