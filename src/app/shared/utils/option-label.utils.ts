import { SelectOptions } from '../models/select.model';

export const getLabelByValue = (value: string, options: SelectOptions): string => {
	return options.find(option => option.value === value)?.label || '--';
};
