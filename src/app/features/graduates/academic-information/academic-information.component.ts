import { Component } from '@angular/core';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { ItemInfoComponent } from '../../../shared/components/item-info/item-info.component';
import { EDUCATION_HISTORY_MOCK } from './mocks/academic-information.mock';
import { CollapseItemComponent } from '../../../shared/components/collapse-item/collapse-item.component';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OptionLabelPipe } from '../../../shared/pipes/option-label.pipe';
import { GetInstitutionTypeDescriptionPipe } from './pipes/get-institution-type-description.pipe';
import { GetCourseLevelDescriptionPipe } from './pipes/get-course-level-description.pipe';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes/title-collapse-academic-information.pipe';

@Component({
	selector: 'app-academic-information',
	standalone: true,
	imports: [
		ButtonDirective,
		ItemInfoComponent,
		CollapseItemComponent,
		DatePipe,
		RouterLink,
		OptionLabelPipe,
		GetInstitutionTypeDescriptionPipe,
		GetCourseLevelDescriptionPipe,
		TitleCollapseProfessionalInformationPipe,
	],
	templateUrl: './academic-information.component.html',
	styleUrl: './academic-information.component.scss',
})
export class AcademicInformationComponent {
	data = EDUCATION_HISTORY_MOCK;
}
