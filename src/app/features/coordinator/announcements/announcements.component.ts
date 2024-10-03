import { Component, inject } from '@angular/core';
import { ButtonDirective } from '@shared/directives/button';
import { Columns, TableComponent } from '@shared/components/table/table.component';
import { Announcement } from '@app/features/coordinator/announcements/models/announcements.model';
import { PAGINATION_ANNOUNCEMENTS_MOCK } from '@app/features/coordinator/announcements/mocks/announcements.mock';
import { PageEvent, PaginatorComponent } from '@shared/components/paginator/paginator.component';
import { Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-announcements',
	standalone: true,
	imports: [ButtonDirective, PaginatorComponent, TableComponent, RouterLink],
	templateUrl: './announcements.component.html',
	styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent {
	columns: Array<Columns> = [
		{
			columnDef: 'title',
			header: 'Título',
			cell: (element: Announcement) => `${element.title}`,
		},
		{
			columnDef: 'created_at',
			header: 'Data de criação',
			cell: (element: Announcement) => `${element.creationDate}`,
			type: 'date',
		},

		{
			columnDef: 'action',
			header: 'Ação',
			type: 'icon',
			cell: () => `fa-eye`,
			value: (announcement: Announcement) => this.redirectDetails(announcement.id),
		},
	];
	dataPagination = PAGINATION_ANNOUNCEMENTS_MOCK;
	dataPaginated = this.dataPagination.data.slice(0, this.dataPagination.pageSize);

	private router = inject(Router);

	onPageChange(pageEvent: PageEvent) {
		const start = (pageEvent.pageIndex - 1) * pageEvent.pageSize;
		const end = start + pageEvent.pageSize;
		this.dataPaginated = this.dataPagination.data.slice(start, end);
	}

	private redirectDetails(id: number) {
		this.router.navigate(['/comunicados/detalhes', id]);
	}
}
