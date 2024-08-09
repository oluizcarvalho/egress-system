import {
	booleanAttribute,
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
} from '@angular/core';
import { SizeOptions } from '../../types/size.type';

export type Tabs = Array<TabItem>;

export interface TabItem {
	label: string;
	id: string | number;
	icon?: string;
	count?: number;
	active?: boolean;
}

@Component({
	selector: 'app-tabs',
	standalone: true,
	imports: [],
	host: {
		class: 'br-tab',
		role: 'tablist',
		'[class.small]': 'size === "small"',
		'[class.medium]': 'size === "medium"',
		'[class.large]': 'size === "large"',
	},
	templateUrl: './tabs.component.html',
	styleUrl: './tabs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
	private _activeTab: string | number;
	@Input() size: SizeOptions = 'medium';
	@Input({ transform: booleanAttribute }) onlyIcon = false;
	@Input({ required: true }) tabs: Tabs = [];

	get activeTab(): string | number {
		return this._activeTab;
	}

	@Input()
	set activeTab(value: string | number) {
		this._activeTab = value;
		this.activeTabChange.emit(value);
	}

	@Output() activeTabChange = new EventEmitter<string | number>();

	ngOnInit(): void {
		if (this.activeTab === undefined) this.activeTab = this.tabs.find(tab => tab.active)?.id || this.tabs[0].id;
	}

	selectedTab(tab: TabItem) {
		this.activeTab = tab.id;
	}
}
