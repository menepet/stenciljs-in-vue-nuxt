import Vue from 'vue'
import App from './App.vue'

/**
 * Stenciljs imports from
 * https://stenciljs.com/docs/vue
 */
import { applyPolyfills, defineCustomElements } from 'stencil-components-collection/loader';

Vue.config.productionTip = false;

// ignore the web components name witgh regex
Vue.config.ignoredElements = [/stencil-wc-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
