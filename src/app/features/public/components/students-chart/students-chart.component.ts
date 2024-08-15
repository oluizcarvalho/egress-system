import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { Color, PieChartModule, ScaleType } from '@swimlane/ngx-charts';
import { DecimalPipe } from '@angular/common';
import { CardChartComponent } from '../card-chart/card-chart.component';

@Component({
	selector: 'app-students-chart',
	standalone: true,
	imports: [PieChartModule, DecimalPipe, CardChartComponent],
	templateUrl: './students-chart.component.html',
	styleUrl: './students-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsChartComponent {
	data = input([
		{ name: 'Ativo', value: 9463 },
		{ name: 'Inativo', value: 2366 },
	]);

	pieChartSum = computed(() => this.data().reduce((acc, cur) => acc + cur.value, 0));
	percents = computed(() =>
		this.data().map(item => {
			return {
				name: item.name,
				value: Number((item.value / this.pieChartSum()) * 100).toFixed(0),
			};
		})
	);

	colorScheme: Color = {
		name: 'gov',
		group: ScaleType.Ordinal,
		selectable: true,
		domain: ['#003366', '#CCDDEE'],
	};
}
