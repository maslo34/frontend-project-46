import _ from 'lodash';

const getUnicKeys = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const unionKeys = _.union(keysObj1, keysObj2);
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys;
};

const compareFiles = (obj1, obj2) => {
  const unicKeysObjs = getUnicKeys(obj1, obj2);
  const result = unicKeysObjs.reduce((acc, el) => {
    if (_.has(obj1, el) && _.has(obj2, el) && obj1[el] === obj2[el]) {
      acc += `  ${el}: ${obj2[el]}\r\n`;
    }
    if (_.has(obj2, el) && obj1[el] !== obj2[el]) {
      acc += `- ${el}: ${obj2[el]}\r\n`;
    }
    if (_.has(obj1, el) && obj1[el] !== obj2[el]) {
      acc += `+ ${el}: ${obj1[el]}\r\n`;
    }
    return acc;
  }, '');
  return result;
};

export { getUnicKeys };
export default compareFiles;
