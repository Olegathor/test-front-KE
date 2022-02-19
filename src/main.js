import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue';
import '@/plugins/element.js';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
