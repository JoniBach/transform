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
