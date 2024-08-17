import { StudentPagination, StudentTestimony } from '../models/titration.model';

export const testimonialsMock: StudentTestimony[] = [
	{
		name: 'Bruno Carvalho',
		course: 'Agronomia',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Experiência enriquecedora',
			text: 'O curso de Agronomia superou minhas expectativas, proporcionando um aprendizado prático e teórico que será essencial na minha carreira.',
		},
	},
	{
		name: 'Isabela Figueiredo',
		course: 'ABI Engenharia',
		campus: 'Campus Patos de Minas',
		titration: 'Área Básica de Ingresso',
		testimony: {
			title: 'Base sólida para o futuro',
			text: 'O ABI Engenharia me deu uma base ampla e sólida, me permitindo explorar diferentes áreas antes de escolher minha especialização.',
		},
	},
	{
		name: 'Mariana Costa',
		course: 'Direito',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Formação de excelência',
			text: 'Direito sempre foi minha paixão, e a formação aqui no campus é de altíssimo nível, preparando-nos para os desafios do mercado.',
		},
	},
	{
		name: 'Rafaela Mendes',
		course: 'Medicina Veterinária',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Apaixonada por animais',
			text: 'Estudar Medicina Veterinária no campus Patos de Minas tem sido uma experiência transformadora, com muito aprendizado prático.',
		},
	},
	{
		name: 'Thiago Ribeiro',
		course: 'Engenharia de Controle e Automação',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Inovação e tecnologia',
			text: 'A Engenharia de Controle e Automação me preparou para os desafios tecnológicos do futuro, com uma base teórica sólida e prática inovadora.',
		},
	},
	{
		name: 'Lucas Silva',
		course: 'Engenharia Civil',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Construindo um futuro',
			text: 'O curso de Engenharia Civil no campus Patos de Minas tem sido a base para a minha carreira no setor de construção e infraestrutura.',
		},
	},
	{
		name: 'Ana Clara Oliveira',
		course: 'Administração',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Liderança e gestão',
			text: 'O curso de Administração me preparou para os desafios de liderança e gestão em um mundo corporativo em constante mudança.',
		},
	},
	{
		name: 'João Pedro Martins',
		course: 'Arquitetura e Urbanismo',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Desenho de cidades',
			text: 'Arquitetura e Urbanismo tem sido uma jornada de aprendizado sobre como desenhar e transformar espaços urbanos de forma sustentável.',
		},
	},
	{
		name: 'Beatriz Ferreira',
		course: 'Ciências Contábeis',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Cuidando das finanças',
			text: 'Estudar Ciências Contábeis me deu a oportunidade de entender a importância da contabilidade na gestão financeira de empresas.',
		},
	},
	{
		name: 'Matheus Almeida',
		course: 'Engenharia Elétrica',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Energia e inovação',
			text: 'O curso de Engenharia Elétrica tem sido desafiador e recompensador, me preparando para trabalhar com energia e tecnologias do futuro.',
		},
	},
	{
		name: 'Vitória Santos',
		course: 'Psicologia',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Compreendendo a mente humana',
			text: 'Psicologia me deu as ferramentas para entender o comportamento humano e como ajudar as pessoas a superarem seus desafios.',
		},
	},
	{
		name: 'Felipe Souza',
		course: 'Ciência da Computação',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Codificando o futuro',
			text: 'Estudar Ciência da Computação me preparou para os desafios da tecnologia da informação e programação em um mundo digital.',
		},
	},
	{
		name: 'Letícia Barbosa',
		course: 'Medicina',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Cuidando de vidas',
			text: 'O curso de Medicina tem sido intenso e gratificante, preparando-me para o desafio de cuidar da saúde e salvar vidas.',
		},
	},
	{
		name: 'Rafael Oliveira',
		course: 'Engenharia de Produção',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Otimização e eficiência',
			text: 'Engenharia de Produção me ensinou a otimizar processos e melhorar a eficiência em ambientes de produção industrial.',
		},
	},
	{
		name: 'Larissa Carvalho',
		course: 'Design',
		campus: 'Campus Patos de Minas',
		titration: 'Bacharelado',
		testimony: {
			title: 'Criatividade sem limites',
			text: 'Estudar Design me permitiu explorar minha criatividade e aprender a transformar ideias em produtos visuais inovadores.',
		},
	},
];

export const testimonialsPaginationMock: StudentPagination = {
	data: testimonialsMock,
	length: testimonialsMock.length,
	page: 1,
	pageSize: 5,
};
