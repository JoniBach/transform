export declare function isEqualTo(a: any, b: any): boolean;
export declare function isNotEqualTo(a: any, b: any): boolean;
export declare function isGreaterThan(a: number, b: number): boolean;
export declare function isLessThan(a: number, b: number): boolean;
export declare function isGreaterThanOrEqualTo(a: number, b: number): boolean;
export declare function isLessThanOrEqualTo(a: number, b: number): boolean;
export declare function isStrictlyEqualTo(a: any, b: any): boolean;
export declare function isStrictlyNotEqualTo(a: any, b: any): boolean;
export declare function exists(value: any): boolean;
export declare function doesNotExist(value: any): boolean;
export declare function checkType(value: any, type: string): boolean;
export declare function startsWith(str: string, substring: string): boolean;
export declare function endsWith(str: string, substring: string): boolean;
export declare function contains(str: string, substring: string): boolean;
export declare function matches(str: string, regex: RegExp): boolean;
export declare function inArray<T>(value: T, array: T[]): boolean;
export declare function notInArray<T>(value: T, array: T[]): boolean;
export declare function empty(array: any[]): boolean;
export declare function notEmpty(array: any[]): boolean;
export declare function and(...conditions: boolean[]): boolean;
export declare function or(...conditions: boolean[]): boolean;
export declare function not(condition: boolean): boolean;
export declare function even(number: number): boolean;
export declare function odd(number: number): boolean;
export declare function divisibleBy(number: number, divisor: number): boolean;
export declare function regex(str: string, regex: RegExp): boolean;
export declare function lengthEquals(str: string, length: number): boolean;
export declare function lengthGreaterThan(str: string, length: number): boolean;
export declare function lengthLessThan(str: string, length: number): boolean;
export declare function before(date1: Date, date2: Date): boolean;
export declare function after(date1: Date, date2: Date): boolean;
export declare function betweenDates(date: Date, startDate: Date, endDate: Date): boolean;
export declare function sameDay(date1: Date, date2: Date): boolean;
export declare function keyExists(obj: object, key: string): boolean;
export declare function keyDoesNotExist(obj: object, key: string): boolean;
export declare function valueForKey<T>(obj: {
    [key: string]: any;
}, key: string, condition: (value: T) => boolean): boolean;
export declare function validURL(str: string): boolean;
export declare function validEmail(email: string): boolean;
export declare function domainMatches(url: string, domain: string): boolean;
export declare function fileExists(path: string): boolean;
export declare function extensionMatches(filePath: string, extension: string): boolean;
export declare function xor(condition1: boolean, condition2: boolean): boolean;
export declare function nand(condition1: boolean, condition2: boolean): boolean;
export declare function nor(condition1: boolean, condition2: boolean): boolean;
export declare function allMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
export declare function anyMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
export declare function noneMatch<T>(array: T[], condition: (value: T) => boolean): boolean;
export type OperationFunction = (a: any, b?: any, c?: any) => boolean;
export type ConditionParams = [any, string, any?, boolean?];
export interface OperationEntry {
    operation: string;
    function: OperationFunction;
}
export declare const operationList: OperationEntry[];
export declare class UnsupportedOperationException extends Error {
}
export declare class OperationExecutionException extends Error {
    operationName: string;
    operands: any[];
    constructor(operationName: string, operands: any[], message?: string);
}
export declare const checkCondition: (params: [any, string, any?]) => boolean;
export declare const checkConditions: (conditions: ConditionParams[]) => boolean;
