"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decompressToString = exports.compressString = exports.markdownToHtml = exports.jsonToXml = exports.xmlToJson = exports.jsonToCsv = exports.csvToJson = exports.jsonToYaml = exports.yamlToJson = exports.objectToJsonString = exports.jsonStringToObject = void 0;
const yaml = __importStar(require("js-yaml"));
const papaparse_1 = __importDefault(require("papaparse"));
const xml2js = __importStar(require("xml2js"));
const marked_1 = __importDefault(require("marked"));
const pako = __importStar(require("pako"));
// Converts a JSON string to an object.
function jsonStringToObject(jsonString) {
    return JSON.parse(jsonString);
}
exports.jsonStringToObject = jsonStringToObject;
// Converts an object to a JSON string.
function objectToJsonString(object) {
    return JSON.stringify(object, null, 2); // Indents the JSON string for readability.
}
exports.objectToJsonString = objectToJsonString;
// Converts a YAML string to a JSON object.
function yamlToJson(yamlString) {
    return yaml.load(yamlString);
}
exports.yamlToJson = yamlToJson;
// Converts a JSON object to a YAML string.
function jsonToYaml(jsonObject) {
    return yaml.dump(jsonObject);
}
exports.jsonToYaml = jsonToYaml;
// Converts CSV to a JSON object.
function csvToJson(csvString) {
    return papaparse_1.default.parse(csvString, { header: true }).data;
}
exports.csvToJson = csvToJson;
// Converts a JSON object to CSV.
function jsonToCsv(jsonObject) {
    return papaparse_1.default.unparse(jsonObject);
}
exports.jsonToCsv = jsonToCsv;
// Converts an XML string to a JSON object.
async function xmlToJson(xmlString) {
    const parser = new xml2js.Parser({ explicitArray: false });
    return parser.parseStringPromise(xmlString);
}
exports.xmlToJson = xmlToJson;
// Converts a JSON object to an XML string.
function jsonToXml(jsonObject) {
    const builder = new xml2js.Builder();
    return builder.buildObject(jsonObject);
}
exports.jsonToXml = jsonToXml;
// Converts Markdown text to HTML using the 'marked' library.
async function markdownToHtml(markdownText) {
    return await marked_1.default.parse(markdownText);
}
exports.markdownToHtml = markdownToHtml;
// Compresses a string using zlib compression.
function compressString(str) {
    return pako.deflate(str);
}
exports.compressString = compressString;
// Decompresses a zlib-compressed Uint8Array back to a string.
function decompressToString(data) {
    return pako.inflate(data, { to: 'string' });
}
exports.decompressToString = decompressToString;
