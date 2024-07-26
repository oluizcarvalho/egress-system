import { IMenu } from '../types/menu.type';

export const LIST_MENU: IMenu[] = [
	{
		label: 'Página inicial',
		icon: 'fa-home',
		url: '/home',
	},
	{
		label: 'Informações acadêmicas',
		icon: 'fa-book',
		url: '/informacoes-academicas',
	},
	{
		label: 'Informações profissionais',
		icon: 'fa-briefcase',
		url: '/informacoes-profissionais',
	},
	{
		label: 'Depoimentos',
		icon: 'fa-comments',
		url: '/depoimentos',
	},
	{
		label: 'Perfil',
		icon: 'fa-user',
		url: '/perfil',
	},
];
