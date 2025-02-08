import { AbstractControl } from '@angular/forms';

export interface FilterModel {
	academicSemester: AbstractControl<string>;
	course: AbstractControl<Array<string>>;
	titration: AbstractControl<Array<string>>;
	campus: AbstractControl<Array<string>>;
}
