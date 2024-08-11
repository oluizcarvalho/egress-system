import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: 'dashboard',
		loadComponent: () => import('./features/public/public.component').then(m => m.PublicComponent),
		title: 'Dashboard | Sistema De Egressos',
		data: {
			breadCrumb: 'Dashboard',
		},
	},
	{
		path: 'home',
		loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
		title: 'Home | Sistema De Egressos',
		data: {
			breadCrumb: 'Home',
		},
	},
	{
		path: '**',
		loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
		title: 'Página Não Encontrada | Sistema De Egressos',
		data: {
			breadCrumb: 'Página Não Encontrada',
		},
	},
];
