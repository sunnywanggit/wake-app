/**
 * 打开APP并前往指定页面
 * @param {string} path 统跳路径
 * @param {object} query 统跳参数
 * @param {string} downloadUrl 自定义无app时下载链接
 * @param {string} hash 统跳子页面hash
 */
export interface goAPP extends Function {
  (path: string, query?: object, downloadUrl?: string, hash?: string): void;
}

export default interface WakeApp {
  goAPP: goAPP,
}
