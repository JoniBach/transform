"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wattsToHorsepower = exports.horsepowerToWatts = exports.pascalsToAtmospheres = exports.atmospheresToPascals = exports.pascalsToPsi = exports.psiToPascals = exports.joulesToBtus = exports.btusToJoules = exports.joulesToCalories = exports.caloriesToJoules = exports.kelvinToCelsius = exports.celsiusToKelvin = exports.kelvinToFahrenheit = exports.fahrenheitToKelvin = exports.litersToCubicFeet = exports.cubicFeetToLiters = exports.litersToGallons = exports.gallonsToLiters = exports.kilogramsToOunces = exports.ouncesToKilograms = exports.kilogramsToPounds = exports.poundsToKilograms = exports.metersToMiles = exports.milesToMeters = exports.metersToFeet = exports.feetToMeters = exports.metersToInches = exports.inchesToMeters = void 0;
// Converts inches to meters.
function inchesToMeters(inches) {
    return inches * 0.0254;
}
exports.inchesToMeters = inchesToMeters;
// Converts meters to inches.
function metersToInches(meters) {
    return meters / 0.0254;
}
exports.metersToInches = metersToInches;
// Converts feet to meters.
function feetToMeters(feet) {
    return feet * 0.3048;
}
exports.feetToMeters = feetToMeters;
// Converts meters to feet.
function metersToFeet(meters) {
    return meters / 0.3048;
}
exports.metersToFeet = metersToFeet;
// Converts miles to meters.
function milesToMeters(miles) {
    return miles * 1609.34;
}
exports.milesToMeters = milesToMeters;
// Converts meters to miles.
function metersToMiles(meters) {
    return meters / 1609.34;
}
exports.metersToMiles = metersToMiles;
// Converts pounds to kilograms.
function poundsToKilograms(pounds) {
    return pounds * 0.453592;
}
exports.poundsToKilograms = poundsToKilograms;
// Converts kilograms to pounds.
function kilogramsToPounds(kilograms) {
    return kilograms / 0.453592;
}
exports.kilogramsToPounds = kilogramsToPounds;
// Converts ounces to kilograms.
function ouncesToKilograms(ounces) {
    return ounces * 0.0283495;
}
exports.ouncesToKilograms = ouncesToKilograms;
// Converts kilograms to ounces.
function kilogramsToOunces(kilograms) {
    return kilograms / 0.0283495;
}
exports.kilogramsToOunces = kilogramsToOunces;
// Converts gallons (US) to liters.
function gallonsToLiters(gallons) {
    return gallons * 3.78541;
}
exports.gallonsToLiters = gallonsToLiters;
// Converts liters to gallons (US).
function litersToGallons(liters) {
    return liters / 3.78541;
}
exports.litersToGallons = litersToGallons;
// Converts cubic feet to liters.
function cubicFeetToLiters(cubicFeet) {
    return cubicFeet * 28.3168;
}
exports.cubicFeetToLiters = cubicFeetToLiters;
// Converts liters to cubic feet.
function litersToCubicFeet(liters) {
    return liters / 28.3168;
}
exports.litersToCubicFeet = litersToCubicFeet;
// Converts Fahrenheit to Kelvin.
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}
exports.fahrenheitToKelvin = fahrenheitToKelvin;
// Converts Kelvin to Fahrenheit.
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * (9 / 5) + 32;
}
exports.kelvinToFahrenheit = kelvinToFahrenheit;
// Converts Celsius to Kelvin.
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
exports.celsiusToKelvin = celsiusToKelvin;
// Converts Kelvin to Celsius.
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
exports.kelvinToCelsius = kelvinToCelsius;
// Converts calories to joules.
function caloriesToJoules(calories) {
    return calories * 4.184;
}
exports.caloriesToJoules = caloriesToJoules;
// Converts joules to calories.
function joulesToCalories(joules) {
    return joules / 4.184;
}
exports.joulesToCalories = joulesToCalories;
// Converts British Thermal Units (BTUs) to joules.
function btusToJoules(btus) {
    return btus * 1055.06;
}
exports.btusToJoules = btusToJoules;
// Converts joules to British Thermal Units (BTUs).
function joulesToBtus(joules) {
    return joules / 1055.06;
}
exports.joulesToBtus = joulesToBtus;
// Converts pounds per square inch (psi) to pascals.
function psiToPascals(psi) {
    return psi * 6894.76;
}
exports.psiToPascals = psiToPascals;
// Converts pascals to pounds per square inch (psi).
function pascalsToPsi(pascals) {
    return pascals / 6894.76;
}
exports.pascalsToPsi = pascalsToPsi;
// Converts atmospheres to pascals.
function atmospheresToPascals(atmospheres) {
    return atmospheres * 101325;
}
exports.atmospheresToPascals = atmospheresToPascals;
// Converts pascals to atmospheres.
function pascalsToAtmospheres(pascals) {
    return pascals / 101325;
}
exports.pascalsToAtmospheres = pascalsToAtmospheres;
// Converts horsepower to watts.
function horsepowerToWatts(horsepower) {
    return horsepower * 745.7;
}
exports.horsepowerToWatts = horsepowerToWatts;
// Converts watts to horsepower.
function wattsToHorsepower(watts) {
    return watts / 745.7;
}
exports.wattsToHorsepower = wattsToHorsepower;
