import { test } from 'node:test';
import assert from 'assert';
import {
    rgbToHex,
    hexToRgb,
    rgbToHsl,
    hslToRgb,
    hexToHsl,
    hslToHex,
    rgbaToString,
    hslaToString,
    complementaryHsl
} from '../src/converters/color'; // Adjust the path to where your color conversion functions are defined

test('rgbToHex correctly converts RGB to Hex', () => {
    assert.strictEqual(rgbToHex(255, 255, 255), '#ffffff');
    assert.strictEqual(rgbToHex(0, 0, 0), '#000000');
    assert.strictEqual(rgbToHex(255, 0, 0), '#ff0000');
});

test('hexToRgb correctly converts Hex to RGB', () => {
    assert.deepStrictEqual(hexToRgb('#ffffff'), { r: 255, g: 255, b: 255 });
    assert.deepStrictEqual(hexToRgb('#000000'), { r: 0, g: 0, b: 0 });
    assert.deepStrictEqual(hexToRgb('#ff0000'), { r: 255, g: 0, b: 0 });
});

test('rgbToHsl correctly converts RGB to HSL', () => {
    // Note: These values might need to be adjusted based on the precision you expect.
    assert.deepStrictEqual(rgbToHsl(255, 255, 255), { h: 0, s: 0, l: 100 });
    assert.deepStrictEqual(rgbToHsl(0, 0, 0), { h: 0, s: 0, l: 0 });
});

test('hslToRgb correctly converts HSL to RGB', () => {
    assert.deepStrictEqual(hslToRgb(0, 0, 100), { r: 255, g: 255, b: 255 });
    assert.deepStrictEqual(hslToRgb(0, 0, 0), { r: 0, g: 0, b: 0 });
});

test('hexToHsl correctly converts Hex to HSL', () => {
    assert.deepStrictEqual(hexToHsl('#ffffff'), { h: 0, s: 0, l: 100 });
    assert.deepStrictEqual(hexToHsl('#000000'), { h: 0, s: 0, l: 0 });
});

test('hslToHex correctly converts HSL to Hex', () => {
    assert.strictEqual(hslToHex(0, 0, 100), '#ffffff');
    assert.strictEqual(hslToHex(0, 0, 0), '#000000');
});

test('rgbaToString formats RGBA as CSS string', () => {
    assert.strictEqual(rgbaToString(255, 255, 255, 1), 'rgba(255, 255, 255, 1)');
});

test('hslaToString formats HSLA as CSS string', () => {
    assert.strictEqual(hslaToString(360, 100, 50, 1), 'hsla(360, 100%, 50%, 1)');
});

test('complementaryHsl correctly calculates the complementary HSL color', () => {
    assert.deepStrictEqual(complementaryHsl(120, 100, 50), { h: 300, s: 100, l: 50 });
});