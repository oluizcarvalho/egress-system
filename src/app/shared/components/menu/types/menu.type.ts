export type IMenu = {
	id?: number;
	icon: string;
	name: string;
	url?: string;
  list?: Array<IMenu>;
};
