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

test('getUnicKeys', () => {
  expect(getUnicKeys(obj1, obj2)).toEqual([
    'follow',
    'host',
    'proxy',
    'timeout',
    'verbose',
  ]);
  expect(getUnicKeys(obj3, obj4)).toEqual([]);
});

test('compareFiles', () => {
  expect(compareFiles(obj3, obj4)).toEqual([]);
  expect(compareFiles(obj1, obj2)).toEqual([
    { key: 'follow', value1: false, status: 'deleted' },
    { key: 'host', value1: 'hexlet.io', status: 'unchanged' },
    { key: 'proxy', value1: '123.234.53.22', status: 'deleted' },
    {
      key: 'timeout',
      value1: 50,
      value2: 20,
      status: 'changed',
    },
    { key: 'verbose', value2: true, status: 'added' },
  ]);
});
