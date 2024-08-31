export interface ProfessionalInfo {
	id: number;
	companyName: string;
	category: string;
	jobType: string;
	location: string;
	jobTitle: string;
	jobLevel: string;
	startDate: Date;
	endDate: Date;
	salary?: number;
	function?: string;
	relatedAcademicInfo: string;
}

export enum CategoryEnum {
	PRIVATE = 'private',
	PUBLIC = 'public',
	NGO = 'ngo',
}

export enum JobTypeEnum {
	FULL_TIME = 'full_time',
	PART_TIME = 'part_time',
	CONTRACT = 'contract',
	FREELANCER = 'freelancer',
}

export enum JobLevelEnum {
	JUNIOR = 'junior',
	MID_LEVEL = 'mid_level',
	SENIOR = 'senior',
	SPECIALIST = 'specialist',
}

export enum LocationEnum {
	IN_PERSON = 'in-person',
	REMOTE = 'remote',
	HYBRID = 'hybrid',
}
