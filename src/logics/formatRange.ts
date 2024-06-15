export function formatRange(start: Date, end: Date): any {
  const dateTimeFormat = new Intl.DateTimeFormat('ja-JP')
  return dateTimeFormat.formatRange(start, end);
}
