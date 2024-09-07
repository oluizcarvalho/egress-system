import { Component } from '@angular/core';
import { Testimonial } from '@app/features/graduates/testimonials/models/testimonials.model';
import { TESTIMONIALS_MOCK } from '@app/features/graduates/testimonials/mocks/testimonials.mock';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { CurrencyPipe, DatePipe, NgTemplateOutlet } from '@angular/common';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { GetPrivacyDescriptionPipe } from '@app/features/graduates/testimonials/pipes/get-privacy-description.pipe';

@Component({
	selector: 'app-graduate-testimonials',
	standalone: true,
	imports: [
		CollapseItemComponent,
		CurrencyPipe,
		ItemInfoComponent,
		GetPrivacyDescriptionPipe,
		DatePipe,
		NgTemplateOutlet,
	],
	templateUrl: './testimonials.component.html',
	styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
	data: Array<Testimonial> = TESTIMONIALS_MOCK;
}
