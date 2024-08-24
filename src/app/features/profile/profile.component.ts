import { afterNextRender, Component, inject } from '@angular/core';
import { ItemInfoComponent } from '../../shared/components/item-info/item-info.component';
import { profileMock } from './mocks/profile.mock';
import { AuthService } from '../../core/auth/services/auth.service';
import { ButtonDirective } from '../../shared/directives/button.directive';
import {MagicButtonComponent} from "../../shared/components/magic-button/magic-button.component";

export interface Profile {
	name: string;
	cpf: string;
	email: string;
	secondaryEmail: string;
	phone: string;
	secondaryPhone: string;
	lattesLink: string;
	orcidLink: string;
	linkedinLink: string;
}

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [ItemInfoComponent, ButtonDirective, MagicButtonComponent],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent {
	data: Profile = profileMock;
	authService = inject(AuthService);

	constructor() {
		afterNextRender(() => {
			this.data.name = this.authService.credentials().fullName;
		});
	}
}
