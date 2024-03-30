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
    objectArrayValuesToString, objectArrayKeysToString, objectArrayToString, objectArrayToQueryString, searchString, objectArrayToArrayOfString, nestedObjectArrayToArrayOfString, arrayWithObjectAndString, filterArrayByString, filterArrayByStringRaw
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

// Test objectArrayToArrayOfString function
test('objectArrayToArrayOfString converts an array of objects to an array of string representations', async () => {
    const arrayOfObjects: Record<string, any>[] = [
        { name: "John", age: "30" },
        { name: "Jane", occupation: "Developer" }
    ];
    const expectedOutput = ["name:John, age:30", "name:Jane, occupation:Developer"];

    const result = objectArrayToArrayOfString(arrayOfObjects);
    assert.deepEqual(result, expectedOutput);
});


// Test nestedObjectArrayToArrayOfString for handling nested arrays and objects
test('nestedObjectArrayToArrayOfString converts nested arrays of objects to an array of string representations', async () => {
    const nestedArray = [
        { name: "John", age: "30" },
        [
            { name: "Jane", occupation: "Developer" },
            [
                { name: "Doe", hobbies: ["reading", "gaming"] }
            ]
        ],
        "Some random string",
        [
            42, // Testing with a number
            true, // Testing with a boolean
        ]
    ];

    const expectedOutput = [
        "name:John, age:30",
        "name:Jane, occupation:Developer",
        "name:Doe, hobbies:reading,gaming",
        "Some random string",
        "42",
        "true"
    ];

    const result = nestedObjectArrayToArrayOfString(nestedArray);
    assert.deepEqual(result, expectedOutput);
});

test('arrayWithObjectAndString converts array of objects to array with original objects and their string representation', async () => {
    const input = [{ name: "Dave", age: "42" }];
    const expected = [{ original: { name: "Dave", age: "42" }, objectString: "Dave, 42" }];

    const result = arrayWithObjectAndString(input);
    assert.deepEqual(result, expected);
});

// search 


// Test searchForPartialMatch function for case-insensitive partial match
test('searchForPartialMatch finds a partial match regardless of case', async () => {
    const text = "The quick brown fox jumps over the lazy dog.";

    // Partial match, same case
    assert.ok(searchString(text, "quick"));

    // Partial match, different case
    assert.ok(searchString(text, "QUICK"));

    // Partial match at the beginning of the string
    assert.ok(searchString(text, "the"));

    // Partial match at the end of the string
    assert.ok(searchString(text, "dog"));

    // No match
    assert.ok(!searchString(text, "cat"));

    // Substring that is a part of a word (should match)
    assert.ok(searchString(text, "jum"));
});


// Sample data
const transformedArray = [
    { original: { name: "Dave", age: 42 }, objectString: "Dave, 42" },
    { original: { name: "Jane", occupation: "Developer", experience: "5 years" }, objectString: "Jane, Developer, 5 years" },
    { original: { name: "Sam", hobby: "hiking" }, objectString: "Sam, hiking" }
];

// return original objects


// Testing for a term present in one of the objects
test('Filters based on a term present in the objects', async () => {
    const result = filterArrayByString(transformedArray, "Dev");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].occupation, "Developer");
});

// Testing case-insensitivity of the search
test('Filters case-insensitively', async () => {
    const result = filterArrayByString(transformedArray, "jane");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].name, "Jane");
});

// Testing for a search term not present
test('Correctly handles when the search term is not present', async () => {
    const result = filterArrayByString(transformedArray, "astronaut");
    assert.strictEqual(result.length, 0);
});

// Testing  match in values
test('Filters based on  match in objectString values', async () => {
    const result = filterArrayByString(transformedArray, "hiking");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].hobby, "hiking");
});


// return transformed object

// Testing for a term present in one of the objects
test('Filters based on a term present in the objects', async () => {
    const result = filterArrayByStringRaw(transformedArray, "Dev");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].original.occupation, "Developer");
});

// Testing case-insensitivity of the search
test('Filters case-insensitively', async () => {
    const result = filterArrayByStringRaw(transformedArray, "jane");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].original.name, "Jane");
});

// Testing for a search term not present
test('Correctly handles when the search term is not present', async () => {
    const result = filterArrayByStringRaw(transformedArray, "astronaut");
    assert.strictEqual(result.length, 0);
});

// Testing  match in values
test('Filters based on  match in objectString values', async () => {
    const result = filterArrayByStringRaw(transformedArray, "hiking");
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].original.hobby, "hiking");
});