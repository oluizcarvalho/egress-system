import { Component } from '@angular/core';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { EDUCATION_HISTORY_MOCK } from '@app/features/graduates/academic-information/mocks/academic-information.mock';
import { GetInstitutionTypeDescriptionPipe } from '@app/features/graduates/academic-information/pipes/get-institution-type-description.pipe';
import { GetCourseLevelDescriptionPipe } from '@app/features/graduates/academic-information/pipes/get-course-level-description.pipe';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes/title-collapse-academic-information.pipe';

@Component({
	selector: 'app-graduate-academic-information',
	standalone: true,
	imports: [
		ItemInfoComponent,
		CollapseItemComponent,
		GetInstitutionTypeDescriptionPipe,
		GetCourseLevelDescriptionPipe,
		DatePipe,
		NgTemplateOutlet,
		TitleCollapseProfessionalInformationPipe,
	],
	templateUrl: './academic-information.component.html',
	styleUrl: './academic-information.component.scss',
})
export class AcademicInformationComponent {
	data = EDUCATION_HISTORY_MOCK;
}
