export interface Testimonial {
	id: string;
	text: string;
	relatedAcademicInfo: string;
	privacy: string;
	registrationDate: string;
}

export interface TestimonialForm {
	text: string;
	courseName: string;
	privacy: string;
}

export enum PrivacyEnum {
	PUBLIC = 'public',
	PRIVATE = 'private',
	ANONYMOUS = 'anonymous',
}
