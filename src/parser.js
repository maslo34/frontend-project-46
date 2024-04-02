import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';

const getFilePath = (file) => path.resolve(process.cwd(), file);
const formatFile = (file) => path.extname(file);

const getFileData = (file, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFileSync(getFilePath(file), 'utf8'));
  }
  return JSON.parse(readFileSync(getFilePath(file), 'utf8'));
};

export { getFileData, getFilePath, formatFile };
