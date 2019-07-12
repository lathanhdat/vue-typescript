import Vue from 'vue';
import Todo from './Todo/Todo';
import router from './router';
import store from './Todo/store/store';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Todo),
}).$mount('#app');
