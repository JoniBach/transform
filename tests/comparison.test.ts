import { strict as assert } from 'assert';
import {
    isEqualTo,
    isNotEqualTo,
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
    isStrictlyEqualTo,
    isStrictlyNotEqualTo,
    exists,
    doesNotExist,
    checkType,
    startsWith,
    endsWith,
    contains,
    matches,
    inArray,
    notInArray,
    empty,
    notEmpty,
    and,
    or,
    not,
    even,
    odd,
    divisibleBy,
    regex,
    lengthEquals,
    lengthGreaterThan,
    lengthLessThan,
    before,
    after,
    betweenDates,
    sameDay,
    keyExists,
    keyDoesNotExist,
    valueForKey,
    validURL,
    validEmail,
    domainMatches,
    extensionMatches,
    xor,
    nand,
    nor,
    allMatch,
    anyMatch,
    noneMatch
} from '../src/condition'; // Adjust the path as necessary

import { test } from 'node:test';

test('isEqualTo should return true for equal values', () => {
    assert.equal(isEqualTo(5, '5'), true);
});

test('isNotEqualTo should return true for non-equal values', () => {
    assert.equal(isNotEqualTo(5, '4'), true);
});

test('isGreaterThan should return true if the first value is greater', () => {
    assert.equal(isGreaterThan(5, 4), true);
});

test('isLessThan should return true if the first value is less', () => {
    assert.equal(isLessThan(3, 4), true);
});

test('isGreaterThanOrEqualTo should return true if the first value is greater or equal', () => {
    assert.equal(isGreaterThanOrEqualTo(5, 5), true);
});

test('isLessThanOrEqualTo should return true if the first value is less or equal', () => {
    assert.equal(isLessThanOrEqualTo(4, 5), true);
});

test('isStrictlyEqualTo should return true for strictly equal values', () => {
    assert.equal(isStrictlyEqualTo(5, 5), true);
});

test('isStrictlyNotEqualTo should return true for strictly not equal values', () => {
    assert.equal(isStrictlyNotEqualTo(5, '5'), true);
});

test('exists should return true for non-null/undefined values', () => {
    assert.equal(exists(0), true);
    assert.equal(exists(''), true);
    assert.equal(exists(false), true);
});

test('doesNotExist should return true for null or undefined values', () => {
    assert.equal(doesNotExist(null), true);
    assert.equal(doesNotExist(undefined), true);
});

test('checkType should correctly identify types', () => {
    assert.equal(checkType('hello', 'string'), true);
    assert.equal(checkType(10, 'number'), true);
    assert.equal(checkType(true, 'boolean'), true);
    assert.equal(checkType({}, 'object'), true);
});

test('startsWith should return true if string starts with specified substring', () => {
    assert.equal(startsWith('hello world', 'hello'), true);
});

test('endsWith should return true if string ends with specified substring', () => {
    assert.equal(endsWith('hello world', 'world'), true);
});

test('contains should return true if string contains specified substring', () => {
    assert.equal(contains('hello world', 'lo wo'), true);
});

test('matches should return true if string matches specified regex', () => {
    assert.equal(matches('hello', /^h/), true);
});

test('inArray should return true if value exists in array', () => {
    assert.equal(inArray(1, [1, 2, 3]), true);
});

test('notInArray should return true if value does not exist in array', () => {
    assert.equal(notInArray(4, [1, 2, 3]), true);
});

test('empty should return true for empty arrays', () => {
    assert.equal(empty([]), true);
});

test('notEmpty should return true for non-empty arrays', () => {
    assert.equal(notEmpty([1]), true);
});

test('and should return true if all conditions are true', () => {
    assert.equal(and(true, true), true);
});

test('or should return true if at least one condition is true', () => {
    assert.equal(or(true, false), true);
});

test('not should return true if condition is false', () => {
    assert.equal(not(false), true);
});

test('even should return true for even numbers', () => {
    assert.equal(even(2), true);
    assert.equal(even(3), false);
});

test('odd should return true for odd numbers', () => {
    assert.equal(odd(3), true);
    assert.equal(odd(4), false);
});

test('divisibleBy should return true if the number is divisible by another number', () => {
    assert.equal(divisibleBy(10, 2), true);
    assert.equal(divisibleBy(10, 3), false);
});

test('regex should return true if the string matches the regex', () => {
    assert.equal(regex('test', /es/), true);
    assert.equal(regex('test', /xyz/), false);
});

test('lengthEquals should return true if the string length equals the specified value', () => {
    assert.equal(lengthEquals('hello', 5), true);
    assert.equal(lengthEquals('hello', 4), false);
});

test('lengthGreaterThan should return true if the string length is greater than the specified value', () => {
    assert.equal(lengthGreaterThan('hello', 4), true);
    assert.equal(lengthGreaterThan('hi', 4), false);
});

test('lengthLessThan should return true if the string length is less than the specified value', () => {
    assert.equal(lengthLessThan('hi', 3), true);
    assert.equal(lengthLessThan('hello', 5), false);
});


// Date and Time Conditions
test('before should return true if first date is before the second date', () => {
    assert.equal(before(new Date('2020-01-01'), new Date('2020-01-02')), true);
});

test('after should return true if first date is after the second date', () => {
    assert.equal(after(new Date('2020-01-02'), new Date('2020-01-01')), true);
});

test('betweenDates should return true if a date falls between two dates', () => {
    assert.equal(betweenDates(new Date('2020-01-02'), new Date('2020-01-01'), new Date('2020-01-03')), true);
});

test('sameDay should return true if two dates fall on the same day', () => {
    assert.equal(sameDay(new Date('2020-01-01'), new Date('2020-01-01')), true);
});

// JSON and Object Conditions
test('keyExists should return true if an object has a specified key', () => {
    assert.equal(keyExists({ a: 1 }, 'a'), true);
});

test('keyDoesNotExist should return true if an object does not have a specified key', () => {
    assert.equal(keyDoesNotExist({ a: 1 }, 'b'), true);
});

test('valueForKey should return true if the value for a specified key matches a condition', () => {
    assert.equal(valueForKey({ a: 2 }, 'a', value => value % 2 === 0), true);
});

// Network and URL Conditions
test('validURL should return true for a valid URL', () => {
    assert.equal(validURL('https://www.example.com'), true);
});

test('validEmail should return true for a valid email address', () => {
    assert.equal(validEmail('test@example.com'), true);
});

test('domainMatches should return true if the domain of a URL matches a specified domain', () => {
    assert.equal(domainMatches('https://www.example.com', 'www.example.com'), true);
});

// File and Path Conditions (Assuming an environment setup for these kinds of tests)
test('extensionMatches should return true if the file extension matches a specified extension', () => {
    assert.equal(extensionMatches('test.txt', '.txt'), true);
});

// Advanced Logical Conditions
test('xor should return true if exactly one of the conditions is true', () => {
    assert.equal(xor(true, false), true);
});

test('nand should return true if not all conditions are true', () => {
    assert.equal(nand(true, false), true);
});

test('nor should return true if none of the conditions are true', () => {
    assert.equal(nor(false, false), true);
});

// Array and Collection Specific
test('allMatch should return true if all elements in an array satisfy a specified condition', () => {
    assert.equal(allMatch([2, 4, 6], x => x % 2 === 0), true);
});

test('anyMatch should return true if any element in an array satisfies a specified condition', () => {
    assert.equal(anyMatch([1, 3, 5, 4], x => x % 2 === 0), true);
});

test('noneMatch should return true if no elements in an array satisfy a specified condition', () => {
    assert.equal(noneMatch([1, 3, 5], x => x % 2 === 0), true);
});