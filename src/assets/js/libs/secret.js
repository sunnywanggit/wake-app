/**
 * 加解密相关库
 */
import CryptoJS from 'crypto-js';
import config from '../configs';

const key = CryptoJS.enc.Utf8.parse(config.secret); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse(config.secretIV); // 十六位十六进制数作为密钥偏移量

/**
 * 将字符串进行aes测试
 * @param str
 * @return {string}
 */
export const encode = (str) => {
  const srcUtf8 = CryptoJS.enc.Utf8.parse(str);
  const result = CryptoJS.AES.encrypt(srcUtf8, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return result.toString();
};
