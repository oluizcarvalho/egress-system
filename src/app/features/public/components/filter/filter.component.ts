import { Component } from '@angular/core';
import { CollapseItemComponent } from '../../../../shared/components/collapse-item/collapse-item.component';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { MultiSelectComponent } from '../../../../shared/components/multi-select/multi-select.component';
import { academicSemesterOptions, campusOptions, courseOptions, titrationOptions } from '../../data/options.mock';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective } from '../../../../shared/directives/button.directive';
import { ControlsOf } from '../../../../shared/types/controls-of.type';
import { FilterType } from '../../types/filter.type';

@Component({
	selector: 'app-filter',
	standalone: true,
	imports: [
		CollapseItemComponent,
		SelectComponent,
		MultiSelectComponent,
		ButtonDirective,
		FormsModule,
		ReactiveFormsModule,
	],
	host: {
		class: 'd-flex w-100 mb-5',
	},
	templateUrl: './filter.component.html',
	styleUrl: './filter.component.scss',
})
export class FilterComponent {
	academicSemesterOptions = academicSemesterOptions;
	courseOptions = courseOptions;
	titrationOptions = titrationOptions;
	campusOptions = campusOptions;
	formGroupFilter = new FormGroup<ControlsOf<FilterType>>({
		academicSemester: new FormControl(academicSemesterOptions[0].value.toString()),
		course: new FormControl(''),
		titration: new FormControl(''),
		campus: new FormControl(''),
	});

	submit() {
		console.log(this.formGroupFilter.value);
	}
}
