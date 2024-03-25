// Converts inches to meters.
export function inchesToMeters(inches: number): number {
    return inches * 0.0254;
}
// Converts meters to inches.
export function metersToInches(meters: number): number {
    return meters / 0.0254;
}

// Converts feet to meters.
export function feetToMeters(feet: number): number {
    return feet * 0.3048;
}
// Converts meters to feet.
export function metersToFeet(meters: number): number {
    return meters / 0.3048;
}

// Converts miles to meters.
export function milesToMeters(miles: number): number {
    return miles * 1609.34;
}
// Converts meters to miles.
export function metersToMiles(meters: number): number {
    return meters / 1609.34;
}

// Converts pounds to kilograms.
export function poundsToKilograms(pounds: number): number {
    return pounds * 0.453592;
}
// Converts kilograms to pounds.
export function kilogramsToPounds(kilograms: number): number {
    return kilograms / 0.453592;
}

// Converts ounces to kilograms.
export function ouncesToKilograms(ounces: number): number {
    return ounces * 0.0283495;
}
// Converts kilograms to ounces.
export function kilogramsToOunces(kilograms: number): number {
    return kilograms / 0.0283495;
}

// Converts gallons (US) to liters.
export function gallonsToLiters(gallons: number): number {
    return gallons * 3.78541;
}
// Converts liters to gallons (US).
export function litersToGallons(liters: number): number {
    return liters / 3.78541;
}

// Converts cubic feet to liters.
export function cubicFeetToLiters(cubicFeet: number): number {
    return cubicFeet * 28.3168;
}
// Converts liters to cubic feet.
export function litersToCubicFeet(liters: number): number {
    return liters / 28.3168;
}

// Converts Fahrenheit to Kelvin.
export function fahrenheitToKelvin(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9) + 273.15;
}
// Converts Kelvin to Fahrenheit.
export function kelvinToFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * (9 / 5) + 32;
}

// Converts Celsius to Kelvin.
export function celsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
}
// Converts Kelvin to Celsius.
export function kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}

// Converts calories to joules.
export function caloriesToJoules(calories: number): number {
    return calories * 4.184;
}
// Converts joules to calories.
export function joulesToCalories(joules: number): number {
    return joules / 4.184;
}

// Converts British Thermal Units (BTUs) to joules.
export function btusToJoules(btus: number): number {
    return btus * 1055.06;
}
// Converts joules to British Thermal Units (BTUs).
export function joulesToBtus(joules: number): number {
    return joules / 1055.06;
}

// Converts pounds per square inch (psi) to pascals.
export function psiToPascals(psi: number): number {
    return psi * 6894.76;
}
// Converts pascals to pounds per square inch (psi).
export function pascalsToPsi(pascals: number): number {
    return pascals / 6894.76;
}

// Converts atmospheres to pascals.
export function atmospheresToPascals(atmospheres: number): number {
    return atmospheres * 101325;
}
// Converts pascals to atmospheres.
export function pascalsToAtmospheres(pascals: number): number {
    return pascals / 101325;
}

// Converts horsepower to watts.
export function horsepowerToWatts(horsepower: number): number {
    return horsepower * 745.7;
}
// Converts watts to horsepower.
export function wattsToHorsepower(watts: number): number {
    return watts / 745.7;
}
