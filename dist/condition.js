"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationExecutionException = exports.UnsupportedOperationException = exports.operationList = exports.noneMatch = exports.anyMatch = exports.allMatch = exports.nor = exports.nand = exports.xor = exports.extensionMatches = exports.fileExists = exports.domainMatches = exports.validEmail = exports.validURL = exports.valueForKey = exports.keyDoesNotExist = exports.keyExists = exports.sameDay = exports.betweenDates = exports.after = exports.before = exports.lengthLessThan = exports.lengthGreaterThan = exports.lengthEquals = exports.regex = exports.divisibleBy = exports.odd = exports.even = exports.not = exports.or = exports.and = exports.notEmpty = exports.empty = exports.notInArray = exports.inArray = exports.matches = exports.contains = exports.endsWith = exports.startsWith = exports.checkType = exports.doesNotExist = exports.exists = exports.isStrictlyNotEqualTo = exports.isStrictlyEqualTo = exports.isLessThanOrEqualTo = exports.isGreaterThanOrEqualTo = exports.isLessThan = exports.isGreaterThan = exports.isNotEqualTo = exports.isEqualTo = void 0;
exports.checkConditions = exports.checkCondition = void 0;
function isEqualTo(a, b) {
    return a == b;
}
exports.isEqualTo = isEqualTo;
function isNotEqualTo(a, b) {
    return a != b;
}
exports.isNotEqualTo = isNotEqualTo;
function isGreaterThan(a, b) {
    return a > b;
}
exports.isGreaterThan = isGreaterThan;
function isLessThan(a, b) {
    return a < b;
}
exports.isLessThan = isLessThan;
function isGreaterThanOrEqualTo(a, b) {
    return a >= b;
}
exports.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
function isLessThanOrEqualTo(a, b) {
    return a <= b;
}
exports.isLessThanOrEqualTo = isLessThanOrEqualTo;
function isStrictlyEqualTo(a, b) {
    return a === b;
}
exports.isStrictlyEqualTo = isStrictlyEqualTo;
function isStrictlyNotEqualTo(a, b) {
    return a !== b;
}
exports.isStrictlyNotEqualTo = isStrictlyNotEqualTo;
function exists(value) {
    return value !== null && value !== undefined;
}
exports.exists = exists;
function doesNotExist(value) {
    return value === null || value === undefined;
}
exports.doesNotExist = doesNotExist;
function checkType(value, type) {
    return typeof value === type;
}
exports.checkType = checkType;
function startsWith(str, substring) {
    return str.startsWith(substring);
}
exports.startsWith = startsWith;
function endsWith(str, substring) {
    return str.endsWith(substring);
}
exports.endsWith = endsWith;
function contains(str, substring) {
    return str.includes(substring);
}
exports.contains = contains;
function matches(str, regex) {
    return regex.test(str);
}
exports.matches = matches;
function inArray(value, array) {
    return array.includes(value);
}
exports.inArray = inArray;
function notInArray(value, array) {
    return !array.includes(value);
}
exports.notInArray = notInArray;
function empty(array) {
    return array.length === 0;
}
exports.empty = empty;
function notEmpty(array) {
    return array.length > 0;
}
exports.notEmpty = notEmpty;
function and(...conditions) {
    return conditions.every(Boolean);
}
exports.and = and;
function or(...conditions) {
    return conditions.some(Boolean);
}
exports.or = or;
function not(condition) {
    return !condition;
}
exports.not = not;
function even(number) {
    return number % 2 === 0;
}
exports.even = even;
function odd(number) {
    return number % 2 !== 0;
}
exports.odd = odd;
function divisibleBy(number, divisor) {
    return number % divisor === 0;
}
exports.divisibleBy = divisibleBy;
function regex(str, regex) {
    return regex.test(str);
}
exports.regex = regex;
function lengthEquals(str, length) {
    return str.length === length;
}
exports.lengthEquals = lengthEquals;
function lengthGreaterThan(str, length) {
    return str.length > length;
}
exports.lengthGreaterThan = lengthGreaterThan;
function lengthLessThan(str, length) {
    return str.length < length;
}
exports.lengthLessThan = lengthLessThan;
function before(date1, date2) {
    return date1 < date2;
}
exports.before = before;
function after(date1, date2) {
    return date1 > date2;
}
exports.after = after;
function betweenDates(date, startDate, endDate) {
    return date > startDate && date < endDate;
}
exports.betweenDates = betweenDates;
function sameDay(date1, date2) {
    return date1.toDateString() === date2.toDateString();
}
exports.sameDay = sameDay;
function keyExists(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
exports.keyExists = keyExists;
function keyDoesNotExist(obj, key) {
    return !Object.hasOwnProperty.call(obj, key);
}
exports.keyDoesNotExist = keyDoesNotExist;
function valueForKey(obj, key, condition) {
    return condition(obj[key]);
}
exports.valueForKey = valueForKey;
function validURL(str) {
    try {
        new URL(str);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.validURL = validURL;
function validEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
exports.validEmail = validEmail;
function domainMatches(url, domain) {
    try {
        return new URL(url).hostname === domain;
    }
    catch (_) {
        return false;
    }
}
exports.domainMatches = domainMatches;
function fileExists(path) {
    // Note: this function requires a runtime that has access to the filesystem.
    const fs = require('fs');
    try {
        fs.accessSync(path);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.fileExists = fileExists;
function extensionMatches(filePath, extension) {
    const path = require('path');
    return path.extname(filePath) === extension;
}
exports.extensionMatches = extensionMatches;
function xor(condition1, condition2) {
    return condition1 ? !condition2 : condition2;
}
exports.xor = xor;
function nand(condition1, condition2) {
    return !(condition1 && condition2);
}
exports.nand = nand;
function nor(condition1, condition2) {
    return !(condition1 || condition2);
}
exports.nor = nor;
function allMatch(array, condition) {
    return array.every(condition);
}
exports.allMatch = allMatch;
function anyMatch(array, condition) {
    return array.some(condition);
}
exports.anyMatch = anyMatch;
function noneMatch(array, condition) {
    return !array.some(condition);
}
exports.noneMatch = noneMatch;
exports.operationList = [
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
        operation: 'keyExists',
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
];
class UnsupportedOperationException extends Error {
}
exports.UnsupportedOperationException = UnsupportedOperationException;
class OperationExecutionException extends Error {
    constructor(operationName, operands, message) {
        super(message);
        this.operationName = operationName;
        this.operands = operands;
        this.name = 'OperationExecutionException';
    }
}
exports.OperationExecutionException = OperationExecutionException;
const checkCondition = (params) => {
    const [value1, operation, value2] = params;
    const operationEntry = exports.operationList.find(entry => entry.operation === operation);
    if (!operationEntry) {
        throw new UnsupportedOperationException(`Unsupported operation '${operation}'. Please check the list of supported operations.`);
    }
    try {
        const arity = operationEntry.function.length;
        return arity === 1 ? operationEntry.function(value1) : operationEntry.function(value1, value2);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}): ${error.message}`);
        }
        else {
            throw new OperationExecutionException(operation, [value1, value2], `Error executing '${operation}' with values (${value1}, ${value2}).`);
        }
    }
};
exports.checkCondition = checkCondition;
const checkConditions = (conditions) => {
    for (const condition of conditions) {
        // Default `expectedResult` to true if it's not explicitly provided
        const [value1, operation, value2, expectedResult = true] = condition;
        const result = (0, exports.checkCondition)([value1, operation, value2]);
        // Here, `expectedResult` is guaranteed to be a boolean due to the default value
        if (result !== expectedResult) {
            return false;
        }
    }
    return true;
};
exports.checkConditions = checkConditions;
