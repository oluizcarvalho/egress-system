import {
	booleanAttribute,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	numberAttribute,
	OnChanges,
	Output,
} from '@angular/core';

type PageEvent = {
	length: number;
	pageIndex: number;
	pageSize: number;
	previousPageIndex: number;
};

@Component({
	selector: 'app-paginator',
	standalone: true,
	imports: [],
	templateUrl: './paginator.component.html',
	styleUrl: './paginator.component.scss',
})
export class PaginatorComponent implements OnChanges {
	@Input({ transform: numberAttribute, required: true }) length: number;
	@Input({ transform: numberAttribute }) pageSize: number;

	private _pageIndex: number = 0;

	get pageIndex(): number {
		return this._pageIndex;
	}

	@Input({ transform: numberAttribute })
	set pageIndex(value: number) {
		this._pageIndex = value;
		this.currentPage = value + 1;
	}

	@Input() pageSizeOptions: number[];
	@Input({ transform: booleanAttribute }) showFirstLastButtons: boolean;
	@Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
	expandedOptions = false;
	totalPages: number;
	pageIndexOptions: number[] = [];
	currentPage: number;
	previousPageIndex: number;

	private brPaginator = inject(ElementRef);

	ngOnChanges(): void {
		this.calculatePages();
	}

	prevPage() {
		this.previousPageIndex = this.pageIndex;
		this.pageIndex--;
		this.emitPageEvent();
	}

	nextPage() {
		this.previousPageIndex = this.pageIndex;
		this.pageIndex++;
		this.emitPageEvent();
	}

	private calculatePages() {
		this.previousPageIndex = this.pageIndex;
		this.totalPages = Math.ceil(this.length / this.pageSize);

		if (this.totalPages < this.pageIndex) {
			this.pageIndex = this.totalPages - 1;
		}

		this.pageIndexOptions = Array.from({ length: this.totalPages }, (_, i) => i + 1);
	}

	toggleSizeOptions(element: HTMLDivElement) {
		this.closeAll();
		this.expandedOptions = !this.expandedOptions;
		if (element) {
			if (this.expandedOptions) {
				element.setAttribute('expanded', '');
			} else {
				element.removeAttribute('expanded');
			}
		}
	}

	closeSizeOptions(id: string) {
		this.expandedOptions = false;
		const listOptions = this.brPaginator.nativeElement.querySelector(`#${id}`) as HTMLDivElement;
		if (listOptions) {
			listOptions.removeAttribute('expanded');
		}
	}

	setPageSize(option: number) {
		this.closeSizeOptions('list-options-size');
		this.pageSize = option;
		this.emitPageEvent();
		this.calculatePages();
	}

	setPageIndex(pageIndex: number) {
		this.previousPageIndex = this.pageIndex;
		this.closeSizeOptions('list-options-page');
		this.pageIndex = pageIndex - 1;
		this.emitPageEvent();
	}

	emitPageEvent() {
		this.page.emit({
			length: this.length,
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
			previousPageIndex: this.previousPageIndex,
		});
	}

	closeAll() {
		if (this.expandedOptions) {
			this.closeSizeOptions('list-options-size');
			this.closeSizeOptions('list-options-page');
		}
	}
}
