import getFileData from '../src/parser.js';

test('getFileData', () => {
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
