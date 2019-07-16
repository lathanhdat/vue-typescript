import { Component, Vue } from 'vue-property-decorator';

import WithRender from './views/todos.html';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

@WithRender
@Component({
  components: {
    TodoCreate,
    TodoList,
  },
})

export default class TodoApp extends Vue {
}
