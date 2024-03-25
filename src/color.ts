// Converts an RGB color to Hex.
export function rgbToHex({ r, g, b }: { r: number, g: number, b: number }): string {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}

// Converts a Hex color to RGB.
export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Converts an RGB color to HSL.
export function rgbToHsl({ r, g, b }: { r: number, g: number, b: number }): { h: number, s: number, l: number } {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
// Define the hue2rgb helper function directly within the module
function hue2rgb(p: number, q: number, t: number): number {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

// Then your hslToRgb function
export function hslToRgb({ h, s, l }: { h: number, s: number, l: number }): { r: number, g: number, b: number } {
    let r, g, b;

    h /= 360;
    s /= 100;
    l /= 100;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}


// Converts a Hex color to HSL.
export function hexToHsl(hex: string): { h: number, s: number, l: number } {
    const rgb = hexToRgb(hex);
    if (rgb) {
        return rgbToHsl(rgb);
    }
    return { h: 0, s: 0, l: 0 }; // Fallback for null RGB
}

// Converts an HSL color to Hex.
export function hslToHex({ h, s, l }: { h: number, s: number, l: number }): string {
    const rgb = hslToRgb({ h, s, l });
    return rgbToHex(rgb);
}

// Formats an RGBA color as a CSS string.
export function rgbaToString({ r, g, b, a = 1 }: { r: number, g: number, b: number, a?: number }): string {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Formats an HSLA color as a CSS string.
export function hslaToString({ h, s, l, a = 1 }: { h: number, s: number, l: number, a?: number }): string {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

// Calculates the complementary color for an HSL color.
export function complementaryHsl({ h, s, l }: { h: number, s: number, l: number }): { h: number, s: number, l: number } {
    return { h: (h + 180) % 360, s, l };
}
