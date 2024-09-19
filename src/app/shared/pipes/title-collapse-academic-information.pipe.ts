import { Pipe, PipeTransform } from '@angular/core';
import { AcademicInformation } from '@app/features/graduates/academic-information/models/academic-information.model';
import { getInitials } from '@shared/utils/string.utils';

@Pipe({
	name: 'titleCollapseAcademicInformation',
	standalone: true,
})
export class TitleCollapseProfessionalInformationPipe implements PipeTransform {
	transform(academicInformation: AcademicInformation): string {
		return academicInformation.courseName + ' - ' + getInitials(academicInformation.institutionName);
	}
}
