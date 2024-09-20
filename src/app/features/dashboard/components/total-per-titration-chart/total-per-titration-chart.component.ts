import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardChartComponent } from '../card-chart/card-chart.component';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
	selector: 'app-total-per-titration-chart',
	standalone: true,
	imports: [CardChartComponent, BaseChartDirective],
	templateUrl: './total-per-titration-chart.component.html',
	styleUrl: './total-per-titration-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPerTitrationChartComponent {
	public barChartData: ChartConfiguration<'bar'>['data'] = {
		labels: ['Bacharelado', 'Licenciatura Plena', 'Área Básica de Ingresso'],
		datasets: [{ data: [8919, 1969, 941], label: 'Total por Título Acadêmico' }],
	};

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
		indexAxis: 'y',
		backgroundColor: '#003366',
	};

	constructor() {}
}
