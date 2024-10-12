import { Component } from '@angular/core';
import { PUBLICATION_MOCK } from '@app/features/graduates/publications/mocks/publications.mock';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { NgTemplateOutlet } from '@angular/common';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { TitleCollapseProfessionalInformationPipe } from '@shared/pipes';

@Component({
	selector: 'app-graduate-publications',
	standalone: true,
	imports: [CollapseItemComponent, NgTemplateOutlet, TitleCollapseProfessionalInformationPipe, ItemInfoComponent],
	templateUrl: './publications.component.html',
	styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
	data = PUBLICATION_MOCK;
}
