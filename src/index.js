import { getFileData, getFilePath, formatFile } from './parser.js';
import compareFiles from './compareFiles.js';
import getStylish from './formatters/stylish.js';

const gendiff = (file1, file2) => {
  const filepath1 = getFilePath(file1);
  const filepath2 = getFilePath(file2);
  const formatfile1 = formatFile(file1);
  const formatFile2 = formatFile(file2);
  const obj1 = getFileData(filepath1, formatfile1);
  const obj2 = getFileData(filepath2, formatFile2);
  const result = compareFiles(obj1, obj2);
  return getStylish(result);
};

export default gendiff;
