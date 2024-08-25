import { AcademicInformation } from '../models/academic-information.model';

export const educationHistoryMock: Array<AcademicInformation> = [
	{
		id: 1,
		institutionName: 'Universidade Federal de Uberlândia',
		institutionType: 'Instituição Pública',
		courseName: 'Sistemas da Informação',
		courseLevel: 'Bacharelado',
		country: 'Brasil',
		startDate: new Date(2016, 1, 1).toISOString(),
		endDate: new Date(2020, 1, 1).toISOString(),
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
    startDate: new Date(2020, 1, 1).toISOString(),
    endDate: new Date(2024, 1, 1).toISOString(),
		state: 'São Paulo',
		city: 'Campinas',
		registrationNumber: 'ID789456',
	},
];
