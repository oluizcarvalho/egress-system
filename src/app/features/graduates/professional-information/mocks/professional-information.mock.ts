import {
	CategoryEnum,
	JobLevelEnum,
	JobTypeEnum,
	LocationEnum,
	ProfessionalInfo,
} from '../models/professional-information.model';

export const PROFESSIONAL_INFO_MOCK: ProfessionalInfo[] = [
	{
		id: 1,
		companyName: 'LUIT',
		category: CategoryEnum.PRIVATE,
		jobType: JobTypeEnum.FULL_TIME,
		location: LocationEnum.IN_PERSON,
		jobTitle: 'Desenvolvedor FrontEnd',
		jobLevel: JobLevelEnum.SENIOR,
		startDate: new Date('2010-10-10'),
		endDate: new Date('2019-10-10'),
		salary: 2000,
		function: 'Analisar e desenvolver sistemas',
		relatedAcademicInfo: 'Bacharelado em Sistemas de Informação',
	},
	{
		id: 2,
		companyName: 'Tech Solutions',
		category: CategoryEnum.PRIVATE,
		jobType: JobTypeEnum.PART_TIME,
		location: LocationEnum.REMOTE,
		jobTitle: 'Engenheiro de Software',
		jobLevel: JobLevelEnum.MID_LEVEL,
		startDate: new Date('2015-05-15'),
		endDate: new Date('2020-06-20'),
		salary: 3000,
		function: 'Desenvolvimento de software',
		relatedAcademicInfo: 'Bacharelado em Engenharia de Computação',
	},
	{
		id: 3,
		companyName: 'Innovatech',
		category: CategoryEnum.PUBLIC,
		jobType: JobTypeEnum.CONTRACT,
		location: LocationEnum.HYBRID,
		jobTitle: 'Analista de Sistemas',
		jobLevel: JobLevelEnum.JUNIOR,
		startDate: new Date('2021-02-01'),
		endDate: new Date('2023-07-15'),
		salary: 4000,
		function: 'Desenvolvimento de software',
		relatedAcademicInfo: 'Bacharelado em Engenharia de Computação',
	},
];

export const CATEGORY_OPTIONS_MOCK = [
	{ label: 'Privada', value: CategoryEnum.PRIVATE },
	{ label: 'Pública', value: CategoryEnum.PUBLIC },
	{ label: 'ONG', value: CategoryEnum.NGO },
];

export const JOB_TYPE_OPTIONS_MOCK = [
	{ label: 'Tempo Integral', value: JobTypeEnum.FULL_TIME },
	{ label: 'Meio Período', value: JobTypeEnum.PART_TIME },
	{ label: 'Contrato', value: JobTypeEnum.CONTRACT },
	{ label: 'Freelancer', value: JobTypeEnum.FREELANCER },
];

export const JOB_LEVEL_OPTIONS_MOCK = [
	{ label: 'Júnior', value: JobLevelEnum.JUNIOR },
	{ label: 'Pleno', value: JobLevelEnum.MID_LEVEL },
	{ label: 'Sênior', value: JobLevelEnum.SENIOR },
	{ label: 'Especialista', value: JobLevelEnum.SPECIALIST },
];

export const LOCATION_OPTIONS_MOCK = [
	{ label: 'Presencial', value: LocationEnum.IN_PERSON },
	{ label: 'Remoto', value: LocationEnum.REMOTE },
	{ label: 'Híbrido', value: LocationEnum.HYBRID },
];
