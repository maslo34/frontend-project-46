import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(data);
    case 'plain':
      return getPlain(data);
    case 'json':
      return getJson(data);
    default:
      throw new Error(`Неизвестный формат ${format}`);
  }
};
export default getFormat;
