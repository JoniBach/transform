export declare function objectToArray(obj: Record<string, any>): Array<[string, any]>;
export declare function arrayToObject(array: Array<[string, any]>): Record<string, any>;
export declare function mapToObject<T>(map: Map<string, T>): Record<string, T>;
export declare function objectToMap<T>(obj: Record<string, T>): Map<string, T>;
export declare function setToArray(set: Set<any>): any[];
export declare function arrayToSet(array: any[]): Set<any>;
export declare function arrayToFlatArray(array: any[]): any[];
export declare function arrayToGroup(array: Array<Record<string, any>>, key: string): Record<string, Array<Record<string, any>>>;
