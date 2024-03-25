"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryToString = exports.stringToBinary = exports.hexToString = exports.stringToHex = exports.arrayBufferToString = exports.stringToArrayBuffer = exports.urlToDecode = exports.urlToEncode = exports.nodeBase64ToString = exports.nodeStringToBase64 = exports.webBase64ToString = exports.webStringToBase64 = void 0;
// Encodes a string to Base64 (Browser).
function webStringToBase64(str) {
    return window.btoa(str);
}
exports.webStringToBase64 = webStringToBase64;
// Decodes a Base64 string (Browser).
function webBase64ToString(b64) {
    return window.atob(b64);
}
exports.webBase64ToString = webBase64ToString;
// Encodes a string to Base64 (Node.js).
function nodeStringToBase64(str) {
    return Buffer.from(str).toString('base64');
}
exports.nodeStringToBase64 = nodeStringToBase64;
// Decodes a Base64 string (Node.js).
function nodeBase64ToString(b64) {
    return Buffer.from(b64, 'base64').toString();
}
exports.nodeBase64ToString = nodeBase64ToString;
// URL-encodes a string.
function urlToEncode(str) {
    return encodeURIComponent(str);
}
exports.urlToEncode = urlToEncode;
// URL-decodes a string.
function urlToDecode(str) {
    return decodeURIComponent(str);
}
exports.urlToDecode = urlToDecode;
// Converts a string to an ArrayBuffer using a modern approach.
function stringToArrayBuffer(str) {
    const buffer = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    const bufferView = new Uint16Array(buffer);
    let i = 0;
    for (let char of str) {
        bufferView[i++] = char.charCodeAt(0);
    }
    return buffer;
}
exports.stringToArrayBuffer = stringToArrayBuffer;
// Converts an ArrayBuffer to a string.
function arrayBufferToString(buffer) {
    const uint16Array = new Uint16Array(buffer);
    const charCodeArray = Array.from(uint16Array);
    return String.fromCharCode(...charCodeArray);
}
exports.arrayBufferToString = arrayBufferToString;
// Converts a string to a hexadecimal representation.
function stringToHex(str) {
    return str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}
exports.stringToHex = stringToHex;
// Converts a hexadecimal string to its original string representation.
function hexToString(hex) {
    const hexes = hex.match(/.{1,2}/g) || [];
    return hexes.map(h => String.fromCharCode(parseInt(h, 16))).join('');
}
exports.hexToString = hexToString;
// Converts a string to a binary string representation.
function stringToBinary(str) {
    return str.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
exports.stringToBinary = stringToBinary;
// Converts a binary string to its original string representation.
function binaryToString(binary) {
    return binary.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}
exports.binaryToString = binaryToString;
