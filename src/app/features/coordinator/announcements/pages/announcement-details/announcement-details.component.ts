import { Component, inject } from '@angular/core';
import { Announcement, TypeRecipientsEnum } from '@app/features/coordinator/announcements/models/announcements.model';
import { ActivatedRoute } from '@angular/router';
import { ANNOUNCEMENTS_MOCK } from '@app/features/coordinator/announcements/mocks/announcements.mock';
import { DatePipe } from '@angular/common';
import { FormatCoursesAndLevelsPipe } from '@app/features/coordinator/announcements/pipes/format-courses-and-levels.pipe';

@Component({
	selector: 'app-announcement-details',
	standalone: true,
	imports: [DatePipe, FormatCoursesAndLevelsPipe],
	templateUrl: './announcement-details.component.html',
	styleUrl: './announcement-details.component.scss',
})
export class AnnouncementDetailsComponent {
	announcement: Announcement;

	private route = inject(ActivatedRoute);

	constructor() {
		this.route.paramMap.subscribe(params => {
			if (!params.get('id')) return;

			this.announcement = this.getAnnouncementById(Number(params.get('id')));
		});
	}

	getAnnouncementById(id: number): Announcement {
		return ANNOUNCEMENTS_MOCK.find(announcement => announcement.id === id);
	}

	protected readonly TypeRecipientsEnum = TypeRecipientsEnum;
}
