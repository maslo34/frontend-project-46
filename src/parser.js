import yaml from 'js-yaml';
import { readFile } from './utils.js';

const getFileData = (file, format) => {
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(file));
  }
  if (format === '.json') {
    return JSON.parse(readFile(file));
  }
  throw new Error(`Неизвестный формат ${format}!`);
};

export default getFileData;
