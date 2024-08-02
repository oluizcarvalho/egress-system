import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbComponent } from './shared/components/breadcrump/breadcrumb.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from './shared/components/alert/alert.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		CoreModule,
		HeaderComponent,
		MenuComponent,
		FooterComponent,
		BreadcrumbComponent,
		AlertComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	alertService = inject(AlertService);
	constructor() {
		setTimeout(() => {
			this.alertService.showAlert('success', 'Sucesso solicitação feita com sucesso', 'Sucesso.', false);
		}, 1000);
	}
}
