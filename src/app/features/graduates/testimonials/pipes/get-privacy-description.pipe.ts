import { Pipe, PipeTransform } from '@angular/core';
import { getLabelByValue } from '@shared/utils/option-label.utils';
import { PRIVACY_OPTIONS } from '@app/features/graduates/testimonials/mocks/testimonials.mock';

@Pipe({
	name: 'getPrivacyDescription',
	standalone: true,
})
export class GetPrivacyDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		return getLabelByValue(value, PRIVACY_OPTIONS);
	}
}
