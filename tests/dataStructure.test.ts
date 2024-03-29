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
    arrayToGroup
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