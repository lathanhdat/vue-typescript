import { Component, Vue } from 'vue-property-decorator';
import WithRender from '../views/todo-form.html';

@WithRender
@Component
export default class ToDoForm extends Vue {

}