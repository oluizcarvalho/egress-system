import { Component, inject } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { InputComponent } from '../../shared/components/input/input.component';
import { FeedbackDirective } from '../../shared/directives/feedback.directive';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { SelectOptions } from '../../shared/types/select.type';
import { MultiSelectComponent } from '../../shared/components/multi-select/multi-select.component';
import { DateTimePickerComponent } from '../../shared/components/date-time-picker/date-time-picker.component';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { Columns, TableComponent } from '../../shared/components/table/table.component';
import { SwitchComponent } from '../../shared/components/switch/switch.component';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';
import {CollapseItemComponent} from "../../shared/components/collapse-item/collapse-item.component";

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		ButtonDirective,
		InputComponent,
		FeedbackDirective,
		ReactiveFormsModule,
		TextareaComponent,
		SelectComponent,
		MultiSelectComponent,
		DateTimePickerComponent,
		PaginatorComponent,
		TableComponent,
		SwitchComponent,
		FormsModule,
		CheckboxComponent,
		CollapseItemComponent,
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	options: SelectOptions = [
		{ value: '1', text: 'Option 1' },
		{ value: '2', text: 'Option 2' },
		{ value: '3', text: 'Option 3' },
	];
	inputControl = new FormControl({ disabled: false, value: '' }, [Validators.required]);
	selectControl = new FormControl({ disabled: true, value: '' }, [Validators.required]);
	multiSelectControl = new FormControl(['1', '2'], [Validators.required]);
	datePickerControl = new FormControl({ value: '', disabled: true }, [Validators.required]);
	columns: Columns[] = [
		{
			columnDef: 'name',
			header: 'Cliente',
			cell: () => `Luiz Carvalho`,
		},
		{
			columnDef: 'document',
			header: 'CPF/CNPJ',
			cell: () => `122.809.706-27`,
		},
		{
			columnDef: 'email',
			header: 'E-MAIL',
			type: 'icon',
			cell: () => `fas fa-eye`,
			value: () => console.log('chamou'),
		},
	];
	data = [
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
		{ teste: 1 },
	];

	checked = false;

	constructor() {
		this.multiSelectControl.valueChanges.subscribe(value => {
			console.log(value);
		});
		this.inputControl.valueChanges.subscribe(value => {
			console.log(value);
		});
		this.datePickerControl.valueChanges.subscribe(value => {
			console.log(value);
		});
	}
}
