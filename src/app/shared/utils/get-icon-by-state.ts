const ICONS_BY_STATE = {
	success: 'fa-check-circle',
	danger: 'fa-times-circle',
	warning: 'fa-exclamation-triangle',
	info: 'fa-info-circle',
	['']: '',
};

export type StateType = keyof typeof ICONS_BY_STATE;

export const getIconByState = (state: StateType) => {
	return ICONS_BY_STATE[state] || '';
};
