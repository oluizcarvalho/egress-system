import { Component } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { InputComponent } from '../../shared/components/input/input.component';
import { FeedbackDirective } from '../../shared/directives/feedback.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { SelectComponent, SelectOptions } from '../../shared/components/select/select.component';

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

	constructor() {
		this.inputControl.valueChanges.subscribe(value => {
			console.log(value);
		});
	}
}
