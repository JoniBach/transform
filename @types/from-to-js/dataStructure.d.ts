export declare function objectToArray(obj: Record<string, any>): Array<[string, any]>;
export declare function arrayToObject(array: Array<[string, any]>): Record<string, any>;
export declare function mapToObject(map: Map<string, any>): Record<string, any>;
export declare function objectToMap(obj: Record<string, any>): Map<string, any>;
export declare function setToArray(set: Set<any>): any[];
export declare function arrayToSet(array: any[]): Set<any>;
export declare function arrayToFlatArray(array: any[]): any[];
export declare function arrayToGroup(array: Array<Record<string, any>>, key: string): Record<string, Array<Record<string, any>>>;
