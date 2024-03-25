import { test } from 'node:test';
import assert from 'assert';
import {
    binaryToDecimal,
    decimalToBinary,
    hexadecimalToDecimal,
    decimalToHexadecimal,
    binaryToHexadecimal,
    hexadecimalToBinary,
    decimalToOctal,
    octalToDecimal,
} from '../src/numeric';

// binaryToDecimal
test('binaryToDecimal converts a binary string to a decimal number', () => {
    assert.strictEqual(binaryToDecimal('1010'), 10);
    assert.strictEqual(binaryToDecimal('1111'), 15);
});

// decimalToBinary
test('decimalToBinary converts a decimal number to a binary string', () => {
    assert.strictEqual(decimalToBinary(10), '1010');
    assert.strictEqual(decimalToBinary(15), '1111');
});

// hexadecimalToDecimal
test('hexadecimalToDecimal converts a hexadecimal string to a decimal number', () => {
    assert.strictEqual(hexadecimalToDecimal('A'), 10);
    assert.strictEqual(hexadecimalToDecimal('F'), 15);
});

// decimalToHexadecimal
test('decimalToHexadecimal converts a decimal number to a hexadecimal string', () => {
    assert.strictEqual(decimalToHexadecimal(10), 'A');
    assert.strictEqual(decimalToHexadecimal(15), 'F');
});

// binaryToHexadecimal
test('binaryToHexadecimal converts a binary string to a hexadecimal string', () => {
    assert.strictEqual(binaryToHexadecimal('1010'), 'A');
    assert.strictEqual(binaryToHexadecimal('1111'), 'F');
});

// hexadecimalToBinary
test('hexadecimalToBinary converts a hexadecimal string to a binary string', () => {
    assert.strictEqual(hexadecimalToBinary('A'), '1010');
    assert.strictEqual(hexadecimalToBinary('F'), '1111');
});

// decimalToOctal
test('decimalToOctal converts a decimal number to an octal string', () => {
    assert.strictEqual(decimalToOctal(8), '10');
    assert.strictEqual(decimalToOctal(15), '17');
});

// octalToDecimal
test('octalToDecimal converts an octal string to a decimal number', () => {
    assert.strictEqual(octalToDecimal('10'), 8);
    assert.strictEqual(octalToDecimal('17'), 15);
});

