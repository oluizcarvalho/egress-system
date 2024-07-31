import {
	afterNextRender,
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
} from '@angular/core';
import { StateType } from '../../utils/get-icon-by-state';
import { NgClass } from '@angular/common';
import { GetIconByStatePipe } from '../../pipes/get-icon-by-state.pipe';
import BRAlert from '@govbr-ds/core/dist/components/message/message';

@Component({
	selector: 'app-alert',
	standalone: true,
	imports: [NgClass, GetIconByStatePipe],
	templateUrl: './alert.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
	@Input() title?: string;
	@Input({ required: true }) body: string;
	@Input({ required: true }) state: StateType = 'warning';
	@Input({ transform: booleanAttribute }) closable: boolean = true;
	instance: unknown;

	constructor(private brInput: ElementRef) {
		afterNextRender(() => {
			this.instance = new BRAlert('br-message', this.brInput.nativeElement.querySelector('.br-message'));
		});
	}
}
