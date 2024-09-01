import { PrivacyEnum, Testimonial } from '@app/features/graduates/testimonials/models/testimonials.model';
import { RadioOptions } from '@shared/models/radio.model';

export const TESTIMONIALS_MOCK: Array<Testimonial> = [
	{
		id: '1',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium sit amet sem sit amet viverra.',
		relatedAcademicInfo: 'Bacharelado em Sistemas de Informação',
		privacy: PrivacyEnum.PUBLIC,
		registrationDate: new Date('2023-05-01').toISOString(),
	},
	{
		id: '2',
		text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
		relatedAcademicInfo: 'Bacharelado em Engenharia da Computação',
		privacy: PrivacyEnum.PRIVATE,
		registrationDate: new Date('2023-04-15').toISOString(),
	},
];

export const PRIVACY_OPTIONS: RadioOptions = [
	{ label: 'Público', value: PrivacyEnum.PUBLIC },
	{ label: 'Privado', value: PrivacyEnum.PRIVATE },
	{ label: 'Anônimo', value: PrivacyEnum.ANONYMOUS },
];
