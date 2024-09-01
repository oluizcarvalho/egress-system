import { booleanAttribute, Component, Input, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { DatePipe, NgClass } from '@angular/common';
import { NgxMaskPipe } from 'ngx-mask';
import { SizeOptions } from '../../types/size.type';

export interface Columns {
	columnDef: string;
	header: string;
	mask?: string;
	type?: 'text' | 'date' | 'link' | 'function' | 'icon';
	cell: Function;
	value?: Function;
}

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DatePipe, NgxMaskPipe, CdkTableModule, NgClass],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
	@Input({ required: true }) columns: Columns[] = [];
	@Input({ required: true }) data: Array<any> = [];
	@Input() size: SizeOptions = 'medium';
	@Input({ transform: booleanAttribute }) hovered = false;

	public displayedColumns: string[] = [];

	constructor() {}

	ngOnInit(): void {
		this.displayedColumns = this.columns.map(c => c.columnDef);
	}

	trackByItem(item: any, index: number): number {
		return item?.id || index;
	}
}
