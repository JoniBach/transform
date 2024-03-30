// Converts an object to an array of [key, value] pairs.
export function objectToArray(obj: Record<string, any>): Array<[string, any]> {
    return Object.entries(obj);
}

// Converts an array of [key, value] pairs to an object.
export function arrayToObject(array: Array<[string, any]>): Record<string, any> {
    return Object.fromEntries(array);
}

// Converts a Map to an object.
export function mapToObject<T>(map: Map<string, T>): Record<string, T> {
    return Object.fromEntries(map);
}


// Converts an object to a Map.
export function objectToMap<T>(obj: Record<string, T>): Map<string, T> {
    return new Map(Object.entries(obj));
}

// Converts a Set to an array.
export function setToArray(set: Set<any>): any[] {
    return Array.from(set);
}

// Converts an array to a Set.
export function arrayToSet(array: any[]): Set<any> {
    return new Set(array);
}


// Flattens a nested array into a single array.
export function arrayToFlatArray(array: any[]): any[] {
    return array.flat(Infinity);
}

// Groups an array of objects by a given key.
export function arrayToGroup(array: Array<Record<string, any>>, key: string): Record<string, Array<Record<string, any>>> {
    return array.reduce((accumulator, currentValue) => {
        (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
        return accumulator;
    }, {});
}

// Converts an object's values to a single comma-separated string.
export function objectValuesToString<T>(obj: Record<string, T>): string {
    return Object.values(obj).join(', ');
}

// Converts an object's keys to a single comma-separated string.
export function objectKeysToString<T>(obj: Record<string, T>): string {
    return Object.keys(obj).join(', ');
}

// Converts an object into a string by concatenating its key-value pairs, each pair in "key:value" format.
export function objectToString<T>(obj: Record<string, T>): string {
    const keyValuePairs = Object.entries(obj).map(([key, value]) => `${key}:${value}`);
    return keyValuePairs.join(', ');
}

// Converts an object to a query string.
export function objectToQueryString(obj: Record<string, any>): string {
    return new URLSearchParams(obj).toString();
}

// non nested object array stringification

export function objectArrayValuesToString<T>(array: Record<string, T>[]): string {
    return array.map(obj => Object.values(obj).join(', ')).join(', ');
}

export function objectArrayKeysToString<T>(array: Record<string, T>[]): string {
    return array.map(obj => Object.keys(obj).join(', ')).join(', ');
}

export function objectArrayToString<T>(array: Record<string, T>[]): string {
    return array.map(obj => Object.entries(obj).map(([key, value]) => `${key}:${value}`).join(', ')).join(', ');
}

export function objectArrayToQueryString(array: Record<string, any>[]): string {
    return array.map(obj => new URLSearchParams(obj).toString()).join(', ');
}

// nested object array stringification

export function nestedObjectArrayValuesToString<T>(array: Record<string, T>[]): string {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map(obj => objectValuesToString(obj)).join(', ');
}

export function nestedObjectArrayKeysToString<T>(array: Record<string, T>[]): string {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map(obj => objectKeysToString(obj)).join(', ');
}

export function nestedObjectArrayToString<T>(array: Record<string, T>[]): string {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map(obj => objectToString(obj)).join(', ');
}

export function nestedObjectArrayToQueryString(array: Record<string, any>[]): string {
    const flattenedArray = arrayToFlatArray(array);
    return flattenedArray.map(obj => objectToQueryString(obj)).join(', ');
}

// reverse stringification

export function stringToObject(str: string): Record<string, any> {
    return Object.fromEntries(new URLSearchParams(str));
}

export function stringToArray(str: string): Array<[string, any]> {
    return Array.from(new URLSearchParams(str));
}