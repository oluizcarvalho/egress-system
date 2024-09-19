import { Pipe, PipeTransform } from '@angular/core';
import { ProfessionalInfo } from '@app/features/graduates/professional-information/models/professional-information.model';

@Pipe({
	name: 'titleCollapseProfessionalInformation',
	standalone: true,
})
export class TitleCollapseProfessionalInformationPipe implements PipeTransform {
	transform(professionalInfo: ProfessionalInfo): string {
		return professionalInfo.companyName + ' - ' + professionalInfo.jobTitle;
	}
}
