import { Routes } from '@angular/router';
import { authGuardCoordinator } from '../../core/auth/services/auth.service';

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
		loadComponent: () => import('./announcements/announcements.component').then(m => m.AnnouncementsComponent),
		title: 'Comunicados',
		canActivate: [authGuardCoordinator],
		data: {
			breadCrumb: 'Comunicados',
		},
	},
	{
		path: 'questionarios',
		canActivate: [authGuardCoordinator],
		loadComponent: () => import('./questionnaires/questionnaires.component').then(m => m.QuestionnairesComponent),
		title: 'Questionários',
		data: {
			breadCrumb: 'Questionários',
		},
	},
];
