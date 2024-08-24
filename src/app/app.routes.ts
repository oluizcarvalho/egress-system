import { Routes } from '@angular/router';
import { routesCoordinator } from './features/coordinator/coordinator.routes';
import { routesGraduates } from './features/graduates/graduates.routes';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'login',
		loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
		title: 'Login',
		data: {
			breadCrumb: false,
		},
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
		title: 'Dashboard',
		data: {
			breadCrumb: 'Dashboard',
		},
	},
	{
		path: 'home',
		loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
		title: 'Home',
		data: {
			breadCrumb: 'Home',
		},
	},
	{
		path: 'perfil',
		data: {
			breadCrumb: 'Perfil',
		},
		title: 'Perfil',
		children: [
			{
				path: '',
				loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
			},
			{
				path: 'editar',
				loadComponent: () =>
					import('./features/profile/pages/profile-edit/profile-edit.component').then(m => m.ProfileEditComponent),
				title: 'Editar Perfil',
				data: {
					breadCrumb: 'Editar Perfil',
				},
			},
		],
	},
	...routesCoordinator,
	...routesGraduates,
	{
		path: '**',
		loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
		title: 'Página Não Encontrada',
		data: {
			breadCrumb: 'Página Não Encontrada',
		},
	},
];
