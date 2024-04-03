import { fileURLToPath } from 'url';
import { getFileData, getFilePath, formatFile } from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);

test('test formatFile', () => {
  expect(formatFile('index.js')).toBe('.js');
});

test('test getFilePath', () => {
  expect(getFilePath('__tests__/parser.test.js')).toBe(__filename);
});

test('test getFileData', () => {
  expect(getFileData('__fixtures__/file1.yml', '.yml')).toEqual({
    follow: false,
    host: 'hexlet.io',
    proxy: '123.234.53.22.1',
    timeout: 50,
  });
  expect(getFileData('__fixtures__/file2.yaml', '.yaml')).toEqual({
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  });
  expect(getFileData('__fixtures__/file2.json', '.json')).toEqual({
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  });
});
