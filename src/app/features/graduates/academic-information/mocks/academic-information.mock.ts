import { AcademicInformation } from '../models/academic-information.model';

export const educationHistoryMock: Array<AcademicInformation> = [
	{
		id: 1,
		institutionName: 'Universidade Federal de Uberlândia',
		institutionType: 'Instituição Pública',
		courseName: 'Sistemas da Informação',
		courseLevel: 'Bacharelado',
		country: 'Brasil',
		startDate: '01/01/01',
		endDate: '01/01/01',
		state: 'Minas Gerais',
		city: 'Uberlândia',
		registrationNumber: 'ID154942',
	},
	{
		id: 2,
		institutionName: 'Universidade Estadual de Campinas',
		institutionType: 'Instituição Pública',
		courseName: 'Engenharia de Computação',
		courseLevel: 'Bacharelado',
		country: 'Brasil',
		startDate: '02/02/02',
		endDate: '02/02/06',
		state: 'São Paulo',
		city: 'Campinas',
		registrationNumber: 'ID789456',
	},
];
