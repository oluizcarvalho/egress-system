import { Component, inject, OnInit } from '@angular/core';
import { Announcement, TypeRecipientsEnum } from '@app/features/coordinator/announcements/models/announcements.model';
import { ActivatedRoute } from '@angular/router';
import { ANNOUNCEMENTS_MOCK } from '@app/features/coordinator/announcements/mocks/announcements.mock';
import { DatePipe } from '@angular/common';
import { FormatCoursesAndLevelsPipe } from '@app/features/coordinator/announcements/pipes/format-courses-and-levels.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'app-announcement-details',
	standalone: true,
	imports: [DatePipe, FormatCoursesAndLevelsPipe],
	templateUrl: './announcement-details.component.html',
	styleUrl: './announcement-details.component.scss',
})
export class AnnouncementDetailsComponent implements OnInit {
	announcement: Announcement;
	content: SafeHtml;
	protected readonly TypeRecipientsEnum = TypeRecipientsEnum;

	private route = inject(ActivatedRoute);
	private sanitizer = inject(DomSanitizer);

	constructor() {
		this.route.paramMap.subscribe(params => {
			if (!params.get('id')) return;

			this.announcement = this.getAnnouncementById(Number(params.get('id')));
		});
	}

	ngOnInit(): void {
		this.content = this.sanitizer.bypassSecurityTrustHtml(this.announcement.content);
	}

	getAnnouncementById(id: number): Announcement {
		return ANNOUNCEMENTS_MOCK.find(announcement => announcement.id === id);
	}
}
