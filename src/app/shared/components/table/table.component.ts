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

/**
 * Componente TableComponent é responsável por exibir uma tabela com várias opções de configuração.
 * @example
 * <app-table [columns]="columns" [data]="data"></app-table>
 *
 * @public
 * {@link https://www.gov.br/ds/components/table?tab=desenvolvedor|Documentação oficial}
 */
@Component({
	selector: 'app-table',
	standalone: true,
	imports: [DatePipe, NgxMaskPipe, CdkTableModule, NgClass],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
	/**
	 * Colunas da tabela.
	 * @type {Columns[]}
	 * @required
	 */
	@Input({ required: true }) columns: Columns[] = [];

	/**
	 * Dados a serem exibidos na tabela.
	 * @type {Array<any>}
	 * @required
	 */
	@Input({ required: true }) data: Array<any> = [];

	/**
	 * Tamanho da tabela.
	 * @type {SizeOptions}
	 * @default 'medium'
	 * @example
	 * <app-table size="large"></app-table>
	 */
	@Input() size: SizeOptions = 'medium';

	/**
	 * Indica se a tabela deve ter efeito de hover.
	 * @default false
	 * @type {boolean}
	 * @example
	 * <app-table [hovered]="true"></app-table>
	 */
	@Input({ transform: booleanAttribute }) hovered: boolean = false;

	public displayedColumns: string[] = [];

	constructor() {}

	ngOnInit(): void {
		this.displayedColumns = this.columns.map(c => c.columnDef);
	}

	trackByItem(item: any, index: number): number {
		return item?.id || index;
	}
}
