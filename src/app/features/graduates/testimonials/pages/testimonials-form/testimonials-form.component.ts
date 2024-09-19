import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '@shared/components/alert/alert.service';
import { ButtonDirective } from '@shared/directives/button.directive';
import { DateTimePickerComponent } from '@shared/components/date-time-picker/date-time-picker.component';
import { InputComponent } from '@shared/components/input/input.component';
import { TextareaComponent } from '@shared/components/textarea/textarea.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { SelectOptions } from '@shared/models/select.model';
import { PRIVACY_OPTIONS, TESTIMONIALS_MOCK } from '../../mocks/testimonials.mock';
import { RELATED_ACADEMIC_INFO_OPTIONS } from '@shared/mocks/related-academic-info.mock';
import { RadioComponent } from '@shared/components/radio/radio.component';
import { FeedbackDirective } from '@shared/directives/feedback.directive';
import { HasErrorPipe } from '@shared/pipes/has-error.pipe';

@Component({
	selector: 'app-testimonials-form',
	standalone: true,
	imports: [
		ButtonDirective,
		DateTimePickerComponent,
		InputComponent,
		TextareaComponent,
		SelectComponent,
		ReactiveFormsModule,
		RadioComponent,
		FeedbackDirective,
		HasErrorPipe,
	],
	templateUrl: './testimonials-form.component.html',
	styleUrl: './testimonials-form.component.scss',
})
export class TestimonialsFormComponent {
	form = new FormGroup({
		text: new FormControl('', Validators.required),
		relatedAcademicInfo: new FormControl('', Validators.required),
		privacy: new FormControl('', Validators.required),
	});

	mode = signal<'create' | 'edit'>('create');

	id = '';
	route = inject(ActivatedRoute);
	router = inject(Router);
	alertService = inject(AlertService);
	relatedAcademicInfoOptions: SelectOptions = RELATED_ACADEMIC_INFO_OPTIONS;
	privacyOptions = PRIVACY_OPTIONS;

	constructor() {
		this.route.paramMap.subscribe(params => {
			const id = params.get('id');

			this.mode.set(id ? 'edit' : 'create');
			this.id = id;

			if (id) {
				const data = TESTIMONIALS_MOCK.find(item => item.id.toString() === id);
				if (data) {
					this.form.patchValue({
						...data,
					});
				}
			}
		});
	}

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			this.alertService.showAlert('danger', 'Preencha todos os campos obrigatórios');
			return;
		}
	}
}
