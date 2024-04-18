import { readFileSync } from 'node:fs';
import path from 'node:path';

const getFilePath = (file) => path.resolve(process.cwd(), file);
const formatFile = (file) => path.extname(file);
const readFile = (file) => readFileSync(getFilePath(file), 'utf8');

export { getFilePath, formatFile, readFile };
