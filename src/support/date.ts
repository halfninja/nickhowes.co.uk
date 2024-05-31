
const niceDate = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' });

export const formatDate = (date: Date) => niceDate.format(date);