import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: 'login',
		loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
		title: 'Login | Egressos UFU',
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./features/public/public.component').then(m => m.PublicComponent),
		title: 'Dashboard | Egressos UFU',
		data: {
			breadCrumb: 'Dashboard',
		},
	},
	{
		path: 'home',
		loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
		title: 'Home | Egressos UFU',
		data: {
			breadCrumb: 'Home',
		},
	},
	{
		path: '**',
		loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
		title: 'Página Não Encontrada | Egressos UFU',
		data: {
			breadCrumb: 'Página Não Encontrada',
		},
	},
];
