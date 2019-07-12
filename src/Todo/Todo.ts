import { Component, Vue } from 'vue-property-decorator';
import WithRender from './views/todo.html';

@WithRender
@Component
export default class Todo extends Vue {

}