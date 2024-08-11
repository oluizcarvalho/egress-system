import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrump/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { Columns, TableComponent } from '../../shared/components/table/table.component';
import { Course } from './types/course.type';
import { coursesPaginationMock } from './data/table-course.mock';
import { PageEvent, PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { Color, PieChartModule, ScaleType } from '@swimlane/ngx-charts';
import { StudentsChartComponent } from './components/students-chart/students-chart.component';

@Component({
	selector: 'app-public',
	standalone: true,
	imports: [
		HeaderComponent,
		AlertComponent,
		MenuComponent,
		BreadcrumbComponent,
		RouterModule,
		FooterComponent,
		FilterComponent,
		TableComponent,
		PaginatorComponent,
		PieChartModule,
		StudentsChartComponent,
	],
	templateUrl: './public.component.html',
	styleUrl: './public.component.scss',
})
export class PublicComponent {
	columns: Array<Columns> = [
		{
			columnDef: 'course',
			header: 'Curso',
			cell: (element: Course) => `${element.course}`,
		},
		{
			columnDef: 'titration',
			header: 'Titulação',
			cell: (element: Course) => `${element.titration}`,
		},
		{
			columnDef: 'campus',
			header: 'Campus',
			cell: (element: Course) => `${element.campus}`,
		},
		{
			columnDef: 'countStudents',
			header: 'Estudantes',
			cell: (element: Course) => `${element.countStudents}`,
		},
	];
	coursesPagination = coursesPaginationMock;
	dataPaginated = coursesPaginationMock.data.slice(0, coursesPaginationMock.pageSize);

	constructor() {}

	onPageChange(pageEvent: PageEvent) {
		const start = (pageEvent.pageIndex - 1) * pageEvent.pageSize;
		const end = start + pageEvent.pageSize;
		this.dataPaginated = this.coursesPagination.data.slice(start, end);
	}
}
