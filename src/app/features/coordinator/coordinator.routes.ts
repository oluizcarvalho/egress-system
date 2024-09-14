import { Routes } from '@angular/router';
import { authGuardCoordinator } from '@app/core/auth/services/auth.service';

export const routesCoordinator: Routes = [
	{
		path: 'egressos',
		title: 'Egressos',
		canActivate: [authGuardCoordinator],
		data: {
			breadCrumb: 'Egressos',
		},
		children: [
			{ path: '', loadComponent: () => import('./graduates/graduates.component').then(m => m.GraduatesComponent) },
			{
				path: 'detalhes/:id',
				loadComponent: () =>
					import('./graduates/pages/graduate-details/graduate-details.component').then(m => m.GraduateDetailsComponent),
				title: 'Detalhes do Egresso',
				data: {
					breadCrumb: 'Detalhes',
				},
			},
		],
	},
	{
		path: 'comunicados',
		title: 'Comunicados',
		canActivate: [authGuardCoordinator],
		data: {
			breadCrumb: 'Comunicados',
		},
		children: [
			{
				path: '',
				loadComponent: () => import('./announcements/announcements.component').then(m => m.AnnouncementsComponent),
			},
			{
				path: 'detalhes/:id',
				loadComponent: () =>
					import('./announcements/pages/announcement-details/announcement-details.component').then(
						m => m.AnnouncementDetailsComponent
					),
				title: 'Detalhes do Comunicado',
				data: {
					breadCrumb: 'Detalhes',
				},
			},
			{
				path: 'novo',
				loadComponent: () =>
					import('./announcements/pages/announcement-form/announcement-form.component').then(
						m => m.AnnouncementFormComponent
					),
				title: 'Novo Comunicado',
				data: {
					breadCrumb: 'Novo',
				},
			},
		],
	},
];
