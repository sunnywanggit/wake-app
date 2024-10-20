import Vue from 'vue';
import layer from '../../components/share-layer.vue';

const LayerConstructor = Vue.extend(layer);

const shareLayer = () => {
  const layerDom = new LayerConstructor({
    el: document.createElement('div'),
  });

  document.body.appendChild(layerDom.$el);
};

export default shareLayer;
