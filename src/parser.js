import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';

const getFilePath = (file) => path.resolve(process.cwd(), file);
const formatFile = (file) => path.extname(file);
const readFile = (file) => readFileSync(getFilePath(file), 'utf8');

const getFileData = (file, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(file));
  }
  if (format === '.json') {
    return JSON.parse(readFile(file));
  }
  throw new Error(`Неизвестный формат ${format}!`);
};

export {
  getFileData,
  getFilePath,
  formatFile,
  readFile,
};
