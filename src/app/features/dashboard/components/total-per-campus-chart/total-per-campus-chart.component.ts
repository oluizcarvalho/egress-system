import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { CardChartComponent } from '../card-chart/card-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
	selector: 'app-total-per-campus-chart',
	standalone: true,
	imports: [CardChartComponent, BaseChartDirective],
	templateUrl: './total-per-campus-chart.component.html',
	styleUrl: './total-per-campus-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPerCampusChartComponent {
	barChartData: InputSignal<ChartConfiguration<'bar'>['data']> = input({
		labels: ['Campus Patos de Minas', 'Campus Pontal'],
		datasets: [{ data: [11760, 1124], label: 'Total por Campus' }],
	});

	public barChartOptions: ChartConfiguration<'bar'>['options'] = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: { display: true },
			y: { display: true },
		},
		animation: {
			duration: 1000,
		},
		layout: {
			padding: {
				bottom: 8,
				left: 8,
				right: 8,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		indexAxis: 'y',
		backgroundColor: '#003366',
	};

	constructor() {}
}
