import { Component } from '@angular/core';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { ItemInfoComponent } from '../../../shared/components/item-info/item-info.component';
import { educationHistoryMock } from './mocks/academic-information.mock';
import { CollapseItemComponent } from '../../../shared/components/collapse-item/collapse-item.component';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-academic-information',
	standalone: true,
	imports: [ButtonDirective, ItemInfoComponent, CollapseItemComponent, DatePipe, RouterLink],
	templateUrl: './academic-information.component.html',
	styleUrl: './academic-information.component.scss',
})
export class AcademicInformationComponent {
	data = educationHistoryMock;
}
