import { test } from 'node:test';
import assert from 'assert';
import {
    numberToString,
    stringToNumber,
    booleanToString,
    stringToBoolean,
    numberToBoolean,
    booleanToNumber
} from '../src/basic'; // Adjust the path to where your functions are defined

test('numberToString converts numbers to strings', () => {
    assert.strictEqual(numberToString(123), '123');
    assert.strictEqual(numberToString(-456), '-456');
});

test('stringToNumber converts strings to numbers', () => {
    assert.strictEqual(stringToNumber('123'), 123);
    assert.strictEqual(stringToNumber('-456'), -456);
    assert.strictEqual(stringToNumber('0'), 0);
});

test('booleanToString converts booleans to strings', () => {
    assert.strictEqual(booleanToString(true), 'true');
    assert.strictEqual(booleanToString(false), 'false');
});

test('stringToBoolean converts "true" string to boolean true, others to false', () => {
    assert.strictEqual(stringToBoolean('true'), true);
    assert.strictEqual(stringToBoolean('True'), true);
    assert.strictEqual(stringToBoolean('false'), false);
    assert.strictEqual(stringToBoolean('randomString'), false);
});

test('numberToBoolean converts 0 to false, non-zero to true', () => {
    assert.strictEqual(numberToBoolean(1), true);
    assert.strictEqual(numberToBoolean(-1), true);
    assert.strictEqual(numberToBoolean(0), false);
});

test('booleanToNumber converts true to 1, false to 0', () => {
    assert.strictEqual(booleanToNumber(true), 1);
    assert.strictEqual(booleanToNumber(false), 0);
});
