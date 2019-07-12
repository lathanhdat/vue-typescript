import Vue from 'vue';
import Router from 'vue-router';
import Todo from './Todo/Todo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
  ],
});
