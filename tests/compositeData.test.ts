import { test } from 'node:test';
import assert from 'assert';
import {
    jsonStringToObject,
    objectToJsonString,
    yamlToJson,
    jsonToYaml,
    csvToJson,
    jsonToCsv,
    xmlToJson,
    jsonToXml,
    markdownToHtml,
    compressString,
    decompressToString
} from '../src/compositeData';


// JSON conversion tests
test('jsonStringToObject converts JSON string to object', () => {
    const jsonString = '{"name":"John","age":30}';
    const expected = { name: 'John', age: 30 };
    assert.deepStrictEqual(jsonStringToObject(jsonString), expected);
});

test('objectToJsonString converts object to JSON string', () => {
    const object = { name: 'John', age: 30 };
    const expected = JSON.stringify(object, null, 2);
    assert.strictEqual(objectToJsonString(object), expected);
});

// YAML conversion tests
test('yamlToJson converts YAML string to JSON object', async () => {
    const yamlString = 'name: John\nage: 30';
    const expected = { name: 'John', age: 30 };
    assert.deepStrictEqual(yamlToJson(yamlString), expected);
});

test('jsonToYaml converts JSON object to YAML string', () => {
    const jsonObject = { name: 'John', age: 30 };
    const result = jsonToYaml(jsonObject);
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.includes('name: John'));
    assert.ok(result.includes('age: 30'));
});

// CSV conversion tests
test('csvToJson converts CSV string to JSON object', () => {
    const csvString = 'name,age\nJohn,30\nJane,25';
    const expected = [{ name: 'John', age: '30' }, { name: 'Jane', age: '25' }];
    assert.deepStrictEqual(csvToJson(csvString), expected);
});

test('jsonToCsv converts JSON object to CSV', () => {
    const jsonObject = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
    const result = jsonToCsv(jsonObject);
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.includes('name,age'));
    assert.ok(result.includes('John,30'));
    assert.ok(result.includes('Jane,25'));
});

// XML conversion tests
test('xmlToJson converts XML string to JSON object', async () => {
    const xmlString = '<person><name>John</name><age>30</age></person>';
    const expected = { person: { name: 'John', age: '30' } };
    const result = await xmlToJson(xmlString);
    assert.deepStrictEqual(result, expected);
});

test('jsonToXml converts JSON object to XML string', () => {
    const jsonObject = { person: { name: 'John', age: 30 } };
    const result = jsonToXml(jsonObject);
    assert.strictEqual(typeof result, 'string');
    assert.ok(result.includes('<person>'));
    assert.ok(result.includes('<name>John</name>'));
    assert.ok(result.includes('<age>30</age>'));
});

// Markdown conversion test
test('markdownToHtml converts Markdown to HTML', async () => {
    const markdown = '# Title\n\nSome text';
    const expected = '<h1>Title</h1>\n<p>Some text</p>\n';
    const result = await markdownToHtml(markdown);
    assert.strictEqual(result.trim(), expected.trim());
});

// Compress and decompress test
test('compress and decompress string', () => {
    const originalString = 'Hello, world!';
    const compressed = compressString(originalString);
    const decompressed = decompressToString(compressed);
    assert.strictEqual(decompressed, originalString);
});

// Additional tests for the rest of the functions can be added similarly.
