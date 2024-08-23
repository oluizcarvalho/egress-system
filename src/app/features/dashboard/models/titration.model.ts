export interface StudentTestimony {
	name: string;
	course: string;
	campus: string;
	titration: string;
	testimony: Testimony;
}

export interface Testimony {
	title: string;
	text: string;
}

export interface StudentPagination {
	data: StudentTestimony[];
	length: number;
	page: number;
	pageSize: number;
}
