import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@shared/directives/button';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { EDUCATION_HISTORY_MOCK } from './mocks/academic-information.mock';
import { OptionLabelPipe, TitleCollapseProfessionalInformationPipe } from '@shared/pipes';
import {
	GetCourseLevelDescriptionPipe,
	GetInstitutionTypeDescriptionPipe,
} from '@features/graduates/academic-information/pipes';

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
