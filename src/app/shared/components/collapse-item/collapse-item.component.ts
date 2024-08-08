import { Component, Input } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
	selector: 'app-collapse-item',
	standalone: true,
	imports: [CdkAccordionModule],
	templateUrl: './collapse-item.component.html',
	styleUrl: './collapse-item.component.scss',
})
export class CollapseItemComponent {
	@Input({ required: true }) label: string;
	@Input({ required: true }) id: string;
}
