import { Pipe, PipeTransform } from '@angular/core';
import { COURSE_LEVEL_OPTIONS_MOCK } from '../../../../shared/mocks/titration.mock';
import { getLabelByValue } from '../../../../shared/utils/option-label.utils';
import { CourseLevelEnum } from '../../../../shared/enums/course-level.enum';

@Pipe({
	name: 'getCourseLevelDescription',
	standalone: true,
})
export class GetCourseLevelDescriptionPipe implements PipeTransform {
	transform(value: CourseLevelEnum | string): string {
		return getLabelByValue(value, COURSE_LEVEL_OPTIONS_MOCK);
	}
}
