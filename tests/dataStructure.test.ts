import { test } from 'node:test';
import assert from 'assert';
import {
    objectToArray,
    arrayToObject,
    mapToObject,
    objectToMap,
    setToArray,
    arrayToSet,
    arrayToFlatArray,
    arrayToGroup,
    objectValuesToString, objectKeysToString, objectToString, objectToQueryString,
    objectArrayValuesToString, objectArrayKeysToString, objectArrayToString, objectArrayToQueryString
} from '../src/dataStructure';


// objectToArray
test('objectToArray converts an object to an array of [key, value] pairs', () => {
    const obj = { name: 'John', age: 30 };
    const expected = [['name', 'John'], ['age', 30]];
    assert.deepStrictEqual(objectToArray(obj), expected);
});

// arrayToObject
test('arrayToObject converts an array of [key, value] pairs back to an object', () => {
    const array: [string, any][] = [['name', 'John'], ['age', 30]];

    const expected = { name: 'John', age: 30 };
    assert.deepStrictEqual(arrayToObject(array), expected);
});

// mapToObject
test('mapToObject converts a Map to an object', () => {
    const map = new Map<string, any>([['name', 'John'], ['age', 30]]);
    const expected = { name: 'John', age: 30 };
    assert.deepStrictEqual(mapToObject(map), expected);
});

// objectToMap
test('objectToMap converts an object to a Map', () => {
    const obj = { name: 'John', age: 30 };
    const expected = new Map<string, any>([['name', 'John'], ['age', 30]]);
    assert.deepStrictEqual(objectToMap(obj), expected);
});

// setToArray
test('setToArray converts a Set to an array', () => {
    const set = new Set(['John', 30]);
    const expected = ['John', 30];
    assert.deepStrictEqual(setToArray(set), expected);
});

// arrayToSet
test('arrayToSet converts an array to a Set', () => {
    const array = ['John', 30];
    const expected = new Set(['John', 30]);
    assert.deepStrictEqual(arrayToSet(array), expected);
});

// arrayToFlatArray
test('arrayToFlatArray flattens a nested array into a single array', () => {
    const array = [1, [2, [3, [4]]], 5];
    const expected = [1, 2, 3, 4, 5];
    assert.deepStrictEqual(arrayToFlatArray(array), expected);
});

// arrayToGroup
test('arrayToGroup groups an array of objects by a given key', () => {
    const array = [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' },
        { category: 'vegetable', name: 'carrot' }
    ];
    const expected = {
        fruit: [
            { category: 'fruit', name: 'apple' },
            { category: 'fruit', name: 'banana' }
        ],
        vegetable: [
            { category: 'vegetable', name: 'carrot' }
        ]
    };
    assert.deepStrictEqual(arrayToGroup(array, 'category'), expected);
});

// Test objectValuesToString
test('objectValuesToString converts object values to a CSV string', async () => {
    const obj = { name: "John", age: 30, occupation: "Developer" };
    assert.equal(objectValuesToString(obj), "John, 30, Developer");
});

// Test objectKeysToString
test('objectKeysToString converts object keys to a CSV string', async () => {
    const obj = { name: "John", age: 30, occupation: "Developer" };
    assert.equal(objectKeysToString(obj), "name, age, occupation");
});

// Test objectToString
test('objectToString converts an object into a key:value CSV string', async () => {
    const obj = { name: "John", age: 30 };
    assert.equal(objectToString(obj), "name:John, age:30");
});

// Test objectToQueryString
test('objectToQueryString converts an object to a query string', async () => {
    const obj = { name: "John Doe", age: "30" };
    assert.equal(objectToQueryString(obj), "name=John+Doe&age=30");
});

// Test objectArrayValuesToString
test('objectArrayValuesToString converts an array of objects\' values to a CSV string', async () => {
    const arr: Record<string, string>[] = [{ name: "John" }, { age: "30" }];
    assert.equal(objectArrayValuesToString(arr), "John, 30");
});

// Test objectArrayKeysToString
test('objectArrayKeysToString converts an array of objects\' keys to a CSV string', async () => {
    const arr: Record<string, string>[] = [{ name: "John" }, { age: "30" }];
    assert.equal(objectArrayKeysToString(arr), "name, age");
});

// Test objectArrayToString
test('objectArrayToString converts an array of objects to a CSV string of key:value pairs', async () => {
    const arr = [{ name: "John", age: "30" }];
    assert.equal(objectArrayToString(arr), "name:John, age:30");
});

// Test objectArrayToQueryString
test('objectArrayToQueryString converts an array of objects to a combined query string', async () => {
    const arr = [{ name: "John" }, { age: 30 }];
    // Assuming each object is treated as a separate query string parameter set, concatenated by ','
    assert.equal(objectArrayToQueryString(arr), "name=John, age=30");
});

