import {
  Module,
  VuexModule,
  getModule,
  Mutation,
} from 'vuex-module-decorators';
import { TaskModel } from '../../types/types';
import store from '..';

@Module({
  dynamic: true,
  name: 'TaskModule',
  store,
})
class Task extends VuexModule {
  tasks: TaskModel[] = [{
    id: 0,
    content: 'Alo',
    isDone: true,
  }];

  get getTasks() {
    return this.tasks;
  }

  get doneTasks() {
    return this.tasks.filter(task => task.isDone).length;
  }

  get pendingTasks() {
    return this.tasks.filter(task => !task.isDone).length;
  }

  get totalTasks() {
    return this.tasks.length;
  }

  @Mutation
  createTask(task: TaskModel) {
    console.log(task);
    this.tasks.push(task);
  }

  @Mutation
  editTask(task: TaskModel) {
    const taskFound: TaskModel = <TaskModel> this.tasks.find(taskElement =>
      taskElement.id === task.id);
    taskFound.content = task.content;
  }

  @Mutation
  deletteTask(task: TaskModel) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }

  @Mutation
  completeTask(task: TaskModel) {
    const taskFound = <TaskModel> this.tasks.find(todoElement => todoElement.id === task.id);
    taskFound.isDone = true;
  }

  @Mutation
  pendingTask(task: TaskModel) {
    const taskFound = <TaskModel> this.tasks.find(todoElement => todoElement.id === task.id);
    taskFound.isDone = false;
  }
}

export default getModule(Task);
