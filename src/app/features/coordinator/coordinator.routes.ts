import { Routes } from '@angular/router';
import { authGuardCoordinator } from '../../core/auth/services/auth.service';

export const routesCoordinator: Routes = [
	{
		path: 'egressos',
		loadComponent: () => import('./graduates/graduates.component').then(m => m.GraduatesComponent),
		title: 'Graduados',
		canActivate: [authGuardCoordinator],
		data: {
			breadCrumb: 'Egressos',
		},
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
