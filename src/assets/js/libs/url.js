/**
 * 处理url的函数库
 */

import { encode } from './secret';

/**
 * 根据app统跳路径、入参和hash生成一个统跳链接
 * @param {string} path
 * @param {object} query
 * @param {string} hash
 * @return {string}
 */
export function createAppUrl(path, query, hash) {
  const searchItemList = [];
  Object.keys(query).forEach((key) => {
    const value = query[key];
    // 过滤空值的情况
    if (!value && value !== '' && value !== 0 && value !== false) {
      return;
    }
    // 过滤对象的情况
    if (typeof value === 'object') {
      if (!Array.isArray(value)) {
        return;
      }
      // 只允许简单类型数组拼接
      if (value.some((item) => !['number', 'string', 'boolean'].includes(typeof item))) {
        return;
      }
      const encodedValue = value.map((item) => encodeURIComponent(String(item)));
      searchItemList.push(`${key}=[${encodedValue.join(',')}]`);
      return;
    }
    searchItemList.push(`${key}=${encodeURIComponent(value)}`);
  });
  const result = `${path}${searchItemList.length ? `?${searchItemList.join('&')}` : ''}${hash ? `#${hash}` : ''}`;
  return encodeURIComponent(encode(result));
}
