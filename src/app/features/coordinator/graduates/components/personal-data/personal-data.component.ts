import { Component } from '@angular/core';
import { profileMock } from '@app/features/profile/mocks/profile.mock';
import { ItemInfoComponent } from '@shared/components/item-info/item-info.component';

@Component({
	selector: 'app-graduate-personal-data',
	standalone: true,
	imports: [ItemInfoComponent],
	templateUrl: './personal-data.component.html',
	styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
	data = profileMock;
}
