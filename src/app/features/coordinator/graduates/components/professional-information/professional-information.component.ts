import { Component } from '@angular/core';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { CurrencyPipe, DatePipe, NgTemplateOutlet } from '@angular/common';
import { GetCategoryDescriptionPipe } from '@app/features/graduates/professional-information/pipes/get-category-description.pipe';
import { GetJobTypeDescriptionPipe } from '@app/features/graduates/professional-information/pipes/get-job-type-description.pipe';
import { GetLocationDescriptionPipe } from '@app/features/graduates/professional-information/pipes/get-location-description.pipe';
import { GetJobLevelDescriptionPipe } from '@app/features/graduates/professional-information/pipes/get-job-level-description.pipe';
import { PROFESSIONAL_INFO_MOCK } from '@app/features/graduates/professional-information/mocks/professional-information.mock';

@Component({
	selector: 'app-graduate-professional-information',
	standalone: true,
	imports: [
		ItemInfoComponent,
		CollapseItemComponent,
		CurrencyPipe,
		GetCategoryDescriptionPipe,
		GetJobTypeDescriptionPipe,
		GetLocationDescriptionPipe,
		GetJobLevelDescriptionPipe,
		DatePipe,
		NgTemplateOutlet,
	],
	templateUrl: './professional-information.component.html',
	styleUrl: './professional-information.component.scss',
})
export class ProfessionalInformationComponent {
	data = PROFESSIONAL_INFO_MOCK;
}
