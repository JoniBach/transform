// Converts a number to a string.
export function numberToString(num: number): string {
    return num.toString();
}

// Converts a string to a number.
export function stringToNumber(str: string): number {
    return Number(str);
}

// Converts a boolean to a string.
export function booleanToString(bool: boolean): string {
    return bool.toString();
}

// Converts a string to a boolean.
// Assumes 'true' (case insensitive) is the only string value that returns true.
export function stringToBoolean(str: string): boolean {
    return str.toLowerCase() === 'true';
}

// Converts a number to a boolean.
// 0 returns false; any non-zero value returns true.
export function numberToBoolean(num: number): boolean {
    return num !== 0;
}

// Converts a boolean to a number.
// true returns 1; false returns 0.
export function booleanToNumber(bool: boolean): number {
    return bool ? 1 : 0;
}