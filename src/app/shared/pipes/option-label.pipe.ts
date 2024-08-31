import { Pipe, PipeTransform } from '@angular/core';
import { SelectOption } from '../models/select.model';

@Pipe({
	name: 'optionLabel',
	standalone: true,
})
export class OptionLabelPipe implements PipeTransform {
	transform(value: string, options: SelectOption[]): string {
		if (!value || !options) {
			return '';
		}

		const option = options.find(opt => opt.value === value);
		return option ? option.label : '--';
	}
}
