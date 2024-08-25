import {
	AfterViewInit,
	booleanAttribute,
	Directive,
	ElementRef,
	inject,
	Input,
	OnDestroy,
	Renderer2,
} from '@angular/core';
import { getIconByStateUtils, StateType } from '../utils/get-icon-by-state.utils';

@Directive({
	selector: 'span[br-feedback]',
	standalone: true,
	host: {
		class: 'feedback',
		role: 'alert',
	},
})
export class FeedbackDirective implements AfterViewInit, OnDestroy {
	@Input() state: StateType = '';
	@Input({ transform: booleanAttribute }) noPropagateState = false;
	node: HTMLDivElement;
	el = inject(ElementRef);
	renderer = inject(Renderer2);

	constructor() {}

	ngAfterViewInit(): void {
		this.node = this.renderer.parentNode(this.el.nativeElement) as HTMLDivElement;

		this.setState();
		this.setIcon();
	}

	private setState(): void {
		if (!this.noPropagateState) this.node.classList.add(this.state);
		this.renderer.addClass(this.el.nativeElement, this.state);
	}

	private setIcon(): void {
		const icon = this.renderer.createElement('i');

		this.renderer.addClass(icon, 'fas');
		this.renderer.addClass(icon, getIconByStateUtils(this.state));
		this.renderer.setAttribute(icon, 'aria-hidden', 'true');

		this.renderer.insertBefore(this.el.nativeElement, icon, this.el.nativeElement.firstChild);
	}

	ngOnDestroy(): void {
		if (this.node) {
			this.node.classList.remove(this.state);
		}
		if (this.el.nativeElement) {
			this.renderer.removeClass(this.el.nativeElement, this.state);
		}
	}
}
