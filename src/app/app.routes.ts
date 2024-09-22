import { Routes } from '@angular/router';
import { authGuardCoordinator, authGuardStudent } from '@app/core/auth/services/auth.service';

const routesCoordinator = [
	{
		path: 'egressos',
		title: 'Egressos',
		canActivate: [authGuardCoordinator],
		data: {
			breadCrumb: 'Egressos',
		},
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./features/coordinator/graduates/graduates.component').then(m => m.GraduatesComponent),
			},
			{
				path: 'detalhes/:id',
				loadComponent: () =>
					import('./features/coordinator/graduates/pages/graduate-details/graduate-details.component').then(
						m => m.GraduateDetailsComponent
					),
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
				loadComponent: () =>
					import('./features/coordinator/announcements/announcements.component').then(m => m.AnnouncementsComponent),
			},
			{
				path: 'detalhes/:id',
				loadComponent: () =>
					import('./features/coordinator/announcements/pages/announcement-details/announcement-details.component').then(
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
					import('./features/coordinator/announcements/pages/announcement-form/announcement-form.component').then(
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

const routesGraduates = [
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
					import('./features/graduates/academic-information/academic-information.component').then(
						m => m.AcademicInformationComponent
					),
			},
			{
				path: 'novo',
				loadComponent: () =>
					import(
						'./features/graduates/academic-information/pages/academic-information-form/academic-information-form.component'
					).then(m => m.AcademicInformationFormComponent),
				title: 'Nova Informação Acadêmica',
				data: {
					breadCrumb: 'Nova Informação Acadêmica',
				},
			},
			{
				path: 'editar/:id',
				loadComponent: () =>
					import(
						'./features/graduates/academic-information/pages/academic-information-form/academic-information-form.component'
					).then(m => m.AcademicInformationFormComponent),
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
					import('./features/graduates/professional-information/professional-information.component').then(
						m => m.ProfessionalInformationComponent
					),
			},
			{
				path: 'novo',
				loadComponent: () =>
					import(
						'./features/graduates/professional-information/pages/professional-information-form/professional-information-form.component'
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
						'./features/graduates/professional-information/pages/professional-information-form/professional-information-form.component'
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
		canActivate: [authGuardStudent],
		title: 'Depoimentos',
		data: {
			breadCrumb: 'Depoimentos',
		},
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./features/graduates/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
			},
			{
				path: 'novo',
				loadComponent: () =>
					import('./features/graduates/testimonials/pages/testimonials-form/testimonials-form.component').then(
						m => m.TestimonialsFormComponent
					),
				title: 'Novo Depoimento',
				data: {
					breadCrumb: 'Novo Depoimento',
				},
			},
			{
				path: 'editar/:id',
				loadComponent: () =>
					import('./features/graduates/testimonials/pages/testimonials-form/testimonials-form.component').then(
						m => m.TestimonialsFormComponent
					),
				title: 'Editar Depoimento',
				data: {
					breadCrumb: 'Editar Depoimento',
				},
			},
		],
	},
];

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
