import { afterNextRender, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';
import { getIconByState, StateType } from '../utils/get-icon-by-state';

@Directive({
	selector: 'span[br-feedback]',
	standalone: true,
	host: {
		'[class.feedback]': 'true',
		'[class.flex-row-reverse]': 'true',
		role: 'alert',
	},
})
export class FeedbackDirective implements OnDestroy {
	@Input() state: StateType = '';
	node: HTMLDivElement;
	constructor(
		private el: ElementRef,
		private renderer: Renderer2
	) {
		afterNextRender(() => {
			this.node = this.renderer.parentNode(this.el.nativeElement) as HTMLDivElement;

			this.setState();
			this.setIcon();
		});
	}

	private setState(): void {
		this.node.classList.add(this.state);
		this.renderer.addClass(this.el.nativeElement, this.state);
	}

	private setIcon(): void {
		const icon = this.renderer.createElement('i');

		this.renderer.addClass(icon, 'fas');
		this.renderer.addClass(icon, getIconByState(this.state));
		this.renderer.setAttribute(icon, 'aria-hidden', 'true');

		this.renderer.appendChild(this.el.nativeElement, icon);
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
