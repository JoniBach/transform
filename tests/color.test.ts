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
} from '../src/color'; // Adjust the path to where your color conversion functions are defined

test('rgbToHex correctly converts RGB to Hex', () => {
    assert.strictEqual(rgbToHex({ r: 255, g: 255, b: 255 }), '#ffffff');
    assert.strictEqual(rgbToHex({ r: 0, g: 0, b: 0 }), '#000000');
    assert.strictEqual(rgbToHex({ r: 255, g: 0, b: 0 }), '#ff0000');
});

test('hexToRgb correctly converts Hex to RGB', () => {
    assert.deepStrictEqual(hexToRgb('#ffffff'), { r: 255, g: 255, b: 255 });
    assert.deepStrictEqual(hexToRgb('#000000'), { r: 0, g: 0, b: 0 });
    assert.deepStrictEqual(hexToRgb('#ff0000'), { r: 255, g: 0, b: 0 });
});

test('rgbToHsl correctly converts RGB to HSL', () => {
    assert.deepStrictEqual(rgbToHsl({ r: 255, g: 255, b: 255 }), { h: 0, s: 0, l: 100 });
    assert.deepStrictEqual(rgbToHsl({ r: 0, g: 0, b: 0 }), { h: 0, s: 0, l: 0 });
    // Additional test case for a non-achromatic color
    // Values might need slight adjustments for precision
    assert.deepStrictEqual(rgbToHsl({ r: 255, g: 0, b: 0 }), { h: 0, s: 100, l: 50 });
});

test('hslToRgb correctly converts HSL to RGB', () => {
    assert.deepStrictEqual(hslToRgb({ h: 0, s: 0, l: 100 }), { r: 255, g: 255, b: 255 });
    assert.deepStrictEqual(hslToRgb({ h: 0, s: 0, l: 0 }), { r: 0, g: 0, b: 0 });
    // Additional test case for a non-achromatic color
    assert.deepStrictEqual(hslToRgb({ h: 0, s: 100, l: 50 }), { r: 255, g: 0, b: 0 });
});

test('hexToHsl correctly converts Hex to HSL', () => {
    assert.deepStrictEqual(hexToHsl('#ffffff'), { h: 0, s: 0, l: 100 });
    assert.deepStrictEqual(hexToHsl('#000000'), { h: 0, s: 0, l: 0 });
});

test('hslToHex correctly converts HSL to Hex', () => {
    assert.strictEqual(hslToHex({ h: 0, s: 0, l: 100 }), '#ffffff');
    assert.strictEqual(hslToHex({ h: 0, s: 0, l: 0 }), '#000000');
});

test('rgbaToString formats RGBA as CSS string', () => {
    assert.strictEqual(rgbaToString({ r: 255, g: 255, b: 255, a: 1 }), 'rgba(255, 255, 255, 1)');
    assert.strictEqual(rgbaToString({ r: 0, g: 0, b: 0, a: 0.5 }), 'rgba(0, 0, 0, 0.5)');
});

test('hslaToString formats HSLA as CSS string', () => {
    assert.strictEqual(hslaToString({ h: 360, s: 100, l: 50, a: 1 }), 'hsla(360, 100%, 50%, 1)');
    assert.strictEqual(hslaToString({ h: 0, s: 0, l: 100, a: 0.5 }), 'hsla(0, 0%, 100%, 0.5)');
});


test('complementaryHsl correctly calculates the complementary HSL color', () => {
    assert.deepStrictEqual(complementaryHsl({ h: 120, s: 100, l: 50 }), { h: 300, s: 100, l: 50 });
    assert.deepStrictEqual(complementaryHsl({ h: 0, s: 100, l: 50 }), { h: 180, s: 100, l: 50 });
    assert.deepStrictEqual(complementaryHsl({ h: 240, s: 100, l: 50 }), { h: 60, s: 100, l: 50 });
});
