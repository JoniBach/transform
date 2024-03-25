import { test } from 'node:test';
import assert from 'assert';
import {
    inchesToMeters,
    metersToInches,
    feetToMeters,
    metersToFeet,
    milesToMeters,
    metersToMiles,
    poundsToKilograms,
    kilogramsToPounds,
    ouncesToKilograms,
    kilogramsToOunces,
    gallonsToLiters,
    litersToGallons,
    cubicFeetToLiters,
    litersToCubicFeet,
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    celsiusToKelvin,
    kelvinToCelsius,
    caloriesToJoules,
    joulesToCalories,
    btusToJoules,
    joulesToBtus,
    psiToPascals,
    pascalsToPsi,
    atmospheresToPascals,
    pascalsToAtmospheres,
    horsepowerToWatts,
    wattsToHorsepower

} from '../src/siUnits';


// Test conversions for length
test('Length conversions', () => {
    const lengthInInches = 12; // 1 foot
    const lengthInFeet = 3.28084; // 1 meter
    const lengthInMiles = 0.621371; // 1 kilometer

    assert.ok(Math.abs(inchesToMeters(lengthInInches) - 0.3048) < 1e-5);
    assert.ok(Math.abs(metersToInches(0.3048) - lengthInInches) < 1e-5);

    assert.strictEqual(feetToMeters(1), 0.3048);
    assert.ok(Math.abs(metersToFeet(1) - 3.28084) < 1e-5, `Expected metersToFeet(1) to be close to 3.28084`);

    assert.strictEqual(milesToMeters(1), 1609.34);
    assert.strictEqual(metersToMiles(1609.34), 1);
});

// Test conversions for mass
test('Mass conversions', () => {
    const massInPounds = 2.20462; // 1 kilogram
    const massInOunces = 35.274; // 1 kilogram

    assert.ok(Math.abs(poundsToKilograms(1) - 0.453592) < 1e-5);
    assert.ok(Math.abs(kilogramsToPounds(0.453592) - 1) < 1e-5);

    assert.strictEqual(ouncesToKilograms(1), 0.0283495);
    assert.ok(Math.abs(kilogramsToOunces(1) - 35.274) < 1e-5, `Expected kilogramsToOunces(1) to be close to 35.274`);
});

// Test conversions for volume
test('Volume conversions', () => {
    const volumeInGallons = 0.264172; // 1 liter
    const volumeInCubicFeet = 0.0353147; // 1 liter

    assert.ok(Math.abs(gallonsToLiters(1) - 3.78541) < 1e-5);
    assert.ok(Math.abs(litersToGallons(3.78541) - 1) < 1e-5);

    assert.strictEqual(cubicFeetToLiters(1), 28.3168);
    assert.ok(Math.abs(litersToCubicFeet(1) - 0.0353147) < 1e-5, `Expected litersToCubicFeet(1) to be close to 0.0353147`);
});

// Test conversions for temperature
test('Temperature conversions', () => {
    assert.strictEqual(fahrenheitToKelvin(32), 273.15);
    assert.strictEqual(kelvinToFahrenheit(273.15), 32);

    assert.strictEqual(celsiusToKelvin(0), 273.15);
    assert.strictEqual(kelvinToCelsius(273.15), 0);
});

// Test conversions for energy
test('Energy conversions', () => {
    assert.strictEqual(caloriesToJoules(1), 4.184);
    assert.strictEqual(joulesToCalories(4.184), 1);

    assert.strictEqual(btusToJoules(1), 1055.06);
    assert.strictEqual(joulesToBtus(1055.06), 1);
});

// Test conversions for pressure
test('Pressure conversions', () => {
    assert.strictEqual(psiToPascals(1), 6894.76);
    assert.strictEqual(pascalsToPsi(101325), atmospheresToPascals(1) / 6894.76);

    assert.strictEqual(atmospheresToPascals(1), 101325);
    assert.strictEqual(pascalsToAtmospheres(101325), 1);
});

// Test conversions for power
test('Power conversions', () => {
    assert.strictEqual(horsepowerToWatts(1), 745.7);
    assert.strictEqual(wattsToHorsepower(745.7), 1);
});