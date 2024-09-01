import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { ButtonDirective } from '@shared/directives/button.directive';
import { TESTIMONIALS_MOCK } from './mocks/testimonials.mock';
import { Testimonial } from './models/testimonials.model';
import { GetPrivacyDescriptionPipe } from '@app/features/graduates/testimonials/pipes/get-privacy-description.pipe';

@Component({
	selector: 'app-testimonials',
	standalone: true,
	imports: [ItemInfoComponent, DatePipe, CollapseItemComponent, RouterLink, ButtonDirective, GetPrivacyDescriptionPipe],
	templateUrl: './testimonials.component.html',
	styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
	data: Array<Testimonial> = TESTIMONIALS_MOCK;
}
