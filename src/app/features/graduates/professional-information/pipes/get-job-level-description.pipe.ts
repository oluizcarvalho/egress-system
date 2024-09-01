import { Pipe, PipeTransform } from '@angular/core';
import { JOB_LEVEL_OPTIONS_MOCK } from '../mocks/professional-information.mock';
import { getLabelByValue } from '../../../../shared/utils/option-label.utils';

@Pipe({
	name: 'getJobLevelDescription',
	standalone: true,
})
export class GetJobLevelDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		return getLabelByValue(value, JOB_LEVEL_OPTIONS_MOCK);
	}
}
