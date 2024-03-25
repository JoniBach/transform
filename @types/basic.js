"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booleanToNumber = exports.numberToBoolean = exports.stringToBoolean = exports.booleanToString = exports.stringToNumber = exports.numberToString = void 0;
// Converts a number to a string.
function numberToString(num) {
    return num.toString();
}
exports.numberToString = numberToString;
// Converts a string to a number.
function stringToNumber(str) {
    return Number(str);
}
exports.stringToNumber = stringToNumber;
// Converts a boolean to a string.
function booleanToString(bool) {
    return bool.toString();
}
exports.booleanToString = booleanToString;
// Converts a string to a boolean.
// Assumes 'true' (case insensitive) is the only string value that returns true.
function stringToBoolean(str) {
    return str.toLowerCase() === 'true';
}
exports.stringToBoolean = stringToBoolean;
// Converts a number to a boolean.
// 0 returns false; any non-zero value returns true.
function numberToBoolean(num) {
    return num !== 0;
}
exports.numberToBoolean = numberToBoolean;
// Converts a boolean to a number.
// true returns 1; false returns 0.
function booleanToNumber(bool) {
    return bool ? 1 : 0;
}
exports.booleanToNumber = booleanToNumber;
