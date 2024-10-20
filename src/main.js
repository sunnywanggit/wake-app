import Vue from 'vue';
import browserDetect from '@bb/browser-detect';
import config from './assets/js/configs';
import shareLayer from './assets/js/share-layer';
import { createAppUrl } from './assets/js/libs/url';

Vue.config.productionTip = false;

const { browserType, browserOS } = browserDetect(navigator.userAgent);

/**
 * 打开APP并前往指定页面
 * @param {string} path 统跳路径
 * @param {object} query 统跳参数
 * @param {string} downloadUrl 自定义无app时下载链接
 * @param {string} hash 统跳子页面hash
 */
export const goAPP = (path, query = {}, downloadUrl = config.downloadUrl, hash = '') => {
  if (browserOS.android && browserType.wechat) {
    shareLayer();
  } else {
    if (browserOS.android) {
      const t = 4000;
      let hasApp = true;
      setTimeout(() => {
        const hidden = window.document.hidden
                  || window.document.mozHidden
                  || window.document.msHidden
                  || window.document.webkitHidden;
        if (!hasApp && (typeof hidden === 'undefined' || hidden === false)) {
          window.location.href = downloadUrl;
        }
      }, 5000);
      window.location.href = `${config.androidWakeUrl}?url=${createAppUrl(path, query, hash)}`;
      const t1 = Date.now();
      setTimeout(() => {
        const t2 = Date.now();
        if (t2 - t1 < t + 100) {
          hasApp = false;
        }
      }, t);
    }
    if (browserOS.ios) {
      window.location.href = `${config.iosWakeUrl}?url=${createAppUrl(path, query, hash)}`;
    }
  }
};

export default {
  goAPP,
};
