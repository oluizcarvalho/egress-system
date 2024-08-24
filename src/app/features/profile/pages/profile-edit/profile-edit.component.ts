import { Component } from '@angular/core';
import { ItemInfoComponent } from '../../../../shared/components/item-info/item-info.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { profileMock } from '../../mocks/profile.mock';
import { ButtonDirective } from '../../../../shared/directives/button.directive';
import { FeedbackDirective } from '../../../../shared/directives/feedback.directive';

@Component({
	selector: 'app-profile-edit',
	standalone: true,
	imports: [ItemInfoComponent, InputComponent, ReactiveFormsModule, ButtonDirective, FeedbackDirective],
	templateUrl: './profile-edit.component.html',
	styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
	form: FormGroup;
	data = profileMock;

	constructor() {
		this.form = new FormGroup({
			name: new FormControl({ value: this.data.name, disabled: true }, Validators.required),
			cpf: new FormControl({ value: this.data.cpf, disabled: true }, Validators.required),
			email: new FormControl(this.data.email, [Validators.required, Validators.email]),
			secondaryEmail: new FormControl(this.data.secondaryEmail, [Validators.email]),
			phone: new FormControl(this.data.phone, Validators.required),
			secondaryPhone: new FormControl(this.data.secondaryPhone),
			lattesLink: new FormControl(this.data.lattesLink),
			orcidLink: new FormControl(this.data.orcidLink),
			linkedinLink: new FormControl(this.data.linkedinLink),
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			// Handle form submission
			console.log(this.form.value);
		}
		alert('Perfil atualizado com sucesso!');
	}
}
