import gendiff from '../src';

test('test compareFiles', () => {
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(
    '- follow: false\r\n  host: hexlet.io\r\n- proxy: 123.234.53.22\r\n- timeout: 50\r\n+ timeout: 20\r\n+ verbose: true\r\n'
  );
});
