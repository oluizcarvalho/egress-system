import { Component } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ButtonDirective, InputComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
