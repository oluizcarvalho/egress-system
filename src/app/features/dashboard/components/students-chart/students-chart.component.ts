import { ChangeDetectionStrategy, Component, computed, input, InputSignal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardChartComponent } from '../card-chart/card-chart.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
	selector: 'app-students-chart',
	standalone: true,
	imports: [DecimalPipe, CardChartComponent, BaseChartDirective],
	templateUrl: './students-chart.component.html',
	styleUrl: './students-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsChartComponent {
	data: InputSignal<ChartConfiguration<'doughnut'>['data']> = input({
		datasets: [
			{
				data: [9463, 2366],
				backgroundColor: ['#003366', '#CCDDEE'],
			},
		],
		labels: ['Ativo', 'Inativo'],
	});

	pieChartSum = computed(() => this.data().datasets[0].data.reduce((acc, cur) => acc + cur, 0));
	percents = computed(() =>
		this.data().datasets[0].data.map((value, index) => {
			return {
				name: this.data().labels[index],
				value: Number((value / this.pieChartSum()) * 100).toFixed(0),
			};
		})
	);

	public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: '75%',
		datasets: {
			doughnut: {
				borderWidth: 1,
			},
		},
	};
}
