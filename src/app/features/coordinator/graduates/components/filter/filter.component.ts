import { Component } from '@angular/core';
import { ButtonDirective } from '@shared/directives/button';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { MultiSelectComponent } from '@shared/components/multi-select/multi-select.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '@shared/components/select/select.component';
import { DateTimePickerComponent } from '@shared/components/date-time-picker/date-time-picker.component';
import { ControlsOf } from '@shared/types/controls-of.type';
import { CAMPUS_OPTIONS_MOCK, COURSE_LEVEL_OPTIONS_MOCK } from '@shared/mocks';
import { InputComponent } from '@shared/components/input/input.component';

export interface FilterGraduatesModel {
	graduateName: string;
	cpf: string;
	campus: string;
	courseNameOrCode: string;
	titration: string;
	admissionDate: string;
	completionDate: string;
}

@Component({
	selector: 'app-graduates-filter',
	host: {
		class: 'd-flex w-100 mb-5',
	},
	standalone: true,
	imports: [
		ButtonDirective,
		CollapseItemComponent,
		MultiSelectComponent,
		ReactiveFormsModule,
		SelectComponent,
		DateTimePickerComponent,
		InputComponent,
	],
	templateUrl: './filter.component.html',
	styleUrl: './filter.component.scss',
})
export class FilterComponent {
	titrationOptions = COURSE_LEVEL_OPTIONS_MOCK;
	campusOptions = CAMPUS_OPTIONS_MOCK;

	formGroupFilter = new FormGroup<ControlsOf<FilterGraduatesModel>>({
		graduateName: new FormControl(''),
		cpf: new FormControl(''),
		campus: new FormControl(''),
		courseNameOrCode: new FormControl(''),
		titration: new FormControl(''),
		admissionDate: new FormControl(''),
		completionDate: new FormControl(''),
	});

	submit() {
		console.log(this.formGroupFilter.value);
	}
}
