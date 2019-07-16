import {
  Component,
  Vue,
  Provide,
  Emit,
} from 'vue-property-decorator';
import WithRender from '../views/todo-create.html';

@WithRender
@Component
export default class ToDoForm extends Vue {
  @Provide() contentText = '';

  @Provide() isCreating = false;

  @Emit()
  openForm() {
    this.isCreating = true;
  }

  @Emit()
  closeForm() {
    this.isCreating = false;
  }

  @Emit()
  sendForm() {
    if (this.contentText.length > 0 && this.contentText.length > 0) {
      const content:string = this.contentText;
      const id = this.$store.getters.totalTasks;
      this.$store.commit('createTask', {
        id,
        content,
        isDone: false,
      });
      this.contentText = '';
    }
    this.isCreating = false;
  }

  created() {
    console.log(this);
  }
}
