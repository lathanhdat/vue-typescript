import Vue from 'vue';
import Todos from './Todo/TodoApp';
import router from './router';
import store from './Todo/store';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Todos),
}).$mount('#app');
