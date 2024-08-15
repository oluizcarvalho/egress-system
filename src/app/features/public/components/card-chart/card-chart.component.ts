import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-card-chart',
	standalone: true,
	imports: [],
	templateUrl: './card-chart.component.html',
	styleUrl: './card-chart.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardChartComponent {
	@Input({ required: true }) title: string;
	@Input() subtitle: string;
	@Input() icon = 'fa-chart-bar';
}
