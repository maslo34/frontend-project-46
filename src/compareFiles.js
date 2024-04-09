import _ from 'lodash';

const getUnicKeys = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const unionKeys = _.union(keysObj1, keysObj2);
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys;
};

const compareFiles = (data1, data2) => {
  const keys = getUnicKeys(data1, data2);
  const condition = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { key, value1, status: 'deleted' };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { key, value2, status: 'added' };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      return { key, children: compareFiles(value1, value2), status: 'object' };
    }
    if (_.isEqual(value1, value2)) {
      return { key, value1, status: 'unchanged' };
    }
    return {
      key,
      value1,
      value2,
      status: 'changed',
    };
  });
  return condition;
};

export { getUnicKeys };
export default compareFiles;
