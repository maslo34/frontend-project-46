import { getUnicKeys } from '../src/compareFiles.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22.1',
  follow: false,
};
const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

test('test1', () => {
  expect(getUnicKeys(obj1, obj2)).toEqual(['follow', 'host', 'proxy', 'timeout', 'verbose']);
});
