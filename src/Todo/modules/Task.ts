import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module
export default class Task extends VuexModule {
  task: Object[] =[];

  get viewTask(){
    return this.task;
  }

  @Mutation
  createTask(name: string, descript: string, isDone: boolean) {
    this.task.push({
      name ,
      descript,
      isDone
    });
  }

  @Mutation
  editTask(delta: number) {
    this.count -= delta
  }

  @Mutation
  deletteTask(delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'creatTask' })
  incr() {
    return 5
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5
  }
}