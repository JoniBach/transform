
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
    // Note: This function requires a runtime that has access to the filesystem.
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