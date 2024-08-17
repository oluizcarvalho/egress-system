import { Component, inject } from '@angular/core';
import { PageEvent, PaginatorComponent } from '../../../../shared/components/paginator/paginator.component';
import { Columns, TableComponent } from '../../../../shared/components/table/table.component';
import { testimonialsPaginationMock } from '../../data/table-testimonials.mock';
import { StudentTestimony } from '../../types/titration.type';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { TestimonyDetailsDialogComponent } from '../../dialogs/testimony-details-dialog/testimony-details-dialog.component';

@Component({
	selector: 'app-testimonials-list',
	standalone: true,
	imports: [PaginatorComponent, TableComponent, DialogModule],
	templateUrl: './testimonials-list.component.html',
	styleUrl: './testimonials-list.component.scss',
})
export class TestimonialsListComponent {
	columns: Array<Columns> = [
		{
			columnDef: 'name',
			header: 'Nome',
			cell: (element: StudentTestimony) => `${element.name}`,
		},
		{
			columnDef: 'course',
			header: 'Curso',
			cell: (element: StudentTestimony) => `${element.course}`,
		},
		{
			columnDef: 'titration',
			header: 'Titulação',
			cell: (element: StudentTestimony) => `${element.titration}`,
		},
		{
			columnDef: 'campus',
			header: 'Campus',
			cell: (element: StudentTestimony) => `${element.campus}`,
		},
		{
			columnDef: 'action',
			header: 'Ação',
			type: 'icon',
			cell: () => `fa-eye`,
			value: (testimony: StudentTestimony) => this.showTestimony(testimony),
		},
	];
	testimonialsPagination = testimonialsPaginationMock;
	dataPaginated = testimonialsPaginationMock.data.slice(0, testimonialsPaginationMock.pageSize);
	dialog = inject(Dialog);

	showTestimony({ testimony }: StudentTestimony) {
		this.dialog.open<string>(TestimonyDetailsDialogComponent, {
			width: '780px',
			autoFocus: false,
			data: { ...testimony },
		});
	}

	onPageChange(pageEvent: PageEvent) {
		const start = (pageEvent.pageIndex - 1) * pageEvent.pageSize;
		const end = start + pageEvent.pageSize;
		this.dataPaginated = this.testimonialsPagination.data.slice(start, end);
	}
}
