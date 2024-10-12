import { Component } from '@angular/core';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { PROFESSIONAL_INFO_MOCK } from './mocks/professional-information.mock';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@shared/directives/button';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes';
import {
	GetCategoryDescriptionPipe,
	GetJobLevelDescriptionPipe,
	GetJobTypeDescriptionPipe,
	GetLocationDescriptionPipe,
} from '@features/graduates/professional-information/pipes';

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
