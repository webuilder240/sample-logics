export function formatRange(start: Date, end: Date): any {
  const dateTimeFormat = new Intl.DateTimeFormat('jp')
  return dateTimeFormat.formatRange(start, end);
}
