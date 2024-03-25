"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToGroup = exports.arrayToFlatArray = exports.arrayToSet = exports.setToArray = exports.objectToMap = exports.mapToObject = exports.arrayToObject = exports.objectToArray = void 0;
// Converts an object to an array of [key, value] pairs.
function objectToArray(obj) {
    return Object.entries(obj);
}
exports.objectToArray = objectToArray;
// Converts an array of [key, value] pairs to an object.
function arrayToObject(array) {
    return Object.fromEntries(array);
}
exports.arrayToObject = arrayToObject;
// Converts a Map to an object.
function mapToObject(map) {
    return Object.fromEntries(map);
}
exports.mapToObject = mapToObject;
// Converts an object to a Map.
function objectToMap(obj) {
    return new Map(Object.entries(obj));
}
exports.objectToMap = objectToMap;
// Converts a Set to an array.
function setToArray(set) {
    return Array.from(set);
}
exports.setToArray = setToArray;
// Converts an array to a Set.
function arrayToSet(array) {
    return new Set(array);
}
exports.arrayToSet = arrayToSet;
// Flattens a nested array into a single array.
function arrayToFlatArray(array) {
    return array.flat(Infinity);
}
exports.arrayToFlatArray = arrayToFlatArray;
// Groups an array of objects by a given key.
function arrayToGroup(array, key) {
    return array.reduce((accumulator, currentValue) => {
        (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
        return accumulator;
    }, {});
}
exports.arrayToGroup = arrayToGroup;
