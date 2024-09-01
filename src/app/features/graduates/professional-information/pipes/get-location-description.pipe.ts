import { Pipe, PipeTransform } from '@angular/core';
import { LOCATION_OPTIONS_MOCK } from '../mocks/professional-information.mock';
import { getLabelByValue } from '../../../../shared/utils/option-label.utils';

@Pipe({
	name: 'getLocationDescription',
	standalone: true,
})
export class GetLocationDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		return getLabelByValue(value, LOCATION_OPTIONS_MOCK);
	}
}
