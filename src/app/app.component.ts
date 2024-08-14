import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbComponent } from './shared/components/breadcrump/breadcrumb.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
		LoadingComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	isMobile = signal<boolean>(false);

	constructor(private breakpointObserver: BreakpointObserver) {
		this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Web, Breakpoints.Tablet]).subscribe(() => {
			this.isMobile.set(this.breakpointObserver.isMatched(Breakpoints.Handset));
		});
	}
}
