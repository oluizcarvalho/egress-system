import { Component, Input } from '@angular/core';
import { SizeOptions } from '../../types/size.type';

@Component({
	selector: 'app-magic-button',
	standalone: true,
	imports: [],
	host: {
		class: 'br-magic-button',
	},
	templateUrl: './magic-button.component.html',
	styleUrl: './magic-button.component.scss',
})
export class MagicButtonComponent {
	@Input() icon = '';
	@Input() fontSet = 'fas';
	@Input() size: SizeOptions = 'medium';
	@Input() label = '';
}
