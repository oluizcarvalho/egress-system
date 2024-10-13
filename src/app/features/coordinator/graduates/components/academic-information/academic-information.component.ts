import { Component } from '@angular/core';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes';
import { EDUCATION_HISTORY_MOCK } from '@features/graduates/academic-information/mocks/academic-information.mock';
import {
	GetCourseLevelDescriptionPipe,
	GetInstitutionTypeDescriptionPipe,
} from '@features/graduates/academic-information/pipes';

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
