export function formatDate(dateString: string, locale: string): string {
  const date: Date = new Date(dateString);
  const formattedDate: string = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(date);
  return formattedDate;
}
