import { Component, inject, signal } from '@angular/core';
import { ButtonDirective } from '@shared/directives/button';
import { FeedbackDirective } from '@shared/directives/feedback.directive';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { EDUCATION_HISTORY_MOCK } from '../../mocks/academic-information.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@shared/components/alert/alert.service';
import { DateTimePickerComponent } from '@shared/components/date-time-picker/date-time-picker.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { COURSE_LEVEL_OPTIONS_MOCK, INSTITUTION_TYPE_OPTIONS_MOCK } from '@shared/mocks';
import { HasErrorPipe } from '@shared/pipes/has-error.pipe';

@Component({
	selector: 'app-academic-information-form',
	standalone: true,
	imports: [
		ButtonDirective,
		FeedbackDirective,
		FormsModule,
		InputComponent,
		ReactiveFormsModule,
		DateTimePickerComponent,
		SelectComponent,
		HasErrorPipe,
	],
	templateUrl: './academic-information-form.component.html',
	styleUrl: './academic-information-form.component.scss',
})
export class AcademicInformationFormComponent {
	form: FormGroup;
	data = EDUCATION_HISTORY_MOCK;
	mode = signal<'create' | 'edit'>('create');
	id?: string;
	institutionTypeOptions = INSTITUTION_TYPE_OPTIONS_MOCK;
	titrationOptions = COURSE_LEVEL_OPTIONS_MOCK;

	route = inject(ActivatedRoute);
	router = inject(Router);
	alertService = inject(AlertService);

	constructor() {
		this.form = new FormGroup({
			institutionName: new FormControl('', [Validators.required]),
			institutionType: new FormControl('', [Validators.required]),
			courseName: new FormControl('', [Validators.required]),
			courseLevel: new FormControl('', [Validators.required]),
			country: new FormControl('', [Validators.required]),
			startDate: new FormControl('', [Validators.required]),
			endDate: new FormControl(''),
			state: new FormControl('', [Validators.required]),
			city: new FormControl('', [Validators.required]),
		});

		this.route.paramMap.subscribe(params => {
			const id = params.get('id');

			this.mode.set(id ? 'edit' : 'create');
			this.id = id;

			if (id) {
				const data = EDUCATION_HISTORY_MOCK.find(item => item.id.toString() === id);
				if (data) {
					this.form.patchValue({
						...data,
						startDate: new Date(data.startDate).toLocaleDateString(),
						endDate: new Date(data.endDate).toLocaleDateString(),
					});
				}
			}
		});
	}

	onSubmit() {
		if (this.form.invalid) {
			this.alertService.showAlert('warning', 'Preencha todos os campos obrigatórios.', 'Atenção.');
			this.form.markAllAsTouched();
			return;
		}

		console.log(this.form.value);
		this.alertService.showAlert('success', 'Dados salvos com êxito!', 'Sucesso.');
		this.router.navigate(['/informacoes/academicas']);
	}

	onDelete() {
		console.log('Delete');
	}
}
