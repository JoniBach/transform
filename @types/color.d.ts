export declare function rgbToHex(r: number, g: number, b: number): string;
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
export declare function rgbToHsl(r: number, g: number, b: number): {
    h: number;
    s: number;
    l: number;
};
export declare function hslToRgb(h: number, s: number, l: number): {
    r: number;
    g: number;
    b: number;
};
export declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
};
export declare function hslToHex(h: number, s: number, l: number): string;
export declare function rgbaToString(r: number, g: number, b: number, a?: number): string;
export declare function hslaToString(h: number, s: number, l: number, a?: number): string;
export declare function complementaryHsl(h: number, s: number, l: number): {
    h: number;
    s: number;
    l: number;
};
