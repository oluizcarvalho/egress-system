import { Component, inject, signal } from '@angular/core';
import { DateTimePickerComponent } from '@shared/components/date-time-picker/date-time-picker.component';
import { HasErrorPipe } from '@shared/pipes/has-error.pipe';
import { InputComponent } from '@shared/components/input/input.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { PUBLICATION_MOCK } from '@app/features/graduates/publications/mocks/publications.mock';
import { RELATED_ACADEMIC_INFO_OPTIONS } from '@shared/mocks';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertService } from '@shared/components/alert/alert.service';
import { ButtonDirective } from '@shared/directives/button';
import { FeedbackDirective } from '@shared/directives/feedback';

@Component({
	selector: 'app-publications-form',
	standalone: true,
	imports: [
		DateTimePickerComponent,
		HasErrorPipe,
		InputComponent,
		SelectComponent,
		ButtonDirective,
		RouterLink,
		ReactiveFormsModule,
		FeedbackDirective,
	],
	templateUrl: './publications-form.component.html',
	styleUrl: './publications-form.component.scss',
})
export class PublicationsFormComponent {
	form: FormGroup;
	mode = signal<'create' | 'edit'>('create');
	id?: string;
	data = PUBLICATION_MOCK;
	relatedAcademicInfoOptions = RELATED_ACADEMIC_INFO_OPTIONS;

	route = inject(ActivatedRoute);
	router = inject(Router);
	alertService = inject(AlertService);

	constructor() {
		this.form = new FormGroup({
			title: new FormControl('', [Validators.required]),
			authorName: new FormControl('', [Validators.required]),
			year: new FormControl('', [Validators.required]),
			journal: new FormControl('', [Validators.required]),
			relatedAcademicInfo: new FormControl('', [Validators.required]),
		});

		this.route.paramMap.subscribe(params => {
			const id = params.get('id');

			this.mode.set(id ? 'edit' : 'create');
			this.id = id;

			if (id) {
				const data = PUBLICATION_MOCK.find(item => item.id.toString() === id);
				if (data) {
					this.form.patchValue(data);
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

		this.alertService.showAlert('success', 'Publicação salva com sucesso!', 'Sucesso.');
		this.router.navigate(['/publicacoes']);
	}

	onDelete() {
		console.log('Delete');
	}
}
