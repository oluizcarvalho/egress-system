import { Pipe, PipeTransform } from '@angular/core';
import { AnnouncementSpecific } from '@app/features/coordinator/announcements/models/announcements.model';

@Pipe({
	name: 'formatCoursesAndLevels',
	standalone: true,
})
export class FormatCoursesAndLevelsPipe implements PipeTransform {
	transform({ courses, courseLevels }: AnnouncementSpecific): string {
		const formattedCourses =
			courses.length > 1 ? `${courses.slice(0, -1).join(', ')} e ${courses[courses.length - 1]}` : courses[0];

		const formattedCourseLevels =
			courseLevels.length > 1
				? `${courseLevels.slice(0, -1).join(', ')} e ${courseLevels[courseLevels.length - 1]}`
				: courseLevels[0];

		return `Alunos dos cursos de ${formattedCourses} <br> Das titulações: ${formattedCourseLevels}`;
	}
}
