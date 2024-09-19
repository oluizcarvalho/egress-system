export const getInitials = (name: string): string => {
	const excludedWords = ['de', 'da', 'do', 'das', 'dos'];

	return name
		.split(' ')
		.filter(word => !excludedWords.includes(word.toLowerCase()))
		.map(word => word[0])
		.join('')
		.toUpperCase();
};
