export type Course = {
	course: string;
	titration: string;
	campus: string;
	countStudents: number;
};

export type CoursePagination = {
	data: Course[];
	length: number;
	page: number;
	pageSize: number;
};
