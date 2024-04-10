import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'node:path';
import gendiff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFilePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

test('test format stylish.js', () => {
  const result = readFile('resultStylish.txt');
  expect(gendiff('__fixtures__/file3.json', '__fixtures__/file4.json')).toBe(result);
});

test('test format plain.js', () => {
  const result = readFile('resultPlain.txt');
  expect(gendiff('__fixtures__/file3.json', '__fixtures__/file4.json', 'plain')).toBe(result);
});

test('test format plain.js', () => {
  const result = readFile('resultJson.txt');
  expect(gendiff('__fixtures__/file3.json', '__fixtures__/file4.json', 'json')).toBe(result);
});
