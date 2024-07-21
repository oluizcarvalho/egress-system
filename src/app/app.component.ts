import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './shared/components/header/header.component';
import {MenuComponent} from "./shared/components/menu/menu.component";

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CoreModule, HeaderComponent, MenuComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	public signature: string = 'Padrão Digital de Governo';
}
