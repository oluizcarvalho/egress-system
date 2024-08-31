import { AcademicInformation } from '../models/academic-information.model';
import { InstitutionTypeEnum } from '../../../../shared/enums/institution-type.enum';
import { CourseLevelEnum } from '../../../../shared/enums/course-level.enum';

export const EDUCATION_HISTORY_MOCK: Array<AcademicInformation> = [
	{
		id: 1,
		institutionName: 'Universidade Federal de Uberlândia',
		institutionType: InstitutionTypeEnum.PUBLIC_INSTITUTION,
		courseName: 'Sistemas da Informação',
		courseLevel: CourseLevelEnum.BACHELOR,
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
		institutionType: InstitutionTypeEnum.PUBLIC_INSTITUTION,
		courseName: 'Engenharia de Computação',
		courseLevel: CourseLevelEnum.BACHELOR,
		country: 'Brasil',
		startDate: new Date(2020, 1, 1).toISOString(),
		endDate: new Date(2024, 1, 1).toISOString(),
		state: 'São Paulo',
		city: 'Campinas',
		registrationNumber: 'ID789456',
	},
];
