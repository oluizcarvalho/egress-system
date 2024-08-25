import { SelectOptions } from '../models/select.model';
import { TitrationEnum } from '../enums/titration.enum';

export const titrationOptionsMock: SelectOptions = [
	{
		value: TitrationEnum.GRADUATION,
		text: 'Graduação',
	},
	{
		value: TitrationEnum.MASTER,
		text: 'Mestrado',
	},
	{
		value: TitrationEnum.DOCTORATE,
		text: 'Doutorado',
	},
	{
		value: TitrationEnum.POST_DOCTORATE,
		text: 'Pós-doutorado',
	},
	{
		value: TitrationEnum.SPECIALIZATION,
		text: 'Especialização',
	},
	{
		value: TitrationEnum.TECHNICAL_COURSE,
		text: 'Curso Técnico',
	},
	{
		value: TitrationEnum.OTHER,
		text: 'Outro',
	},
];
