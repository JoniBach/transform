// Converts a binary string to a decimal number.
export function binaryToDecimal(binaryString: string): number {
    return parseInt(binaryString, 2);
}

// Converts a decimal number to a binary string.
export function decimalToBinary(decimalNumber: number): string {
    return decimalNumber.toString(2);
}

// Converts a hexadecimal string to a decimal number.
export function hexadecimalToDecimal(hexString: string): number {
    return parseInt(hexString, 16);
}

// Converts a decimal number to a hexadecimal string.
export function decimalToHexadecimal(decimalNumber: number): string {
    return decimalNumber.toString(16).toUpperCase();
}

// Converts a binary string to a hexadecimal string.
export function binaryToHexadecimal(binaryString: string): string {
    const decimal = binaryToDecimal(binaryString);
    return decimalToHexadecimal(decimal);
}

// Converts a hexadecimal string to a binary string.
export function hexadecimalToBinary(hexString: string): string {
    const decimal = hexadecimalToDecimal(hexString);
    return decimalToBinary(decimal);
}

// Converts a decimal number to an octal string.
export function decimalToOctal(decimalNumber: number): string {
    return decimalNumber.toString(8);
}

// Converts an octal string to a decimal number.
export function octalToDecimal(octalString: string): number {
    return parseInt(octalString, 8);
}

// Adjusts a floating-point number to the specified number of decimal places.
export function adjustFloatingPointPrecision(number: number, decimalPlaces: number): number {
    return parseFloat(number.toFixed(decimalPlaces));
}
