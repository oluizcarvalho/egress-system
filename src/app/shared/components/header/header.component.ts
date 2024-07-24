import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgOptimizedImage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	constructor() {}
}
