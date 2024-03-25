// Converts a Date object to a UNIX timestamp (number of milliseconds since the Unix Epoch).
export function dateToTimestamp(date: Date): number {
    return date.getTime();
}

// Converts a UNIX timestamp to a Date object.
export function timestampToDate(timestamp: number): Date {
    return new Date(timestamp);
}

// Converts a Date object to an ISO 8601 string.
export function dateToISOString(date: Date): string {
    return date.toISOString();
}

// Converts an ISO 8601 string to a Date object.
export function isoStringToDate(isoString: string): Date {
    return new Date(isoString);
}

// Converts a UNIX timestamp to an ISO 8601 string.
export function timestampToISOString(timestamp: number): string {
    return dateToISOString(timestampToDate(timestamp));
}

// Converts an ISO 8601 string to a UNIX timestamp.
export function isoStringToTimestamp(isoString: string): number {
    return dateToTimestamp(isoStringToDate(isoString));
}

// Converts a Date object to a localized string representation.
export function dateToLocalString(date: Date, locale: string = 'default', options?: Intl.DateTimeFormatOptions): string {
    return date.toLocaleString(locale, options);
}

// Converts a Date object to the name of the day of the week.
export function dateToDayOfWeek(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}
