import { Component, inject, signal } from '@angular/core';
import { DateTimePickerComponent } from '../../../../../shared/components/date-time-picker/date-time-picker.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { SelectComponent } from '../../../../../shared/components/select/select.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
	CATEGORY_OPTIONS_MOCK,
	JOB_LEVEL_OPTIONS_MOCK,
	JOB_TYPE_OPTIONS_MOCK,
	LOCATION_OPTIONS_MOCK,
	PROFESSIONAL_INFO_MOCK,
} from '../../mocks/professional-information.mock';
import { AlertService } from '../../../../../shared/components/alert/alert.service';
import { SelectOptions } from '../../../../../shared/models/select.model';
import { ButtonDirective } from '../../../../../shared/directives/button.directive';
import { RELATED_ACADEMIC_INFO_OPTIONS } from '../../../../../shared/mocks/related-academic-info.mock';

@Component({
	selector: 'app-professional-information-form',
	standalone: true,
	imports: [DateTimePickerComponent, InputComponent, SelectComponent, ReactiveFormsModule, ButtonDirective],
	templateUrl: './professional-information-form.component.html',
	styleUrl: './professional-information-form.component.scss',
})
export class ProfessionalInformationFormComponent {
	form: FormGroup;
	data = PROFESSIONAL_INFO_MOCK;
	mode = signal<'create' | 'edit'>('create');
	id?: string;
	jobLevelOptions: SelectOptions = JOB_LEVEL_OPTIONS_MOCK;
	jobTypeOptions: SelectOptions = JOB_TYPE_OPTIONS_MOCK;
	categoryOptions: SelectOptions = CATEGORY_OPTIONS_MOCK;
	locationOptions: SelectOptions = LOCATION_OPTIONS_MOCK;
	relatedAcademicInfoOptions: SelectOptions = RELATED_ACADEMIC_INFO_OPTIONS;

	route = inject(ActivatedRoute);
	router = inject(Router);
	alertService = inject(AlertService);

	constructor() {
		this.form = new FormGroup({
			companyName: new FormControl(null),
			jobTitle: new FormControl(null),
			jobLevel: new FormControl(null),
			jobType: new FormControl(null),
			category: new FormControl(null),
			location: new FormControl(null),
			startDate: new FormControl(null),
			endDate: new FormControl(null),
			salary: new FormControl(null),
			function: new FormControl(null),
			relatedAcademicInfo: new FormControl(null),
		});

		this.route.paramMap.subscribe(params => {
			const id = params.get('id');

			this.mode.set(id ? 'edit' : 'create');
			this.id = id;

			if (id) {
				const data = PROFESSIONAL_INFO_MOCK.find(item => item.id.toString() === id);
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
		this.router.navigate(['/informacoes/profissionais']);
	}
}
