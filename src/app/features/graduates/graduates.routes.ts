import { Routes } from '@angular/router';
import { authGuardStudent } from '../../core/auth/services/auth.service';

export const routesGraduates: Routes = [
	{
		path: 'informacoes/academicas',
		loadComponent: () =>
			import('./academic-information/academic-information.component').then(m => m.AcademicInformationComponent),
		title: 'Informações Acadêmicas',
		canActivate: [authGuardStudent],
		data: {
			breadCrumb: 'Informações Acadêmicas',
		},
	},
	{
		path: 'informacoes/profissionais',
		loadComponent: () =>
			import('./professional-information/professional-information.component').then(
				m => m.ProfessionalInformationComponent
			),
		canActivate: [authGuardStudent],
		title: 'Informações Profissionais',
		data: {
			breadCrumb: 'Informações Profissionais',
		},
	},
	{
		path: 'depoimentos',
		loadComponent: () => import('./testimonials/testimonials.component').then(m => m.TestimonialsComponent),
		canActivate: [authGuardStudent],
		title: 'Depoimentos',
		data: {
			breadCrumb: 'Depoimentos',
		},
	},
];
