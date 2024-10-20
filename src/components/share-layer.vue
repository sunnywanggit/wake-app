<template>
  <div id="share_layer" @click="close">
    <img class="layer_bubble" src="https://jxb-baiping.oss-cn-shenzhen.aliyuncs.com/wx-img/bubble.png" alt>
  </div>
</template>

<script>
const REM_RATIO = 750; // rem的适配比例

export default {
  mounted() {
    this.initStyle();
  },
  methods: {
    close() {
      this.$el.remove();
    },
    onWindowResize() {
      let rem = this.$el.clientWidth / REM_RATIO;
      // 检测rem是否比最小字体还要小，如果是的话调整rem为最小值
      if (24 * rem < 12) {
        rem = 0.5;
      }
      this.insertStyle(rem);
    },
    /**
     * 初始化样式值
     */
    initStyle() {
      let rem;
      if (!navigator.userAgent.toLowerCase().match(/applewebkit.*mobile.*/)) {
        window.addEventListener('resize', this.onWindowResize);
        this.onWindowResize(); // 进行首次计算
      } else {
        rem = window.screen.width / REM_RATIO;
      }
      this.insertStyle(rem); // 注入计算后的样式
    },
    insertStyle(rem) {
      // 插入新样式前先将老样式删除
      const id = 'share_layer';
      const elem = document.getElementById(id);
      if (elem) {
        const head = document.getElementsByTagName('head')[0];
        head.removeChild(elem);
      }

      // 初始化所有样式值
      const styleStr = `#share_layer{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.25);z-index: 9999}.layer_bubble {position: absolute;width: ${370 * rem}px;height: ${102 * rem}px;top:${5 * rem}px;right: ${26 * rem}px;z-index: 10000}`;
      // 构建完毕后将字符串插入文档头部
      const styleDom = document.createElement('style');
      styleDom.type = 'text/css';
      styleDom.appendChild(document.createTextNode(styleStr));
      document.getElementsByTagName('head')[0].appendChild(styleDom);
    },
  },
};
</script>

<style scoped>
</style>
