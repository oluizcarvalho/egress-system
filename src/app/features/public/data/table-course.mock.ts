import { Course, CoursePagination } from '../types/course.type';

export const coursesMock: Course[] = [
	{ course: 'Agronomia', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 1026 },
	{
		course: 'ABI Engenharia',
		titration: 'Área Básica de Ingresso',
		campus: 'Campus Patos de Minas',
		countStudents: 699,
	},
	{ course: 'Direito', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 570 },
	{ course: 'Medicina Veterinária', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 523 },
	{
		course: 'Engenharia de Controle e Automação',
		titration: 'Bacharelado',
		campus: 'Campus Patos de Minas',
		countStudents: 501,
	},
	{ course: 'Ciência da Computação', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 488 },
	{ course: 'Engenharia Mecânica', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 470 },
	{ course: 'Engenharia Civil', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 450 },
	{ course: 'Engenharia Elétrica', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 430 },
	{ course: 'Biologia', titration: 'Bacharelado', campus: 'Campus Patos de Minas', countStudents: 400 },
];

export const coursesPaginationMock: CoursePagination = {
	data: coursesMock,
	length: coursesMock.length,
	page: 1,
	pageSize: 5,
};
