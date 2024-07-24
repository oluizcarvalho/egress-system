import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	public license: string = '©2023 - 2024 | Todos os direitos reservados | Universidade Federal de Uberlândia';
}
