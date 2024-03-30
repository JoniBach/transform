
export function isEqualTo(a: any, b: any): boolean {
    return a == b;
}

export function isNotEqualTo(a: any, b: any): boolean {
    return a != b;
}

export function isGreaterThan(a: number, b: number): boolean {
    return a > b;
}

export function isLessThan(a: number, b: number): boolean {
    return a < b;
}

export function isGreaterThanOrEqualTo(a: number, b: number): boolean {
    return a >= b;
}

export function isLessThanOrEqualTo(a: number, b: number): boolean {
    return a <= b;
}

export function isStrictlyEqualTo(a: any, b: any): boolean {
    return a === b;
}

export function isStrictlyNotEqualTo(a: any, b: any): boolean {
    return a !== b;
}
export function exists(value: any): boolean {
    return value !== null && value !== undefined;
}
export function doesNotExist(value: any): boolean {
    return value === null || value === undefined;
}
export function checkType(value: any, type: string): boolean {
    return typeof value === type;
}
export function startsWith(str: string, substring: string): boolean {
    return str.startsWith(substring);
}
export function endsWith(str: string, substring: string): boolean {
    return str.endsWith(substring);
}
export function contains(str: string, substring: string): boolean {
    return str.includes(substring);
}
export function matches(str: string, regex: RegExp): boolean {
    return regex.test(str);
}
export function inArray<T>(value: T, array: T[]): boolean {
    return array.includes(value);
}
export function notInArray<T>(value: T, array: T[]): boolean {
    return !array.includes(value);
}
export function empty(array: any[]): boolean {
    return array.length === 0;
}
export function notEmpty(array: any[]): boolean {
    return array.length > 0;
}
export function and(...conditions: boolean[]): boolean {
    return conditions.every(Boolean);
}
export function or(...conditions: boolean[]): boolean {
    return conditions.some(Boolean);
}
export function not(condition: boolean): boolean {
    return !condition;
}
export function even(number: number): boolean {
    return number % 2 === 0;
}
export function odd(number: number): boolean {
    return number % 2 !== 0;
}
export function divisibleBy(number: number, divisor: number): boolean {
    return number % divisor === 0;
}
export function regex(str: string, regex: RegExp): boolean {
    return regex.test(str);
}
export function lengthEquals(str: string, length: number): boolean {
    return str.length === length;
}
export function lengthGreaterThan(str: string, length: number): boolean {
    return str.length > length;
}
export function lengthLessThan(str: string, length: number): boolean {
    return str.length < length;
}
export function before(date1: Date, date2: Date): boolean {
    return date1 < date2;
}
export function after(date1: Date, date2: Date): boolean {
    return date1 > date2;
}
export function betweenDates(date: Date, startDate: Date, endDate: Date): boolean {
    return date > startDate && date < endDate;
}
export function sameDay(date1: Date, date2: Date): boolean {
    return date1.toDateString() === date2.toDateString();
}
export function keyExists(obj: object, key: string): boolean {
    return Object.hasOwnProperty.call(obj, key);
}
export function keyDoesNotExist(obj: object, key: string): boolean {
    return !Object.hasOwnProperty.call(obj, key);
}
export function valueForKey<T>(obj: { [key: string]: any }, key: string, condition: (value: T) => boolean): boolean {
    return condition(obj[key]);
}
export function validURL(str: string): boolean {
    try {
        new URL(str);
        return true;
    } catch (_) {
        return false;
    }
}
export function validEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function domainMatches(url: string, domain: string): boolean {
    try {
        return new URL(url).hostname === domain;
    } catch (_) {
        return false;
    }
}
export function fileExists(path: string): boolean {
    // Note: this function requires a runtime that has access to the filesystem.
    const fs = require('fs');
    try {
        fs.accessSync(path);
        return true;
    } catch (_) {
        return false;
    }
}
export function extensionMatches(filePath: string, extension: string): boolean {
    const path = require('path');
    return path.extname(filePath) === extension;
}
export function xor(condition1: boolean, condition2: boolean): boolean {
    return condition1 ? !condition2 : condition2;
}
export function nand(condition1: boolean, condition2: boolean): boolean {
    return !(condition1 && condition2);
}
export function nor(condition1: boolean, condition2: boolean): boolean {
    return !(condition1 || condition2);
}
export function allMatch<T>(array: T[], condition: (value: T) => boolean): boolean {
    return array.every(condition);
}
export function anyMatch<T>(array: T[], condition: (value: T) => boolean): boolean {
    return array.some(condition);
}
export function noneMatch<T>(array: T[], condition: (value: T) => boolean): boolean {
    return !array.some(condition);
}

export type OperationFunction = (a: any, b?: any, c?: any) => boolean;
export type ConditionParams = [any, string, any?, boolean?];


export interface OperationEntry {
    operation: string;
    function: OperationFunction;
}

