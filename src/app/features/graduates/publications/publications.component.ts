import { Component } from '@angular/core';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';
import { CollapseItemComponent } from '@shared/components/collapse-item/collapse-item.component';
import { PUBLICATION_MOCK } from '@app/features/graduates/publications/mocks/publications.mock';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@shared/directives/button';

@Component({
	selector: 'app-publications',
	standalone: true,
	imports: [ItemInfoComponent, CollapseItemComponent, RouterLink, ButtonDirective],
	templateUrl: './publications.component.html',
	styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
	data = PUBLICATION_MOCK;
}
