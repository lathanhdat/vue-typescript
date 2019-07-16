import {
  Component,
  Vue,
  Prop,
  Emit,
  Provide,
} from 'vue-property-decorator';
import WithRender from '../views/todo.html';
import { TaskModel } from '../types/types';

@WithRender
@Component({
  methods: {
    completeTodo(todo) {
      this.$store.commit('completeTodo', todo);
    },
    pendingTodo(todo) {
      this.$store.commit('pendingTodo', todo);
    },
    deleteTodo(todo) {
      this.$store.commit('deleteTodo', todo);
    },
    editTodo() {
      this.$props.isEditing = false; // Hide form
      this.$store.commit('editTodo', this.$props.task);
    },
  },
})
export default class Todo extends Vue {
  @Prop({ required: true }) task!: TaskModel;

  @Provide() isEditing = false;

  @Emit()
  showForm() {
    this.isEditing = true;
  }

  @Emit()
  completeTodo(task: TaskModel) {
    this.$store.commit('completeTask', task);
  }

  @Emit()
  pendingTodo(task: TaskModel) {
    this.$store.commit('pendingTask', task);
  }

  @Emit()
  deleteTodo(task: TaskModel) {
    this.$store.commit('deletteTask', task);
  }

  @Emit()
  editTodo() {
    this.isEditing = false; // Hide form
    this.$store.commit('editTask', this.$props.task);
  }
}
