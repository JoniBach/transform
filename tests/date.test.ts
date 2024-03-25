import { test } from 'node:test';
import assert from 'assert';
import {
    dateToTimestamp,
    timestampToDate,
    dateToISOString,
    isoStringToDate,
    timestampToISOString,
    isoStringToTimestamp,
    dateToLocalString,
    dateToDayOfWeek
} from '../src/date';

// Create a fixed date for consistent testing
const fixedDate = new Date('2020-01-01T00:00:00Z');
const fixedTimestamp = 1577836800000; // UNIX timestamp for 2020-01-01T00:00:00Z
const fixedISOString = '2020-01-01T00:00:00.000Z';

// dateToTimestamp
test('dateToTimestamp converts a Date object to a UNIX timestamp', () => {
    assert.strictEqual(dateToTimestamp(fixedDate), fixedTimestamp);
});

// timestampToDate
test('timestampToDate converts a UNIX timestamp to a Date object', () => {
    assert.deepStrictEqual(timestampToDate(fixedTimestamp), fixedDate);
});

// dateToISOString
test('dateToISOString converts a Date object to an ISO 8601 string', () => {
    assert.strictEqual(dateToISOString(fixedDate), fixedISOString);
});

// isoStringToDate
test('isoStringToDate converts an ISO 8601 string to a Date object', () => {
    assert.deepStrictEqual(isoStringToDate(fixedISOString), fixedDate);
});

// timestampToISOString
test('timestampToISOString converts a UNIX timestamp to an ISO 8601 string', () => {
    assert.strictEqual(timestampToISOString(fixedTimestamp), fixedISOString);
});

// isoStringToTimestamp
test('isoStringToTimestamp converts an ISO 8601 string to a UNIX timestamp', () => {
    assert.strictEqual(isoStringToTimestamp(fixedISOString), fixedTimestamp);
});

// dateToLocalString (testing with default locale)
test('dateToLocalString converts a Date object to a localized string representation', () => {
    // Locale-sensitive, so the expected result might vary. Consider specifying locale and options for consistency.
    const result = dateToLocalString(fixedDate, 'en-US', { timeZone: 'UTC' });
    assert.strictEqual(result.includes('2020'), true); // Basic check to see if conversion contains the year
});

// dateToDayOfWeek
test('dateToDayOfWeek converts a Date object to the name of the day of the week', () => {
    const dayOfWeek = dateToDayOfWeek(fixedDate, 'en-US');
    assert.strictEqual(dayOfWeek, 'Wednesday');
});