export const operationList: OperationEntry[] = [
    {
        operation: '=',
        function: isEqualTo
    },
    {
        operation: '!=',
        function: isNotEqualTo
    },
    {
        operation: '>',
        function: isGreaterThan
    },
    {
        operation: '<',
        function: isLessThan
    },
    {
        operation: '>=',
        function: isGreaterThanOrEqualTo
    },
    {
        operation: '<=',
        function: isLessThanOrEqualTo
    },
    {
        operation: '===',
        function: isStrictlyEqualTo
    },
    {
        operation: '!==',
        function: isStrictlyNotEqualTo
    },
    {
        operation: 'exists',
        function: exists
    },
    {
        operation: 'doesNotExist',
        function: doesNotExist
    },
    {
        operation: 'checkType',
        function: checkType
    },
    {
        operation: 'startsWith',
        function: startsWith
    },
    {
        operation: 'endsWith',
        function: endsWith
    },
    {
        operation: 'contains',
        function: contains
    },
    {
        operation: 'matches',
        function: matches
    },
    {
        operation: 'inArray',
        function: inArray
    },
    {
        operation: 'notInArray',
        function: notInArray
    },
    {
        operation: 'empty',
        function: empty
    },
    {
        operation: 'notEmpty',
        function: notEmpty
    },
    {
        operation: 'and',
        function: and
    },
    {
        operation: 'or',
        function: or
    },
    {
        operation: 'not',
        function: not
    },
    {
        operation: 'even',
        function: even
    },
    {
        operation: 'odd',
        function: odd
    },
    {
        operation: 'divisibleBy',
        function: divisibleBy
    },
    {
        operation: 'regex',
        function: regex
    },
    {
        operation: 'lengthEquals',
        function: lengthEquals
    },
    {
        operation: 'lengthGreaterThan',
        function: lengthGreaterThan
    },
    {
        operation: 'lengthLessThan',
        function: lengthLessThan
    },
    {
        operation: 'before',
        function: before
    },
    {
        operation: 'after',
        function: after
    },
    {
        operation: 'betweenDates',
        function: betweenDates
    },
    {
        operation: 'sameDay',
        function: sameDay
    },
    {
        operation
            : 'keyExists',
        function: keyExists
    },
    {
        operation: 'keyDoesNotExist',
        function: keyDoesNotExist
    },
    {
        operation: 'valueForKey',
        function: valueForKey
    },
    {
        operation: 'validURL',
        function: validURL
    },
    {
        operation: 'validEmail',
        function: validEmail
    },
    {
        operation: 'domainMatches',
        function: domainMatches
    },
    {
        operation: 'fileExists',
        function: fileExists
    },
    {
        operation: 'extensionMatches',
        function: extensionMatches
    },
    {
        operation: 'xor',
        function: xor
    },
    {
        operation: 'nand',
        function: nand
    },
    {
        operation: 'nor',
        function: nor
    },
    {
        operation: 'allMatch',
        function: allMatch
    },
    {
        operation: 'anyMatch',
        function: anyMatch
    },
    {
        operation: 'noneMatch',
        function: noneMatch
    }
]

export class UnsupportedOperationException extends Error { }
export class OperationExecutionException extends Error {
    constructor(public operationName: string, public operands: any[], message?: string) {
        super(message);
        this.name = 'OperationExecutionException';
    }
}

export const checkCondition = (params: [any, string, any?]): boolean => {
    const [value1, operation, value2] = params;

    const operationEntry = operationList.find(entry => entry.operation === operation);

    if (!operationEntry) {
        throw new UnsupportedOperationException(`Unsupported operation '${operation}'. Please check the list of supported operations.`);
    }

    try {
        const arity = operationEntry.function.length;
        return arity === 1 ? operationEntry.function(value1) : operationEntry.function(value1, value2);
    } catch (error) {
        if (error instanceof Error) {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}): ${error.message}`);
        } else {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}).`);
        }
    }
};


export const checkConditions = (conditions: ConditionParams[]): boolean => {
    for (const condition of conditions) {
        const [value1, operation, value2, expectedResult = true] = condition; // Default expected result is true
        const result = checkCondition([value1, operation, value2]);

        // Check the result against the expected result
        if (result !== expectedResult) {
            return false; // Condition did not meet the expected result
        }
    }
    return true; // All conditions met their expected results
};

export const checkObjectCondition = (obj: Record<string, any>, params: [string, string, any?]): boolean => {
    const [key, operation, compareValue] = params;
    const value = obj[key];
    const operationEntry = operationList.find(entry => entry.operation === operation);

    if (!operationEntry) {
        throw new UnsupportedOperationException(`Unsupported operation '${operation}'. Please check the list of supported operations.`);
    }

    try {
        // Assuming all operations need both value and compareValue, adjust as necessary.
        return operationEntry.function(value, compareValue);
    } catch (error) {
        if (error instanceof Error) {
            throw new OperationExecutionException(operation, [value, compareValue], `Error executing '${operation}' with key '${key}' and value '${compareValue}': ${error.message}`);
        } else {
            throw new OperationExecutionException(operation, [value, compareValue], `Error executing '${operation}' with key '${key}' and value '${compareValue}'.`);
        }
    }
};

export const checkObjectConditions = (obj: Record<string, any>, conditions: [string, string, any?][]): boolean => {
    for (const condition of conditions) {
        if (!checkObjectCondition(obj, condition)) {
            return false; // A condition did not meet the expected result
        }
    }
    return true; // All conditions met their expected results
};

export function filterByObjectCondition(objects: Record<string, any>[], condition: [string, string, any?]): Record<string, any>[] {
    return objects.filter(obj => checkObjectCondition(obj, condition));
}

export function filterByObjectConditions(objects: Record<string, any>[], conditions: [string, string, any?][]): Record<string, any>[] {
    return objects.filter(obj => checkObjectConditions(obj, conditions));
}
