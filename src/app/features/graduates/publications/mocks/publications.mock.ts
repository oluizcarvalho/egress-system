import { Publication } from '@app/features/graduates/publications/models/publications.model';

export const PUBLICATION_MOCK: Array<Publication> = [
	{
		id: '1',
		title: 'Projeto e desenvolvimento de um sistema web',
		authors: 'João Pereira; Maria Santos',
		year: 2019,
		journal: 'Revista UFU',
		relatedAcademicInfo: 'Bacharelado em Sistemas de Informação',
		identifier: 'ID156514132054',
		url: 'https://www.ufu.br',
	},
	{
		id: '2',
		title: 'A influência da IA no desenvolvimento de software',
		authors: 'José Silva; Ana Souza',
		year: 2020,
		journal: 'Jornal de Ciência e Tecnologia',
		relatedAcademicInfo: 'Engenharia da Computação',
		identifier: 'ID562145789651',
		url: 'https://www.ufu.br',
	},
];
