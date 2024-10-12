import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORY_OPTIONS_MOCK } from '../mocks/professional-information.mock';
import { getLabelByValue } from '@shared/utils';

@Pipe({
	name: 'getCategoryDescription',
	standalone: true,
})
export class GetCategoryDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		return getLabelByValue(value, CATEGORY_OPTIONS_MOCK);
	}
}
