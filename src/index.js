import getFileData from './parser.js';
import { getFilePath, formatFile } from './utils.js';
import compareFiles from './compareFiles.js';
import getFormat from './formatters/index.js';

const gendiff = (file1, file2, format = 'stylish') => {
  const filepath1 = getFilePath(file1);
  const filepath2 = getFilePath(file2);
  const formatfile1 = formatFile(file1);
  const formatFile2 = formatFile(file2);
  const obj1 = getFileData(filepath1, formatfile1);
  const obj2 = getFileData(filepath2, formatFile2);
  const result = compareFiles(obj1, obj2);
  return getFormat(result, format);
};

export default gendiff;
