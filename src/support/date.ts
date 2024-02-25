
const niceDate = new Intl.DateTimeFormat('en-gb', { dateStyle: 'long' });

export function formatDate(date: Date) {
  return niceDate.format(date);
}