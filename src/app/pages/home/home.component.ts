import { Component } from '@angular/core';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {ButtonDirective} from "../../shared/directives/button.directive";

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ButtonComponent, ButtonDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {}
