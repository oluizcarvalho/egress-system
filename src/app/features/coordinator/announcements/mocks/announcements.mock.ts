import { Pagination } from '@shared/models/pagination.model';
import {
	Announcement,
	Announcements,
	TypeRecipientsEnum,
} from '@app/features/coordinator/announcements/models/announcements.model';

export const ANNOUNCEMENTS_MOCK: Announcements = [
	{
		id: 1,
		title: 'Encontro Virtual: Troca de Experiências entre Alunos, Professores e Egressos',
		creationDate: '2024-04-25',
		content: 'Um encontro virtual para compartilhar experiências e promover o networking entre diferentes públicos.',
		typeRecipients: TypeRecipientsEnum.ALL,
	},
	{
		id: 2,
		title: 'Webinar: Desafios e Oportunidades na Carreira Após a Graduação',
		creationDate: '2024-03-16',
		content: 'Neste webinar, discutiremos os desafios e as oportunidades no mercado de trabalho para recém-formados.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Ciência da Computação', 'Sistemas de Informação'],
		courseLevels: ['Graduação', 'Mestrado'],
	},
	{
		id: 3,
		title: 'Convite para Palestra com Egresso de Destaque: Lições Aprendidas no Mercado de Trabalho',
		creationDate: '2024-03-19',
		content: 'Um egresso bem-sucedido compartilhará suas experiências e lições aprendidas no mercado de trabalho.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Administração', 'Ciências Contábeis', 'Direito'],
		courseLevels: ['Graduação', 'Especialização'],
	},
	{
		id: 4,
		title: 'Atualizações Acadêmicas e Eventos para Toda a Comunidade Universitária',
		creationDate: '2024-02-17',
		content: 'Notícias e eventos acadêmicos relevantes para toda a comunidade universitária.',
		typeRecipients: TypeRecipientsEnum.ALL,
	},
	{
		id: 5,
		title: 'Lançamento do Programa de Networking: Conectando Alunos, Professores e Egressos',
		creationDate: '2024-02-24',
		content: 'Um novo programa de networking para facilitar a conexão entre alunos, professores e egressos.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Educação Física', 'Fisioterapia', 'Medicina Veterinária'],
		courseLevels: ['Graduação', 'Doutorado'],
	},
	{
		id: 6,
		title: 'Encontro Virtual: Troca de Experiências entre Alunos, Professores e Egressos',
		creationDate: '2024-04-25',
		content: 'Um encontro virtual para compartilhar experiências e promover o networking entre diferentes públicos.',
		typeRecipients: TypeRecipientsEnum.ALL,
	},
	{
		id: 7,
		title: 'Conferência Anual de Egressos: Construindo Pontes para o Futuro',
		creationDate: '2023-12-12',
		content:
			'Participe da nossa conferência anual e conecte-se com egressos que estão moldando o futuro de suas áreas.',
		typeRecipients: TypeRecipientsEnum.ALL,
	},
	{
		id: 8,
		title: 'Seminário sobre Saúde e Bem-Estar: Profissionais Compartilham suas Experiências',
		creationDate: '2023-11-20',
		content: 'Especialistas da área de saúde discutirão as melhores práticas para um bem-estar sustentável.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Biomedicina', 'Enfermagem', 'Fisioterapia'],
		courseLevels: ['Graduação', 'Especialização', 'MBA'],
	},
	{
		id: 9,
		title: 'Hackathon Universitário: Soluções Inovadoras para Problemas Reais',
		creationDate: '2023-10-15',
		content: 'Desafie-se no nosso hackathon e desenvolva soluções inovadoras para problemas do mundo real.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Ciência da Computação', 'Sistemas de Informação'],
		courseLevels: ['Graduação', 'Bacharelado'],
	},
	{
		id: 10,
		title: 'Mesa Redonda: O Impacto das Novas Tecnologias no Direito',
		creationDate: '2023-09-09',
		content: 'Discussão com especialistas sobre como as novas tecnologias estão transformando o setor jurídico.',
		typeRecipients: TypeRecipientsEnum.SPECIFIC,
		courses: ['Direito'],
		courseLevels: ['Graduação', 'Especialização'],
	},
];

export const PAGINATION_ANNOUNCEMENTS_MOCK: Pagination<Announcement> = {
	data: ANNOUNCEMENTS_MOCK,
	length: ANNOUNCEMENTS_MOCK.length,
	page: 1,
	pageSize: 5,
};
