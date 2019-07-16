import { Component, Vue, Provide} from 'vue-property-decorator';
import WithRender from '../views/todo-list.html';
import { TaskModel } from '../types/types';
import Task from '../store/modules/Task';
import Todo from './Todo';

@WithRender
@Component({
  components: {
    Todo,
  },
})

export default class TodoList extends Vue {
  tasks: TaskModel[] = []
  doneTasks: Number = 0;
  pendingTasks: Number = 0;
  totalTasks: Number = 0;
  created(){
    this.tasks = this.$store.getters.getTasks;
    console.log(this)
    this.doneTasks = this.$store.getters.doneTasks;
    this.pendingTasks = this.$store.getters.pendingTasks;
    this.totalTasks = this.$store.getters.totalTasks;
  }
}