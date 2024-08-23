import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrump/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { Columns, TableComponent } from '../../shared/components/table/table.component';
import { coursesPaginationMock } from './data/table-course.mock';
import { PageEvent, PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { StudentsChartComponent } from './components/students-chart/students-chart.component';
import { TotalPerCampusChartComponent } from './components/total-per-campus-chart/total-per-campus-chart.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TotalPerTitrationChartComponent } from './components/total-per-titration-chart/total-per-titration-chart.component';
import { TestimonialsListComponent } from './components/testimonials-list/testimonials-list.component';
import { Course } from './models/course.model';

@Component({
	selector: 'app-dashboard',
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
		TotalPerCampusChartComponent,
		NgxSkeletonLoaderModule,
		TotalPerTitrationChartComponent,
		TestimonialsListComponent,
	],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
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
	protected readonly Array = Array;

	constructor() {}

	onPageChange(pageEvent: PageEvent) {
		const start = (pageEvent.pageIndex - 1) * pageEvent.pageSize;
		const end = start + pageEvent.pageSize;
		this.dataPaginated = this.coursesPagination.data.slice(start, end);
	}
}
