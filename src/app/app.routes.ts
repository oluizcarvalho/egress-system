import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
		title: 'Home | Sistema De Egressos',
		data: {
			breadCrumb: 'Home',
		},
	},
	{
		path: '**',
		loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
		title: 'Página Não Encontrada | Sistema De Egressos',
		data: {
			breadCrumb: 'Página Não Encontrada',
		},
	},
];
