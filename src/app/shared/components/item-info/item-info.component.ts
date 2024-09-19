import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'app-item-info',
	standalone: true,
	imports: [],
	templateUrl: './item-info.component.html',
	styleUrl: './item-info.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemInfoComponent {
	label = input<string>();
	value = input<string>();
	type = input<'text' | 'url' | 'email' | 'phone'>('text');
}
