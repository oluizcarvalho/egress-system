import { SelectOptions } from '../models/select.model';
import { InstitutionTypeEnum } from '../enums/institution-type.enum';

export const institutionTypeOptionsMock: SelectOptions = [
	{
		value: InstitutionTypeEnum.PUBLIC_INSTITUTION,
		text: 'Instituição Pública',
	},
	{
		value: InstitutionTypeEnum.PRIVATE_INSTITUTION,
		text: 'Instituição Privada',
	},
	{
		value: InstitutionTypeEnum.FOREIGN_INSTITUTION,
		text: 'Instituição Estrangeira',
	},
	{
		value: InstitutionTypeEnum.OTHER,
		text: 'Outro',
	},
];
