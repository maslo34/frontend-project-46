import compareFiles, { getUnicKeys } from '../src/compareFiles.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const obj3 = {};
const obj4 = {};

test('test getUnicKeys', () => {
  expect(getUnicKeys(obj1, obj2)).toEqual([
    'follow',
    'host',
    'proxy',
    'timeout',
    'verbose',
  ]);
  expect(getUnicKeys(obj3, obj4)).toEqual([]);
});

test('test compareFiles', () => {
  expect(compareFiles(obj3, obj4)).toEqual('');
  expect(compareFiles(obj1, obj2)).toEqual('- follow: false\r\n  host: hexlet.io\r\n- proxy: 123.234.53.22\r\n- timeout: 50\r\n+ timeout: 20\r\n+ verbose: true\r\n');
});
