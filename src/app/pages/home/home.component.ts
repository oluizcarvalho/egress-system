import { Component } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { InputComponent } from '../../shared/components/input/input.component';
import { FeedbackDirective } from '../../shared/directives/feedback.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ButtonDirective, InputComponent, FeedbackDirective, ReactiveFormsModule, TextareaComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	inputControl = new FormControl('', [Validators.required]);

	constructor() {
		console.log(this.inputControl);
		this.inputControl.valueChanges.subscribe(value => {
			console.log(value);
		});
	}
}
