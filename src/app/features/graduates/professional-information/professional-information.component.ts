import { Component } from '@angular/core';
import { CollapseItemComponent } from '../../../shared/components/collapse-item/collapse-item.component';
import { ItemInfoComponent } from '../../../shared/components/item-info/item-info.component';
import { PROFESSIONAL_INFO_MOCK } from './mocks/professional-information.mock';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GetJobLevelDescriptionPipe } from './pipes/get-job-level-description.pipe';
import { GetLocationDescriptionPipe } from './pipes/get-location-description.pipe';
import { GetJobTypeDescriptionPipe } from './pipes/get-job-type-description.pipe';
import { GetCategoryDescriptionPipe } from './pipes/get-category-description.pipe';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes/title-collapse-professional-information.pipe';

@Component({
	selector: 'app-professional-information',
	standalone: true,
	imports: [
		CollapseItemComponent,
		ItemInfoComponent,
		DatePipe,
		CurrencyPipe,
		RouterLink,
		GetJobLevelDescriptionPipe,
		GetLocationDescriptionPipe,
		GetJobTypeDescriptionPipe,
		GetCategoryDescriptionPipe,
		ButtonDirective,
		TitleCollapseProfessionalInformationPipe,
	],
	templateUrl: './professional-information.component.html',
	styleUrl: './professional-information.component.scss',
})
export class ProfessionalInformationComponent {
	data = PROFESSIONAL_INFO_MOCK;
}
