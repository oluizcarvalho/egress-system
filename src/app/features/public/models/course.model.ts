export interface Course {
	course: string;
	titration: string;
	campus: string;
	countStudents: number;
}

export interface CoursePagination {
	data: Course[];
	length: number;
	page: number;
	pageSize: number;
}
