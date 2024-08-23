import { afterNextRender, ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { BarChartModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { CardChartComponent } from '../card-chart/card-chart.component';

@Component({
	selector: 'app-total-per-titration-chart',
	standalone: true,
	imports: [CardChartComponent, BarChartModule],
	templateUrl: './total-per-titration-chart.component.html',
	styleUrl: './total-per-titration-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPerTitrationChartComponent {
	data = input([
		{
			name: 'Bacharelado',
			value: 8919,
		},
		{
			name: 'Licenciatura Plena',
			value: 1969,
		},
		{
			name: 'Área Básica de Ingresso',
			value: 941,
		},
	]);
	render = signal<boolean>(false);

	colorScheme: Color = {
		name: 'gov',
		group: ScaleType.Ordinal,
		selectable: true,
		domain: ['#003366'],
	};

	constructor() {
		afterNextRender(() => {
			this.render.set(true);
		});
	}
}
