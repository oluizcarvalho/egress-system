import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, isFormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { TextareaComponent } from '@shared/components/textarea/textarea.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { MultiSelectComponent } from '@shared/components/multi-select/multi-select.component';
import { CheckboxComponent } from '@shared/components/checkbox/checkbox.component';
import { TypeRecipientsEnum } from '@app/features/coordinator/announcements/models/announcements.model';
import { COURSE_LEVEL_OPTIONS_MOCK, COURSE_OPTIONS_MOCK } from '@shared/mocks';
import { FeedbackDirective } from '@shared/directives/feedback.directive';
import { ButtonDirective } from '@shared/directives/button.directive';
import { Dialog } from '@angular/cdk/dialog';
import {
	DialogConfirmComponent,
	DialogConfirmInputs,
} from '@shared/components/dialog-confirm/dialog-confirm.component';
import { Router } from '@angular/router';
import { AlertService } from '@shared/components/alert/alert.service';

@Component({
	selector: 'app-announcement-form',
	standalone: true,
	imports: [
		FormsModule,
		InputComponent,
		TextareaComponent,
		SelectComponent,
		MultiSelectComponent,
		CheckboxComponent,
		ReactiveFormsModule,
		FeedbackDirective,
		ButtonDirective,
	],
	templateUrl: './announcement-form.component.html',
	styleUrl: './announcement-form.component.scss',
})
export class AnnouncementFormComponent {
	form = new FormGroup({
		title: new FormControl('', [Validators.required]),
		content: new FormControl('', [Validators.required]),
		typeRecipients: new FormControl(TypeRecipientsEnum.SPECIFIC),
		courses: new FormControl([]),
		levels: new FormControl([]),
	});
	coursesOptions = COURSE_OPTIONS_MOCK;
	levelsOptions = COURSE_LEVEL_OPTIONS_MOCK;
	checkAll = false;

	private dialog = inject(Dialog);
	private router = inject(Router);
	private alertService = inject(AlertService);

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const data: DialogConfirmInputs = {
			message: `Tem certeza que deseja enviar o comunicado para ${this.form.controls.typeRecipients.value === TypeRecipientsEnum.ALL ? 'todos' : ''} os alunos?`,
			buttonConfirmLabel: 'Enviar',
		};

		const dialog = this.dialog.open(DialogConfirmComponent, { data, maxWidth: '360px' });

		dialog.closed.subscribe((confirmed: boolean) => {
			if (confirmed) {
				console.log(this.form.value);
				this.router.navigate(['/comunicados']);
				this.alertService.showAlert('success', 'Comunicado enviado com sucesso!', 'Sucesso.');
			}
		});
	}

	onCheckAllChange(event: boolean) {
		this.checkAll = event;
		console.log('checkAll', this.checkAll);

		const controls = ['courses', 'levels'];

		if (event) {
			this.form.controls.typeRecipients.setValue(TypeRecipientsEnum.ALL, { emitEvent: false });

			controls.forEach(control => {
				const formControl = this.form.get(control);

				if (isFormControl(formControl)) {
					formControl.clearValidators();
					formControl.disable();
				}
			});
		} else {
			this.form.controls.typeRecipients.setValue(TypeRecipientsEnum.SPECIFIC);

			controls.forEach(control => {
				const formControl = this.form.get(control);

				if (isFormControl(formControl)) {
					formControl.setValidators(Validators.required);
					formControl.enable();
				}
			});
		}
	}
}
