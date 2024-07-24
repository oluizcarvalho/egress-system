export type IMenu = {
	id?: number;
	icon: string;
	label: string;
	url?: string;
  children?: Array<IMenu>;
};
