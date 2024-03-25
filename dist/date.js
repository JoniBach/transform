"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToDayOfWeek = exports.dateToLocalString = exports.isoStringToTimestamp = exports.timestampToISOString = exports.isoStringToDate = exports.dateToISOString = exports.timestampToDate = exports.dateToTimestamp = void 0;
// Converts a Date object to a UNIX timestamp (number of milliseconds since the Unix Epoch).
function dateToTimestamp(date) {
    return date.getTime();
}
exports.dateToTimestamp = dateToTimestamp;
// Converts a UNIX timestamp to a Date object.
function timestampToDate(timestamp) {
    return new Date(timestamp);
}
exports.timestampToDate = timestampToDate;
// Converts a Date object to an ISO 8601 string.
function dateToISOString(date) {
    return date.toISOString();
}
exports.dateToISOString = dateToISOString;
// Converts an ISO 8601 string to a Date object.
function isoStringToDate(isoString) {
    return new Date(isoString);
}
exports.isoStringToDate = isoStringToDate;
// Converts a UNIX timestamp to an ISO 8601 string.
function timestampToISOString(timestamp) {
    return dateToISOString(timestampToDate(timestamp));
}
exports.timestampToISOString = timestampToISOString;
// Converts an ISO 8601 string to a UNIX timestamp.
function isoStringToTimestamp(isoString) {
    return dateToTimestamp(isoStringToDate(isoString));
}
exports.isoStringToTimestamp = isoStringToTimestamp;
// Converts a Date object to a localized string representation.
function dateToLocalString(date, locale = 'default', options) {
    return date.toLocaleString(locale, options);
}
exports.dateToLocalString = dateToLocalString;
// Converts a Date object to the name of the day of the week.
function dateToDayOfWeek(date, locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}
exports.dateToDayOfWeek = dateToDayOfWeek;
