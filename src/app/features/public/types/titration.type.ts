export type StudentTestimony = {
	name: string;
	course: string;
	campus: string;
	titration: string;
	testimony: Testimony;
};

export type Testimony = {
	title: string;
	text: string;
};

export type StudentPagination = {
	data: StudentTestimony[];
	length: number;
	page: number;
	pageSize: number;
};
