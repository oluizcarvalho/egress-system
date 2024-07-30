import { Component } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { InputComponent } from '../../shared/components/input/input.component';
import { FeedbackDirective } from '../../shared/directives/feedback.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { SelectComponent } from '../../shared/components/select/select.component';
import { SelectOptions } from '../../shared/types/select.type';
import { MultiSelectComponent } from '../../shared/components/multi-select/multi-select.component';
import { DateTimePickerComponent } from '../../shared/components/date-time-picker/date-time-picker.component';

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
	inputControl = new FormControl('', [Validators.required]);
	selectControl = new FormControl({ disabled: true, value: '' }, [Validators.required]);
	multiSelectControl = new FormControl(['1', '2'], [Validators.required]);
	datePickerControl = new FormControl({ value: '', disabled: false }, [Validators.required]);

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
