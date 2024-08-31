import { Routes } from '@angular/router';
import { authGuardStudent } from '../../core/auth/services/auth.service';

export const routesGraduates: Routes = [
	{
		path: 'informacoes/academicas',
		title: 'Informações Acadêmicas',
		canActivate: [authGuardStudent],
		data: {
			breadCrumb: 'Informações Acadêmicas',
		},
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./academic-information/academic-information.component').then(m => m.AcademicInformationComponent),
			},
			{
				path: 'novo',
				loadComponent: () =>
					import('./academic-information/pages/academic-information-form/academic-information-form.component').then(
						m => m.AcademicInformationFormComponent
					),
				title: 'Nova Informação Acadêmica',
				data: {
					breadCrumb: 'Nova Informação Acadêmica',
				},
			},
			{
				path: 'editar/:id',
				loadComponent: () =>
					import('./academic-information/pages/academic-information-form/academic-information-form.component').then(
						m => m.AcademicInformationFormComponent
					),
				title: 'Editar Informação Acadêmica',
				data: {
					breadCrumb: 'Editar Informação Acadêmica',
				},
			},
		],
	},
	{
		path: 'informacoes/profissionais',
		canActivate: [authGuardStudent],
		title: 'Informações Profissionais',
		data: {
			breadCrumb: 'Informações Profissionais',
		},
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./professional-information/professional-information.component').then(
						m => m.ProfessionalInformationComponent
					),
			},
			{
				path: 'novo',
				loadComponent: () =>
					import(
						'./professional-information/pages/professional-information-form/professional-information-form.component'
					).then(m => m.ProfessionalInformationFormComponent),
				title: 'Nova Informação Profissional',
				data: {
					breadCrumb: 'Nova Informação Profissional',
				},
			},
			{
				path: 'editar/:id',
				loadComponent: () =>
					import(
						'./professional-information/pages/professional-information-form/professional-information-form.component'
					).then(m => m.ProfessionalInformationFormComponent),
				title: 'Editar Informação Profissional',
				data: {
					breadCrumb: 'Editar Informação Profissional',
				},
			},
		],
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
