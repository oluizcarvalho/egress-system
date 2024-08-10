import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrump/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';

@Component({
	selector: 'app-public',
	standalone: true,
	imports: [
		HeaderComponent,
		AlertComponent,
		MenuComponent,
		BreadcrumbComponent,
		RouterModule,
		FooterComponent,
		FilterComponent,
	],
	templateUrl: './public.component.html',
	styleUrl: './public.component.scss',
})
export class PublicComponent {}
