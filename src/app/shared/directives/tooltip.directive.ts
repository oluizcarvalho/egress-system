import { afterNextRender, Directive, ElementRef, Input } from '@angular/core';
import BRTooltip from '@govbr-ds/core/dist/components/tooltip/tooltip';

@Directive({
	selector: '[tooltip]',
	host: {
		place: 'place',
		type: 'type',
		'[attr.timer]': 'timer',
	},
	standalone: true,
})

//TODO: Não funciona ainda
export class TooltipDirective {
	@Input() tooltip: string = '';
	@Input({ alias: 'tooltipPosition' }) place: 'top' | 'bottom' | 'left' | 'right' = 'top';
	@Input({ alias: 'tooltipType' }) type: 'info' | 'warning' | 'error' | 'success' = 'info';
	@Input({ alias: 'tooltipDelay' }) timer?: number = 0;

	instance: unknown;
	constructor(private el: ElementRef) {
		afterNextRender(() => {
			console.log(this.tooltip, this.el.nativeElement, this.type, this.place);
			const config = {
				activator: this.el.nativeElement,
				place: this.place,
				type: this.type,
				textTooltip: this.tooltip,
			};
			this.instance = new BRTooltip(config);
		});
	}
}
