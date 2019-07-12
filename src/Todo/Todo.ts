import { Component, Vue } from 'vue-property-decorator';
import WithRender from './views/todo.html';

import ToDoForm from './components/TodoFrm';
import Task from './modules/Task';

@WithRender
@Component({
  components: {
    'todo-frm': ToDoForm
  }
})

export default class Todo extends Vue {
  public tasks: Task[] = [
    { description: 'Make Coffee', completed: false },
    { description: 'Feed Dragons', completed: false },
  ];
}