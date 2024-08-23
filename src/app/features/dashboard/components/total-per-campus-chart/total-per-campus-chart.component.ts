import { afterNextRender, ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { BarChartModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { CardChartComponent } from '../card-chart/card-chart.component';

@Component({
	selector: 'app-total-per-campus-chart',
	standalone: true,
	imports: [CardChartComponent, BarChartModule],
	templateUrl: './total-per-campus-chart.component.html',
	styleUrl: './total-per-campus-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalPerCampusChartComponent {
	data = input([
		{
			name: 'Campus Patos de Minas',
			value: 11760,
		},
		{
			name: 'Campus Pontal',
			value: 69,
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
