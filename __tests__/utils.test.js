import { fileURLToPath } from 'url';
import { formatFile, getFilePath } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);

test('formatFile', () => {
  expect(formatFile('index.js')).toBe('.js');
});

test('getFilePath', () => {
  expect(getFilePath('__tests__/utils.test.js')).toBe(__filename);
});
