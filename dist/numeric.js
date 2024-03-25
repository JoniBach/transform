"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.octalToDecimal = exports.decimalToOctal = exports.hexadecimalToBinary = exports.binaryToHexadecimal = exports.decimalToHexadecimal = exports.hexadecimalToDecimal = exports.decimalToBinary = exports.binaryToDecimal = void 0;
// Converts a binary string to a decimal number.
function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
}
exports.binaryToDecimal = binaryToDecimal;
// Converts a decimal number to a binary string.
function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
}
exports.decimalToBinary = decimalToBinary;
// Converts a hexadecimal string to a decimal number.
function hexadecimalToDecimal(hexString) {
    return parseInt(hexString, 16);
}
exports.hexadecimalToDecimal = hexadecimalToDecimal;
// Converts a decimal number to a hexadecimal string.
function decimalToHexadecimal(decimalNumber) {
    return decimalNumber.toString(16).toUpperCase();
}
exports.decimalToHexadecimal = decimalToHexadecimal;
// Converts a binary string to a hexadecimal string.
function binaryToHexadecimal(binaryString) {
    const decimal = binaryToDecimal(binaryString);
    return decimalToHexadecimal(decimal);
}
exports.binaryToHexadecimal = binaryToHexadecimal;
// Converts a hexadecimal string to a binary string.
function hexadecimalToBinary(hexString) {
    const decimal = hexadecimalToDecimal(hexString);
    return decimalToBinary(decimal);
}
exports.hexadecimalToBinary = hexadecimalToBinary;
// Converts a decimal number to an octal string.
function decimalToOctal(decimalNumber) {
    return decimalNumber.toString(8);
}
exports.decimalToOctal = decimalToOctal;
// Converts an octal string to a decimal number.
function octalToDecimal(octalString) {
    return parseInt(octalString, 8);
}
exports.octalToDecimal = octalToDecimal;
