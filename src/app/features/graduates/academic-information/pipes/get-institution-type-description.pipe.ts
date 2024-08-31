import { Pipe, PipeTransform } from '@angular/core';
import { InstitutionTypeEnum } from '../../../../shared/enums/institution-type.enum';
import { INSTITUTION_TYPE_OPTIONS_MOCK } from '../../../../shared/mocks/institution-type.mock';
import { getLabelByValue } from '../../../../shared/utils/option-label.utils';

@Pipe({
	name: 'getInstitutionTypeDescription',
	standalone: true,
})
export class GetInstitutionTypeDescriptionPipe implements PipeTransform {
	transform(value: InstitutionTypeEnum | string): string {
		return getLabelByValue(value, INSTITUTION_TYPE_OPTIONS_MOCK);
	}
}
