import { Routes } from '@angular/router';
import { routesCoordinator } from './features/coordinator/coordinator.routes';
import { routesGraduates } from './features/graduates/graduates.routes';

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: 'login',
		loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
		title: 'Login',
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
		loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
		title: 'Perfil',
		data: {
			breadCrumb: 'Perfil',
		},
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
