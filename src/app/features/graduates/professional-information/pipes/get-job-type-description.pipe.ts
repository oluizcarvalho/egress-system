import { Pipe, PipeTransform } from '@angular/core';
import { JOB_TYPE_OPTIONS_MOCK } from '../mocks/professional-information.mock';
import { getLabelByValue } from '../../../../shared/utils/option-label.utils';

@Pipe({
	name: 'getJobTypeDescription',
	standalone: true,
})
export class GetJobTypeDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		return getLabelByValue(value, JOB_TYPE_OPTIONS_MOCK);
	}
}
